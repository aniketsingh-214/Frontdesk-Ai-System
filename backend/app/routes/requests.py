from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.database import SessionLocal
from app import models

router = APIRouter()

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@router.get("/")
def get_all_requests(db: Session = Depends(get_db)):
    """Fetch all help requests"""
    requests = db.query(models.HelpRequest).order_by(models.HelpRequest.created_at.desc()).all()
    return requests

@router.get("/resolved")
def get_resolved_requests(db: Session = Depends(get_db)):
    """Fetch all resolved help requests"""
    return db.query(models.HelpRequest).filter(models.HelpRequest.status == "resolved").all()

@router.get("/pending")
def get_pending_requests(db: Session = Depends(get_db)):
    """Fetch all pending help requests"""
    return db.query(models.HelpRequest).filter(models.HelpRequest.status == "pending").all()
