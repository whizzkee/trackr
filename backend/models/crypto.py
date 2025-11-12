from sqlalchemy import Column, Integer, String, Float, DateTime
from datetime import datetime
from backend.database import Base

class Crypto(Base):
    __tablename__ = "crypto_prices"

    id = Column(Integer, primary_key=True, index=True)
    coin_id = Column(String, index=True)
    symbol = Column(String)
    name = Column(String)
    current_price = Column(Float)
    market_cap = Column(Float)
    price_change_percentage_24h = Column(Float)
    timestamp = Column(DateTime, default=datetime.utcnow)
