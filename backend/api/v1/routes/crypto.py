from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from backend.database import SessionLocal
from backend.models.crypto import Crypto
import httpx
from datetime import datetime

router = APIRouter()

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@router.get("/prices")
async def get_prices(db:Session = Depends(get_db)):
    recent_data = db.query(Crypto).order_by(Crypto.timestamp.desc()).limit(10).all()
    if recent_data:
        return [
            {
                "id": c.coin_id,
                "symbol": c.symbol,
                "name": c.name,
                "current_price": c.current_price,
                "market_cap": c.market_cap,
                "price_change_percentage_24h": c.price_change_percentage_24h,
            }
            for c in recent_data
        ]
    
    url = "https://api.coingecko.com/api/v3/coins/markets"
    params = {
        "vs_currency": "usd",
        "order": "market_cap_desc",
        "per_page": 10,
        "page": 1,
        "sparkline": "false"
    }

    async with httpx.AsyncClient() as client:
        response = await client.get(url, params=params)
        data = response.json()
        
    for coin in data:
        record = Crypto(
            coin_id=coin["id"],
            symbol=coin["symbol"],
            name=coin["name"],
            current_price=coin["current_price"],
            market_cap=coin["market_cap"],
            price_change_percentage_24h=coin["price_change_percentage_24h"],
            timestamp=datetime.utcnow()
        )
        db.add(record)
    db.commit()
    
    return data