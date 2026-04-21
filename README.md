# 🌍 LinguaBridge — AI‑Powered Multilingual Translator

LinguaBridge is a premium, production-ready web application that breaks down language barriers using state-of-the-art AI. Built on Meta's **NLLB-200 (No Language Left Behind)** model, it supports seamless translation across **200+ languages** with remarkable accuracy and speed.

![LinguaBridge UI Banner](https://img.shields.io/badge/UI-Premium_Glassmorphic-818cf8?style=for-the-badge)
![Model](https://img.shields.io/badge/Powered_by-Meta_NLLB--200-c084fc?style=for-the-badge)
![Private](https://img.shields.io/badge/Privacy-On--Device_Inference-67e8f9?style=for-the-badge)

## ✨ Features

- **200+ Languages**: From Hindi to Zulu, support for a massive range of global languages and dialects.
- **State-of-the-Art AI**: Leveraging a 600M-parameter seq-to-seq transformer model for contextual, natural translations.
- **Premium UI/UX**: A beautiful, responsive, and high-performance interface with glassmorphic aesthetics and fluid animations.
- **Text-to-Speech (TTS)**: Built-in voice playback for both source and translated text.
- **Privacy-First**: Designed for on-device/on-infrastructure inference. Your data remains secure.
- **Smart Tools**: Includes a "Language Swap" feature, translation history, and quick-copy functionality.
- **Developer-Friendly**: Built with a clean FastAPI backend and a modular Vanilla JS/CSS frontend.

## 🛠️ Technology Stack

- **Backend**: Python, [FastAPI](https://fastapi.tiangolo.com/), [Uvicorn](https://www.uvicorn.org/)
- **Machine Learning**: [PyTorch](https://pytorch.org/), [Hugging Face Transformers](https://huggingface.co/docs/transformers/index)
- **Model**: [Meta NLLB-200 (Distilled 600M)](https://huggingface.co/facebook/nllb-200-distilled-600M)
- **Frontend**: HTML5, Vanilla CSS3 (HSL Color System, Glassmorphism), Vanilla JavaScript (ES6+)

## 🚀 Getting Started

### Prerequisites

- Python 3.8+
- [Optional but Recommended] A GPU with CUDA support for faster inference.

### Installation

1. **Clone the repository**:
   ```bash
   git clone <your-repo-url>
   cd genai
   ```

2. **Create and activate a virtual environment**:
   ```bash
   python -m venv .venv
   source .venv/bin/activate  # On Windows use: .venv\Scripts\activate
   ```

3. **Install dependencies**:
   ```bash
   pip install fastapi uvicorn torch transformers pydantic
   ```

4. **Run the application**:
   ```bash
   uvicorn app:app --host 0.0.0.0 --port 8000 --reload
   ```

5. **Open your browser**:
   Navigate to `http://localhost:8000` to start translating!

## 📂 Project Structure

```text
genai/
├── app.py              # FastAPI backend logic & model loading
├── static/             # Frontend assets
│   ├── index.html      # Main UI structure
│   ├── style.css       # Premium styles and animations
│   └── app.js          # Client-side logic & interaction
└── README.md           # You are here!
```

## 📜 Acknowledgments

- **Meta AI** for the groundbreaking NLLB-200 research and models.
- **Hugging Face** for providing the infrastructure to easily integrate these models.

---
Built with ❤️ by [Your Name/Org]
# LinguaBridge-AI-Powered-Multilingual-Translator
