export const navigationLinks = [
  { label: 'Work', href: '#projects' },
  { label: 'Experience', href: '#experience' },
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

export const allProjects = [
  {
    id: '01',
    badge: 'Government Contract Project',
    title: 'GOVT-DOC-VLM',
    line: 'Production document intelligence pipeline for scanned government records.',
    description:
      'Building a production document intelligence system for a government client - finetuning Qwen2.5-VL with QLoRA on RTX A4000 to extract and understand structured data from scanned government documents. Exporting GGUF via llama.cpp for fully local, air-gapped deployment.',
    tags: ['Qwen2.5-VL', 'QLoRA', 'llama.cpp', 'FastAPI'],
    caseStudy: {
      label: 'Featured Case Study',
      vision: 'Turn scanned government records into structured, searchable data without cloud exposure.',
      flow: [
        'Ingest scanned records and normalize layouts',
        'Fine-tune Qwen2.5-VL with QLoRA for field extraction',
        'Validate outputs and package structured payloads',
        'Export GGUF via llama.cpp for local inference',
        'Deploy an air-gapped FastAPI service'
      ],
      buildNotes: 'Accuracy-first extraction with strict on-prem constraints and fully local deployment.'
    },
    link: 'https://github.com/NikhilGuptaML'
  },
  {
    id: '02',
    badge: 'Hackathon Project',
    title: 'Royale AI Commander',
    line: 'LangGraph ReAct agent commanding tower defense via A*/Dijkstra on a live 20x20 grid.',
    description:
      'A real-time strategy game where an AI commander (LangGraph ReAct agent) analyzes the battlefield, places defensive towers using A* pathfinding, and adapts strategy based on enemy movement patterns. Full-stack with FastAPI backend and interactive HTML/JS frontend.',
    tags: ['LangGraph', 'ReAct', 'A*', 'FastAPI'],
    caseStudy: {
      vision: 'Create an AI commander that reacts to live battle conditions and optimizes defenses in real time.',
      flow: [
        'Stream live grid state into the decision loop',
        'Run LangGraph ReAct reasoning for tower placement',
        'Compute shortest paths with A* and Dijkstra',
        'Apply placements and simulate enemy response',
        'Sync strategy with the UI and backend services'
      ],
      buildNotes: 'Balanced agent reasoning speed with deterministic pathfinding for reliable gameplay.'
    },
    link: 'https://github.com/NikhilGuptaML'
  },
  {
    id: '03',
    badge: 'Hackathon Project',
    title: 'Contact Tracing Sim',
    line: 'Privacy-preserving geospatial sim — Quadtrees + Bloom Filters on a live Leaflet/OSM map.',
    description:
      'A privacy-first contact tracing simulation featuring a Pokémon Go-inspired 2D map, custom Quadtree spatial index, Bloom Filter-based risk assessment, and an autonomous Danger Zone Alert Agent. Demonstrates advanced data structures in a gamified environment.',
    tags: ['Quadtree', 'Bloom Filter', 'Leaflet.js'],
    caseStudy: {
      vision: 'Visualize exposure risk without compromising personal location privacy.',
      flow: [
        'Ingest anonymized location pings',
        'Index points with a Quadtree for fast queries',
        'Compute risk via Bloom Filter checks',
        'Render live zones on Leaflet/OSM maps',
        'Trigger alerts for emerging hotspots'
      ],
      buildNotes: 'Optimized spatial queries and risk scoring to keep the simulation responsive.'
    },
    link: 'https://github.com/NikhilGuptaML'
  },
  {
    id: '04',
    badge: 'Research Project',
    title: 'Cognitive Load Balancer',
    line: 'Adaptive learning system that steers study difficulty in real-time based on cognitive load signals.',
    description:
      'An LLM-powered study platform that measures cognitive load through response accuracy, time-on-task, and self-reported difficulty. Uses a mathematical model to dynamically adjust question complexity, with research dashboards for simulated and real-world participant data.',
    tags: ['FastAPI', 'React', 'LLM Eval', 'PostgreSQL'],
    caseStudy: {
      vision: 'Adapt learning difficulty on the fly based on cognitive load signals.',
      flow: [
        'Collect response accuracy and timing signals',
        'Estimate cognitive load from multi-signal inputs',
        'Select the next difficulty tier in real time',
        'Log outcomes to research dashboards',
        'Evaluate LLM responses against study metrics'
      ],
      buildNotes: 'Focused on measurable learning outcomes with transparent difficulty shifts.'
    },
    link: 'https://github.com/NikhilGuptaML'
  }
]

export const experienceTimeline = [
  {
    role: 'AI Engineer',
    company: 'Government Contract',
    type: 'Contract',
    period: '2025 — Present',
    description: 'Building a production document intelligence pipeline for scanned government records. Finetuning Qwen2.5-VL with QLoRA on RTX A4000, exporting GGUF via llama.cpp for fully local, air-gapped deployment.',
    skills: ['Qwen2.5-VL', 'QLoRA', 'llama.cpp', 'FastAPI']
  },
  {
    role: 'AI/ML Self-Study',
    company: 'Independent',
    type: 'Self-Taught',
    period: '2024 — Present',
    description: 'Andrew Ng\'s deep learning specializations, IIT Guwahati NLP and CV courses. Built 3+ hackathon projects shipping real agentic systems, RAG pipelines, and VLM-powered applications.',
    skills: ['PyTorch', 'HuggingFace', 'LangGraph', 'RAG']
  },
  {
    role: 'B.Tech Computer Science',
    company: 'VIPS · Delhi',
    type: 'Education',
    period: '2024 — 2028',
    description: 'Pursuing B.Tech in Computer Science with AI/ML specialization. Parallel-tracking coursework with real-world AI engineering projects and government contract work.',
    skills: ['DSA', 'C++', 'Python', 'Mathematics']
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