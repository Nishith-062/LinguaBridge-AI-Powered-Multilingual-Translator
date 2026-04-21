from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse
from pydantic import BaseModel
import torch
import os
from transformers import AutoTokenizer, AutoModelForSeq2SeqLM

app = FastAPI()

# Serve static assets (CSS, JS)
STATIC_DIR = os.path.join(os.path.dirname(__file__), "static")
app.mount("/static", StaticFiles(directory=STATIC_DIR), name="static")

@app.get("/")
def serve_index():
    return FileResponse(os.path.join(STATIC_DIR, "index.html"))

model_name = "facebook/nllb-200-distilled-600M"

tokenizer = AutoTokenizer.from_pretrained(model_name)
model = AutoModelForSeq2SeqLM.from_pretrained(model_name)

device = "cuda" if torch.cuda.is_available() else "cpu"
model.to(device)

class Request(BaseModel):
    text: str
    target_lang: str = "hin_Deva"

@app.post("/translate")
def translate(req: Request):
    inputs = tokenizer(req.text, return_tensors="pt").to(device)

    lang_id = tokenizer.convert_tokens_to_ids(req.target_lang)

    tokens = model.generate(
        **inputs,
        forced_bos_token_id=lang_id,
        max_length=128
    )

    output = tokenizer.decode(tokens[0], skip_special_tokens=True)

    return {"translation": output}