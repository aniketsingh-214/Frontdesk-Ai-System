from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from datetime import datetime
from app.database import SessionLocal
from app import models
from app.services import knowledge_base, notifications

router = APIRouter()

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@router.get("/pending")
def get_pending_requests(db: Session = Depends(get_db)):
    return db.query(models.HelpRequest).filter(models.HelpRequest.status == "pending").all()

@router.post("/respond/{request_id}")
def respond_to_request(request_id: int, answer: str, db: Session = Depends(get_db)):
    req = db.query(models.HelpRequest).filter(models.HelpRequest.id == request_id).first()
    if not req:
        return {"error": "Request not found"}

    req.answer = answer
    req.status = "resolved"
    req.resolved_at = datetime.utcnow()
    db.commit()
    knowledge_base.save_knowledge(req.question, req.answer)
    notifications.notify_customer(req.question, req.answer)
    return {"message": "Response submitted successfully"}
