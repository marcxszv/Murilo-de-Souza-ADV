// Fonte única de verdade para as informações verificadas do profissional.
// Nenhum dado aqui deve ser inventado — apenas o que foi fornecido.

export const professional = {
  name: "Murilo de Souza Aguilar",
  role: "Advocacia e Consultoria Jurídica",
  rating: 5.0,
  reviewCount: 38,
  phoneDisplay: "(67) 99321-8846",
  phoneWhatsApp: "5567993218846",
  address: {
    line1: "Av. Jofre de Araújo — Maria de Lurdes",
    line2: "Nova Alvorada do Sul - MS",
    cep: "79140-000",
  },
  hours: [
    { period: "Segunda a sexta", time: "08:00 às 11:00" },
    { period: "", time: "13:00 às 17:00" },
  ],
} as const

export const practiceAreas = [
  {
    index: "01",
    title: "Direito Criminal",
    description:
      "Atuação em defesa e acompanhamento processual em matéria criminal, com análise técnica de cada caso.",
  },
  {
    index: "02",
    title: "Direito Civil",
    description:
      "Orientação e representação em questões cíveis, com atendimento direcionado à situação de cada cliente.",
  },
  {
    index: "03",
    title: "Direito Trabalhista",
    description:
      "Assessoria jurídica em demandas trabalhistas, do primeiro contato ao encaminhamento do processo.",
  },
  {
    index: "04",
    title: "Execução Penal",
    description:
      "Acompanhamento de processos de execução penal, com atenção próxima a cada etapa.",
  },
] as const

export function whatsappLink(message?: string) {
  const base = `https://wa.me/${professional.phoneWhatsApp}`
  if (!message) return base
  return `${base}?text=${encodeURIComponent(message)}`
}
