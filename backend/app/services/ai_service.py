from sqlalchemy.orm import Session
from app import models
from app.services import knowledge_base, notifications

def handle_question(question: str, db: Session):
    """
    Simulate AI behavior:
    - If answer found in knowledge base, return it.
    - Else, create new help request and notify supervisor.
    """
    if knowledge_base.check_knowledge(question):
        return {"answer": knowledge_base.get_answer(question), "source": "AI Knowledge Base"}
    
    new_request = models.HelpRequest(question=question)
    db.add(new_request)
    db.commit()
    db.refresh(new_request)
    
    notifications.notify_supervisor(new_request.question)
    return {
        "answer": "Let me check with my supervisor and get back to you.",
        "request_id": new_request.id
    }
