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

  finalText: `
Feliz aniversário, minha vidinha ❤️🥳🥳!

Como seria muito ruim pôr um texto desse tamanho no status ou nos stories, fiz esse site simples para conseguir digitar mais. Eu quero te desejar meus parabéns! Você é a pessoa mais incrível deste mundo inteiro e eu garanto que você é um presente para todos os que tiveram a sorte de conviver verdadeiramente com você e conseguir acessar personalidades que nem imaginariam que você possa ter.

Eu te admiro muito e tenho muito orgulho, sei que você é a pessoa mais merecedora de coisas boas. Você é luz, paz, sossego e calmaria na minha vida. Neste mesmo dia, há 27 anos atrás, não nasceu simplesmente a Jhênifer, Deus decidiu que ia presentear o mundo e esse presente é você. É incrível o quão admirável você é, basta simplesmente conversar 10 minutos com você e entender o quão maravilhosa você é.

Sou muito sortudo por ter você na minha vida, e eu só tenho a agradecer a você por tudo o que você é e por tudo o que você vai se tornar. Eu te desejo tudo de bom nesta vida, que Deus abençoe todas as partes da sua vida. EU TE AMO INFINITAMENTE ❤️❤️❤️😍🥰`,

  // Fotos finais — coloque os arquivos na pasta imagens/ e use só o nome do arquivo
  // Exemplo: "foto1.jpg", "foto2.jpg"
  finalImages: [
    "foto1.png",
    "foto2.png",
    "foto3.png",
    "foto4.png",
  ],
};

/* ====================== FIM DA ÁREA DE EDIÇÃO ========================= */
