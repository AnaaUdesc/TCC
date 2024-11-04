import { CONSTANTES } from "../constantes";

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
        value: "Qualidade / Conformidade",
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
      { id: "tipo_de_dado_coletado_qualitativo", value: "Qualitativo" },
      { id: "tipo_de_dado_coletado_quantitativo", value: "Quantitativo" },
    ],
    type: "AND",
  },
  {
    id: "quantidade_de_especialistas",
    values: [
      { id: "quantidade_de_especialistas_5_mais", value: "5+" },
      { id: "quantidade_de_especialistas_2_4", value: "2_4" },
      { id: "quantidade_de_especialistas_1", value: "1" },
      { id: "nenhum", value: "nenhum" },
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
    id: CONSTANTES.QUANTIDADE_DE_USUARIOS,
    values: [
      { id: "20_mais", value: "21+" },
      { id: "10_20", value: "11-20" },
      { id: "5_10", value: "6-10" },
      { id: "1_5", value: "1-5" },
      { id: "nenhum", value: "nenhum" },
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
