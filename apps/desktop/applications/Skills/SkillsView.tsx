import { WindowProps } from "@/components/WindowManagement/WindowCompositor";
import Image from 'next/image';
import styles from './SkillsView.module.css';
import { useTranslation } from "react-i18next";

function SkillEntry(props: { language: string, icon: { src: string, alt: string }}) {
  const { language, icon } = props;

  return (<>
    <div className={styles['language-entry']}>
      <Image
        quality={100}
        draggable={false}
        width={40}
        height={40}
        src={icon.src}
        alt={icon.alt}
      />
      <span>{language}</span>
    </div>
  </>);
}

export default function SkillsView(props: WindowProps) {
  const { t } = useTranslation('common');

  return (
    <div className="content-outer">
      <div className="content">
        <div className='content-inner'>
          <div className={styles['skills-content']}>
            <h1>{ t("skills.programming_languages") }</h1>
            <ul>
              <li><SkillEntry language="Python" icon={{src: '/icons/skills/python.svg', alt: 'Python' }} /></li>
              <li><SkillEntry language="Shell Scripting" icon={{src: '/icons/skills/shell.svg', alt: 'Shell' }} /></li>
              <li><SkillEntry language="JavaScript" icon={{src: '/icons/skills/typescript.svg', alt: 'JavaScript' }} /></li>
              <li><SkillEntry language="SQL" icon={{src: '/icons/skills/sql.svg', alt: 'SQL' }} /></li>
              <li><SkillEntry language="Java" icon={{src: '/icons/skills/java.svg', alt: 'Java' }} /></li>
              <li><SkillEntry language="C / C++" icon={{src: '/icons/skills/c.svg', alt: 'C' }} /></li>
            </ul>

            <h1>{ t("skills.cloud_infra") }</h1>
            <ul>
              <li><SkillEntry language="AWS" icon={{src: '/icons/skills/aws.svg', alt: 'AWS' }} /></li>
              <li><SkillEntry language="GCP" icon={{src: '/icons/skills/gcp.svg', alt: 'GCP' }} /></li>
              <li><SkillEntry language="Kubernetes" icon={{src: '/icons/skills/kubernetes.svg', alt: 'Kubernetes' }} /></li>
              <li><SkillEntry language="Docker" icon={{src: '/icons/skills/docker.svg', alt: 'Docker' }} /></li>
              <li><SkillEntry language="ECS" icon={{src: '/icons/skills/ecs.svg', alt: 'ECS' }} /></li>
              <li><SkillEntry language="Terraform" icon={{src: '/icons/skills/terraform.svg', alt: 'Terraform' }} /></li>
              <li><SkillEntry language="Ansible" icon={{src: '/icons/skills/ansible.svg', alt: 'Ansible' }} /></li>
            </ul>

            <h1>{ t("skills.observability") }</h1>
            <ul>
              <li><SkillEntry language="Splunk" icon={{src: '/icons/skills/splunk.svg', alt: 'Splunk' }} /></li>
              <li><SkillEntry language="Grafana" icon={{src: '/icons/skills/grafana.svg', alt: 'Grafana' }} /></li>
              <li><SkillEntry language="Prometheus" icon={{src: '/icons/skills/prometheus.svg', alt: 'Prometheus' }} /></li>
              <li><SkillEntry language="ELK Stack" icon={{src: '/icons/skills/elk.svg', alt: 'ELK Stack' }} /></li>
              <li><SkillEntry language="CloudWatch" icon={{src: '/icons/skills/cloudwatch.svg', alt: 'CloudWatch' }} /></li>
            </ul>

            <h1>{ t("skills.cicd") }</h1>
            <ul>
              <li><SkillEntry language="Jenkins" icon={{src: '/icons/skills/jenkins.svg', alt: 'Jenkins' }} /></li>
              <li><SkillEntry language="GitHub Actions" icon={{src: '/icons/skills/github-actions.svg', alt: 'GitHub Actions' }} /></li>
              <li><SkillEntry language="GitLab CI/CD" icon={{src: '/icons/skills/gitlab.svg', alt: 'GitLab' }} /></li>
              <li><SkillEntry language="Git" icon={{src: '/icons/skills/git.svg', alt: 'Git' }} /></li>
            </ul>

            <h1>{ t("skills.ai_ml") }</h1>
            <ul>
              <li><SkillEntry language="LangGraph / LangChain" icon={{src: '/icons/skills/langchain.svg', alt: 'LangChain' }} /></li>
              <li><SkillEntry language="ChromaDB" icon={{src: '/icons/skills/chromadb.svg', alt: 'ChromaDB' }} /></li>
            </ul>

            <h1>{ t("skills.databases") }</h1>
            <ul>
              <li><SkillEntry language="PostgreSQL" icon={{src: '/icons/skills/postgresql.svg', alt: 'PostgreSQL' }} /></li>
              <li><SkillEntry language="MySQL" icon={{src: '/icons/skills/mysql.svg', alt: 'MySQL' }} /></li>
              <li><SkillEntry language="MongoDB" icon={{src: '/icons/skills/mongodb.svg', alt: 'MongoDB' }} /></li>
              <li><SkillEntry language="SQLite" icon={{src: '/icons/skills/sqlite.svg', alt: 'SQLite' }} /></li>
            </ul>

            <h1>{ t("skills.web_apis") }</h1>
            <ul>
              <li><SkillEntry language="FastAPI" icon={{src: '/icons/skills/fastapi.svg', alt: 'FastAPI' }} /></li>
              <li><SkillEntry language="Flask" icon={{src: '/icons/skills/flask.svg', alt: 'Flask' }} /></li>
              <li><SkillEntry language="Django" icon={{src: '/icons/skills/django.svg', alt: 'Django' }} /></li>
              <li><SkillEntry language="React / Next.js" icon={{src: '/icons/skills/react.svg', alt: 'React' }} /></li>
              <li><SkillEntry language="Node.js" icon={{src: '/icons/skills/nodejs.svg', alt: 'Node.js' }} /></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
