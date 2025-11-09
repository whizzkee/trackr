from fastapi import APIRouter

router = APIRouter()

@router.get("/")
def get_health():
  return {"status": "ok", "message": "The Trackr health backend is running smoothly"}