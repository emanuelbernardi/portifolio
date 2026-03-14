// ============================================================
// 📝 EDITE ESTE ARQUIVO PARA PERSONALIZAR SEU PORTFÓLIO
// Altere nome, bio, projetos de BI, links, etc.
// ============================================================

export const CONFIG = {
  // --- Informações Pessoais ---
  name: "Seu Nome",
  role: "BI Developer & Data Engineer",
  bio: "Transformando dados em decisões estratégicas. Especialista em ETL, modelagem dimensional e visualização de dados com Power BI, Python e SQL.",
  
  // --- Links ---
  githubUser: "seu-usuario-github", // Seus repos serão puxados automaticamente
  linkedin: "https://linkedin.com/in/seu-perfil",
  email: "seu@email.com",

  // --- Skills / Tecnologias ---
  skills: [
    "Power BI", "SQL Server", "Python", "ETL/ELT",
    "DAX", "Airflow", "dbt", "PostgreSQL",
    "Azure Data Factory", "Databricks", "Git"
  ],

  // --- Projetos de BI (adicione quantos quiser) ---
  biProjects: [
    {
      title: "Dashboard de Vendas - Supply Chain",
      description: "Análise completa de ponta a ponta do funil de vendas com KPIs de performance, análise de sazonalidade e previsão de demanda.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
      link: "https://app.powerbi.com/exemplo1",
      tags: ["Power BI", "SQL", "ETL"]
    },
    {
      title: "Análise Financeira Corporativa",
      description: "Dashboard executivo com DRE, fluxo de caixa e análise de margem por centro de custo com drill-through interativo.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
      link: "https://app.powerbi.com/exemplo2",
      tags: ["Power BI", "DAX", "Modelagem"]
    },
    {
      title: "Pipeline de Dados - Data Lake",
      description: "Orquestração de ingestão de dados de múltiplas fontes com transformação e carga em data warehouse na nuvem.",
      image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?auto=format&fit=crop&q=80&w=800",
      link: "https://github.com/seu-usuario/pipeline",
      tags: ["Python", "Airflow", "Azure"]
    },
    {
      title: "Relatório de RH - People Analytics",
      description: "Métricas de turnover, headcount, absenteísmo e análise de performance com segmentação por departamento.",
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=800",
      link: "https://app.powerbi.com/exemplo3",
      tags: ["Power BI", "SQL", "RH"]
    },
  ],
};
