from fastapi import APIRouter

router = APIRouter()

@router.get("/")
def get_news():
  return {"status": "ok", "message": "The Trackr news backend is running smoothly"}