from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from fastapi.responses import JSONResponse
from app.services import knowledge_base
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

@router.post("/ask")
def ask_ai(question: str, db: Session = Depends(get_db)):
    if knowledge_base.check_knowledge(question):
        answer = knowledge_base.get_answer(question)
        return {"answer": answer, "source": "AI Knowledge Base"}
    else:
        new_req = models.HelpRequest(question=question)
        db.add(new_req)
        db.commit()
        db.refresh(new_req)
        notifications.notify_supervisor(new_req.question)
        return {"answer": "Let me check with my supervisor.", "request_id": new_req.id}


@router.get("/knowledge")
def get_knowledge_base():
    """
    Return all learned answers from the knowledge base JSON.
    """
    data = knowledge_base.load_knowledge()
    if not data:
        return JSONResponse(content={"message": "No data found"}, status_code=404)
    return data