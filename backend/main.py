from fastapi import FastAPI
from backend.api.v1.routes import crypto, health, news, stocks
from fastapi.middleware.cors import CORSMiddleware
from backend.database import Base, engine
from backend.models import crypto

Base.metadata.create_all(bind=engine)

app = FastAPI(title="Trackr API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(crypto.router, prefix="/api/v1/crypto", tags=["Crypto"])
app.include_router(stocks.router, prefix="/api/v1/stocks", tags=["Stocks"])
app.include_router(news.router, prefix="/api/v1/news", tags=["News"])
app.include_router(health.router, prefix="/api/v1/health", tags=["Health"])
