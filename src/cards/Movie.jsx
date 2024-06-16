const dataMovie = [
    {
      power: "tempo de espera",
      powerInfo:
        "Escolha um jogador para fazer uma pausa e refletir, impedindo-o de dar palpites ou tomar ações durante três de suas próximas oportunidades de jogar, independentemente de novas rodadas terem sido iniciadas. Em seguida, gere uma nova carta e continue a rodada.",
    },
    {
      answer: "O Senhor dos Anéis",
      tips: [
        "É uma jornada épica através de terras místicas.",
        "Tem um objeto pequeno, mas de grande poder.",
        "As paisagens variam de florestas densas a montanhas cobertas de neve.",
        "A amizade e a coragem são temas centrais.",
        "Um reino antigo, há muito esquecido, é redescoberto.",
        "Criaturas pequenas têm um papel crucial na história.",
        "Um grupo diverso é formado para uma missão específica.",
        "Existe um olho que nunca dorme.",
        "O destino de muitos é decidido por uma batalha final.",
        "Uma criatura perversa é atraída por uma preciosidade.",
        "Um homem, um rei, deve assumir seu lugar legítimo.",
        "As forças do mal são lideradas por um ser que deseja domínio total.",
        "Existe uma torre sombria, lar de uma força maligna.",
        "O verdadeiro poder é muitas vezes invisível.",
        "A sabedoria de um mentor é essencial para o sucesso."
      ]
    },
    {
      answer: "O Poderoso Chefão",
      tips: [
        "A história se passa em meio a uma rede complexa de alianças.",
        "O protagonista é um homem de família com um lado obscuro.",
        "O controle é mantido através de uma mistura de medo e respeito.",
        "Traições dentro da família são um tema recorrente.",
        "O poder é transmitido de pai para filho.",
        "Um casamento serve como pano de fundo para eventos importantes.",
        "Os negócios legítimos são usados como fachada.",
        "A lealdade é recompensada generosamente.",
        "Há uma cena famosa envolvendo um cavalo.",
        "A justiça pessoal é muitas vezes buscada fora da lei.",
        "Um funeral desencadeia uma cadeia de eventos violentos.",
        "Uma ilha paradisíaca serve como refúgio.",
        "As negociações frequentemente acontecem durante refeições.",
        "As decisões são tomadas em um escritório pouco iluminado.",
        "A música tema é instantaneamente reconhecível."
      ]
    },
    {
      answer: "A Origem",
      tips: [
        "É uma exploração das profundezas da mente humana.",
        "O tempo e a realidade são manipulados de formas intrigantes.",
        "Uma equipe especializada em sonhos é montada para um trabalho único.",
        "Os personagens entram em vários níveis de sonhos dentro de sonhos.",
        "A arquitetura dos sonhos pode ser alterada.",
        "Um pião é usado como um totem para testar a realidade.",
        "As emoções e memórias têm um papel vital na narrativa.",
        "Um relacionamento entre pai e filho é um ponto central.",
        "A linha entre o sonho e a realidade se torna tênue.",
        "A culpa e a redenção são temas importantes.",
        "Um trem aparece em momentos inesperados.",
        "A música de Edith Piaf tem um significado especial.",
        "Uma missão aparentemente impossível é aceita.",
        "A física dos sonhos desafia as leis da gravidade.",
        "O final deixa a questão da realidade em aberto."
      ]
    },
    {
      answer: "Matrix",
      tips: [
        "A realidade não é o que parece.",
        "Um hacker descobre uma verdade perturbadora sobre seu mundo.",
        "A escolha entre uma pílula vermelha e uma azul é crucial.",
        "As habilidades físicas dos personagens desafiam as leis da física.",
        "Um mentor sábio guia o protagonista.",
        "A luta pela liberdade é central à narrativa.",
        "Os vilões são programas de computador implacáveis.",
        "A linha entre homem e máquina é constantemente explorada.",
        "A cidade subterrânea é um refúgio para os rebeldes.",
        "A visão verde em código é icônica.",
        "A identidade do 'Escolhido' é revelada lentamente.",
        "Um traidor dentro do grupo causa grande destruição.",
        "A busca pela verdade leva a confrontos épicos.",
        "O conceito de despertar é uma metáfora recorrente.",
        "Uma batalha final decide o destino de ambos os mundos."
      ]
    },
    {
      answer: "Forrest Gump",
      tips: [
        "A vida é como uma caixa de chocolates.",
        "O protagonista participa de vários momentos históricos.",
        "Corre sem parar em uma jornada pessoal.",
        "Uma pena flutuante aparece no início e no fim.",
        "Sua inteligência é questionada, mas ele realiza feitos incríveis.",
        "Um barco de camarões se torna um negócio próspero.",
        "O amor por uma mulher é constante, apesar das adversidades.",
        "A guerra do Vietnã é uma experiência marcante.",
        "Um amigo sem pernas se torna um parceiro de negócios.",
        "A simplicidade e honestidade são suas maiores virtudes.",
        "Uma medalha de honra é concedida por bravura.",
        "O protagonista inspira danças e slogans populares.",
        "Um filho é descoberto mais tarde na vida.",
        "Um banco de praça serve como ponto de reflexão.",
        "A mãe do protagonista é uma fonte de sabedoria."
      ]
    },
    {
      answer: "Interestelar",
      tips: [
        "A salvação da humanidade depende de uma jornada interestelar.",
        "Um buraco negro é uma chave importante na trama.",
        "O amor é visto como uma força poderosa que transcende o tempo.",
        "A Terra está em colapso devido a crises ambientais.",
        "Relatividade do tempo causa dilemas emocionais.",
        "Explorações em planetas distantes são essenciais para a missão.",
        "Um relógio é um símbolo crucial de conexão entre pai e filha.",
        "A tecnologia avançada se mistura com a necessidade humana.",
        "O sacrifício pessoal para o bem maior é um tema recorrente.",
        "Uma biblioteca quântica revela segredos do universo.",
        "A quinta dimensão é explorada de maneira visualmente impactante.",
        "A busca por um lar alternativo leva a decisões difíceis.",
        "A ciência e a intuição trabalham juntas para solucionar problemas.",
        "Um robô com humor peculiar é um aliado importante.",
        "O destino da humanidade está nas mãos de exploradores corajosos."
      ]
    },
    {
      answer: "Clube da Luta",
      tips: [
        "A primeira regra é não falar sobre ele.",
        "É uma exploração da identidade e da dualidade.",
        "Um narrador insone busca sentido na vida.",
        "Um alter ego carismático emerge para desafiar normas sociais.",
        "A violência é usada como forma de autoconhecimento.",
        "Um grupo secreto se forma com regras estritas.",
        "O materialismo é criticado de forma intensa.",
        "Sabão se torna um símbolo importante.",
        "A destruição para a criação é um tema central.",
        "Um relacionamento tumultuado com uma mulher peculiar.",
        "Edifícios explodem no clímax.",
        "O protagonista trabalha em um emprego insatisfatório.",
        "A verdade sobre o alter ego é uma revelação chocante.",
        "A anarquia e o caos são promovidos como formas de liberdade.",
        "A luta contra o sistema é tanto interna quanto externa."
      ]
    },
    {
      answer: "Pulp Fiction",
      tips: [
        "A narrativa é não linear e cheia de reviravoltas.",
        "Diálogos afiados e memoráveis são uma marca registrada.",
        "A maleta misteriosa nunca revela seu conteúdo.",
        "Várias histórias se entrelaçam de maneiras inesperadas.",
        "A música é uma parte integral da atmosfera.",
        "Um par de assassinos tem conversas filosóficas.",
        "Um restaurante serve como palco de um assalto.",
        "Uma overdose leva a uma cena de reanimação tensa.",
        "O protagonista dança de maneira icônica em uma competição.",
        "Uma arma acidentalmente dispara, causando uma crise.",
        "Um boxeador enfrenta dilemas morais e físicos.",
        "Uma conversa sobre hambúrgueres é inesquecível.",
        "Um gângster recebe cuidados médicos de emergência.",
        "A redenção é um tema recorrente.",
        "O estilo visual e a direção são inconfundíveis."
      ]
    },
    {
      answer: "Star Wars",
      tips: [
        "Um conflito intergaláctico entre forças opostas.",
        "Um jovem herói descobre seu verdadeiro potencial.",
        "Mestres sábios treinam novos guerreiros.",
        "Uma arma colossal capaz de destruir planetas.",
        "A batalha pelo equilíbrio entre luz e escuridão.",
        "Droids desempenham papéis cruciais na aventura.",
        "Uma princesa lidera a resistência.",
        "Traições familiares mudam o curso da história.",
        "O som de espadas de luz é icônico.",
        "O destino de uma galáxia está em jogo.",
        "Uma nave contrabandista com um piloto habilidoso.",
        "A Força é um conceito místico central.",
        "Uma máscara respiratória oculta a verdadeira identidade.",
        "Planetas desertos e cidades nas nuvens.",
        "Um mentor desaparece mas continua a guiar."
      ]
    },
    {
      answer: "O Rei Leão",
      tips: [
        "Um reino animal onde cada criatura tem seu lugar.",
        "A luta pelo trono é um tema central.",
        "Uma savana exuberante é o cenário principal.",
        "Um mentor sábio ensina sobre o ciclo da vida.",
        "Uma tragédia familiar abala o protagonista.",
        "Amizades inesperadas ajudam na jornada de autodescoberta.",
        "Uma pedra alta serve como símbolo de realeza.",
        "Canções marcantes e emocionantes pontuam a narrativa.",
        "O retorno do herói traz a esperança de renovação.",
        "Um par de personagens cômicos e despreocupados.",
        "O protagonismo da natureza e dos animais.",
        "Uma visão de um pai falecido guia o herói.",
        "Conflitos com um tio ambicioso e traiçoeiro.",
        "Um festival colorido de criaturas celebra o nascimento.",
        "O confronto final define o destino do reino."
      ]
    },
    {
      answer: "A Viagem de Chihiro",
      tips: [
        "Uma menina encontra-se em um mundo mágico e estranho.",
        "Trabalhar em um banho público é um desafio inesperado.",
        "Espíritos e criaturas incomuns frequentam este lugar.",
        "Um dragão é um aliado valioso e misterioso.",
        "A transformação é um tema recorrente.",
        "Uma bruxa tem controle sobre o destino dos personagens.",
        "Um porco é um símbolo de avareza.",
        "A coragem e a determinação são essenciais para sobreviver.",
        "As amizades formadas são profundas e inesperadas.",
        "Um trem que atravessa paisagens subaquáticas.",
        "A importância de lembrar quem você é.",
        "Uma máscara branca e sem expressão esconde intenções.",
        "O retorno à normalidade depende de desvendar segredos.",
        "Contratos mágicos que prendem os personagens.",
        "A descoberta do verdadeiro nome tem um poder libertador."
      ]
    },
    {
      answer: "De Volta para o Futuro",
      tips: [
        "Um carro é a chave para aventuras temporais.",
        "Um cientista excêntrico e genial é um mentor crucial.",
        "A viagem no tempo cria desafios e paradoxos.",
        "Uma torre do relógio desempenha um papel central.",
        "Encontros com versões mais jovens de familiares.",
        "O destino de uma cidade depende de correções no passado.",
        "Um baile escolar é um ponto de convergência importante.",
        "A energia elétrica e raios são fundamentais.",
        "A interação com antigos amigos causa confusões.",
        "Um skate é um meio de transporte icônico.",
        "Mudanças no passado alteram o presente e o futuro.",
        "A música e as bandas dos anos 50 têm destaque.",
        "O conceito de 'destino' é frequentemente questionado.",
        "Desafios tecnológicos e improvisações criativas.",
        "A busca pelo retorno ao presente é uma constante."
      ]
    },
    {
      answer: "Cidade de Deus",
      tips: [
        "Um bairro cresce e muda ao longo das décadas.",
        "A fotografia é uma paixão que salva o protagonista.",
        "Conflitos entre gangues moldam a vida dos personagens.",
        "A violência e o crime são retratados de forma crua.",
        "Jovens sonham em escapar de um destino trágico.",
        "A amizade e a lealdade são testadas em situações extremas.",
        "A ascensão e queda de líderes criminosos.",
        "O tráfico de drogas é um elemento central.",
        "As escolhas individuais têm consequências enormes.",
        "Festas e celebrações contrastam com o cotidiano difícil.",
        "A busca por poder e controle define muitas vidas.",
        "Relatos de infância revelam origens de futuros conflitos.",
        "Um ciclo vicioso de pobreza e violência.",
        "A justiça e a moralidade são constantemente questionadas.",
        "O destino dos personagens é narrado com um realismo brutal."
      ]
    },
    {
      answer: "O Sexto Sentido",
      tips: [
        "Um menino vê coisas que outros não veem.",
        "Um psicólogo tenta ajudar seu paciente especial.",
        "Visões assustadoras e inexplicáveis perturbam o protagonista.",
        "O frio é um indicador de presenças ocultas.",
        "Os segredos revelados mudam a percepção da realidade.",
        "Um anel de casamento guarda um mistério.",
        "As palavras 'Eu vejo gente morta' são icônicas.",
        "O tema da redenção é central à história.",
        "Uma mãe desesperada tenta entender seu filho.",
        "Uma tragédia passada ainda assombra os personagens.",
        "A resolução final é uma revelação chocante.",
        "Fragmentos de diálogos ganham novos significados.",
        "Pinturas e desenhos infantis revelam medos profundos.",
        "O encontro com almas perdidas traz paz e compreensão.",
        "O reconhecimento de verdades ocultas redefine vidas."
      ]
    },
    {
      answer: "A Lista de Schindler",
      tips: [
        "Um homem de negócios decide fazer a diferença em tempos sombrios.",
        "A guerra devasta vidas e lares.",
        "Uma lista se torna símbolo de esperança e salvação.",
        "A moralidade e a compaixão emergem em meio ao caos.",
        "O preto e branco é usado de forma impactante.",
        "Crianças escondidas representam a inocência em perigo.",
        "A brutalidade de um comandante é um dos maiores obstáculos.",
        "O vermelho é uma cor simbolicamente significativa.",
        "O sacrifício pessoal pelo bem maior é um tema forte.",
        "Um documento se torna a chave para a sobrevivência.",
        "A fábrica é um refúgio em meio à destruição.",
        "A culpa e a redenção são exploradas profundamente.",
        "Testemunhos históricos trazem realismo à narrativa.",
        "A dualidade entre bem e mal é constantemente examinada.",
        "A esperança brilha nas circunstâncias mais sombrias."
      ]
    },
    {
      answer: "Pantera Negra",
      tips: [
        "Um reino tecnologicamente avançado, escondido do mundo.",
        "Um herdeiro ao trono enfrenta desafios para provar seu valor.",
        "A tradição e a inovação entram em conflito.",
        "Um metal raro é a fonte de poder e riqueza.",
        "O retorno ao lar desencadeia mudanças significativas.",
        "O papel das mulheres como líderes e guerreiras é destacado.",
        "O duelo entre rivais define o futuro do reino.",
        "A identidade cultural é celebrada através de trajes e rituais.",
        "A tecnologia futurista contrasta com a beleza natural.",
        "A luta pela justiça tem um impacto global.",
        "Um mercado clandestino de artefatos cria tensões.",
        "A lealdade é testada dentro da família e entre amigos.",
        "O legado de um pai influencia as ações do filho.",
        "A máscara do herói é um símbolo de proteção e poder.",
        "A batalha final determina o destino do reino e além."
      ]
    },
    {
      answer: "Os Incríveis",
      tips: [
        "Uma família com habilidades extraordinárias tenta levar uma vida comum.",
        "Um herói aposentado é chamado de volta à ação.",
        "Uma ilha oculta guarda segredos perigosos.",
        "O desejo de ser normal versus a necessidade de ser especial.",
        "Um bebê com habilidades surpreendentes.",
        "Um inimigo que outrora foi um fã.",
        "O apoio de um cônjuge é crucial nas batalhas.",
        "Um estilista cria trajes icônicos e funcionais.",
        "A união familiar é a chave para vencer desafios.",
        "Infiltrações em bases secretas são necessárias.",
        "O equilíbrio entre vida pessoal e vida heroica.",
        "A superforça e a velocidade são apenas o começo.",
        "Uma luta contra máquinas mortais e controladas remotamente.",
        "A discrição é vital para evitar a atenção indesejada.",
        "Uma cidade se torna o campo de batalha final."
      ]
    },
    {
      answer: "Ratatouille",
      tips: [
        "Um talento culinário encontra um aliado improvável.",
        "Uma cozinha francesa se torna o centro da trama.",
        "A busca pela perfeição gastronômica.",
        "Um mentor invisível guia o protagonista.",
        "A importância dos ingredientes frescos e de qualidade.",
        "Um crítico implacável pode fazer ou destruir carreiras.",
        "A identidade secreta é crucial para o sucesso.",
        "O desafio de trabalhar em um ambiente exigente e competitivo.",
        "A superação de preconceitos e expectativas.",
        "Uma tempestade leva a um encontro fortuito.",
        "A descoberta de receitas antigas e valiosas.",
        "A amizade entre diferentes mundos.",
        "Uma herança culinária é honrada e reinventada.",
        "O aroma de uma refeição perfeita.",
        "Uma revelação que desafia todas as convenções."
      ]
    },
    {
      answer: "Titanic",
      tips: [
        "Uma viagem inaugural que se transforma em tragédia.",
        "Uma história de amor em meio ao luxo e ao desastre.",
        "Um objeto precioso é lançado ao mar.",
        "Classes sociais são confrontadas em situações extremas.",
        "Um artista e uma aristocrata encontram-se inesperadamente.",
        "Uma promessa de nunca desistir.",
        "A frieza das águas contrasta com a paixão dos corações.",
        "Uma peça de joalheria com um passado intrigante.",
        "O destino implacável de uma grande embarcação.",
        "Uma partida festiva que termina em caos.",
        "A luta pela sobrevivência em condições adversas.",
        "Uma fuga desesperada pelas profundezas do navio.",
        "O heroísmo e o sacrifício de muitos.",
        "Uma dança apaixonada antes da tragédia.",
        "A memória de um evento que marcou a história."
      ]
    },
    {
      answer: "Speed Racer",
      tips: [
        "Velocidade e adrenalina são centrais à trama.",
        "Corridas futuristas com veículos customizados.",
        "Uma família unida pelo amor ao automobilismo.",
        "O protagonista busca honrar o legado do irmão.",
        "Empresas poderosas e corruptas controlam o esporte.",
        "O trabalho em equipe é crucial para vencer.",
        "As pistas de corrida desafiam a gravidade e a lógica.",
        "Um rival misterioso com motivações ocultas.",
        "Um carro icônico com várias funções especiais.",
        "A busca pela justiça e pela verdade no mundo das corridas.",
        "Conspirações e trapaças são constantes.",
        "O desejo de ser o melhor e conquistar a vitória.",
        "A tecnologia avançada dos veículos é impressionante.",
        "Uma figura paterna é a âncora moral do protagonista.",
        "A determinação de superar todas as adversidades."
      ]
    },
    {
      answer: "E o Vento Levou",
      tips: [
        "Uma épica história de amor e perda no sul dos Estados Unidos.",
        "Uma protagonista forte e determinada enfrenta desafios pessoais e históricos.",
        "A Guerra Civil Americana serve como pano de fundo.",
        "A luta pela sobrevivência em tempos de escassez.",
        "Um romance tumultuado e cheio de reviravoltas.",
        "Plantação e riqueza contrastam com destruição e pobreza.",
        "A busca incessante por um amor inatingível.",
        "Uma frase icônica sobre o futuro e a esperança.",
        "A importância da terra e das raízes familiares.",
        "Personagens secundários cativantes e complexos.",
        "A transformação de uma jovem mimada em uma mulher resiliente.",
        "A batalha entre o orgulho e a paixão.",
        "Uma festa extravagante onde muitas tramas se cruzam.",
        "A devastação de uma cidade e a reconstrução de vidas.",
        "A memória de um tempo e lugar que se foi para sempre."
      ]
    },
    {
      answer: "O Resgate do Soldado Ryan",
      tips: [
        "Uma missão perigosa em território inimigo.",
        "Um grupo de soldados deve encontrar e trazer de volta um único homem.",
        "O desembarque em uma praia fortificada é brutal.",
        "Sacrifícios pessoais em prol de uma causa maior.",
        "A moralidade das ordens recebidas é constantemente questionada.",
        "A irmandade formada sob fogo e pressão.",
        "Paisagens devastadas pela guerra.",
        "Um comandante enfrenta dilemas éticos e emocionais.",
        "Um final que honra a memória dos caídos.",
        "A busca por um soldado que simboliza todos os perdidos.",
        "A realidade crua e implacável do combate.",
        "A importância das pequenas ações de humanidade.",
        "Relatos de bravura e desespero entrelaçados.",
        "A reflexão sobre o preço da liberdade.",
        "Uma carta final que traz paz a uma família."
      ]
    },
    {
      answer: "O Iluminado",
      tips: [
        "Um hotel isolado nas montanhas guarda segredos sombrios.",
        "A sanidade de um homem é lentamente corroída.",
        "Visões perturbadoras e inexplicáveis atormentam os personagens.",
        "Um labirinto de corredores e salas desertas.",
        "A influência maléfica de um local sobre seus habitantes.",
        "Uma máquina de escrever se torna um símbolo de loucura.",
        "O frio intenso do inverno adiciona ao isolamento.",
        "Uma criança com habilidades psíquicas especiais.",
        "Uma presença invisível manipula e ameaça.",
        "Ecos de eventos passados permeiam o presente.",
        "A luta entre a razão e a loucura.",
        "Uma porta destruída revela uma cena aterrorizante.",
        "O tema da reclusão e do isolamento forçado.",
        "O duelo final entre pai e filho.",
        "A imagem de uma mulher em uma banheira permanece na memória."
      ]
    },
    {
      answer: "Psicose",
      tips: [
        "Um motel à beira da estrada se torna cenário de mistério.",
        "Um encontro inesperado com uma figura materna.",
        "Um gerente de comportamento peculiar e reservada hospitalidade.",
        "Uma casa antiga e sinistra no topo de uma colina.",
        "Uma trilha sonora marcada por acordes agudos e perturbadores.",
        "Um dinheiro roubado desencadeia uma série de eventos.",
        "Um investigador particular se envolve no caso.",
        "Um banho transformador e fatal.",
        "Uma identidade dividida revelada de maneira chocante.",
        "O olhar atento de um pássaro empalhado.",
        "A verdade escondida por trás de uma cortina.",
        "A fachada tranquila esconde segredos sombrios.",
        "A busca por uma irmã desaparecida.",
        "Um espelho reflete mais do que aparenta.",
        "A revelação final em um porão escuro."
      ]
    },
    {
      answer: "Guerra nas Estrelas",
      tips: [
        "Uma batalha épica por liberdade e justiça.",
        "Heróis inesperados surgem de lugares humildes.",
        "Uma arma capaz de obliterar mundos.",
        "A luta entre forças luminosas e sombrias.",
        "Mestres sábios treinam jovens guerreiros.",
        "Um vilão mascarado e sua luta interna.",
        "Alianças improváveis formadas em tempos de crise.",
        "Um duo de robôs desempenha papéis cruciais.",
        "Um amor proibido floresce em tempos de guerra.",
        "A busca por um mentor desaparecido.",
        "Mundos desertos e cidades flutuantes.",
        "A identidade de um pai chocando o herói.",
        "Espadas de luz e suas batalhas icônicas.",
        "Uma rebelião contra um império tirânico.",
        "A mística energia que conecta tudo."
      ]
    },
    {
      answer: "A Bela e a Fera",
      tips: [
        "Um castelo encantado em uma floresta isolada.",
        "A transformação de um monstro em príncipe.",
        "Uma rosa que simboliza um tempo limitado.",
        "A busca por amor verdadeiro além das aparências.",
        "Objetos domésticos ganham vida e personalidade.",
        "Uma jovem corajosa troca sua liberdade pela de seu pai.",
        "A música e dança em um salão magnífico.",
        "Um vilão arrogante com intenções possessivas.",
        "A importância da bondade e da compaixão.",
        "Uma biblioteca impressionante como símbolo de generosidade.",
        "O poder de uma promessa feita sob circunstâncias difíceis.",
        "O inverno perpetuado por um coração frio.",
        "Uma jornada para resgatar um ente querido.",
        "A força interior e o sacrifício pessoal.",
        "A mágica que quebra quando a lição é aprendida."
      ]
    },
    {
      answer: "Jurassic Park",
      tips: [
        "Uma ilha remota e misteriosa repleta de vida.",
        "A ambição científica desafiando as leis da natureza.",
        "Criaturas antigas caminhando entre humanos.",
        "Um parque de diversões que se torna um pesadelo.",
        "A clonagem de espécies extintas com consequências imprevistas.",
        "Um guardião astuto com conhecimento profundo da selva.",
        "Tempestades e falhas tecnológicas agravando a situação.",
        "Crianças enfrentando perigos pré-históricos.",
        "Um sistema de segurança que falha espetacularmente.",
        "A famosa frase: 'A vida encontra um meio'.",
        "Caçadores e presas em uma batalha pela sobrevivência.",
        "A ética da manipulação genética questionada.",
        "Uma perseguição emocionante na cozinha.",
        "A descoberta e maravilha de um mundo perdido.",
        "Um helicóptero como símbolo de esperança e fuga."
      ]
    },
    {
      answer: "O Labirinto do Fauno",
      tips: [
        "Uma jovem encontra um reino mágico em tempos de guerra.",
        "Três tarefas devem ser completadas para alcançar o objetivo.",
        "Criaturas fantásticas e assustadoras guiam a jornada.",
        "Um fauno misterioso oferece um caminho para a salvação.",
        "A brutalidade do mundo real contrasta com a magia oculta.",
        "Uma chave dourada abre portas secretas.",
        "A inocência infantil em meio à crueldade adulta.",
        "Um jantar perturbador com um monstro adormecido.",
        "O sangue de um inocente é a última chave.",
        "A luta entre a obediência e a rebelião.",
        "Um livro que revela o destino através de imagens.",
        "Um labirinto como refúgio e desafio final.",
        "A prova de coragem e sacrifício pessoal.",
        "A fusão de contos de fadas com a realidade sombria.",
        "A dualidade entre a vida e a morte como tema central."
      ]
    },
    {
      answer: "Clube dos Cinco",
      tips: [
        "Cinco estudantes de diferentes grupos sociais são forçados a interagir.",
        "Um sábado detido na escola revela segredos.",
        "A descoberta de semelhanças em meio às diferenças.",
        "A autoridade de um diretor desafiado por adolescentes.",
        "A música icônica marca a rebeldia juvenil.",
        "Um ensaio que redefine identidades.",
        "A exploração de estereótipos e preconceitos.",
        "A formação de laços inesperados e duradouros.",
        "Confissões emocionais que quebram barreiras.",
        "Um punho levantado simboliza a vitória pessoal.",
        "As tensões familiares influenciando comportamentos.",
        "A importância de ser ouvido e compreendido.",
        "O desafio de se libertar das expectativas sociais.",
        "A transformação de inimigos em amigos.",
        "A reavaliação do que significa ser 'normal'."
      ]
    },
    {
      answer: "Kill Bill",
      tips: [
        "Uma noiva em busca de vingança após uma traição brutal.",
        "A lista de nomes que guia a missão implacável.",
        "Artes marciais e duelos de espada intensos.",
        "A jornada por diferentes continentes em busca de justiça.",
        "Um mentor sábio e exigente ensina habilidades mortais.",
        "A batalha contra um exército de oponentes.",
        "Uma cicatriz que simboliza uma dívida de sangue.",
        "A luta entre antigas aliadas agora inimigas.",
        "A mistura de estilos cinematográficos ocidentais e orientais.",
        "Um traje icônico de amarelo e preto.",
        "O uso de veículos rápidos e mortais.",
        "A determinação inabalável de alcançar o objetivo final.",
        "A simbologia da serpente em um nome.",
        "A força do espírito materno como motivação.",
        "A conclusão em um confronto final emocionante."
      ]
    },
    {
      answer: "E.T. - O Extraterrestre",
      tips: [
        "Uma amizade improvável entre um menino e um visitante de outro mundo.",
        "Uma bicicleta voadora que desafia a gravidade.",
        "A conexão mental e emocional entre duas espécies.",
        "A busca desesperada para retornar ao lar.",
        "Uma planta que floresce com a presença do visitante.",
        "Uma silhueta contra a lua cheia.",
        "A tentativa de esconder um segredo de autoridades.",
        "O poder de cura através do toque.",
        "O uso de doces como forma de comunicação.",
        "A construção de um dispositivo para chamar ajuda.",
        "Um coração que brilha intensamente em momentos cruciais.",
        "A ameaça de separação forçada por adultos.",
        "Uma despedida emocionada e inesquecível.",
        "A mensagem de aceitação e compreensão universal.",
        "A descoberta de que a verdadeira magia está na amizade."
      ]
    },
    {
      answer: "O Auto da Compadecida",
      tips: [
        "Dois amigos inseparáveis enfrentam diversas aventuras.",
        "Um cenário de pobreza e religiosidade no sertão brasileiro.",
        "A esperteza e o humor são armas para sobreviver.",
        "Milagres e intervenções divinas fazem parte da trama.",
        "Um cachorro vira um ponto central na história.",
        "Questões de moralidade são colocadas em xeque.",
        "Uma figura celestial surge para julgar almas.",
        "Enganações e farsas são usadas para enganar poderosos.",
        "Um julgamento inusitado no além.",
        "A sátira social expõe as desigualdades e hipocrisias.",
        "O uso de disfarces para escapar de situações difíceis.",
        "Uma herança que causa discórdia entre os personagens.",
        "O poder da fé e da oração em momentos críticos.",
        "A lealdade entre amigos supera todas as adversidades.",
        "A comédia e o drama se misturam de forma única."
      ]
    },
    {
      answer: "Duna",
      tips: [
        "Um jovem herdeiro deve se adaptar a um novo planeta desértico.",
        "A luta pelo controle de uma substância valiosa.",
        "Profecias antigas sobre um messias esperado.",
        "Conflitos entre grandes casas nobres e famílias rivais.",
        "O poder da mente e das palavras como arma.",
        "Gigantescas criaturas habitam as areias.",
        "O equilíbrio ecológico de um planeta árido.",
        "Um treinamento rigoroso para dominar habilidades especiais.",
        "A traição de aliados inesperados.",
        "O desafio de liderar e unir povos distintos.",
        "A descoberta de segredos ocultos em um ambiente hostil.",
        "Visões do futuro que guiam o protagonista.",
        "O papel crucial das mulheres em uma ordem secreta.",
        "A batalha por recursos escassos e essenciais.",
        "Um deserto que esconde tanto perigos quanto oportunidades."
      ]
    },
    {
      answer: "À Espera de um Milagre",
      tips: [
        "Um prisioneiro com habilidades sobrenaturais.",
        "O corredor da morte em uma prisão dos anos 1930.",
        "A luta pela justiça e pela compaixão em um sistema punitivo.",
        "Guardas prisionais enfrentando dilemas morais profundos.",
        "A capacidade de curar doenças e aliviar dores.",
        "A amizade improvável entre carcereiro e condenado.",
        "Um crime horrível que esconde verdades complexas.",
        "O poder do perdão e da redenção.",
        "Um rato se torna um companheiro inesperado.",
        "O impacto das ações humanas na vida dos outros.",
        "A busca por um milagre em meio ao desespero.",
        "A exploração da natureza do bem e do mal.",
        "Uma execução que deixa marcas profundas.",
        "A revelação de um dom que desafia a compreensão.",
        "A influência de forças além do entendimento humano."
      ]
    },
    {
      answer: "Deu a Louca na Chapeuzinho",
      tips: [
        "Um conto de fadas reimaginado com humor e mistério.",
        "Personagens clássicos em situações inusitadas e modernas.",
        "A investigação de um crime na floresta.",
        "Testemunhos conflitantes revelam diferentes perspectivas.",
        "A presença de um esquilo hiperativo como elemento cômico.",
        "O uso de tecnologia moderna em um cenário de conto de fadas.",
        "Um desfecho surpreendente que subverte expectativas.",
        "A paródia de estereótipos e clichês infantis.",
        "Uma avó com habilidades e segredos inesperados.",
        "A cooperação entre personagens divergentes para resolver o mistério.",
        "A releitura de uma história infantil com toques de sátira.",
        "O humor físico e as piadas rápidas dominam a narrativa.",
        "A importância de olhar além das aparências iniciais.",
        "As reviravoltas constantes mantêm a trama dinâmica.",
        "A moral da história é apresentada de forma leve e divertida."
      ]
    },
    {
      answer: "O Enigma de Outro Mundo",
      tips: [
        "Uma base isolada na Antártica durante o inverno.",
        "Um ser que pode imitar qualquer organismo vivo.",
        "A desconfiança e paranoia entre os membros da equipe.",
        "O uso de testes para identificar o impostor.",
        "A descoberta de uma nave enterrada no gelo.",
        "A luta pela sobrevivência contra uma ameaça invisível.",
        "O isolamento extremo amplifica o medo e a tensão.",
        "A transformação grotesca de corpos humanos.",
        "O fogo como única arma eficaz contra o inimigo.",
        "A sensação de claustrofobia e desesperança.",
        "O sacrifício pessoal para proteger o mundo exterior.",
        "A dúvida constante sobre quem é humano e quem não é.",
        "A luta contra o tempo e o frio.",
        "O impacto psicológico do terror e da incerteza.",
        "O final ambíguo que deixa perguntas no ar."
      ]
    },
    {
      answer: "O Lobo de Wall Street",
      tips: [
        "A ascensão meteórica de um corretor na bolsa de valores.",
        "O excesso e a decadência no mundo financeiro.",
        "Festas extravagantes e comportamentos descontrolados.",
        "A exploração de esquemas de enriquecimento rápido.",
        "A vida de luxo e seus perigos ocultos.",
        "A moralidade questionável em busca de riqueza.",
        "A lealdade e traição entre amigos e colegas.",
        "O impacto devastador de drogas e vícios.",
        "A queda inevitável após o auge do sucesso.",
        "A manipulação de mercados e investidores.",
        "O confronto com autoridades e a lei.",
        "O carisma e persuasão do protagonista.",
        "A destruição de relações pessoais em nome do dinheiro.",
        "A ironia e humor negro presentes na narrativa.",
        "A reflexão sobre os limites da ambição humana."
      ]
    },
    {
      answer: "A Noviça Rebelde",
      tips: [
        "Uma jovem mulher encontra seu lugar em uma família numerosa.",
        "A beleza das montanhas serve como cenário pitoresco.",
        "Uma governanta que traz alegria e música a um lar rígido.",
        "Crianças que aprendem a cantar e encontrar felicidade.",
        "A tensão crescente em um país à beira da guerra.",
        "O amor floresce entre pessoas de mundos diferentes.",
        "Uma fuga audaciosa sob o manto da noite.",
        "A importância da liberdade e do espírito indomável.",
        "A música como ferramenta de união e resistência.",
        "Um patriarca que redescobre a importância da família.",
        "A presença de uma instituição religiosa como refúgio.",
        "A celebração da simplicidade e da vida ao ar livre.",
        "Os desafios de se adaptar a uma nova vida.",
        "A força de caráter e a resiliência em tempos de adversidade.",
        "A dança e a alegria superando a opressão."
      ]
    },
    {
      answer: "O Menino do Pijama Listrado",
      tips: [
        "A amizade improvável entre duas crianças em circunstâncias extremas.",
        "Uma cerca que separa mundos muito diferentes.",
        "A inocência infantil em meio a horrores indescritíveis.",
        "Um uniforme que simboliza muito mais do que aparenta.",
        "A curiosidade levando a descobertas perigosas.",
        "A vida de uma família em um lugar sombrio e isolado.",
        "A exploração das consequências de obediência cega.",
        "O impacto da guerra na vida de todos os envolvidos.",
        "A tragédia resultante da falta de compreensão e comunicação.",
        "O contraste entre a vida protegida e a vida em cativeiro.",
        "A busca por respostas em um ambiente hostil.",
        "A perda da inocência diante da realidade brutal.",
        "A importância da empatia e da conexão humana.",
        "O poder devastador dos preconceitos e do ódio.",
        "A memória de uma amizade pura em tempos sombrios."
      ]
    },
    {
      answer: "Clube dos Poetas Mortos",
      tips: [
        "Um lugar onde as regras são seguidas rigorosamente.",
        "Um grupo secreto que se reúne em um local inusitado.",
        "A poesia é uma parte central da narrativa.",
        "Um personagem inspirador desafia as normas estabelecidas.",
        "A liberdade de expressão é um tema importante.",
        "Envolve jovens descobrindo suas paixões.",
        "A tragédia está presente na história.",
        "Uma instituição educacional conservadora é o cenário.",
        "Questionar a autoridade é um elemento chave.",
        "A amizade e a solidariedade entre os personagens são destacadas.",
        "Há uma citação famosa sobre 'aproveitar o dia'.",
        "O impacto de um mentor é um ponto crucial.",
        "Um evento teatral é significativo na trama.",
        "A natureza e a beleza do mundo são celebradas.",
        "A pressão social e familiar desempenha um papel importante."
      ]
    },
    {
      answer: "O Curioso Caso de Benjamin Button",
      tips: [
        "Uma anomalia rara afeta o protagonista.",
        "A história começa de maneira incomum.",
        "Eventos históricos reais servem de pano de fundo.",
        "O tempo tem um papel único na narrativa.",
        "A relação com o amor é explorada de forma singular.",
        "O protagonista tem uma condição que desafia a lógica.",
        "Envelhecer é um tema central, mas de maneira inversa.",
        "Um diário ou carta é uma parte importante da história.",
        "A vida é vivida de trás para frente.",
        "Uma história de amor que transcende o tempo.",
        "Mudanças físicas notáveis ao longo da trama.",
        "A morte é abordada de forma filosófica.",
        "A guerra e a paz são elementos presentes na história.",
        "Uma narrativa que desafia as normas biológicas.",
        "A aceitação do destino é um tema importante."
      ]
    },
    {
      answer: "Django Livre",
      tips: [
        "Um resgate incomum é o ponto de partida da história.",
        "A vingança é um tema recorrente.",
        "A escravidão é um pano de fundo importante.",
        "Uma parceria improvável é formada.",
        "A justiça é buscada de maneira violenta.",
        "O oeste americano é o cenário.",
        "O protagonista tem habilidades excepcionais.",
        "Um vilão carismático desafia os heróis.",
        "A busca por liberdade é central.",
        "A música tem um papel marcante na narrativa.",
        "Momentos de humor negro estão presentes.",
        "O confronto final é intenso e decisivo.",
        "Um dentista tem um papel importante na trama.",
        "O duelo é um elemento chave.",
        "A coragem e a determinação definem os personagens principais."
      ]
    },
    {
      power: "pausa para reflexão",
      powerInfo:
        "Escolha um jogador para fazer uma pausa, excluindo-o da rodada atual. Em seguida, gere uma nova carta e continue a rodada.",
    },
    {
      answer: "O Show de Truman",
      tips: [
        "A vida de uma pessoa é observada constantemente.",
        "Uma cidade perfeita esconde um segredo.",
        "A realidade é manipulada por outros.",
        "Um personagem começa a perceber incongruências em seu mundo.",
        "A verdade está oculta sob uma fachada de normalidade.",
        "A busca pela liberdade é essencial na trama.",
        "Um programa de televisão é mais do que aparenta.",
        "A fachada da vida perfeita começa a desmoronar.",
        "A autenticidade versus a ilusão é um tema central.",
        "Uma fuga audaciosa é planejada.",
        "A manipulação midiática é criticada.",
        "Os relacionamentos são forjados e controlados.",
        "A descoberta de um limite físico é crucial.",
        "O oceano tem um significado especial na história.",
        "A vida observada é diferente da vida vivida."
      ]
    },
    {
      answer: "O Grande Hotel Budapeste",
      tips: [
        "Um hotel é o cenário principal.",
        "Uma amizade improvável entre duas pessoas de diferentes gerações.",
        "A trama envolve um roubo e uma herança.",
        "A Europa entre guerras é o pano de fundo.",
        "Um concierge é um dos personagens centrais.",
        "A estética visual é marcante e estilizada.",
        "A lealdade e a honra são temas importantes.",
        "Uma fuga e uma perseguição moldam a narrativa.",
        "O humor está presente mesmo em situações tensas.",
        "A arte tem um papel significativo na história.",
        "Personagens excêntricos e coloridos.",
        "Uma prisão é uma parte importante da trama.",
        "A narrativa é contada através de flashbacks.",
        "Uma sociedade secreta desempenha um papel.",
        "O amor e a perda são temas subjacentes."
      ]
    },
    {
      answer: "Gladiador",
      tips: [
        "A história se passa na Roma Antiga.",
        "O protagonista é um guerreiro respeitado.",
        "A vingança é uma motivação central.",
        "A lealdade ao imperador é testada.",
        "Arenas e combates são elementos cruciais.",
        "O desejo de liberdade e justiça permeia a trama.",
        "Traição e conspiração política estão presentes.",
        "O protagonista tem uma queda do poder à escravidão.",
        "A honra é um valor essencial.",
        "O destino de um império está em jogo.",
        "O Coliseu é um cenário importante.",
        "A luta pela sobrevivência é constante.",
        "A figura de um imperador tirano.",
        "A busca por redenção é um tema chave.",
        "A glória e a desgraça são lados de uma mesma moeda."
      ]
    },
    {
      answer: "Avatar",
      tips: [
        "A história se passa em um planeta distante.",
        "Um recurso valioso é motivo de conflito.",
        "A conexão com a natureza é um tema central.",
        "Os protagonistas têm habilidades físicas aprimoradas.",
        "A exploração e a colonização são criticadas.",
        "Relações interespécies são importantes na trama.",
        "Uma batalha pela sobrevivência e pelo lar.",
        "A transferência de consciência é um elemento chave.",
        "A flora e fauna do planeta são impressionantes.",
        "A resistência contra a opressão é destacada.",
        "Um povo nativo luta contra invasores.",
        "A cultura e as tradições são respeitadas e exploradas.",
        "A tecnologia avançada contrasta com a vida natural.",
        "O amor transcende diferenças físicas e culturais.",
        "O protagonista adota uma nova identidade."
      ]
    },
    {
      answer: "Taxi Driver",
      tips: [
        "A cidade é quase um personagem por si só.",
        "A solidão permeia a vida do protagonista.",
        "Um trabalho noturno é central na narrativa.",
        "A violência e a tensão são constantes.",
        "A desilusão com a sociedade é um tema forte.",
        "Um veterano de guerra enfrenta dificuldades de reintegração.",
        "A corrupção e o crime urbano são evidentes.",
        "A obsessão por uma figura pública.",
        "A moralidade é questionada frequentemente.",
        "A transformação psicológica do protagonista.",
        "A busca por propósito e significado.",
        "O taxímetro é um símbolo recorrente.",
        "A cidade nunca dorme e é sempre hostil.",
        "A violência culmina em um clímax intenso.",
        "O espelho reflete mais do que apenas uma imagem."
      ]
    },
    {
      answer: "Os Fantasmas Se Divertem",
      tips: [
        "Uma casa velha e peculiar é central na trama.",
        "Dois mundos diferentes colidem de maneira cômica.",
        "Uma família tenta se adaptar a uma nova residência.",
        "Uma dupla inesperada faz de tudo para assustar intrusos.",
        "O sobrenatural é tratado de forma leve e humorística.",
        "Um personagem excêntrico e de outro mundo é chamado para ajudar.",
        "A vida após a morte é retratada de forma única.",
        "Decoração excêntrica e personagens incomuns.",
        "O nome de um personagem só deve ser dito com cuidado.",
        "A burocracia até mesmo no além.",
        "Aparições e assombrações têm um toque cômico.",
        "O contato entre vivos e não-vivos é constante.",
        "Um livro estranho oferece orientações inusitadas.",
        "Renovação de casa causa mais problemas do que soluções.",
        "Um jantar inesquecível com convidados inesperados."
      ]
    },
    {
      answer: "O Grito",
      tips: [
        "Uma casa guarda segredos perturbadores.",
        "O medo é constante e cresce a cada momento.",
        "O passado sombrio afeta o presente.",
        "Aparições inexplicáveis aterrorizam os personagens.",
        "Uma maldição se espalha de pessoa para pessoa.",
        "Sons inexplicáveis e arrepiantes.",
        "Uma investigação revela verdades assustadoras.",
        "Tradições e superstições têm grande peso na trama.",
        "As vítimas são pegas de surpresa em momentos cotidianos.",
        "O medo do desconhecido é palpável.",
        "A presença de crianças adiciona um elemento inquietante.",
        "Um espírito vingativo procura justiça.",
        "Um sucesso mundial de origem japonesa",
        "Os detalhes do ambiente sugerem uma história trágica.",
        "A linha entre a realidade e o pesadelo é tênue."
      ]
    },
    {
      answer: "Bird Box",
      tips: [
        "O perigo está à espreita, mas não pode ser visto.",
        "A sobrevivência depende de evitar olhar.",
        "Um grupo tenta encontrar segurança em um mundo hostil.",
        "O instinto materno é uma força poderosa na trama.",
        "A jornada envolve rios e florestas densas.",
        "Uma entidade misteriosa leva à loucura quem a vê.",
        "A confiança em estranhos é uma questão de vida ou morte.",
        "A audição e o tato se tornam sentidos cruciais.",
        "A perda e o luto são temas recorrentes.",
        "Uma fita cega se torna um símbolo de segurança.",
        "A natureza é tanto amiga quanto inimiga.",
        "O silêncio é tanto uma benção quanto uma maldição.",
        "A esperança é uma luz em tempos de desespero.",
        "Refúgios seguros nem sempre são o que parecem.",
        "A determinação de proteger os jovens é central."
      ]
    },
    {
      answer: "Parasita",
      tips: [
        "As diferenças sociais criam um abismo entre os personagens.",
        "Uma família se infiltra na vida de outra, mais rica.",
        "A dualidade entre o luxo e a pobreza é evidente.",
        "Planos e esquemas são elaborados com astúcia.",
        "A cidade é um labirinto de desigualdades.",
        "A chuva tem um papel devastador na narrativa.",
        "A violência irrompe de forma inesperada.",
        "O subsolo esconde segredos sombrios.",
        "A vida cotidiana é repleta de contrastes.",
        "A manipulação e o engano são armas poderosas.",
        "O humor ácido se mistura com a crítica social.",
        "Um presente se transforma em um símbolo de status.",
        "A arquitetura da casa desempenha um papel crucial.",
        "A moralidade é questionada a cada passo.",
        "O final é uma reviravolta que deixa marcas profundas."
      ]
    },
    {
      answer: "Hairspray",
      tips: [
        "O cenário é uma cidade americana nos anos 60.",
        "Dança e música são centrais na trama.",
        "Um programa de TV local é o sonho de muitos jovens.",
        "A inclusão e a diversidade são temas importantes.",
        "O cabelo é uma expressão de identidade.",
        "Um personagem luta contra a discriminação racial.",
        "A autoconfiança e a aceitação são celebradas.",
        "Uma protagonista carismática desafia os padrões de beleza.",
        "Competições de dança e performance eletrizantes.",
        "A moda da época é vibrante e chamativa.",
        "Um romance adolescente floresce.",
        "A mudança social está no ar.",
        "O humor e a alegria são contagiosos.",
        "A rebeldia juvenil é mostrada com entusiasmo.",
        "O final é uma grande celebração de união e alegria."
      ]
    },
    {
      answer: "A Casa de Cera",
      tips: [
        "Um museu é o centro de acontecimentos macabros.",
        "A perfeição pode ser assustadora.",
        "Uma viagem que dá errado leva a um pesadelo.",
        "A cera esconde mais do que parece.",
        "Um grupo de amigos enfrenta perigos inesperados.",
        "A busca por ajuda se torna desesperadora.",
        "A atmosfera é de tensão crescente.",
        "Estranhos eventos em uma cidade aparentemente abandonada.",
        "Uma figura sinistra controla tudo das sombras.",
        "O calor e o derretimento são elementos cruciais.",
        "Os personagens descobrem segredos horríveis.",
        "A estética perfeita esconde uma verdade terrível.",
        "A luta pela sobrevivência é brutal.",
        "A sensação de estar sendo observado é constante.",
        "O clímax envolve fogo e destruição."
      ]
    },
    {
      answer: "A Pequena Loja de Horrores",
      tips: [
        "Um estabelecimento comercial é o foco central.",
        "Uma planta tem desejos insaciáveis.",
        "O sucesso vem com um preço alto.",
        "A comédia e o horror se misturam.",
        "Um protagonista tímido busca reconhecimento.",
        "A música é uma forma de expressão frequente.",
        "O consumo é um tema subjacente.",
        "A planta tem uma personalidade própria.",
        "A luta entre o bem e o mal é personificada de forma inusitada.",
        "Um romance floresce em meio ao caos.",
        "A ética é questionada repetidamente.",
        "O sangue é um elemento inesperado.",
        "Um final surpreendente deixa marcas.",
        "O humor negro é uma constante.",
        "A natureza se rebela contra o controle humano."
      ]
    },
    {
      answer: "La La Land",
      tips: [
        "A cidade dos sonhos é o cenário principal.",
        "A música e a dança são formas de expressão contínuas.",
        "Dois artistas lutam para alcançar seus objetivos.",
        "O amor e a carreira entram em conflito.",
        "A estética é vibrante e colorida.",
        "A nostalgia pelos musicais clássicos é evidente.",
        "A realidade e o sonho se misturam frequentemente.",
        "Momentos mágicos são vividos em locais icônicos.",
        "O sacrifício pessoal é um tema recorrente.",
        "As estações do ano marcam a passagem do tempo.",
        "O jazz tem um papel fundamental na história.",
        "A persistência diante das dificuldades é celebrada.",
        "Os sonhos são perseguidos com paixão.",
        "Uma audição crucial define o destino dos personagens.",
        "O final é agridoce, refletindo a dualidade da vida."
      ]
    },
    {
      answer: "Mad Max",
      tips: [
        "Deserto implacável e poeira constante.",
        "Sobrevivência em um mundo pós-apocalíptico.",
        "Lutas por recursos escassos.",
        "Veículos modificados e armados.",
        "Um herói solitário e taciturno.",
        "Inimigos com visuais excêntricos e assustadores.",
        "A busca por redenção e justiça.",
        "Paisagens devastadas e desoladas.",
        "Alianças frágeis em meio ao caos.",
        "Um futuro onde a lei não existe.",
        "Personagens com nomes e aparências peculiares.",
        "Cenários extremos e explosões frequentes.",
        "Liderança de uma figura feminina forte.",
        "O poder é medido pela posse de combustível.",
        "Uma obra-prima de ação e adrenalina."
      ]
    },
    {
      answer: "Hereditário",
      tips: [
        "O legado familiar é pesado e obscuro.",
        "Segredos perturbadores passam de geração em geração.",
        "Uma casa cheia de miniaturas intrigantes.",
        "Um acidente trágico marca a narrativa.",
        "Uma mãe artista e suas criações perturbadoras.",
        "Rituais e símbolos enigmáticos.",
        "Uma presença sobrenatural que permeia a história.",
        "Drama psicológico com elementos de terror.",
        "Uma avó com segredos ocultos.",
        "Experiências de perda e luto.",
        "Estranhas conexões com o ocultismo.",
        "Relações familiares tensas e desconfortáveis.",
        "O uso de fogo em momentos críticos.",
        "Um poste, um carro e uma cabeça.",
        "Uma conclusão chocante e inesquecível."
      ]
    },
    {
      answer: "Cisne Negro",
      tips: [
        "A obsessão pela perfeição.",
        "Dança como uma metáfora de transformação.",
        "Dupla personalidade e conflito interno.",
        "Uma competição acirrada no mundo artístico.",
        "Cenas de beleza e horror entrelaçadas.",
        "Um mentor exigente e controlador.",
        "Psicose e auto-mutilação.",
        "Um papel principal que exige total dedicação.",
        "A relação conturbada entre mãe e filha.",
        "O uso de espelhos em cenas chave.",
        "A dualidade entre o bem e o mal.",
        "Pressão psicológica e colapso mental.",
        "Aparições e alucinações desconcertantes.",
        "Cores contrastantes representando pureza e corrupção.",
        "Uma performance final arrebatadora."
      ]
    },
    {
      answer: "As Aventuras de Pi",
      tips: [
        "Uma jornada épica no mar.",
        "A sobrevivência em um pequeno bote.",
        "Um tigre de bengala como companheiro inesperado.",
        "Exploração de temas espirituais e filosóficos.",
        "Um naufrágio catastrófico dá início à história.",
        "Cenas de beleza visual e natureza selvagem.",
        "Relatos de fé e esperança contra todas as adversidades.",
        "A narrativa se passa em grande parte no Oceano Pacífico.",
        "Uma ilha misteriosa e cheia de surpresas.",
        "Interações entre homem e animal em situações extremas.",
        "Reflexões sobre a verdade e a ficção.",
        "A relação entre um jovem e um predador feroz.",
        "Uma história contada por um sobrevivente.",
        "O poder da imaginação para superar a realidade.",
        "Um relato inspirador de resiliência e descoberta."
      ]
    },
    {
      answer: "Guardiões da Galáxia",
      tips: [
        "Uma equipe de heróis improváveis.",
        "Aventuras intergalácticas e humor ácido.",
        "Uma trilha sonora repleta de clássicos.",
        "Um guaxinim falante e um humano árvore.",
        "Uma esfera com poder imensurável.",
        "Fugas audaciosas e batalhas espaciais.",
        "A lealdade entre companheiros desajustados.",
        "O carisma de um líder dançante.",
        "Conflitos com uma tirania galáctica.",
        "Alianças forjadas em momentos de crise.",
        "Um vilão que busca destruir o universo.",
        "A busca por identidade e redenção.",
        "Personagens de diferentes espécies e habilidades.",
        "Tecnologia futurista e paisagens alienígenas.",
        "Uma combinação única de ação e comédia."
      ]
    },
    {
      answer: "A Morte do Demônio",
      tips: [
        "Uma cabana isolada na floresta.",
        "Livros antigos e encantamentos perigosos.",
        "Uma força malévola e invisível.",
        "Possessões demoníacas e terror visceral.",
        "Correntes de eventos sobrenaturais.",
        "Uso intensivo de efeitos práticos de maquiagem.",
        "Uma serra elétrica como arma icônica.",
        "Amigos que se tornam inimigos mortais.",
        "Um tom de horror misturado com humor negro.",
        "Desmembramentos e sangue em abundância.",
        "Uma reimaginação moderna de um clássico cult.",
        "O confronto entre o bem e o mal.",
        "Presença de uma mão possuída.",
        "Um protagonista que luta até o fim.",
        "Uma atmosfera de medo e tensão constante."
      ]
    },
    {
      answer: "A Família Addams",
      tips: [
        "Uma família excêntrica e sombria.",
        "Uma casa repleta de segredos e surpresas.",
        "Um mordomo alto e silencioso.",
        "Amor por tudo que é macabro e bizarro.",
        "Personagens com nomes e comportamentos únicos.",
        "Humor mórbido e situações inusitadas.",
        "Um casal apaixonado e levemente assustador.",
        "Crianças que adoram brincadeiras perigosas.",
        "Uma mão desmembrada e ativa.",
        "Relação com a morte e o sobrenatural.",
        "Um primo peludo e incomum.",
        "Festas e celebrações peculiares.",
        "Conflitos com o mundo exterior normal.",
        "Referências constantes à cultura gótica.",
        "Uma melodia tema icônica e inesquecível."
      ]
    },
    {
      answer: "Alien",
      tips: [
        "Uma nave espacial em uma missão de rotina.",
        "Um sinal de socorro vindo de um planeta desolado.",
        "Uma criatura que se desenvolve rapidamente.",
        "Suspense e terror em um ambiente claustrofóbico.",
        "A luta pela sobrevivência contra um predador implacável.",
        "Uma protagonista feminina forte e determinada.",
        "O uso de detecção de movimento para localizar o inimigo.",
        "Um ciclo de vida alienígena perturbador.",
        "Exploração de temas de bioengenharia e biotecnologia.",
        "Personagens que enfrentam seus piores medos.",
        "O isolamento do espaço profundo.",
        "Um andróide com segundas intenções.",
        "A frase 'no espaço, ninguém pode ouvir você gritar'.",
        "Um diretor renomado por sua visão sombria.",
        "Cenas icônicas que redefiniram o gênero de ficção científica e horror."
      ]
    },
    {
      answer: "A Fantástica Fábrica de Chocolate",
      tips: [
        "Um local onde os sonhos doces se tornam realidade.",
        "Um excêntrico empresário de chapéu e bengala.",
        "Um grupo diversificado de visitantes recebe um convite raro.",
        "Experiências sensoriais que desafiam a imaginação.",
        "Um rio com uma correnteza deliciosa.",
        "Trabalhadores pequenos e coloridos com uma canção própria.",
        "Provações que testam os valores morais dos participantes.",
        "Um garoto de família humilde se destaca entre os outros.",
        "Ambientes que desafiam as leis da física e da lógica.",
        "Invenções com sabores e efeitos inesperados.",
        "Uma competição que revela verdadeiros caráteres.",
        "Regras claras, mas muitas vezes ignoradas.",
        "Um prêmio final que muda a vida de um jovem.",
        "Uma lição sobre a importância da bondade e humildade.",
        "Um lugar onde tudo é comestível e nada é o que parece."
      ]
    },
    {
      answer: "O Bebê de Rosemary",
      tips: [
        "Um jovem casal se muda para um apartamento antigo.",
        "Um círculo social de vizinhos estranhamente interessados.",
        "Uma gravidez cercada de pressentimentos sombrios.",
        "Sonhos perturbadores e visões inquietantes.",
        "A desconfiança crescente em relação às intenções alheias.",
        "Uma bebida especial com ingredientes suspeitos.",
        "O nascimento de algo profano.",
        "A luta entre a fé e a dúvida.",
        "Uma atmosfera de paranoia e isolamento.",
        "A interferência constante na vida privada do casal.",
        "Um pacto com forças além da compreensão humana.",
        "Um marido que esconde segredos sombrios.",
        "Um título que faz referência ao descendente de alguém importante.",
        "Um clímax que revela uma terrível verdade.",
        "A perda de controle sobre o próprio destino."
      ]
    },
    {
      answer: "Suspiria",
      tips: [
        "Uma prestigiada escola de dança na Alemanha.",
        "Estranhas ocorrências durante a noite.",
        "Um lugar onde a arte e o oculto se encontram.",
        "Alunas desaparecendo sob circunstâncias misteriosas.",
        "Uma diretora com um ar de mistério e autoridade.",
        "A arquitetura do edifício esconde segredos antigos.",
        "A presença de rituais e encantamentos obscuros.",
        "A busca por respostas leva a revelações sinistras.",
        "O contraste entre beleza e horror em cada cena.",
        "Uma paleta de cores vivas e símbolos enigmáticos.",
        "A música amplifica a tensão e o medo.",
        "Amizades postas à prova pelo medo e desconfiança.",
        "Um ato final que culmina em uma descoberta chocante.",
        "Uma combinação de coreografia e magia negra.",
        "Um ambiente onde ninguém está seguro."
      ]
    },
    {
      answer: "Sinais",
      tips: [
        "Estranhos desenhos em campos agrícolas.",
        "Um antigo ministro que perdeu a fé.",
        "Sons inexplicáveis captados por um monitor de bebê.",
        "A presença de visitantes não bem-vindos.",
        "A luta para proteger a família contra o desconhecido.",
        "A relação entre eventos do passado e o presente.",
        "Uma água que se torna vital para a sobrevivência.",
        "O uso de espelhos e reflexos para descobrir a verdade.",
        "Mensagens escondidas em transmissões estáticas.",
        "Uma noite que muda tudo em uma comunidade rural.",
        "Luzes misteriosas no céu noturno.",
        "A busca por respostas leva a um confronto final.",
        "A importância de pequenos detalhes na luta pela vida.",
        "Uma criatura que se esconde nas sombras.",
        "O poder da crença e do destino em momentos críticos."
      ]
    },
    {
      answer: "Procurando Nemo",
      tips: [
        "Um pai determinado e seu filho aventureiro.",
        "A vasta e perigosa imensidão azul.",
        "Encontros com criaturas de todas as formas e tamanhos.",
        "Uma viagem épica através de um ambiente aquático.",
        "A importância da amizade e da perseverança.",
        "Mensagens escondidas em correntes marinhas.",
        "Uma escola de vida em meio a anêmonas.",
        "Superação de medos pessoais e limitações.",
        "Um grupo de companheiros improváveis.",
        "Perigos constantes em cada esquina do oceano.",
        "Um habitat artificial que simula o natural.",
        "Uma rede de transporte subaquática muito peculiar.",
        "Lições de vida sobre confiança e resiliência.",
        "Memórias fragmentadas ajudam na jornada.",
        "Um final emocionante e cheio de reencontros."
      ]
    },
    {
      answer: "Divertidamente",
      tips: [
        "As aventuras dentro da mente de uma jovem.",
        "Personagens que representam diferentes emoções.",
        "Uma jornada através de memórias e sentimentos.",
        "A mudança de ambiente que provoca uma crise.",
        "A busca pelo equilíbrio emocional.",
        "Lembranças essenciais que moldam a personalidade.",
        "Um quartel-general onde tudo é controlado.",
        "A importância de aceitar e expressar sentimentos.",
        "Conflitos entre alegria e tristeza.",
        "A presença de um amigo imaginário marcante.",
        "Os desafios do crescimento e da adaptação.",
        "Uma ilha de valores que desmorona e se reconstrói.",
        "A exploração de sonhos e pesadelos.",
        "Um mundo colorido e cheio de imaginação.",
        "Um final que celebra a complexidade das emoções."
      ]
    },
    {
      answer: "Que Horas Ela Volta?",
      tips: [
        "A relação entre uma empregada doméstica e seus patrões.",
        "A chegada de alguém que desafia a dinâmica estabelecida.",
        "Diferenças de classe social e seus impactos.",
        "A luta por reconhecimento e respeito.",
        "A reconciliação de uma mãe com sua filha distante.",
        "Conflitos silenciosos e tensões latentes.",
        "Um ambiente familiar que não é o que parece.",
        "Sacrifícios pessoais em prol do trabalho.",
        "Momentos de humor e melancolia.",
        "A reavaliação de papéis e expectativas.",
        "O impacto de novas gerações nas tradições.",
        "Confrontos sobre valores e direitos.",
        "O desejo por uma vida melhor e mais justa.",
        "Pequenos gestos que revelam grandes verdades.",
        "Uma narrativa íntima e profundamente humana."
      ]
    },
    {
      power: "azar do destino",
      powerInfo:
        "Escolha um jogador para ser vítima do infortúnio. Este jogador terá que subtrair 15 pontos de sua pontuação total ou voltar 15 casas. Em seguida, gere uma nova carta e continue a rodada.",
    },
    {
      answer: "Planeta dos Macacos",
      tips: [
        "A descoberta de um planeta habitado por seres inteligentes.",
        "Uma inversão inesperada de papéis entre espécies.",
        "Uma jornada de exploração que se torna um pesadelo.",
        "O confronto entre ciência e instinto.",
        "Monumentos que revelam segredos sobre o passado.",
        "Um líder sábio e seu olhar sobre o futuro.",
        "Tribos e sociedades organizadas de forma peculiar.",
        "A luta pela liberdade e auto-determinação.",
        "O impacto devastador de uma guerra antiga.",
        "Uma viagem no tempo que revela verdades sombrias.",
        "Comunicações interrompidas e mal-entendidos.",
        "A importância de preservar a memória histórica.",
        "Experimentos científicos com consequências imprevistas.",
        "Um símbolo icônico de destruição na cena final.",
        "Reflexões sobre a natureza da humanidade e civilização."
      ]
    },
    {
      answer: "Meninas Malvadas",
      tips: [
        "A vida de uma adolescente muda após uma grande transição.",
        "A hierarquia social de um ambiente educacional.",
        "Um diário se torna uma arma de vingança.",
        "Rivalidade entre grupos com comportamentos distintos.",
        "Festas e eventos sociais determinam o status.",
        "Alianças e traições entre amigas.",
        "Uma figura central que manipula todos ao seu redor.",
        "O uso de roupas como símbolo de pertencimento.",
        "Um calendário que dita regras não escritas.",
        "A busca por identidade em meio à pressão dos pares.",
        "Uma transformação de postura e aparência.",
        "Comentários anônimos que causam caos.",
        "A importância de um dia específico da semana.",
        "Conselhos absurdos que se tornam leis entre colegas.",
        "Um final que ensina lições sobre autenticidade e amizade."
      ]
    },
    {
      answer: "Pânico",
      tips: [
        "Uma série de telefonemas assustadores.",
        "Um mascarado que aterroriza uma pequena comunidade.",
        "Regras de sobrevivência em situações extremas.",
        "A conexão entre eventos presentes e passados.",
        "Uma protagonista resiliente e determinada.",
        "A revelação de segredos através de investigações.",
        "Festas que se tornam cenários de horror.",
        "Referências a obras clássicas do gênero.",
        "A traição de pessoas próximas e confiáveis.",
        "Suspense e reviravoltas inesperadas.",
        "Jornalistas ávidos por uma grande história.",
        "A atmosfera de medo constante em lugares comuns.",
        "Suspeitos que parecem inocentes.",
        "Um clímax cheio de revelações e confrontos.",
        "Um epílogo que deixa portas abertas para o futuro."
      ]
    },
    {
      answer: "Midsommar",
      tips: [
        "Um festival que ocorre em plena luz do dia.",
        "Tradições culturais que parecem estranhas e desconcertantes.",
        "A perda trágica que leva a uma viagem ao exterior.",
        "A presença constante de flores e natureza exuberante.",
        "Ritmos e rituais que ditam a rotina.",
        "Um grupo de amigos que se envolve em cerimônias locais.",
        "Líderes comunitários com motivações ocultas.",
        "Um clima de desconforto em meio à beleza natural.",
        "Visões perturbadoras e revelações pessoais.",
        "A importância de símbolos e artefatos culturais.",
        "A transição de sentimentos de um personagem central.",
        "Jogos e competições com consequências graves.",
        "Danças e músicas com significados profundos.",
        "Uma celebração que termina de forma chocante.",
        "Um final que redefine laços e lealdades."
      ]
    },
    {
      answer: "Alice no País das Maravilhas",
      tips: [
        "Uma jornada que começa com uma queda inesperada.",
        "Encontros com personagens excêntricos e enigmas.",
        "Um universo onde as regras da lógica não se aplicam.",
        "Jogos e desafios em um cenário de fantasia.",
        "A importância de um objeto de tempo.",
        "Conselhos e diálogos absurdos mas reveladores.",
        "Uma figura de autoridade que dita leis inusitadas.",
        "Transformações físicas que ocorrem de forma mágica.",
        "Festas e celebrações que são tudo, menos comuns.",
        "Uma criatura que desaparece deixando um sorriso.",
        "Conflitos entre personagens com cabeças grandes.",
        "Uma poção que muda tudo.",
        "O encontro com criaturas que falam em charadas.",
        "Um tribunal onde nada é o que parece.",
        "Uma aventura que termina com um despertar."
      ]
    },
    {
      answer: "Sexta-Feira Muito Louca",
      tips: [
        "Um evento inexplicável troca as vidas de duas pessoas.",
        "Conflitos de geração que se tornam desafios literais.",
        "A luta para se adaptar a uma nova realidade.",
        "As responsabilidades diárias que se tornam cômicas.",
        "O esforço para manter aparências diante de terceiros.",
        "Decisões importantes tomadas sob novas perspectivas.",
        "Um objeto misterioso desencadeia a mudança.",
        "Situações embaraçosas em ambientes familiares.",
        "A importância de uma cerimônia importante.",
        "A descoberta de segredos e habilidades inesperadas.",
        "Uma transformação de entendimento e empatia.",
        "A busca para reverter uma situação mágica.",
        "Dilemas profissionais e pessoais intercalados.",
        "A importância do apoio e compreensão mútua.",
        "Um final que celebra a união familiar."
      ]
    },
    {
      answer: "Legalmente Loira",
      tips: [
        "Uma jovem determinada a provar seu valor.",
        "Superação de estereótipos em um ambiente competitivo.",
        "O uso do conhecimento em áreas inesperadas.",
        "Um romance que motiva uma mudança de vida.",
        "Conquistas acadêmicas que desafiam expectativas.",
        "A importância da aparência e do estilo pessoal.",
        "Novas amizades que ajudam na adaptação.",
        "Desafios legais em um tribunal.",
        "Técnicas inusitadas para resolver problemas.",
        "A descoberta de habilidades ocultas e talentos.",
        "Uma apresentação final que muda tudo.",
        "Mentorias e rivalidades no mesmo ambiente.",
        "O poder da determinação e do otimismo.",
        "Lições de vida aprendidas fora da sala de aula.",
        "Um desfecho que redefine sucesso e identidade."
      ]
    },
    {
      answer: "Marte Ataca!",
      tips: [
        "Uma invasão que começa de forma cômica.",
        "Alienígenas com cabeças desproporcionais.",
        "Reações exageradas de personagens icônicos.",
        "Tecnologia avançada usada de forma absurda.",
        "Situações que parodiam filmes de ficção científica.",
        "Conflitos entre líderes políticos e militares.",
        "Comunicação extraterrestre que sai do controle.",
        "Uma arma mortal com um ponto fraco inusitado.",
        "Pânico e caos em uma escala global.",
        "Diversidade de cenários, desde a Casa Branca até o deserto.",
        "Personagens que representam estereótipos exagerados.",
        "Um final que combina absurdo e solução improvável.",
        "Humor negro e sátira social presentes em cada cena.",
        "Um elenco cheio de estrelas interpretando papéis bizarros.",
        "Uma mistura de terror e comédia em um único filme."
      ]
    },
    {
      answer: "Abracadabra",
      tips: [
        "Três irmãs que voltam após séculos.",
        "Uma cidade pequena com uma lenda assustadora.",
        "A busca de um grupo de jovens para salvar o dia.",
        "Um livro mágico que contém feitiços poderosos.",
        "Um gato falante com uma história trágica.",
        "A noite das bruxas que desencadeia os eventos.",
        "Objetos encantados que ganham vida.",
        "Uma dança que encanta todos os presentes.",
        "Velas com chamas especiais e significativas.",
        "Transformações e truques que surpreendem.",
        "Uma corrida contra o tempo até o amanhecer.",
        "Crianças que se tornam heróis improváveis.",
        "Planos maliciosos que precisam ser impedidos.",
        "A importância de unir forças contra o mal.",
        "Um final que celebra a coragem e a amizade."
      ]
    },
    {
      answer: "Carrie, a Estranha",
      tips: [
        "Uma jovem vive sob a sombra de uma mãe controladora.",
        "Eventos inexplicáveis começam a ocorrer em uma escola.",
        "O bullying é um tema central na trama.",
        "Uma habilidade sobrenatural se manifesta em momentos de estresse.",
        "A noite de um evento importante se transforma em pesadelo.",
        "Um convite inesperado leva a consequências devastadoras.",
        "Um banho de sangue.",
        "A vingança se torna um elemento chave.",
        "O uso de objetos do cotidiano em formas perigosas.",
        "Um final trágico que envolve fogo e destruição.",
        "A presença de símbolos religiosos em diversas cenas.",
        "Um ato cruel que desencadeia o clímax da história.",
        "A descoberta de poder pessoal e seus perigos.",
        "Uma ligação forte e complexa entre mãe e filha.",
        "Uma narrativa que explora os limites da crueldade humana."
      ]
    },
    {
      answer: "A Profecia",
      tips: [
        "Uma criança nasce sob circunstâncias misteriosas.",
        "Estranhos acidentes começam a ocorrer ao redor de uma família.",
        "A figura de um cachorro negro aparece frequentemente.",
        "Profecias antigas preveem eventos catastróficos.",
        "O número três aparece repetidamente de forma sinistra.",
        "Descobertas sombrias sobre a origem de um jovem.",
        "Uma babá que comete um ato chocante.",
        "Símbolos religiosos e questões de fé são temas centrais.",
        "Viagens para investigar o passado revelam segredos.",
        "Conspirações envolvendo figuras de poder.",
        "Confrontos que levam a revelações terríveis.",
        "O papel de um pai tentando proteger sua família.",
        "Um personagem com olhos penetrantes e enigmáticos.",
        "Descobertas sobre a verdadeira natureza de uma criança.",
        "Um final que deixa portas abertas para o mal continuar."
      ]
    },
    {
      answer: "American Pie",
      tips: [
        "Um grupo de amigos com um objetivo em comum antes da formatura.",
        "Situações embaraçosas e cômicas envolvendo a adolescência.",
        "Um incidente com uma torta que se torna icônico.",
        "Festas que são momentos chave na narrativa.",
        "Conselhos paternos que geram momentos hilários.",
        "Experiências desajeitadas e descobertas pessoais.",
        "O pacto entre amigos que conduz a trama.",
        "Desafios de crescimento e maturidade.",
        "Momentos de confusão e mal-entendidos.",
        "Romances que se desenvolvem de maneiras inesperadas.",
        "Personagens que se tornam arquétipos na cultura pop.",
        "O contraste entre expectativa e realidade nas aventuras adolescentes.",
        "Competições e desafios entre colegas de escola.",
        "O uso de tecnologia de forma humorística.",
        "Um final que celebra a amizade e o amadurecimento."
      ]
    },
    {
      answer: "Mamma Mia!",
      tips: [
        "Uma jovem que busca respostas sobre seu passado.",
        "Três possíveis figuras paternas entram em cena.",
        "Uma ilha paradisíaca é o cenário principal.",
        "Músicas que definem e avançam a narrativa.",
        "Um evento de casamento que junta todos os personagens.",
        "Danças e celebrações exuberantes.",
        "Uma relação mãe e filha que está no centro da história.",
        "Segredos do passado que vêm à tona.",
        "O charme do ambiente mediterrâneo.",
        "Momentos de humor e emoção entre amigos e familiares.",
        "Letras de músicas que se encaixam perfeitamente nas situações.",
        "O retorno de antigos amores e a resolução de questões pendentes.",
        "Um final que envolve uma grande festa e reconciliação.",
        "A importância de seguir os próprios sonhos e desejos.",
        "Uma atmosfera de alegria e romance permeia toda a história."
      ]
    },
    {
      answer: "A Convenção das Bruxas",
      tips: [
        "Um encontro secreto que reúne personagens sinistros.",
        "Crianças se tornam o alvo principal de um plano malévolo.",
        "Um hotel se torna o cenário de acontecimentos estranhos.",
        "Uma líder carismática e perigosa.",
        "Máscaras e disfarces escondem verdadeiras intenções.",
        "Animais falantes desempenham papéis cruciais.",
        "Transformações físicas que surpreendem e assustam.",
        "A luta entre o bem e o mal em um ambiente luxuoso.",
        "Ingredientes exóticos usados para feitiços.",
        "Uma avó que guarda conhecimentos antigos.",
        "Truques e enganos usados para escapar de situações perigosas.",
        "Momentos de tensão e humor misturados.",
        "A revelação de identidades verdadeiras.",
        "A importância da coragem e da inteligência.",
        "Um desfecho que subverte expectativas e traz alívio."
      ]
    },
    {
      answer: "O Diabo Veste Prada",
      tips: [
        "Uma jovem entra no mundo da moda de alta pressão.",
        "Um chefe exigente e implacável.",
        "Transformações de estilo e comportamento.",
        "A batalha para equilibrar vida profissional e pessoal.",
        "Ambientes luxuosos e desfiles de moda.",
        "A importância de um bom networking.",
        "Desafios diários que testam a resistência.",
        "A influência de revistas e mídias no comportamento.",
        "Sacrifícios feitos em nome do sucesso.",
        "Mentorias que podem ser tanto úteis quanto cruéis.",
        "Relações que sofrem sob a pressão do trabalho.",
        "A importância de escolhas éticas e pessoais.",
        "Confrontos com figuras autoritárias.",
        "Momentos de realização e autoconhecimento.",
        "Um final que enfatiza a importância de seguir o próprio caminho."
      ]
    },
    {
      answer: "A Morte Lhe Cai Bem",
      tips: [
        "Um elixir que promete juventude eterna.",
        "Rivalidades antigas que levam a situações extremas.",
        "Consequências inesperadas de se desafiar a natureza.",
        "Transformações corporais que são ao mesmo tempo cômicas e trágicas.",
        "Uma personagem obcecada com a aparência.",
        "Conflitos em um cenário de luxo e opulência.",
        "Mistérios e segredos que são desvendados ao longo da história.",
        "Humor negro permeando as situações mais sérias.",
        "O envolvimento de um médico com métodos não convencionais.",
        "Situações onde a morte é mais um incômodo do que um fim.",
        "A busca incessante pela perfeição física.",
        "Revelações chocantes sobre os efeitos de um certo produto.",
        "O uso de efeitos especiais para criar situações absurdas.",
        "A relação entre amor, ciúmes e vaidade.",
        "Um final que questiona o verdadeiro preço da imortalidade."
      ]
    },
    {
      answer: "Scooby-Doo",
      tips: [
        "Um grupo de amigos e seu fiel companheiro canino.",
        "Mistérios que parecem sobrenaturais mas têm explicações racionais.",
        "Um veículo icônico usado para viagens e investigações.",
        "Personagens que assumem diferentes disfarces.",
        "Um vilão que sempre é desmascarado no final.",
        "A frase 'teria dado certo se não fossem por vocês, jovens intrometidos'.",
        "Ambientes assombrados que precisam ser investigados.",
        "Momentos de medo e coragem de um personagem específico.",
        "Petiscos usados como incentivo e recompensa.",
        "Um líder carismático que sempre tem um plano.",
        "Engrenagens e armadilhas que revelam a verdade.",
        "Personagens que frequentemente se separam para explorar.",
        "Humor e suspense combinados em aventuras.",
        "A importância de trabalhar em equipe para resolver enigmas.",
        "Um desfecho que sempre traz à tona a verdadeira face do mal."
      ]
    },
    {
      answer: "Curtindo a Vida Adoidado",
      tips: [
        "Um jovem decide que a escola pode esperar.",
        "A importância de aproveitar ao máximo um dia de folga.",
        "Um carro vermelho que se torna central na aventura.",
        "A quebra da quarta parede com frequência.",
        "Visitas a museus, restaurantes chiques e desfiles.",
        "Amigos inseparáveis que compartilham a fuga.",
        "Enganar figuras de autoridade com astúcia.",
        "Uma irmã que tenta desmascarar a farsa.",
        "Cenas icônicas envolvendo um desfile na cidade.",
        "Um diretor de escola obsessivo e determinado.",
        "Chamadas telefônicas que geram confusão.",
        "O uso de tecnologia rudimentar para criar ilusões.",
        "Reflexões filosóficas sobre a vida e o tempo.",
        "A reação de pais que acreditam em sua inocência.",
        "Um final que celebra a liberdade e a juventude."
      ]
    },
    {
      answer: "Os Vingadores",
      tips: [
        "Uma equipe formada por indivíduos com habilidades únicas.",
        "Uma cidade que se torna o palco de uma grande batalha.",
        "Conflitos internos antes de enfrentar um inimigo comum.",
        "Um líder estratégico com um escudo.",
        "Um gênio, bilionário, playboy, filantropo.",
        "Tecnologia avançada e poderes místicos.",
        "Um guerreiro de um reino distante e poderoso.",
        "Uma espiã com um passado sombrio.",
        "Um arqueiro com mira infalível.",
        "Um cientista que se transforma em um gigante verde.",
        "Invasão de forças alienígenas lideradas por um deus trapaceiro.",
        "Uma organização secreta que reúne heróis.",
        "Conflitos e destruição em grande escala.",
        "Momentos de humor em meio ao caos.",
        "A união de forças para salvar o mundo."
      ]
    },
    {
      answer: "Liga da Justiça",
      tips: [
        "Um grupo de heróis que se une para combater uma ameaça global.",
        "Um herói alienígena com uma capa vermelha.",
        "Um vigilante noturno com gadgets avançados.",
        "Uma guerreira amazona com um laço poderoso.",
        "Um velocista que quebra as barreiras do tempo.",
        "Um rei atlante que comanda os mares.",
        "Um ser cibernético que controla tecnologia.",
        "A ressurreição de um líder caído.",
        "Uma mãe caixa que é crucial para a trama.",
        "Invasão de criaturas de outro mundo.",
        "Um vilão com um capacete de chifres.",
        "A importância de trabalhar juntos apesar das diferenças.",
        "Cenas de batalha épicas e destruição em massa.",
        "Questões de moralidade e sacrifício.",
        "Um final que prepara o terreno para futuras alianças."
      ]
    },
    {
      answer: "Chicago",
      tips: [
        "Uma cidade conhecida por seu jazz e glamour.",
        "Crimes passionais que levam a julgamentos midiáticos.",
        "Uma prisão cheia de mulheres intrigantes.",
        "Cenas de música e dança em meio à narrativa.",
        "A busca pela fama a qualquer custo.",
        "Um advogado astuto que manipula a mídia.",
        "Rivalidade entre duas protagonistas carismáticas.",
        "Uma jornalista ávida por escândalos.",
        "Coreografias que destacam a vaidade e a corrupção.",
        "Cânticos que revelam as emoções dos personagens.",
        "O uso do jornalismo como arma de defesa.",
        "Traições e alianças volúveis.",
        "A teatralidade presente em todos os aspectos da vida.",
        "Manipulação e controle de percepções públicas.",
        "Um final que celebra o showbiz e a sobrevivência."
      ]
    },
    {
      answer: "O Exorcista",
      tips: [
        "Uma jovem começa a mostrar comportamentos inexplicáveis.",
        "Eventos sobrenaturais que desafiam a ciência.",
        "Um ritual antigo e controverso.",
        "A luta entre a fé e o ceticismo.",
        "Um padre com dúvidas e culpas pessoais.",
        "A presença de forças malignas em um ambiente familiar.",
        "O uso de objetos religiosos como proteção.",
        "Conversas em línguas desconhecidas.",
        "A deterioração física de uma personagem central.",
        "Uma mãe desesperada por respostas e soluções.",
        "A importância de antigas escrituras e rituais.",
        "Conflitos internos de figuras religiosas.",
        "O confronto final que testa a resistência espiritual.",
        "Ambientes sombrios e atmosfera de tensão.",
        "Um final que deixa marcas psicológicas profundas."
      ]
    },
    {
      answer: "Tudo em Todo Lugar Ao Mesmo Tempo",
      tips: [
        "A possibilidade de múltiplas realidades coexistindo.",
        "Uma protagonista que descobre habilidades inesperadas.",
        "A luta contra forças que transcendem a lógica.",
        "Eventos que desafiam a percepção do tempo e espaço.",
        "Uma mistura de drama familiar e ficção científica.",
        "Momentos de comédia em meio ao caos.",
        "Personagens que assumem diferentes versões de si mesmos.",
        "A importância das escolhas e suas consequências.",
        "A conexão entre passado, presente e futuro.",
        "Mundos paralelos que se entrelaçam de maneira complexa.",
        "A busca por uma solução em meio a múltiplas crises.",
        "A importância de laços afetivos em meio à confusão.",
        "Sequências de ação que desafiam a física.",
        "Reflexões sobre identidade e propósito.",
        "Um final que traz reconciliação e entendimento."
      ]
    },
    {
      answer: "A Teoria de Tudo",
      tips: [
        "A vida e obra de um cientista renomado.",
        "Uma luta constante contra uma doença degenerativa.",
        "Descobertas que mudam a compreensão do universo.",
        "Uma relação de amor que enfrenta desafios extremos.",
        "O papel de uma esposa dedicada e resiliente.",
        "A busca por respostas sobre a origem do cosmos.",
        "A interação com outros cientistas e intelectuais.",
        "Momentos de triunfo acadêmico e pessoal.",
        "Conflitos entre a fé e a ciência.",
        "Tecnologias que ajudam na comunicação.",
        "A importância de superação e determinação.",
        "Mudanças de perspectiva sobre a vida e a morte.",
        "Reações emocionais a descobertas científicas.",
        "O impacto de uma mente brilhante no mundo.",
        "Um final que celebra a mente humana e suas capacidades."
      ]
    },
    {
      answer: "Amor, Sublime Amor",
      tips: [
        "Uma história de amor em meio a rivalidades.",
        "Dois grupos com conflitos intensos e diferenças culturais.",
        "Cenas de dança que capturam a energia da juventude.",
        "Um romance que desafia as expectativas sociais.",
        "A busca por paz em um ambiente de hostilidade.",
        "Canções que expressam sentimentos profundos.",
        "Traições e reconciliações entre amigos e amantes.",
        "A tragédia que se desenrola devido a mal-entendidos.",
        "A importância do lugar onde tudo acontece.",
        "O papel das famílias em moldar os destinos dos jovens.",
        "Confrontos físicos que simbolizam disputas maiores.",
        "A esperança de um futuro melhor apesar das dificuldades.",
        "Personagens que representam arquétipos clássicos.",
        "A ligação entre música e narrativa.",
        "Um final que mistura tristeza e esperança."
      ]
    },
    {
      answer: "Oppenheimer",
      tips: [
        "Um projeto científico que muda o curso da história.",
        "A luta entre ética e progresso tecnológico.",
        "A vida de um físico e suas contribuições cruciais.",
        "Momentos de descoberta e inovação.",
        "A importância de um local secreto no deserto.",
        "Conflitos entre cientistas e militares.",
        "Debates sobre as consequências morais de uma invenção.",
        "A corrida contra o tempo durante um período de guerra.",
        "Reações globais a um evento sem precedentes.",
        "A busca por controle e entendimento de uma força poderosa.",
        "A colaboração entre mentes brilhantes.",
        "O impacto psicológico das descobertas no cientista.",
        "Momentos de dúvida e reflexão pessoal.",
        "A ligação entre ciência, política e guerra.",
        "Um legado que provoca discussões e divisões até hoje."
      ]
    },
    {
      power: "dedos apontados",
      powerInfo:
        "Escolha um jogador. Este jogador, por sua vez, deve indicar outro jogador para sofrer uma perda de 15 pontos de sua pontuação total ou voltar 15 casas. Em seguida, gere uma nova carta e continue a rodada.",
    },
  ];
  
  export default dataMovie;