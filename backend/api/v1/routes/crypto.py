from fastapi import APIRouter

router = APIRouter()

@router.get("/")
def get_crypto():
  return {"status": "ok", "message": "The Trackr crypto backend is running smoothly"}