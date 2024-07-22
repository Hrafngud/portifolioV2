const projects = [
    {
        id: 1,
        title: "Página de Hotel em Tailwind",
        description: "Página de hotel desenvolvida com Tailwind CSS, apresentando navegação intuitiva e várias sessões temáticas. Inclui uma sessão principal com informações gerais, uma sessão de acomodações detalhada, uma sessão de atrações locais e um mapa interativo para localização do hotel. Cada sessão é estilizada para proporcionar uma experiência de usuário agradável e visualmente atraente, demonstrando a versatilidade do Tailwind CSS em criar interfaces modernas e responsivas.",
        videoUrl: "/videos/video1.mp4"
    },
    {
        id: 2,
        title: "Aplicativo de Geração de PDFs com Node.js",
        description: "Aplicativo desenvolvido com Node.js, Express e MySQL, que permite a criação de formulários exportáveis em formato PDF. Os dados dos formulários são armazenados em um banco de dados MySQL e podem ser visualizados em uma tabela interativa, com filtros por data de criação e nome do campo 'empreendimento'. Inclui a opção de exportação dos dados em formato CSV, integrando funcionalidades para geração e exportação de documentos.",
        videoUrl: "/videos/video2.mp4"
    },
    {
        id: 3,
        title: "Framework CSS para Estilização Rápida",
        description: "Framework CSS que facilita a estilização rápida de páginas web, oferecendo uma variedade de componentes pré-estilizados. Inclui elementos como cabeçalhos, rodapés, containers, paginação, botões e outros elementos comuns em desenvolvimento web. Desenvolvido para acelerar o processo de criação de interfaces, permitindo ajustes conforme a necessidade do projeto. O framework é altamente personalizável, proporcionando flexibilidade na estilização básica de páginas.",
        videoUrl: "/videos/video3.mp4"
    },
    {
        id: 4,
        title: "Gerenciamento de Campanhas de Anúncio em JavaScript",
        description: "Tela de gerenciamento de campanhas de anúncios desenvolvida com JavaScript Vanilla e CSS, utilizando a biblioteca Tabulator.js para exibição de dados. Permite visualizar campanhas de anúncios, grupos de anúncios e anúncios individuais de maneira concatenada, com diversos filtros e interações disponíveis. Demonstra a criação de interfaces complexas e interativas, proporcionando uma ferramenta eficiente para gestão e análise de campanhas publicitárias, evidenciando habilidades em manipulação de DOM e criação de experiências de usuário dinâmicas.",
        videoUrl: "/videos/video4.mp4"
    }
];



const articles = [
  {
      id: 1,
      title: "O que é PWA (progressive web application)?",
      description: "Uma Progressive Web Application (PWA) é uma aplicação web que utiliza tecnologias modernas para oferecer uma experiência de usuário similar à de uma aplicação nativa. As PWAs são construídas usando HTML, CSS e JavaScript, mas possuem capacidades que as fazem se comportar como aplicações nativas, incluindo a possibilidade de funcionar offline, receber notificações push e ser instalada na tela inicial do dispositivo.\n\nO desenvolvimento de PWAs é centrado na ideia de proporcionar uma experiência de usuário rápida, confiável e envolvente, independentemente da rede ou dispositivo utilizado. Para alcançar isso, as PWAs utilizam service workers, que são scripts executados em segundo plano no navegador e são responsáveis por funcionalidades como cache, sincronização em segundo plano e notificações push. Essa tecnologia permite que a PWA continue a funcionar mesmo quando o dispositivo está offline ou com uma conexão instável.\n\nAlém dos service workers, as PWAs se beneficiam do uso de manifests, que são arquivos JSON que fornecem informações sobre a aplicação, como nome, ícone e configurações de exibição. Isso permite que a aplicação seja instalada na tela inicial do dispositivo e se comporte de maneira similar a um aplicativo nativo, com uma interface imersiva e sem a barra de endereços do navegador.\n\nO conceito de PWA ganhou popularidade devido à sua capacidade de combinar as vantagens das aplicações web e nativas. As PWAs são rápidas de carregar, mesmo em conexões lentas, graças ao uso de cache inteligente. Elas são responsivas, adaptando-se a diferentes tamanhos de tela e dispositivos. Além disso, oferecem uma experiência de usuário confiável, funcionando offline ou em condições de rede precárias.\n\nEm resumo, uma Progressive Web Application é uma aplicação web avançada que oferece uma experiência de usuário superior, combinando as melhores características das aplicações web e nativas. Com o uso de service workers e manifests, as PWAs são rápidas, confiáveis e envolventes, proporcionando uma alternativa poderosa às aplicações nativas tradicionais."
  },
  {
      id: 2,
      title: "Hospedagem VPS versus Hospedagem Compartilhada, entenda as diferenças",
      description: "A escolha entre Hospedagem VPS (Virtual Private Server) e Hospedagem Compartilhada é uma decisão crucial para qualquer projeto online. Ambas as opções têm suas vantagens e desvantagens, e a escolha certa depende das necessidades específicas do seu site ou aplicação.\n\nA Hospedagem Compartilhada é uma forma popular e econômica de hospedagem, ideal para sites pequenos a médios que não exigem muitos recursos. Nessa modalidade, vários sites compartilham os mesmos recursos de um único servidor físico, incluindo CPU, memória e armazenamento. Isso torna a hospedagem compartilhada acessível, mas também pode levar a problemas de desempenho se um dos sites no servidor consumir muitos recursos. A principal vantagem da hospedagem compartilhada é o custo baixo, o que a torna uma opção atraente para iniciantes e pequenos negócios.\n\nPor outro lado, a Hospedagem VPS oferece um meio-termo entre a hospedagem compartilhada e a hospedagem dedicada. Em um VPS, um único servidor físico é particionado em vários servidores virtuais, cada um com seus próprios recursos dedicados, como CPU, memória e armazenamento. Isso proporciona mais controle e flexibilidade, permitindo a instalação de software personalizado e a configuração do servidor de acordo com as necessidades específicas do site. A hospedagem VPS é ideal para sites de médio a grande porte que exigem mais recursos e um ambiente de hospedagem mais estável e seguro.\n\nA principal diferença entre as duas modalidades é a forma como os recursos do servidor são alocados. Na hospedagem compartilhada, os recursos são compartilhados entre todos os sites no servidor, o que pode levar a problemas de desempenho se um site consumir muitos recursos. Na hospedagem VPS, os recursos são dedicados a cada servidor virtual, garantindo um desempenho mais estável e previsível.\n\nAlém disso, a hospedagem VPS oferece mais segurança, já que cada servidor virtual é isolado dos outros, reduzindo o risco de ataques e problemas de segurança. A hospedagem compartilhada, por sua vez, pode ser mais vulnerável a ataques, já que todos os sites compartilham o mesmo ambiente de servidor.\n\nEm conclusão, a escolha entre hospedagem VPS e hospedagem compartilhada depende das necessidades específicas do seu projeto. A hospedagem compartilhada é uma opção econômica e prática para sites menores, enquanto a hospedagem VPS oferece mais recursos, flexibilidade e segurança para sites de médio a grande porte. Avaliar cuidadosamente as necessidades do seu site e o orçamento disponível ajudará a tomar a decisão certa."
  },
  {
      id: 3,
      title: "O que é Domínio e Hospedagem?",
      description: "Domínio e hospedagem são dois componentes fundamentais para a criação e manutenção de um site na internet. Embora estejam inter-relacionados, eles desempenham funções distintas e são essenciais para garantir que um site esteja acessível aos usuários.\n\nUm domínio é o endereço do seu site na internet, como www.exemplo.com. Ele é o que os usuários digitam na barra de endereços do navegador para acessar seu site. Os domínios são geridos por registradores de domínios, que são organizações autorizadas a vender e gerenciar nomes de domínio. Quando você registra um domínio, está essencialmente alugando esse endereço por um período específico, geralmente um ano, com a opção de renovação. Os domínios facilitam a localização de sites na vastidão da internet, fornecendo endereços memoráveis e fáceis de usar.\n\nHospedagem, por outro lado, refere-se ao serviço que armazena os arquivos do seu site e os disponibiliza na internet. Quando um usuário acessa seu domínio, o navegador se conecta ao servidor de hospedagem onde os arquivos do seu site estão armazenados e os exibe. Existem diferentes tipos de hospedagem, incluindo hospedagem compartilhada, VPS (Virtual Private Server), hospedagem dedicada e hospedagem em nuvem. Cada tipo oferece diferentes níveis de desempenho, segurança e custo, permitindo que você escolha a opção que melhor se adapta às necessidades do seu site.\n\nA combinação de um domínio e um serviço de hospedagem é necessária para que um site esteja acessível na internet. O domínio atua como um endereço amigável para os usuários, enquanto a hospedagem fornece o espaço de armazenamento e os recursos necessários para servir os arquivos do site aos visitantes. É possível registrar um domínio e contratar um serviço de hospedagem de diferentes fornecedores, mas muitos provedores de hospedagem também oferecem serviços de registro de domínios, facilitando a gestão integrada desses dois componentes.\n\nEm resumo, o domínio é o endereço do seu site na internet, enquanto a hospedagem é o serviço que armazena e disponibiliza os arquivos do seu site. Ambos são essenciais para garantir que seu site esteja acessível e funcionando corretamente na web."
  },
  {
      id: 4,
      title: "Software: Produto versus Problema",
      description: "Com o passar do tempo e meu avanço na carreira como desenvolvedor, percebi que, para além de simplesmente elaborar uma arquitetura e criar um código, testa-lo e colocar em produção, a qualidade do software está diretamente ligada a um pensamento analítico que antecede a escolha da tecnologia em si.\n\nIsso acontece simplesmente pois, o cliente pode ter duas expectativas distintas com relação a um projeto, sendo elas:\n\n - Criar um produto.\n - Solucionar um problema.\n\nEsse detalhe é extremamente importante, pois define dois perfis de clientes que tem necessidades bastante diferentes. O cliente que busca criar um produto de software, tem uma ideia bem definida do que busca, e em geral materiais como documentos, listas de requisitos, *wire-frames* e outros, onde se espera um resultado que atenda a totalidade dessas referências.\nJá o cliente que busca solucionar um problema, sabe que a tecnologia pode ajuda-lo porém não tem ideia de como funcionaria na prática e possui uma ideia vaga das soluções disponíveis, dos custos envolvidos para a implementação da solução etc.\n\nTendo isso em mente, podemos pensar em um tratamento especifico para atender cada cliente de acordo com sua demanda. O primeiro passo para chegar ao produto ou solução desejada deve ser o questionamento da parte do próprio cliente em quais dos dois perfis se enquadra, para saber o que esperar da parte do analista / programador.\n\nSendo um cliente em busca de um produto de software, as discussões com a parte técnica da equipe devem girar principalmente em torno da natureza do projeto, da dinâmica que será empregada para as entregas, a expectativa em relação a prazos para os requisitos apresentados, e principalmente a dedicação de um tempo inicial para uma análise acurada do material por parte da equipe técnica, para que possam ser realizadas sugestões ao cliente e observações pertinentes. Nesse caso, a entrega final sempre resultara num software e em uma documentação referente a ele.\n\nJá no segundo caso, nem sempre a solução resultará em um software, podendo também ser o emprego de uma tecnologia existente, e o trabalho do analista, além dos contatos com o cliente se concentrarão em identificar quais são as expectativas do cliente e enumera-las, a fim de elaborar uma solução que atenda perfeitamente a elas, sem iniciar o desenvolvimento ou uso de ferramentas desnecessárias, ainda que o cliente julgue que sejam necessárias.\n\nQuando considerar investir tempo e dinheiro para a criação de uma solução tecnológica, leve em consideração esses fatores para que o desenvolvimento ocorra sempre de maneira ágil e a satisfação com o resultado agregue ainda mais valor ao seu negócio ou projeto pessoal."
  }
];


document.addEventListener("DOMContentLoaded", function () {
    const loadingScreen = document.getElementById('loading-screen');
    const content = document.getElementById('content');

    window.addEventListener('load', function () {
        loadingScreen.style.display = 'none';
        content.classList.remove('hidden');
    });
});

function loadProject(id) {
    const project = projects.find(p => p.id === id);
    if (project) {
        localStorage.setItem('currentProject', JSON.stringify(project));
        window.location.href = 'project.html';
    }
}

function loadArticle(id) {
    const article = articles.find(a => a.id === id);
    if (article) {
        localStorage.setItem('currentArticle', JSON.stringify(article));
        window.location.href = 'article.html';
    }
}

// script.js

// Function to handle smooth scrolling
const smoothScroll = (target) => {
    document.querySelector(target).scrollIntoView({
      behavior: 'smooth'
    });
  };
  
  // Attach event listeners to the navbar links
  document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      smoothScroll(this.getAttribute('href'));
    }, { passive: true });
  });
  
  // Use IntersectionObserver to add active class to the current section in the navbar
  const sections = document.querySelectorAll('.section');
  const options = {
    root: null,
    threshold: 1
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const id = entry.target.getAttribute('id');
      const navLink = document.querySelector(`nav a[href="#${id}"]`);
      if (entry.isIntersecting) {
        navLink.classList.add('active');
      } else {
        navLink.classList.remove('active');
      }
    });
  }, options);
  
  sections.forEach(section => {
    observer.observe(section);
  });
  