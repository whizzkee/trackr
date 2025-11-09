from fastapi import FastAPI
from api.v1.routes import health

app = FastAPI(title="Trackr Backend", version="0.1.0")

# Include router
app.include_router(health.router, prefix="/api/v1/health", tags=["Health"])

@app.get("/")
def read_root():
    return {"message": "Welcome to Trackr Backend"}
