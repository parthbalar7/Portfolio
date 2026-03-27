import { JSX } from "react";
import { SubViewNavigation, SubViewParams } from "./AboutView";
import styles from './AboutView.module.css';
import { profile } from '../../../profile';

function ProjectPage(props: { title: string, params: SubViewParams, content: JSX.Element }) {
  const params = props.params;

  function openContactApp() {
    params.manager.open('/Applications/Contact.app');
  }

  const contact = (<>
    <p>If you have any questions or comments, please contact me via the <a onClick={() => openContactApp()} href='#contact'>contact application</a> or shoot me an email at <a href={`mailto:${profile.email}`}>{profile.email}</a></p>
  </>);

  const backToProjects = 'Back to projects';

  return (<>
    <div data-subpage className={styles['subpage']}>
      { SubViewNavigation(params) }
      <div data-subpage-content className={styles['subpage-content']}>
        <h1>{props.title}</h1>
        <button onClick={() => params.changeParent('projects')} className={styles['button-link']}>{backToProjects}</button>
        { props.content }

        <h3>Contact</h3>
        { contact }

        <button onClick={() => params.changeParent('projects')} className={styles['button-link']}>{backToProjects}</button>
      </div>
    </div>
  </>);
}

export function ProjectFriday(params: SubViewParams) {
  const content = (
    <div>
      <p>FRIDAY is an autonomous AI assistant with full computer control, powered by Claude Sonnet 4.6. It features a Python 3.13 + FastAPI backend and a React 18 frontend, exposing 112+ LangChain tools across 36 specialized modules.</p>

      <p>At the core of FRIDAY is a LangGraph ReAct autonomous agent with multi-step planning capabilities. I built a two-tier intent router combining regex-based matching (under 1ms latency) with an LLM fallback, capable of handling 55+ intents across email, file I/O, browser automation, and system control.</p>

      <p>One of the most interesting features is the semantic memory system powered by ChromaDB, combined with a Markov-chain predictive prefetch engine. FRIDAY also includes a nightly self-reflection loop using Claude Haiku that evolves the system prompt based on user correction patterns, making the assistant continuously improve over time.</p>

      <p>On the practical side, I engineered a 5-source parallel job-search pipeline using ThreadPoolExecutor with yfinance company-health scoring and SQLite-backed application tracking. The entire system is deployed via Docker Compose with an Nginx reverse proxy.</p>

      <h3>Technologies</h3>
      <p>
        Python, FastAPI, LangGraph, LangChain, React, ChromaDB, Docker, WebSocket, Nginx<br/>
        <a target="_blank" rel="noreferrer" href="https://github.com/parthbalar7">View on GitHub</a>
      </p>
    </div>
  );

  return ProjectPage({title: 'FRIDAY - Autonomous AI Assistant', content, params});
}

export function ProjectRAG(params: SubViewParams) {
  const content = (
    <div>
      <p>This project explores a hybrid retrieval approach that goes beyond traditional vector similarity search. By combining dense vector search with knowledge-graph traversal, the system can surface structurally related code chunks that would be invisible to keyword or embedding-only search.</p>

      <p>The pipeline uses all-MiniLM-L6-v2 embeddings with cosine similarity for the vector search component, stored in ChromaDB. For the graph component, I implemented BFS (Breadth-First Search) traversal across a knowledge graph of code entities and their relationships.</p>

      <p>A key optimization was pre-computing L2-normalized entity embeddings, enabling single matrix-multiply similarity scoring across 80+ entities. The system merges graph traversal chunks with standard vector results, providing up to 50 deduplicated hits per query.</p>

      <p>This approach is particularly effective for code retrieval tasks where understanding structural relationships between components (imports, inheritance, function calls) is just as important as semantic similarity.</p>

      <h3>Technologies</h3>
      <p>
        Python, sentence-transformers, ChromaDB, Knowledge Graph, BFS, Cosine Similarity<br/>
        <a target="_blank" rel="noreferrer" href="https://github.com/parthbalar7">View on GitHub</a>
      </p>
    </div>
  );

  return ProjectPage({title: 'Graph-Enhanced RAG Retrieval System', content, params});
}

export function ProjectDataZen(params: SubViewParams) {
  const content = (
    <div>
      <p>DataZen is a self-serve analytics platform designed to transform raw CSV uploads into actionable business insights in under 1 minute. The goal was to democratize data analysis so that non-technical users could get value from their data without writing code.</p>

      <p>The platform features auto-generated visualizations that intelligently select chart types based on the data structure. It includes RFM (Recency, Frequency, Monetary) customer segmentation for marketing insights, real-time inventory alerts for supply chain management, and AI-generated executive summaries.</p>

      <p>The backend handles data processing, statistical analysis, and machine learning model execution, while the React frontend provides an intuitive drag-and-drop interface for exploring data and customizing dashboards.</p>

      <h3>Technologies</h3>
      <p>
        Python, React, Machine Learning, Data Visualization<br/>
        <a target="_blank" rel="noreferrer" href="https://github.com/parthbalar7">View on GitHub</a>
      </p>
    </div>
  );

  return ProjectPage({title: 'DataZen - Self-Serve Analytics Platform', content, params});
}
