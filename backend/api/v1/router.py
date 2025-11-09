from fastapi import APIRouter
from backend.api.v1.routes import health, crypto, news, stocks

router = APIRouter()

router.include_router(health.router, prefix="/health", tags=["Health"])
router.include_router(crypto.router, prefix="/crypto", tags=["Crypto"])
router.include_router(news.router, prefix="/news", tags=["News"])
router.include_router(stocks.router, prefix="/stocks", tags=["Stocks"])