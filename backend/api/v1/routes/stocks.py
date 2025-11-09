from fastapi import APIRouter

router = APIRouter()

@router.get("/")
def get_stocks():
  return {"status": "ok", "message": "The Trackr stocks backend is running smoothly"}