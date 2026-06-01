import { WindowProps } from '@/components/WindowManagement/WindowCompositor';
import { JSX, useEffect, useRef, useState } from 'react';
import styles from './AboutView.module.css';
import { profile } from '../../../profile';
import { BaseApplicationManager } from '../ApplicationManager';
import { useTranslation } from 'react-i18next';
import { TFunction } from 'i18next';
import { ProjectFriday, ProjectRAG, ProjectDataZen } from './Projects';
import { ScreenResolution } from '@/apis/Screen/ScreenService';

type SubView = (
  'home' |
  'about' |
  'experience' |
  'projects' |
  'project-friday' |
  'project-rag' |
  'project-datazen' |
  'contact'
);

export type SubViewParams = {
  needsMobileView: boolean,
  manager: BaseApplicationManager,
  changeParent: (view: SubView) => void,
  translate: TFunction,
  language: string
}

function Contact(props: { manager: BaseApplicationManager, language: string }) {
  function openContactApp() {
    props.manager.open('/Applications/Contact.app');
  }

  return (<>
    <p>If you have any questions or comments, please contact me via the <a onClick={() => openContactApp()} href='#contact'>contact application</a> or shoot me an email at <a href={`mailto:${profile.email}`}>{profile.email}</a></p>
  </>);
}

function DownloadCv(props: { translate: TFunction }) {
  const t = props.translate;

  return (<>
    <div className={styles['download-cv']}>
      <hr className={styles['about-hr']}/>
      <div className={styles['download-content']}>
        <img src="/icons/printer.png" alt="Printer" draggable={false} />
        <div>
          <h2>{t("about.download_cv.title")}</h2>
          <a target='_blank' href={t("about.download_cv.download_link")}>{t("about.download_cv.instruction")}</a>
        </div>
      </div>
      <hr className={styles['about-hr']}/>
    </div>
  </>);
}

function HomeSubView(params: SubViewParams) {
  const t = params.translate;

  const mobileClass = params.needsMobileView ? styles['mobile'] : '';

  return (<>
    <div className={styles['subpage-home']}>
      <h1 className={styles['home-title']}>{profile.name}</h1>
      <h3 className={styles['home-subtitle']}>{profile.title}</h3>

      <div className={styles['home-button-container']}>
        <button className={`${styles['home-button']} system-button ${mobileClass}`} onClick={() => params.changeParent('about')}>{t("about.navigation.about")}</button>
        <button className={`${styles['home-button']} system-button ${mobileClass}`} onClick={() => params.changeParent('experience')}>{t("about.navigation.experience")}</button>
        <button className={`${styles['home-button']} system-button ${mobileClass}`} onClick={() => params.changeParent('projects')}>{t("about.navigation.projects")}</button>
        <button className={`${styles['home-button']} system-button ${mobileClass}`} onClick={() => params.changeParent('contact')}>{t("about.navigation.contact")}</button>
      </div>
    </div>
  </>)
}

export function SubViewNavigation(params: SubViewParams) {
  const t = params.translate;

  const mobileClass = params.needsMobileView ? styles['mobile'] : '';

  return (<>
    <div className={styles['navigation']}>
      <div>
        <span className={styles['logo-part']}>{profile.name.split(' ')[0] || profile.name}</span>
        <span className={styles['logo-part']}>{profile.name.split(' ').slice(1).join(' ')}</span>
      </div>

      <div className={`${styles['navigation-button-container']} ${mobileClass}`}>
        <button className='system-button' onClick={() => params.changeParent('home')}>{t("about.navigation.home")}</button>
        <button className='system-button' onClick={() => params.changeParent('about')}>{t("about.navigation.about")}</button>
        <button className='system-button' onClick={() => params.changeParent('experience')}>{t("about.navigation.experience")}</button>
        <button className='system-button' onClick={() => params.changeParent('projects')}>{t("about.navigation.projects")}</button>
        <button className='system-button' onClick={() => params.changeParent('contact')}>{t("about.navigation.contact")}</button>
      </div>
    </div>
  </>)
}

function AboutSubView(params: SubViewParams) {
  function openContactApp() {
    params.manager.open('/Applications/Contact.app');
  }

  return (<>
    <div data-subpage className={styles['subpage']}>
      { SubViewNavigation(params) }
      <div data-subpage-content className={styles['subpage-content']}>
        <div>
          <h1 className={styles['page-h1']}>Welcome</h1>

          <p>
            I'm {profile.name}, a DevOps Engineer based in the United States.
          </p>

          <p>Thanks for taking the time to explore my portfolio. If you have any questions or comments, please contact me via the <a onClick={() => openContactApp()} href='#contact'>contact application</a> or shoot me an email at <a href={`mailto:${profile.email}`}>{profile.email}</a></p>

          <DownloadCv translate={params.translate}/>

          <h2>About me</h2>

          <p>I'm a DevOps and infrastructure engineer passionate about building reliable, scalable systems. I hold a Master's degree in Information Technology Management from The University of Texas at Dallas and a Bachelor's in Information Technology from Dharmsinh Desai University, India.</p>

          <p>My journey into technology started with a deep curiosity about how systems work under the hood. This curiosity led me to specialize in DevOps and site reliability engineering, where I focus on keeping distributed systems running smoothly at scale through automation, observability, and infrastructure as code.</p>

          <p>At Citta Solutions, I architect CI/CD pipelines for blue-green and canary deployments on AWS EKS, build LLM-powered on-call assistants that auto-triage PagerDuty alerts and reduce MTTR by 45%, and develop AI-driven capacity forecasting models for proactive scaling and cost optimization.</p>

          <p>Previously at Splunk, I owned the end-to-end SLO/error-budget program for Splunk Cloud, maintaining 99.9% uptime through proactive alerting and automated remediation. I built GitOps CI/CD pipelines enabling zero-downtime deployments on Kubernetes across AWS and GCP, and authored reusable Terraform modules that became the team standard for service onboarding.</p>

          <p>Before that, at Crest Data, I containerized legacy services, built internal automation platforms, and introduced SLI/SLO-based observability practices that significantly reduced incident response times.</p>

          <p>Beyond infrastructure, I'm deeply interested in AI and intelligent systems. I've built FRIDAY, an autonomous AI assistant powered by Claude with 112+ tools, a graph-enhanced RAG retrieval system, and DataZen, a self-serve analytics platform. These projects reflect my drive to push the boundaries of what automation can achieve.</p>

          <h2>What drives me</h2>

          <p>I believe in building systems that are not just functional, but observable, maintainable, and resilient. Whether it's designing CI/CD pipelines, building LLM-powered operational tools, or architecting AI-powered assistants, I approach every problem with a focus on reliability and developer experience.</p>

          <p>I'm always exploring new technologies and looking for interesting problems to solve. If you'd like to connect, feel free to reach out!</p>
        </div>
      </div>
    </div>
  </>);
}

function ExperienceSubView(params: SubViewParams) {
  const t = params.translate;

  return (<>
    <div data-subpage className={styles['subpage']}>
      { SubViewNavigation(params) }
      <div data-subpage-content className={styles['subpage-content']}>
        <h1 className={styles['page-h1']}>{t("about.navigation.experience")}</h1>

        <h2>Jun 2024 - Present - Citta Solutions</h2>
        <p><b>DevOps</b> - Plano, TX</p>
        <ul>
          <li>Drive reliability and performance of production services on AWS EKS Kubernetes by defining SLOs/SLIs, improving observability through Prometheus, Grafana, and CloudWatch, and proactively identifying system bottlenecks across cloud environments. </li>
          <li>Automate infrastructure and operations using Terraform, Kubernetes, and CI/CD tools (GitHub Actions) to eliminate toil and enable scalable, fault-tolerant deployments via blue-green and canary strategies, cutting release cycle time by 35%. </li>
          <li>Build monitoring systems with Prometheus, Grafana, and Splunk for real-time alerting and root-cause analysis; developed an LLM-powered oncall assistant (LangChain + Claude API) that triages PagerDuty alerts and queries production context, cutting manual triage time by 50% and MTTR by 45%. </li>
          <li>Lead incident management through on-call rotations, conducting blameless postmortems, and implementing automated recovery runbooks via ChromaDB-backed RAG retrieval to minimize downtime. </li>
          <li>Collaborate cross-functionally with product, infrastructure, and DevOps teams to integrate ML-based anomaly detection into deployment gates, reducing incidents and ensuring architectural clarity. </li>
        </ul>

        <h3>Technologies</h3>
        <p>AWS EKS, Terraform, GitHub Actions, LangChain, Claude API, Python, PagerDuty, Splunk, CloudWatch, Prometheus</p>

        <h2>Jun 2022 - Dec 2023 - Splunk (Contract)</h2>
        <p><b>Site Reliability Engineer</b> - Ahmedabad, India</p>
        <ul>
          <li>Owned end-to-end SLO/error-budget program for Splunk Cloud across distributed systems at scale, maintaining 99.9% uptime through proactive alerting and automated Python/Shell remediation.</li>
          <li>Built GitOps CI/CD pipelines with Jenkins and Terraform enabling zero-downtime blue-green releases on Kubernetes (AWS & GCP), cutting deployment cycle time by 40%.</li>
          <li>Authored reusable Terraform IaC modules adopted as the team standard for all new service onboarding, cutting environment provisioning time by 60% and scaling solutions fleet-wide.</li>
          <li>Rearchitected indexing/ingestion pipelines, reducing query latency by 30% and ingestion overhead by 20%; built Splunk and Grafana dashboards surfacing degradation before user impact.</li>
          <li>Led blameless postmortems and chaos-engineering reviews across service owners; converted findings into automated recovery runbooks that cut MTTR by 40% over six months.</li>
          <li>Drove FinOps initiative (AWS/GCP migration + rightsizing) via capacity modeling, achieving 15% reduction in cloud spend.</li>
        </ul>

        <h3>Technologies</h3>
        <p>Kubernetes, Terraform, Jenkins, AWS, GCP, Python, Shell, Splunk, Grafana, Prometheus</p>

        <h2>Dec 2021 - May 2022 - Crest Data (Intern)</h2>
        <p><b>Site Reliability Engineer Intern</b> - Ahmedabad, India</p>
        <ul>
          <li>Containerized legacy services with Docker and deployed on Kubernetes (AWS); automated infrastructure provisioning via Terraform + Jenkins, reducing deployment setup from hours to minutes at scale.</li>
          <li>Built an internal automation platform (FastAPI + React) replacing manual data-processing workflows, delivering 60% reduction in manual effort and 40% fewer data errors, eliminating SRE toil.</li>
          <li>Introduced SLI/SLO-based observability using Grafana and Splunk, establishing postmortem culture from scratch; reduced MTTR by 35% within the first quarter.</li>
        </ul>

        <h3>Technologies</h3>
        <p>Docker, Kubernetes, Terraform, Jenkins, FastAPI, React, Grafana, Splunk, AWS</p>

        <DownloadCv translate={params.translate}/>

        <Contact manager={params.manager} language={params.language} />
      </div>
    </div>
  </>);
}

function ProjectsSubView(params: SubViewParams) {
  const t = params.translate;

  function ProjectButton(name: string, target: SubView, imageUrl: string) {
    return (<>
      <button className={styles['project-button']} onClick={() => params.changeParent(target) }>
        <div>
          <img src={imageUrl} alt={`${target} thumbnail`} width={25} height={25} />
        </div>
        <span>{name}</span>
      </button>
    </>);
  }

  return (<>
    <div data-subpage className={styles['subpage']}>
      { SubViewNavigation(params) }
      <div data-subpage-content className={styles['subpage-content']}>
        <h1 className={styles['page-h1']}>{t("about.navigation.projects")}</h1>

        <h2>2024 - 2025</h2>
        <ul>
          <li>{ProjectButton('FRIDAY - AI Assistant', 'project-friday', '/icons/about-app.png')}</li>
          <li>{ProjectButton('Graph-Enhanced RAG System', 'project-rag', '/icons/algorithm-visualizer-icon.png')}</li>
          <li>{ProjectButton('DataZen - Analytics Platform', 'project-datazen', '/icons/skills-icon.png')}</li>
        </ul>
      </div>
    </div>
  </>);
}

function RenderSubView(view: SubView, params: SubViewParams): JSX.Element {
  switch (view) {
    case 'home': return HomeSubView(params);
    case 'about': return AboutSubView(params);
    case 'experience': return ExperienceSubView(params);
    case 'projects': return ProjectsSubView(params);
    case 'project-friday': return ProjectFriday(params);
    case 'project-rag': return ProjectRAG(params);
    case 'project-datazen': return ProjectDataZen(params);
  }

  return <></>;
}

export default function AboutApplicationView(props: WindowProps) {
  const { application, windowContext } = props;

  const [subView, setSubView] = useState<SubView>('home');
  const [needsMobileView, setNeedsMobileView] = useState<boolean>(false);
  const { t, i18n } = useTranslation("common");

  const apis = application.apis;

  const contentParent = useRef<HTMLDivElement>(null);

  function resetSubPageScroll() {
    if (!contentParent.current) { return; }

    const subViewParent = contentParent.current;
    const subViewParentChildren = Array.from(subViewParent.children);

    const subView = subViewParentChildren.find(x => x.hasAttribute('data-subpage'));
    if (!subView) { return; }

    const subViewChildren = Array.from(subView.children);

    const contentView = subViewChildren.find(x => x.hasAttribute('data-subpage-content'));

    if (!contentView) { return; }
    contentView.scrollTop = 0;
  }

  function onScreenChangeListener(resolution: ScreenResolution): void {
    setNeedsMobileView(resolution.isMobileDevice());
  }

  useEffect(() => {
    const unsubscribe = apis.screen.subscribe(onScreenChangeListener);

    const resolution = apis.screen.getResolution();
    if (resolution) { onScreenChangeListener(resolution); }

    return () => {
      unsubscribe();
    }
  }, []);

  useEffect(() => {
    resetSubPageScroll();
  }, [subView]);

  function changeParent(view: SubView) {
    if (view === 'contact') {
      application.on({ kind: 'about-open-contact-event' }, windowContext);
      return;
    }

    setSubView(view);
  }

  return (
    <div className="content-outer">
      <div className="content">
        <div className='content-inner' ref={contentParent}>
          { RenderSubView(subView,
            {
              needsMobileView,
              manager: application.manager,
              changeParent,
              translate: t,
              language: i18n.language
            }
          ) }
        </div>
      </div>
    </div>
  )
}
