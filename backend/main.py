from fastapi import FastAPI
from backend.api.v1 import router as api_router

app = FastAPI(title="Trackr Backend", version="0.1.0")

app.include_router(api_router.router, prefix="/api/v1")

@app.get("/")
def read_root():
    return {"message": "Welcome to Trackr Backend"}