/* ======================================================================
   EDITE AQUI — troque perguntas, imagens e o texto final.
   - image: caminho relativo em imagens/ (ex: "imagens/pergunta1.jpg")
     ou URL externa. Se deixar "" (vazio), aparece um placeholder.
   - options: sempre 4 opções. correctIndex: índice (0 a 3) da certa.
   ====================================================================== */

export const CONFIG = {
  passThreshold: 0.9,

  questions: [
    {
      image: "",
      question: "Em que cidade a gente se conheceu?",
      options: ["Teresina", "Fortaleza", "São Luís", "Recife"],
      correctIndex: 0,
    },
    {
      image: "",
      question: "Qual foi o nosso primeiro encontro de verdade?",
      options: ["Cinema", "Praia", "Um café", "Sua casa"],
      correctIndex: 2,
    },
    {
      image: "",
      question: "Qual é o prato que ela mais pede pra eu fazer (ou pedir no delivery)?",
      options: ["Pizza", "Comida japonesa", "Macarrão", "Açaí"],
      correctIndex: 1,
    },
    {
      image: "",
      question: "Qual foi a nossa primeira viagem juntos?",
      options: ["Praia", "Serra", "Outra cidade", "Ainda não viajamos"],
      correctIndex: 0,
    },
    {
      image: "",
      question: "O que ela sempre fala que eu esqueço de fazer?",
      options: ["Lavar a louça", "Responder mensagem", "Guardar a roupa", "Levar o lixo"],
      correctIndex: 1,
    },
    {
      image: "",
      question: "Qual é a série/filme favorito dela?",
      options: ["Opção A", "Opção B", "Opção C", "Opção D"],
      correctIndex: 0,
    },
    {
      image: "",
      question: "Qual apelido carinhoso eu uso com ela?",
      options: ["Amor", "Bebê", "Vida", "Todos acima"],
      correctIndex: 3,
    },
    {
      image: "",
      question: "Quantos anos ela está fazendo hoje?",
      options: ["25", "26", "27", "28"],
      correctIndex: 2,
    },
  ],

  finalText: `Feliz aniversário, meu amor.

27 anos de você existindo no mundo — e alguns desses anos, com a sorte de ser eu quem está ao seu lado.

Escreva aqui a sua carta de verdade: o que você mais admira nela, uma lembrança específica, uma piada interna, um "eu te amo" bem seu. Pode ser grande, pode ser curto — o que importa é que seja você falando com ela.

Com todo o meu amor,
[assine aqui]`,

  // Fotos finais — coloque os arquivos na pasta imagens/ e use só o nome do arquivo
  // Exemplo: "foto1.jpg", "foto2.jpg"
  finalImages: [
    "",
    "",
    "",
    "",
  ],
};

/* ====================== FIM DA ÁREA DE EDIÇÃO ========================= */
