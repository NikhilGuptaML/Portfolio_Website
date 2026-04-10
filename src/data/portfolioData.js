export const navigationLinks = [
  { label: 'Work', href: '#projects' },
  { label: 'Stack', href: '#stack' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' }
]

export const heroRoles = [
  'AI Systems Engineer',
  'AI Engineer',
  'Agentic Pipeline Builder',
  'ML Engineer'
]

export const heroStats = [
  { value: '3+', label: 'Hackathon Projects Shipped' },
  { value: 'VLM Research', label: 'Qwen2.5-VL · QLoRA · RTX A4000' },
  { value: '2nd', label: 'Year · B.Tech CS · AI/ML' },
  { value: 'Delhi, IN', label: 'India · Remote-first' }
]

export const featuredProjects = [
  {
    id: '01',
    badge: 'Government Contract Project',
    title: 'GOVT-DOC-VLM',
    line: 'Production document intelligence pipeline for scanned government records.',
    description:
      'Building a production document intelligence system for a government client - finetuning Qwen2.5-VL with QLoRA on RTX A4000 to extract and understand structured data from scanned government documents. Exporting GGUF via llama.cpp for fully local, air-gapped deployment.',
    tags: ['Qwen2.5-VL', 'QLoRA', 'llama.cpp', 'FastAPI'],
    link: 'https://github.com/NikhilGuptaML'
  }
]

export const secondaryProjects = [
  {
    id: '02',
    badge: 'Coming Soon',
    title: 'Royale AI Commander',
    line: 'LangGraph ReAct agent commanding tower defense via A*/Dijkstra on a live 20x20 grid.',
    tags: ['LangGraph', 'ReAct', 'A*', 'FastAPI']
  },
  {
    id: '03',
    badge: 'Coming Soon',
    title: 'Contact Tracing Sim',
    line: 'Privacy-preserving geospatial sim — Quadtrees + Bloom Filters on a live Leaflet/OSM map.',
    tags: ['Quadtree', 'Bloom Filter', 'Leaflet.js']
  }
]

export const techCategories = [
  {
    title: 'LLMs & Finetuning',
    items: [
      {
        name: 'PyTorch',
        icon: 'https://cdn.simpleicons.org/pytorch',
        tip: 'Core ML framework for all model work'
      },
      {
        name: 'HuggingFace',
        icon: 'https://cdn.simpleicons.org/huggingface',
        tip: 'Transformers, Datasets, PEFT integration'
      },
      { name: 'Qwen2.5-VL', tip: 'VLM finetuned for govt. document parsing' },
      { name: 'QLoRA', tip: 'Memory-efficient finetuning with 4-bit quant' },
      { name: 'Unsloth', tip: '2x faster QLoRA training on RTX A4000' },
      { name: 'llama.cpp', tip: 'Local GGUF inference - zero cloud dependency' },
      {
        name: 'Ollama',
        icon: 'https://cdn.simpleicons.org/ollama',
        tip: 'Serving finetuned models locally'
      }
    ]
  },
  {
    title: 'Agents & RAG',
    items: [
      { name: 'LangGraph', tip: 'Stateful agent graphs - used in Royale AI' },
      {
        name: 'LangChain',
        icon: 'https://cdn.simpleicons.org/langchain',
        tip: 'LLM chaining, tool calling, memory'
      },
      { name: 'FAISS', tip: 'Dense vector search for RAG pipelines' },
      { name: 'ChromaDB', tip: 'Persistent vector store for document QA' },
      { name: 'Groq API', tip: 'Sub-second LLM inference for NPTEL agent' },
      { name: 'Tavily', tip: 'AI-native web search for agentic pipelines' }
    ]
  },
  {
    title: 'Backend & APIs',
    items: [
      {
        name: 'FastAPI',
        icon: 'https://cdn.simpleicons.org/fastapi',
        tip: 'Async REST APIs for all ML-backed services'
      },
      {
        name: 'PostgreSQL',
        icon: 'https://cdn.simpleicons.org/postgresql',
        tip: 'Primary relational DB for backend services'
      },
      {
        name: 'Docker',
        icon: 'https://cdn.simpleicons.org/docker',
        tip: 'Container-based ML service deployment'
      },
      {
        name: 'Streamlit',
        icon: 'https://cdn.simpleicons.org/streamlit',
        tip: 'Rapid ML demo and evaluation dashboards'
      }
    ]
  },
  {
    title: 'Languages & Tools',
    items: [
      {
        name: 'Python',
        icon: 'https://cdn.simpleicons.org/python',
        tip: 'Primary language - all AI/ML work'
      },
      {
        name: 'TypeScript',
        icon: 'https://cdn.simpleicons.org/typescript',
        tip: 'Used in Cognitive Load Balancer frontend'
      },
      {
        name: 'C / C++',
        icon: 'https://cdn.simpleicons.org/cplusplus',
        tip: 'Systems-level programming, DSA foundations'
      },
      {
        name: 'Git',
        icon: 'https://cdn.simpleicons.org/git',
        tip: 'Version control across all projects'
      },
      {
        name: 'NumPy',
        icon: 'https://cdn.simpleicons.org/numpy',
        tip: 'Core numerical computing for ML pipelines'
      },
      {
        name: 'OpenCV',
        icon: 'https://cdn.simpleicons.org/opencv',
        tip: 'Computer vision - MediaPipe integration'
      }
    ]
  }
]

export const aboutParagraphs = [
  'Second-year CS undergrad at a Tier-3 college in India. Everything AI/ML is self-taught - Andrew Ng\'s deep learning specializations, IIT Guwahati NLP and CV courses, then straight into building real systems.',
  'Currently working as an AI engineer on a government-contracted project - building a document intelligence pipeline using Qwen2.5-VL, QLoRA finetuning, and local GGUF deployment. Real client, real constraints, shipping actual software.',
  'Looking for a remote AI engineering role at a startup where I can ship things that matter.'
]

export const aboutMeta = [
  { label: 'Status', value: 'Open to Internships', accent: true },
  { label: 'Focus', value: 'LLMs · Agents · VLMs' },
  { label: 'Active Project', value: 'Govt. Doc Intelligence' },
  { label: 'Education', value: 'B.Tech CS · 2nd Year' },
  { label: 'Location', value: 'Delhi, IN' },
  { label: 'Preferred Stack', value: 'Python · FastAPI · LangGraph' },
  { label: 'GitHub', value: 'NikhilGuptaML' }
]

export const socialLinks = [
  {
    label: 'Email',
    value: 'nikhilg.vips@gmail.com',
    href: 'mailto:nikhilg.vips@gmail.com'
  },
  {
    label: 'GitHub',
    value: 'NikhilGuptaML',
    href: 'https://github.com/NikhilGuptaML'
  },
  {
    label: 'LinkedIn',
    value: 'nikhil-gupta-827b3b31a',
    href: 'https://linkedin.com/in/nikhil-gupta-827b3b31a/'
  }
]