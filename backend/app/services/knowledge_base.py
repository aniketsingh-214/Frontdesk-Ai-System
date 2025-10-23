import json
import os

FILE_PATH = "app/utils/fake_salon_info.json"

def load_knowledge():
    if os.path.exists(FILE_PATH):
        with open(FILE_PATH, "r") as f:
            return json.load(f)
    return {}

def save_knowledge(question, answer):
    data = load_knowledge()
    data[question.lower()] = answer
    with open(FILE_PATH, "w") as f:
        json.dump(data, f, indent=4)

def check_knowledge(question):
    data = load_knowledge()
    return question.lower() in data

def get_answer(question):
    data = load_knowledge()
    return data.get(question.lower())
