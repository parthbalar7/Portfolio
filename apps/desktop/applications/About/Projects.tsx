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

  return (<>
    <div data-subpage className={styles['subpage']}>
      { SubViewNavigation(params) }
      <div data-subpage-content className={styles['subpage-content']}>
        <h1>{props.title}</h1>
        <button onClick={() => params.changeParent('projects')} className={styles['button-link']}>Back to projects</button>
        { props.content }

        <h3>Contact</h3>
        { contact }

        <button onClick={() => params.changeParent('projects')} className={styles['button-link']}>Back to projects</button>
      </div>
    </div>
  </>);
}

export function ProjectBerthline(params: SubViewParams) {
  const content = (
    <div>
      <p>Berthline is a self-hostable governance and security control plane that sits between AI agent code and production. It gives agents and models the isolation, policy enforcement, approvals, release gates, and signed audit evidence expected of production services.</p>

      <p>I designed the governance model to fail closed: datasets must pass PII, secret, and coverage scans; models require production approval; and every policy gate defaults to deny. Model promotion is treated as a CI/CD release gate with separation of duties and two-person approval.</p>

      <p>Untrusted agents run as hardened Kubernetes Jobs: non-root, read-only root filesystem, all Linux capabilities dropped, no service-account token, and default-deny network egress. Least-privilege RBAC, KMS-backed envelope encryption, and per-tenant AAD binding provide defense in depth and prevent cross-tenant data access.</p>

      <p>A tamper-evident audit system signs hash-chained records with Ed25519 and produces verifiable evidence packs for every run. The resulting chain of custody links dataset to model to agent to action to evidence, providing end-to-end lineage, provenance, and reproducibility.</p>

      <p>Mission Control, built with React and TypeScript, provides real-time run observability, approval workflows, governance operations, a model registry, and audit access. The Python backend orchestrates Kubernetes workloads with policy-as-code gates and structured observability.</p>

      <h3>Technologies</h3>
      <p>
        Python, Kubernetes, React, TypeScript, Ed25519, KMS, Policy as Code, RBAC<br/>
        <a target="_blank" rel="noreferrer" href="https://github.com/parthbalar7">View GitHub profile</a>
      </p>
    </div>
  );

  return ProjectPage({title: 'Berthline - AI Governance Control Plane', content, params});
}

export function ProjectRAG(params: SubViewParams) {
  const content = (
    <div>
      <p>This local-first RAG assistant runs entirely offline on local LLMs. It combines dense, sparse, and knowledge-graph retrieval with cross-encoder reranking, self-maintaining long-term memory, incremental indexing, and a measured model-selection workflow.</p>

      <p>The retrieval pipeline fuses MiniLM embeddings stored in ChromaDB HNSW with BM25 or SPLADE learned-sparse search and HippoRAG-2-style Personalized PageRank graph retrieval. Reciprocal Rank Fusion combines candidates before cross-encoder reranking, surfacing structurally related code that keyword-only search misses.</p>

      <p>I built an offline evaluation harness using hit-rate@k and MRR, then ran a controlled embedder and reranker bake-off. The larger embedding model underperformed MiniLM on the target corpus, while cross-encoder reranking delivered the meaningful MRR improvement—turning model selection into a measured decision.</p>

      <p>Optional HyDE, multi-query RAG-Fusion, and LLM query decomposition can be enabled and evaluated independently. A knowledge-gap detector launches a bounded, user-approved web research loop when retrieval confidence is low, then ingests findings, verifies that the gap is closed, and regenerates the answer.</p>

      <p>Content and configuration hashes skip unchanged documents during incremental indexing. Sparse indexes rebuild in the background with debouncing and atomic swap, keeping search available and consistent throughout re-indexing.</p>

      <h3>Technologies</h3>
      <p>
        Python, ChromaDB, MiniLM, BM25, SPLADE, Knowledge Graph, Personalized PageRank, Cross-Encoder, Local LLMs<br/>
        <a target="_blank" rel="noreferrer" href="https://github.com/parthbalar7/RAG-Assistant">View on GitHub</a>
      </p>
    </div>
  );

  return ProjectPage({title: 'Graph-Enhanced RAG System', content, params});
}
