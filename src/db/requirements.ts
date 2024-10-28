interface RequirementsProps {
  id: string;
  values: { id: string; value: string }[];
  type: "AND" | "OR";
}

export const requirements: RequirementsProps[] = [
  {
    id: "objetivos_da_avaliacao",
    values: [
      { id: "objetivos_da_avaliacao_usabilidade", value: "Usabilidade" },
      { id: "objetivos_da_avaliacao_acessibilidade", value: "Acessibilidade" },
      { id: "objetivos_da_avaliacao_ergonomia", value: "Ergonomia" },
      {
        id: "objetivos_da_avaliacao_qualidade_conformidade",
        value: "Qualidade/Conformidade",
      },
      { id: "objetivos_da_avaliacao_comparacao", value: "Comparação" },
      {
        id: "objetivos_da_avaliacao_validar_informacoes",
        value: "Validar Informações",
      },
      {
        id: "objetivos_da_avaliacao_comunicabilidade",
        value: "Comunicabilidade",
      },
    ],
    type: "AND",
  },
  {
    id: "orcamento_relativo",
    values: [
      { id: "orcamento_relativo_alto", value: "alto" },
      { id: "orcamento_relativo_medio", value: "medio" },
      { id: "orcamento_relativo_baixo", value: "baixo" },
    ],
    type: "OR",
  },
  {
    id: "tempo",
    values: [
      { id: "tempo_alto", value: "alto" },
      { id: "tempo_medio", value: "medio" },
      { id: "tempo_baixo", value: "baixo" },
    ],
    type: "OR",
  },
  {
    id: "tipo_de_dado_coletado",
    values: [
      { id: "qualitativo", value: "Qualitativo" },
      { id: "quantitativo", value: "Quantitativo" },
    ],
    type: "AND",
  },
  {
    id: "participacao_do_especilista",
    values: [
      { id: "participacao_do_especialista_sim", value: "sim" },
      { id: "participacao_do_especialista_nao", value: "nao" },
    ],
    type: "AND",
  },
  {
    id: "quantidade_de_especilistas",
    values: [
      { id: "quantidade_de_especialistas_1", value: "1" },
      { id: "quantidade_de_especialistas_2_4", value: "2_4" },
      { id: "quantidade_de_especialistas_5_mais", value: "5+" },
    ],
    type: "OR",
  },
  {
    id: "nivel_de_fidelidade_do_sistema",
    values: [
      { id: "fidelidade_alta", value: "alta" },
      { id: "fidelidade_media", value: "media" },
      { id: "fidelidade_baixa", value: "baixa" },
    ],
    type: "OR",
  },
  {
    id: "participacao_do_usuario",
    values: [
      { id: "participacao_do_usuario_sim", value: "Sim" },
      { id: "participacao_do_usuario_nao", value: "Não" },
    ],
    type: "AND",
  },
  {
    id: "quantidade_de_usuarios",
    values: [
      { id: "quantidade_de_usuarios_1_5", value: "1-5" },
      { id: "quantidade_de_usuarios_5_10", value: "5-10" },
      { id: "quantidade_de_usuarios_10_20", value: "10-20" },
      { id: "quantidade_de_usuarios_20_mais", value: "20+" },
    ],
    type: "OR",
  },
  {
    id: "modalidade_da_avaliacao",
    values: [
      { id: "modalidade_remota", value: "Remota" },
      { id: "modalidade_presencial", value: "Presencial" },
    ],
    type: "AND",
  },
];

// resultado da primeira iteração:
// array de ids de requisitos obrigatorios do metodo
// ex: ["objetivos_da_avaliacao", "orcamento_relativo"]
