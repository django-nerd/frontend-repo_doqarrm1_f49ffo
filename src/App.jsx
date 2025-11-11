import { Brain, Cloud, Database, Cpu, BarChart3, Image as ImageIcon } from 'lucide-react'
import Spline from '@splinetool/react-spline'
import Carousel from './components/Carousel'
import Hero from './components/Hero'
import { PageIntro, PageCompetencies, PageProjects, PageCerts, PageCTA } from './components/Pages'

function App() {
  const pages = [
    // Page 1: Intro
    (
      <PageIntro
        name="Alex Morgan"
        title="Senior Data Scientist"
        headline="Transforming Data Into Actionable Insights"
        skills={[
          { icon: Brain, label: 'ML', details: 'Supervised/Unsupervised, Feature Eng., MLOps', color: 'from-violet-500 to-fuchsia-500' },
          { icon: Database, label: 'SQL', details: 'Snowflake, BigQuery, Postgres', color: 'from-blue-500 to-cyan-500' },
          { icon: Cloud, label: 'AWS', details: 'SageMaker, Lambda, Step Functions', color: 'from-emerald-500 to-teal-500' },
          { icon: BarChart3, label: 'Analytics', details: 'Experimentation, Causal Inference', color: 'from-orange-500 to-rose-500' },
        ]}
      />
    ),

    // Page 2: Core Competencies
    (
      <PageCompetencies
        items={[
          { icon: <Cloud className='w-5 h-5'/>, title: 'AWS', badge: 'Cloud Solutions Specialist', desc: 'Production-grade ML on managed services', summary: 'Migrated legacy scoring to serverless stack, cutting infra cost 35%.' },
          { icon: <Brain className='w-5 h-5'/>, title: 'Machine Learning', badge: 'End-to-End', desc: 'From notebooks to monitored pipelines', summary: 'Owned fraud model lifecycle with CI/CD and drift alerts.' },
          { icon: <Database className='w-5 h-5'/>, title: 'Data Engineering', badge: 'Scalable', desc: 'Reliable data for analytics and ML', summary: 'Built CDC pipelines into Snowflake with dbt + Airflow.' },
          { icon: <Cpu className='w-5 h-5'/>, title: 'GenAI', badge: 'Applied', desc: 'LLM-powered assistants and RAG', summary: 'Prototyped support copilot reducing handle time 18%.' },
        ]}
      />
    ),

    // Page 3: Key Projects
    (
      <PageProjects
        projects={[
          { icon: <ImageIcon className='w-5 h-5'/>, bg:'bg-gradient-to-br from-blue-600 to-cyan-500', title: 'AI Fraud Detection', desc: 'Real-time anomaly scoring for transactions', impact: 'Reduced fraud by 40%', details: 'Built streaming feature store, trained XGBoost + deep ensembles, deployed to Lambda with p95 < 60ms.' },
          { icon: <ImageIcon className='w-5 h-5'/>, bg:'bg-gradient-to-br from-violet-600 to-fuchsia-500', title: 'Customer Churn Prediction', desc: 'Proactive retention modeling', impact: 'Saved $3.2M ARR', details: 'Calibrated LightGBM with SHAP explanations for CS actions; uplift modeling for offers.' },
          { icon: <ImageIcon className='w-5 h-5'/>, bg:'bg-gradient-to-br from-emerald-600 to-teal-500', title: 'GenAI Support Copilot', desc: 'LLM + RAG for support teams', impact: 'TTR down 18%', details: 'Hybrid search over product docs, guardrails, and analytics loop to improve prompts.' },
        ]}
      />
    ),

    // Page 4: Certifications
    (
      <PageCerts
        certs={[
          { name: 'AWS Certified Solutions Architect', org: 'Amazon Web Services', rating: 5, badge: 'AWS-CSA', hover: 'AWS Solutions Architect – 2021 | Verified by Credly' },
          { name: 'Stanford Machine Learning', org: 'Stanford University', rating: 5, badge: 'ML-Expert', hover: 'Stanford - Machine Learning - 2022' },
          { name: 'Databricks Lakehouse', org: 'Databricks', rating: 4, badge: 'DB-Lakehouse', hover: 'Databricks Certified Data Engineer – 2023' },
        ]}
      />
    ),

    // Page 5: CTA
    (<PageCTA availability={2} />)
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <div className="max-w-6xl mx-auto px-4 py-6 md:py-10">
        <div className="mb-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-xl font-semibold tracking-tight text-gray-900">T-Board Resume Carousel</h1>
              <p className="text-sm text-gray-600">Swipe through highlights in seconds</p>
            </div>
          </div>
        </div>

        <Hero />

        <Carousel pages={pages} />
      </div>
    </div>
  )
}

export default App
