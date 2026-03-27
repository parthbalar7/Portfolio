export type Experience = {
  role: string;
  company: string;
  from: string;
  to: string;
  summary: string;
};

export type Project = {
  name: string;
  description: string;
  link?: string;
  tech?: string[];
};

export type Profile = {
  name: string;
  title: string;
  description: string;
  websiteUrl: string;
  cvPath: string;
  email: string;
  company: string;
  experiences: Experience[];
  projects: Project[];
};

export const profile: Profile = {
  name: "Parth Balar",
  title: "Site Reliability Engineer",
  description: "Site Reliability Engineer with expertise in SLO/error-budget programs, GitOps CI/CD pipelines, and infrastructure automation across AWS and GCP. Experienced in Kubernetes, Terraform, and observability platforms like Splunk and Grafana.",
  websiteUrl: "https://github.com/parthbalar7",
  cvPath: "/assets/cv/Parth_Balar_Resume.pdf",
  email: "parthbalar07@gmail.com",
  company: "Splunk",
  experiences: [
    {
      role: "Site Reliability Engineer (Contract)",
      company: "Splunk",
      from: "2022",
      to: "2023",
      summary: "Owned end-to-end SLO/error-budget program for Splunk Cloud, maintained 99.9% uptime, built GitOps CI/CD pipelines with Jenkins and Terraform enabling zero-downtime blue-green releases on Kubernetes (AWS & GCP), and cut deployment cycle time by 40%."
    },
    {
      role: "Site Reliability Engineer Intern",
      company: "Crest Data",
      from: "2021",
      to: "2022",
      summary: "Containerized legacy services with Docker and Kubernetes, built an internal automation platform with FastAPI and React reducing manual effort by 60%, and introduced structured observability reducing MTTR by 35%."
    }
  ],
  projects: [
    {
      name: "FRIDAY - Autonomous AI Assistant",
      description: "Full-stack AI assistant powered by Claude Sonnet 4.6 with 112+ LangChain tools across 36 modules, featuring a LangGraph ReAct agent with multi-step planning and semantic memory via ChromaDB.",
      link: "https://github.com/parthbalar7",
      tech: ["Python", "FastAPI", "LangGraph", "LangChain", "React", "ChromaDB", "Docker", "WebSocket"]
    },
    {
      name: "Graph-Enhanced RAG Retrieval System",
      description: "Hybrid retrieval pipeline combining dense vector search with BFS knowledge-graph traversal to surface structurally related code chunks invisible to keyword search.",
      link: "https://github.com/parthbalar7",
      tech: ["Python", "sentence-transformers", "ChromaDB", "Knowledge Graph", "BFS", "Cosine Similarity"]
    },
    {
      name: "DataZen — Self-Serve Analytics Platform",
      description: "Platform transforming raw CSV uploads into business insights in under 1 minute with auto-generated visualizations, RFM customer segmentation, and AI-generated executive summaries.",
      link: "https://github.com/parthbalar7",
      tech: ["Python", "React", "ML", "Data Visualization"]
    }
  ]
};
