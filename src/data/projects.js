// All site content lives here. To add or change a project, edit this file only.
// status: "live" | "sleeps" (free Streamlit app, ~30s wake-up) | "local" (runs locally, see GitHub) | "analysis" (analysis repo, no app) | "notdeployed"

const gh = (repo) => `https://github.com/MuhammadAliEjaz1/${repo}`

export const categories = ['All', 'Classic ML', 'Deep Learning', 'Generative AI', 'Agentic AI', 'Data Science']

export const projects = [
  {
    id: 'cropguard-ai', featured: true, categories: ['Deep Learning', 'Generative AI'],
    title: 'CropGuard AI',
    result: 'Six crop-specific EfficientNet models reach 96.3% average validation accuracy across 43 disease classes.',
    summary: 'Farmers upload a leaf photo and get a diagnosis with treatment advice in Urdu and English. Also includes a farming chatbot, weather advice and a disease warning map.',
    tags: ['EfficientNet', 'TensorFlow', 'FastAPI', 'Gemini', 'React'],
    live: 'https://cropguard-ai-pk.vercel.app', github: gh('cropguard-ai'), status: 'live',
    note: 'The frontend and training notebooks are public. The backend and model weights are private.',
  },
  {
    id: 'industrial-rca-agent', featured: true, categories: ['Agentic AI'],
    title: 'Industrial Root-Cause Agent',
    result: 'Named the exact failure cause in 24 of 26 tested incidents, and answers "unexplained" when the evidence is not enough.',
    summary: 'An AI agent that investigates machine failures from sensor data, a trained classifier and technical manuals, then writes an evidence-backed report. Documented rules set the confidence and the language model explains.',
    tags: ['LangGraph', 'FastAPI', 'XGBoost', 'RAG', 'React'],
    live: null, github: gh('industrial-rca-agent'), status: 'local',
    note: 'Runs locally. The test run was partial (37 of 106 planned cases), as the README explains.',
  },
  {
    id: 'rxguard', featured: true, categories: ['Generative AI'],
    title: 'RxGuard: Pakistan Medicine Assistant',
    result: 'Questions asking for personal medical advice are blocked before they ever reach the language model.',
    summary: 'A retrieval-based assistant that answers medicine questions from official Pakistani drug registration data and FDA label data. Safety is built into the architecture, not left to a prompt.',
    tags: ['RAG', 'ChromaDB', 'FastAPI', 'Groq'],
    live: null, github: gh('rxguard'), status: 'local',
    note: 'Runs locally. See the README for the deployment trade-off.',
  },
  {
    id: 'flood-risk-prediction', featured: true, categories: ['Classic ML'],
    title: 'Flood Risk Prediction: Punjab and KPK',
    result: 'Catches 81% of the areas that actually flooded in 2022, checked against satellite flood maps.',
    summary: 'Uses elevation, rainfall, vegetation and land cover from Google Earth Engine for about 83,000 grid points. The live app shows predicted risk next to the real 2022 flood extent.',
    tags: ['XGBoost', 'Google Earth Engine', 'GeoPandas', 'Streamlit'],
    live: 'https://flood-risk-predict.streamlit.app', github: gh('flood-risk-prediction'), status: 'sleeps', note: null,
  },
  {
    id: 'mandi-price-forecasting', categories: ['Classic ML'],
    title: 'Mandi Price Forecasting',
    result: 'Beats a simple "same as today" guess only for tomato (23.4% vs 24.0% error). The README explains why prices behave close to a random walk.',
    summary: '7-day-ahead wholesale crop price forecasts for Punjab markets, built on 97,896 rows scraped from the official AMIS Punjab site with a browser-automation scraper.',
    tags: ['LightGBM', 'Playwright', 'Time series', 'Streamlit'],
    live: 'https://mandi-price-forecasting.streamlit.app', github: gh('mandi-price-forecasting'), status: 'sleeps', note: null,
  },
  {
    id: 'car-price-predictor', categories: ['Classic ML'],
    title: 'Used Car Price Predictor: Pakistan',
    result: 'Predicts prices within about 9.9% average error, trained on 3,900 listings scraped from PakWheels.',
    summary: 'Built around Pakistan-specific features such as locally assembled versus imported cars. The app tells a buyer whether an asking price looks fair.',
    tags: ['XGBoost', 'BeautifulSoup', 'Streamlit'],
    live: 'https://usedcarpricepredictorpak.streamlit.app', github: gh('car_price_predictor'), status: 'sleeps', note: null,
  },
  {
    id: 'heart-disease-prediction', categories: ['Classic ML'],
    title: 'Heart Disease Prediction',
    result: 'A tuned random forest reaches 0.959 ROC-AUC, shown next to six other models so anyone can judge it.',
    summary: 'Predicts heart disease from 13 clinical measurements, with no data leakage and a live risk calculator.',
    tags: ['scikit-learn', 'GridSearchCV', 'Streamlit'],
    live: 'https://get-heart-disease-prediction.streamlit.app', github: gh('heart-disease-prediction'), status: 'sleeps',
    note: 'An educational project, not a medical device.',
  },
  {
    id: 'customer-churn-prediction', categories: ['Classic ML', 'Data Science'],
    title: 'Customer Churn Prediction',
    result: 'Catches 79% of customers who leave (ROC-AUC 0.83), tested on the real, unbalanced data.',
    summary: 'Handles class imbalance with SMOTE, tunes the decision threshold for business value, and turns feature importance into clear recommendations.',
    tags: ['Random Forest', 'SMOTE', 'scikit-learn'],
    live: null, github: gh('customer-churn-prediction'), status: 'analysis', note: 'A notebook project, with the full write-up in the repo.',
  },
  {
    id: 'yacht-hydrodynamics-prediction', categories: ['Classic ML', 'Data Science'],
    title: 'Yacht Hydrodynamics: Resistance Prediction',
    result: 'Reaches 99.86% R², and the README shows that heavy tuning did not help.',
    summary: 'Physics-based features, a 7-model comparison, Optuna tuning and SHAP analysis. The Kaggle notebook earned a bronze medal.',
    tags: ['Gradient Boosting', 'Optuna', 'SHAP'],
    live: null, github: gh('yacht-hydrodynamics-prediction'), status: 'notdeployed', note: 'Not deployed on purpose, because it is an engineering calculation, not a public tool.',
  },
  {
    id: 'olist-delivery-reviews-analysis', categories: ['Data Science'],
    title: 'Olist: Do Late Deliveries Lower Reviews?',
    result: 'Late deliveries cut review scores by about 2 stars (4.29 on time versus 2.27 late) across 96,470 orders.',
    summary: 'SQL on 1.55 million rows, statistical tests with confidence intervals, a repeat-purchase model and a 3-page Power BI dashboard.',
    tags: ['PostgreSQL', 'Statistics', 'XGBoost', 'Power BI'],
    live: null, github: gh('olist-delivery-reviews-analysis'), status: 'analysis', note: 'An analysis project: SQL files, notebooks and dashboard screenshots are in the repo.',
  },
  {
    id: 'cortexiq', categories: ['Generative AI', 'Agentic AI', 'Data Science'],
    title: 'CortexIQ: AI Data Analyst',
    result: 'Turns plain-English questions into pandas and ML code, runs it in a sandbox, and fixes its own errors.',
    summary: 'Upload messy data, ask questions in chat and get charts, model comparisons and a PDF report. The ingestion layer survives bad delimiters, encodings and hidden missing-value codes.',
    tags: ['FastAPI', 'Next.js', 'Groq', 'scikit-learn'],
    live: null, github: gh('cortexiq'), status: 'local', note: 'Runs locally. Screenshots are in the README.',
  },
]

export const liveDemos = [
  { name: 'CropGuard AI', url: 'https://cropguard-ai-pk.vercel.app' },
  { name: 'Flood Risk map', url: 'https://flood-risk-predict.streamlit.app' },
  { name: 'Mandi price forecast', url: 'https://mandi-price-forecasting.streamlit.app' },
  { name: 'Used car price', url: 'https://usedcarpricepredictorpak.streamlit.app' },
  { name: 'Heart disease risk', url: 'https://get-heart-disease-prediction.streamlit.app' },
]

export const services = [
  { title: 'ML models and forecasting', text: 'Predict prices, risk or demand from your data, with honest accuracy numbers.',
    proof: [{ label: 'Mandi price forecast', href: 'https://mandi-price-forecasting.streamlit.app' }, { label: 'Flood risk map', href: 'https://flood-risk-predict.streamlit.app' }] },
  { title: 'Computer vision', text: 'Models that read images, such as spotting crop disease from a leaf photo.',
    proof: [{ label: 'CropGuard AI', href: 'https://cropguard-ai-pk.vercel.app' }] },
  { title: 'GenAI and RAG assistants', text: 'Assistants that answer from your own documents, with safety checks built in.',
    proof: [{ label: 'RxGuard', href: gh('rxguard') }, { label: 'CortexIQ', href: gh('cortexiq') }] },
  { title: 'AI agents', text: 'Agents that investigate a problem, weigh the evidence and write a clear report.',
    proof: [{ label: 'Industrial Root-Cause Agent', href: gh('industrial-rca-agent') }] },
  { title: 'Data analysis and dashboards', text: 'SQL, statistics and dashboards that answer a real business question.',
    proof: [{ label: 'Olist delivery analysis', href: gh('olist-delivery-reviews-analysis') }] },
]

export const skills = ['Python', 'scikit-learn', 'XGBoost and LightGBM', 'TensorFlow and Keras', 'SQL and PostgreSQL', 'FastAPI', 'RAG with ChromaDB', 'LangGraph', 'Streamlit', 'React', 'Google Earth Engine', 'Power BI']
