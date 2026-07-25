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
      question: "Qual minha comida favorita?",
      options: ["Panelada", "Batata Frita", "Macarrão", "Cachorro quente do meu sogro"],
      correctIndex: 3,
    },
    {
      image: "",
      question: "Qual minha cor favorita?",
      options: ["Preto", "Branco", "Azul", "Roxo/Lilás"],
      correctIndex: 3,
    },
    {
      image: "",
      question: "Pra onde mais gosto de viajar?",
      options: ["Praia", "Serra", "Trilha", "Cavernas"],
      correctIndex: 0,
    },
    {
      image: "",
      question: "qual meu animal favorito?",
      options: ["Cachorro", "Gato", "Ornitorrinco", "Borboleta"],
      correctIndex: 3,
    },
    {
      image: "",
      question: "Qual minha flor favorita?",
      options: ["Rosa", "Girassol", "Tulipa", "Margarida"],
      correctIndex: 3,
    },
    {
      image: "",
      question: "Qual meu artista favorito?",
      options: ["Bruno Mars", "Taylor Swift", "Zezo", "Justin Bieber"],
      correctIndex: 3,
    },
    {
      image: "",
      question: "Qual será o nome do meu cachorro?",
      options: ["Atlas", "Max", "Astrogildo", "Bolinha"],
      correctIndex: 0,
    },
    {
      image: "",
      question: "Qual meu personagem favorito?",
      options: ["Satoru Gojo", "Naruto", "Kakashi", "Muzan Kibutsuji"],
      correctIndex: 0,
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
    "foto1.jpeg",
    "foto2.jpeg",
    "foto3.jpeg",
    "foto4.jpeg",
  ],
};

/* ====================== FIM DA ÁREA DE EDIÇÃO ========================= */
