/* ===================================================================
   LinguaBridge — Client-Side Application Logic
   =================================================================== */

// --- NLLB-200 Language Map (comprehensive subset) ---
const LANGUAGES = [
    { code: "hin_Deva", name: "Hindi", native: "हिन्दी" },
    { code: "spa_Latn", name: "Spanish", native: "Español" },
    { code: "fra_Latn", name: "French", native: "Français" },
    { code: "deu_Latn", name: "German", native: "Deutsch" },
    { code: "zho_Hans", name: "Chinese (Simplified)", native: "中文 (简体)" },
    { code: "zho_Hant", name: "Chinese (Traditional)", native: "中文 (繁體)" },
    { code: "arb_Arab", name: "Arabic", native: "العربية" },
    { code: "ben_Beng", name: "Bengali", native: "বাংলা" },
    { code: "por_Latn", name: "Portuguese", native: "Português" },
    { code: "rus_Cyrl", name: "Russian", native: "Русский" },
    { code: "jpn_Jpan", name: "Japanese", native: "日本語" },
    { code: "kor_Hang", name: "Korean", native: "한국어" },
    { code: "ita_Latn", name: "Italian", native: "Italiano" },
    { code: "tur_Latn", name: "Turkish", native: "Türkçe" },
    { code: "vie_Latn", name: "Vietnamese", native: "Tiếng Việt" },
    { code: "tha_Thai", name: "Thai", native: "ไทย" },
    { code: "pol_Latn", name: "Polish", native: "Polski" },
    { code: "ukr_Cyrl", name: "Ukrainian", native: "Українська" },
    { code: "nld_Latn", name: "Dutch", native: "Nederlands" },
    { code: "ron_Latn", name: "Romanian", native: "Română" },
    { code: "ell_Grek", name: "Greek", native: "Ελληνικά" },
    { code: "ces_Latn", name: "Czech", native: "Čeština" },
    { code: "hun_Latn", name: "Hungarian", native: "Magyar" },
    { code: "swe_Latn", name: "Swedish", native: "Svenska" },
    { code: "fin_Latn", name: "Finnish", native: "Suomi" },
    { code: "dan_Latn", name: "Danish", native: "Dansk" },
    { code: "nor_Latn", name: "Norwegian", native: "Norsk" },
    { code: "heb_Hebr", name: "Hebrew", native: "עברית" },
    { code: "ind_Latn", name: "Indonesian", native: "Bahasa Indonesia" },
    { code: "msa_Latn", name: "Malay", native: "Bahasa Melayu" },
    { code: "fil_Latn", name: "Filipino", native: "Filipino" },
    { code: "swh_Latn", name: "Swahili", native: "Kiswahili" },
    { code: "tam_Taml", name: "Tamil", native: "தமிழ்" },
    { code: "tel_Telu", name: "Telugu", native: "తెలుగు" },
    { code: "kan_Knda", name: "Kannada", native: "ಕನ್ನಡ" },
    { code: "mal_Mlym", name: "Malayalam", native: "മലയാളം" },
    { code: "mar_Deva", name: "Marathi", native: "मराठी" },
    { code: "guj_Gujr", name: "Gujarati", native: "ગુજરાતી" },
    { code: "pan_Guru", name: "Punjabi", native: "ਪੰਜਾਬੀ" },
    { code: "urd_Arab", name: "Urdu", native: "اردو" },
    { code: "npi_Deva", name: "Nepali", native: "नेपाली" },
    { code: "sin_Sinh", name: "Sinhala", native: "සිංහල" },
    { code: "mya_Mymr", name: "Burmese", native: "မြန်မာ" },
    { code: "khm_Khmr", name: "Khmer", native: "ភាសាខ្មែរ" },
    { code: "lao_Laoo", name: "Lao", native: "ລາວ" },
    { code: "kat_Geor", name: "Georgian", native: "ქართული" },
    { code: "hye_Armn", name: "Armenian", native: "Հայերեն" },
    { code: "aze_Latn", name: "Azerbaijani", native: "Azərbaycan" },
    { code: "kaz_Cyrl", name: "Kazakh", native: "Қазақша" },
    { code: "uzn_Latn", name: "Uzbek", native: "Oʻzbek" },
    { code: "bul_Cyrl", name: "Bulgarian", native: "Български" },
    { code: "srp_Cyrl", name: "Serbian", native: "Српски" },
    { code: "hrv_Latn", name: "Croatian", native: "Hrvatski" },
    { code: "slk_Latn", name: "Slovak", native: "Slovenčina" },
    { code: "slv_Latn", name: "Slovenian", native: "Slovenščina" },
    { code: "lit_Latn", name: "Lithuanian", native: "Lietuvių" },
    { code: "lav_Latn", name: "Latvian", native: "Latviešu" },
    { code: "est_Latn", name: "Estonian", native: "Eesti" },
    { code: "cat_Latn", name: "Catalan", native: "Català" },
    { code: "eus_Latn", name: "Basque", native: "Euskara" },
    { code: "glg_Latn", name: "Galician", native: "Galego" },
    { code: "afr_Latn", name: "Afrikaans", native: "Afrikaans" },
    { code: "amh_Ethi", name: "Amharic", native: "አማርኛ" },
    { code: "hau_Latn", name: "Hausa", native: "Hausa" },
    { code: "ibo_Latn", name: "Igbo", native: "Igbo" },
    { code: "yor_Latn", name: "Yoruba", native: "Yorùbá" },
    { code: "zul_Latn", name: "Zulu", native: "isiZulu" },
    { code: "som_Latn", name: "Somali", native: "Soomaali" },
    { code: "pes_Arab", name: "Persian", native: "فارسی" },
    { code: "pbt_Arab", name: "Pashto", native: "پښتو" },
    { code: "ckb_Arab", name: "Kurdish (Central)", native: "کوردی" },
    { code: "cym_Latn", name: "Welsh", native: "Cymraeg" },
    { code: "gle_Latn", name: "Irish", native: "Gaeilge" },
    { code: "isl_Latn", name: "Icelandic", native: "Íslenska" },
    { code: "mkd_Cyrl", name: "Macedonian", native: "Македонски" },
    { code: "bos_Latn", name: "Bosnian", native: "Bosanski" },
    { code: "sqi_Latn", name: "Albanian", native: "Shqip" },
    { code: "tgl_Latn", name: "Tagalog", native: "Tagalog" },
    { code: "sun_Latn", name: "Sundanese", native: "Basa Sunda" },
    { code: "jav_Latn", name: "Javanese", native: "Basa Jawa" },
    { code: "ceb_Latn", name: "Cebuano", native: "Cebuano" },
    { code: "zsm_Latn", name: "Standard Malay", native: "Bahasa Melayu" },
    { code: "taq_Latn", name: "Tamasheq (Latin)", native: "Tamasheq" },
    { code: "fuv_Latn", name: "Nigerian Fulfulde", native: "Fulfulde" },
    { code: "lug_Latn", name: "Luganda", native: "Luganda" },
    { code: "lin_Latn", name: "Lingala", native: "Lingála" },
    { code: "wol_Latn", name: "Wolof", native: "Wolof" },
    { code: "xho_Latn", name: "Xhosa", native: "isiXhosa" },
    { code: "tsn_Latn", name: "Tswana", native: "Setswana" },
    { code: "sot_Latn", name: "Southern Sotho", native: "Sesotho" },
    { code: "nya_Latn", name: "Chichewa", native: "Chichewa" },
    { code: "sna_Latn", name: "Shona", native: "chiShona" },
    { code: "kin_Latn", name: "Kinyarwanda", native: "Kinyarwanda" },
    { code: "run_Latn", name: "Kirundi", native: "Kirundi" },
    { code: "ssw_Latn", name: "Swati", native: "siSwati" },
    { code: "tir_Ethi", name: "Tigrinya", native: "ትግርኛ" },
    { code: "orm_Latn", name: "Oromo", native: "Oromoo" },
    { code: "asm_Beng", name: "Assamese", native: "অসমীয়া" },
    { code: "ory_Orya", name: "Odia", native: "ଓଡ଼ିଆ" },
    { code: "san_Deva", name: "Sanskrit", native: "संस्कृतम्" },
];

// Sort alphabetically by name
LANGUAGES.sort((a, b) => a.name.localeCompare(b.name));

// --- BCP 47 Mapping for TTS ---
const TTS_LANG_MAP = {
    hin: "hi-IN",
    spa: "es-ES",
    fra: "fr-FR",
    deu: "de-DE",
    zho: "zh-CN",
    arb: "ar-SA",
    ben: "bn-BD",
    por: "pt-PT",
    rus: "ru-RU",
    jpn: "ja-JP",
    kor: "ko-KR",
    ita: "it-IT",
    tur: "tr-TR",
    vie: "vi-VN",
    tha: "th-TH",
    pol: "pl-PL",
    nld: "nl-NL",
    ron: "ro-RO",
    ell: "el-GR",
    ces: "cs-CZ",
    hun: "hu-HU",
    swe: "sv-SE",
    dan: "da-DK",
    nor: "no-NO",
    heb: "he-IL",
    ind: "id-ID"
};

// --- DOM Elements ---
const sourceText = document.getElementById("source-text");
const outputText = document.getElementById("output-text");
const targetLang = document.getElementById("target-lang");
const langSearch = document.getElementById("lang-search");
const translateBtn = document.getElementById("translate-btn");
const swapBtn = document.getElementById("swap-btn");
const charCount = document.getElementById("char-count");
const clearBtn = document.getElementById("clear-btn");
const copyBtn = document.getElementById("copy-btn");
const speakSourceBtn = document.getElementById("speak-source-btn");
const speakTargetBtn = document.getElementById("speak-target-btn");
const outputInfo = document.getElementById("output-info");
const historySection = document.getElementById("history-section");
const historyList = document.getElementById("history-list");

// --- State ---
let translationHistory = JSON.parse(localStorage.getItem("lb_history") || "[]");
let isTranslating = false;

// --- Initialize ---
function init() {
    populateLanguages();
    renderHistory();
    setupEventListeners();
    setupScrollAnimations();
    setupNavbarScroll();
}

// --- Populate Language Select ---
function populateLanguages(filter = "") {
    const filterLower = filter.toLowerCase();
    const filtered = filter
        ? LANGUAGES.filter(l =>
            l.name.toLowerCase().includes(filterLower) ||
            l.native.toLowerCase().includes(filterLower) ||
            l.code.toLowerCase().includes(filterLower)
        )
        : LANGUAGES;

    targetLang.innerHTML = "";
    filtered.forEach(lang => {
        const opt = document.createElement("option");
        opt.value = lang.code;
        opt.textContent = `${lang.name} — ${lang.native}`;
        targetLang.appendChild(opt);
    });

    // Set default to Hindi if no filter
    if (!filter) {
        targetLang.value = "hin_Deva";
    }
}

// --- Event Listeners ---
function setupEventListeners() {
    // Character count
    sourceText.addEventListener("input", () => {
        const len = sourceText.value.length;
        charCount.textContent = `${len.toLocaleString()} / 5,000`;

        if (len > 4500) {
            charCount.style.color = "#f87171";
        } else {
            charCount.style.color = "";
        }
    });

    // Language search filter
    langSearch.addEventListener("input", () => {
        populateLanguages(langSearch.value);
    });

    // Clear button
    clearBtn.addEventListener("click", () => {
        sourceText.value = "";
        outputText.innerHTML = '<span class="placeholder-text">Your translation will appear here…</span>';
        charCount.textContent = "0 / 5,000";
        copyBtn.style.display = "none";
        outputInfo.textContent = "";
        sourceText.focus();
    });

    // Copy button
    copyBtn.addEventListener("click", () => {
        const text = outputText.textContent;
        if (text && !outputText.querySelector(".placeholder-text")) {
            navigator.clipboard.writeText(text).then(() => {
                showToast("Translation copied to clipboard!");
                // Micro-animation on icon
                const icon = copyBtn.querySelector("svg");
                icon.style.color = "var(--accent-cyan)";
                setTimeout(() => icon.style.color = "", 1500);
            });
        }
    });

    // TTS buttons
    speakSourceBtn.addEventListener("click", () => speakText(sourceText.value, "en-US"));
    speakTargetBtn.addEventListener("click", () => {
        const text = outputText.textContent;
        const nllbPart = targetLang.value.split('_')[0];
        const bcplang = TTS_LANG_MAP[nllbPart] || nllbPart;
        speakText(text, bcplang);
    });

    // Swap button
    swapBtn.addEventListener("click", handleSwap);

    // Translate button
    translateBtn.addEventListener("click", handleTranslate);

    // Keyboard shortcut: Ctrl+Enter to translate
    sourceText.addEventListener("keydown", (e) => {
        if ((e.ctrlKey || e.metaKey) && e.key === "Enter") {
            e.preventDefault();
            handleTranslate();
        }
    });
}

// --- TTS Functionality ---
function speakText(text, lang = "en-US") {
    if (!text || text.trim() === "") return;
    if (window.speechSynthesis.speaking) {
        window.speechSynthesis.cancel();
        return;
    }

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = lang;
    utterance.rate = 1.0;
    utterance.pitch = 1.0;
    
    // Find best voice?
    const voices = window.speechSynthesis.getVoices();
    const voice = voices.find(v => v.lang.startsWith(lang));
    if (voice) utterance.voice = voice;

    window.speechSynthesis.speak(utterance);
}

// --- Swap Handler ---
function handleSwap() {
    const sourceVal = sourceText.value;
    const targetVal = outputText.textContent;
    
    if (!targetVal || outputText.querySelector(".placeholder-text")) return;

    // Swap text
    sourceText.value = targetVal;
    outputText.textContent = sourceVal;
    
    // Trigger count
    sourceText.dispatchEvent(new Event("input"));
    
    showToast("Languages swapped");
}

// --- Translate Handler ---
async function handleTranslate() {
    const text = sourceText.value.trim();
    if (!text) {
        showToast("Please enter some text to translate.");
        sourceText.focus();
        return;
    }

    if (isTranslating) return;

    const lang = targetLang.value;
    if (!lang) {
        showToast("Please select a target language.");
        return;
    }

    isTranslating = true;
    translateBtn.classList.add("loading");
    outputText.innerHTML = '<span class="placeholder-text">Translating…</span>';
    copyBtn.style.display = "none";
    outputInfo.textContent = "";

    const startTime = performance.now();

    try {
        const response = await fetch("/translate", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                text: text,
                target_lang: lang
            })
        });

        if (!response.ok) {
            const err = await response.json().catch(() => ({}));
            throw new Error(err.detail || `Server error (${response.status})`);
        }

        const data = await response.json();
        const elapsed = ((performance.now() - startTime) / 1000).toFixed(2);

        // Display result
        outputText.textContent = data.translation;
        outputText.classList.remove("error-text");
        copyBtn.style.display = "flex";
        speakTargetBtn.style.display = "flex";

        const langObj = LANGUAGES.find(l => l.code === lang);
        outputInfo.textContent = `${langObj ? langObj.name : lang} • ${elapsed}s`;

        // Save to history
        addToHistory(text, data.translation, lang, elapsed);

    } catch (err) {
        outputText.innerHTML = `<span class="error-text">⚠ ${escapeHtml(err.message)}</span>`;
        outputInfo.textContent = "Translation failed";
    } finally {
        isTranslating = false;
        translateBtn.classList.remove("loading");
    }
}

// --- History ---
function addToHistory(source, translation, langCode, time) {
    const langObj = LANGUAGES.find(l => l.code === langCode);
    const entry = {
        source: source.substring(0, 200),
        translation: translation.substring(0, 200),
        langCode,
        langName: langObj ? langObj.name : langCode,
        time,
        date: new Date().toISOString()
    };

    translationHistory.unshift(entry);
    if (translationHistory.length > 20) translationHistory.pop();

    localStorage.setItem("lb_history", JSON.stringify(translationHistory));
    renderHistory();
}

function renderHistory() {
    if (translationHistory.length === 0) {
        historySection.style.display = "none";
        return;
    }

    historySection.style.display = "block";
    historyList.innerHTML = "";

    translationHistory.slice(0, 8).forEach((entry, i) => {
        const item = document.createElement("div");
        item.className = "history-item";
        item.id = `history-item-${i}`;
        item.innerHTML = `
            <span class="history-source" title="${escapeHtml(entry.source)}">${escapeHtml(entry.source)}</span>
            <span class="history-arrow">→ ${escapeHtml(entry.langName)}</span>
            <span class="history-target" title="${escapeHtml(entry.translation)}">${escapeHtml(entry.translation)}</span>
        `;

        item.addEventListener("click", () => {
            sourceText.value = entry.source;
            targetLang.value = entry.langCode;
            charCount.textContent = `${entry.source.length.toLocaleString()} / 5,000`;
            outputText.textContent = entry.translation;
            copyBtn.style.display = "flex";
            outputInfo.textContent = `${entry.langName} • from history`;

            // Scroll to translator
            document.getElementById("translator").scrollIntoView({ behavior: "smooth" });
        });

        historyList.appendChild(item);
    });
}

// --- Toast ---
function showToast(msg) {
    let toast = document.querySelector(".toast");
    if (!toast) {
        toast = document.createElement("div");
        toast.className = "toast";
        document.body.appendChild(toast);
    }

    toast.textContent = msg;
    toast.classList.add("show");

    setTimeout(() => toast.classList.remove("show"), 2800);
}

// --- Scroll Animations (Intersection Observer) ---
function setupScrollAnimations() {
    const targets = document.querySelectorAll(
        ".feature-card, .step, .translator-card, .history-section"
    );

    targets.forEach(el => el.classList.add("animate-in"));

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                    observer.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );

    targets.forEach(el => observer.observe(el));
}

// --- Navbar Scroll Effect ---
function setupNavbarScroll() {
    const navbar = document.getElementById("navbar");
    let lastScroll = 0;

    window.addEventListener("scroll", () => {
        const y = window.scrollY;
        if (y > 50) {
            navbar.style.background = "rgba(10, 10, 15, 0.92)";
            navbar.style.boxShadow = "0 4px 24px rgba(0,0,0,0.3)";
        } else {
            navbar.style.background = "rgba(10, 10, 15, 0.7)";
            navbar.style.boxShadow = "none";
        }
        lastScroll = y;
    }, { passive: true });
}

// --- Helpers ---
function escapeHtml(str) {
    const div = document.createElement("div");
    div.textContent = str;
    return div.innerHTML;
}

// --- Boot ---
document.addEventListener("DOMContentLoaded", init);
