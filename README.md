## Documentação API Projeto FeedUp v.0.1 
#### Back-End : Gustavo José Vieira
#### Projeto : FeedUp


 <h3>Ferramentas Utilizadas</h3><blockquote><ul>
<li> Nest - O Nest é um framework Node.js para implementar aplicações backend eficientes, confiáveis e escaláveis utilizando Typescript (padrão) ou Javascript. Construído em Typescript, ele utiliza diversos princípios, como Programação Orientada a Objetos, Programação Funcional e Programação Funcional Reativa.<br />  </li>
<li> O Node.js é um ambiente de execução do código JavaScript do lado servidor (server side), que na prática se reflete na possibilidade de criar aplicações standalone (autossuficientes) em uma máquina servidora, sem a necessidade do navegador.
<br />  </li>
<li> Express - O Express é uma framework web minimalista e flexível para Node.js, amplamente utilizado para construir aplicações web e APIs. Ele facilita o desenvolvimento de aplicativos do lado do servidor ao fornecer uma série de funcionalidades robustas para manipulação de requisições e respostas HTTP, integração com middlewares, roteamento, e muito mais.
<br />  </li>
<li> Jest  - O Jest é um framework de testes em JavaScript. Ele é amplamente utilizado para testar aplicações, incluindo projetos com React, Node.js, e outras bibliotecas e frameworks front-end e back-end. Jest é conhecido por sua simplicidade, configuração zero (zero-config), e funcionalidades robustas que tornam o processo de teste mais fácil e eficiente.
<br />  </li>
<li> db diagram - Um DB diagram (diagrama de banco de dados) é uma representação visual da estrutura de um banco de dados, mostrando as tabelas, colunas e os relacionamentos entre elas. Esses diagramas são essenciais no planejamento, design e gerenciamento de bancos de dados, ajudando desenvolvedores e administradores de banco de dados a compreender e comunicar a arquitetura do banco de dados   maneira clara e eficiente.
 <br />  </li>
<li> Winston - Winston é uma biblioteca de registro (logging) popular para Node.js, projetada para ser simples e universal. Ela é amplamente utilizada por desenvolvedores para criar logs em aplicativos Node.js, ajudando a monitorar e depurar aplicativos através do registro de eventos, erros e outras informações relevantes.
<br />  </li>
<li> Redis - Redis é um banco de dados em memória de código aberto, extremamente rápido e de estrutura de dados-chave-valor. Além disso, é frequentemente chamado de "armazenamento em cache" ou "banco de dados em cache" devido à sua capacidade de armazenar dados em memória, o que proporciona tempos de acesso muito rápidos. <br />  </li>
<li> Swagger - Swagger  é um conjunto de ferramentas de código aberto que permite documentar, desenvolver, testar e consumir APIs de forma eficiente. Ele fornece uma especificação comum e padronizada para descrever a estrutura, funcionalidade e comportamento de uma API, o que facilita a comunicação entre desenvolvedores, clientes e equipes de desenvolvimento <br />  </li>
<li> DBeaver - DBeaver é uma ferramenta de gerenciamento de banco de dados universal e gratuita. Ele suporta uma variedade de bancos de dados, incluindo MySQL, PostgreSQL, SQLite, Oracle, SQL Server, DB2, e muitos outros. Com o DBeaver, você pode executar consultas SQL, visualizar e editar dados, gerenciar estruturas de banco de dados, e realizar muitas outras tarefas relacionadas ao banco de dados, tudo em uma interface de usuário intuitiva e fácil de usar. 
 <br />  </li>
<li> Docker Compose -  Docker Compose é uma ferramenta que permite definir e gerenciar aplicativos multi-container Docker de forma simplificada. Essa abordagem simplifica bastante o desenvolvimento, o teste e a implantação de aplicativos Docker.
<br />  </li>
<li> TypeScript - TypeScript é uma linguagem de programação desenvolvida pela Microsoft que se baseia em JavaScript adicionando tipos estáticos opcionais ao código. Isso significa que você pode atribuir tipos a variáveis, parâmetros de função e valores de retorno de função, fornecendo assim uma maneira de detectar e corrigir erros de tipo em tempo de compilação, antes mesmo de executar o código. <br />  </li>
<li> Ngrok - Ngrok é uma ferramenta que cria túneis seguros entre a máquina local e a internet. Ele permite que você exponha um servidor local atrás de uma rede NAT ou firewall para a internet. Isso é útil para desenvolvedores que desejam compartilhar temporariamente um trabalho em progresso com clientes ou colegas, sem precisar implantar o projeto em um servidor público. Com o Ngrok, você pode fornecer um URL público acessível temporariamente para o seu servidor local, facilitando a demonstração ou teste de aplicativos da web</b> <br />  </li>
<li> JWT authenticator - Um autenticador JWT (JSON Web Token) é uma ferramenta ou componente de software que é usado para validar tokens JWT durante a autenticação de usuários em aplicativos da web, serviços da web ou APIs. Um JWT é um formato de token compacto e seguro que pode ser facilmente transmitido entre partes confiáveis e que contém informações sobre um usuário autenticado.
 <br />  </li>
<li> Vs Code - Visual Studio Code, comumente abreviado como VS Code, é um editor de código-fonte desenvolvido pela Microsoft. Ele é altamente personalizável, leve e possui suporte para uma variedade de linguagens de programação e tecnologias, tornando-o popular entre desenvolvedores de software de diferentes áreas.
<br />  </li>
<li> Git - Git é um sistema de controle de versão distribuído amplamente utilizado para rastrear as alterações no código-fonte durante o desenvolvimento de software. 
<br />  </li>
<li> GitHub - GitHub é uma plataforma de hospedagem de código-fonte baseada na web que utiliza o sistema de controle de versão Git. Ele fornece um ambiente colaborativo para desenvolvedores e equipes de desenvolvimento de software gerenciarem projetos, colaborarem em código-fonte e rastrearem as alterações feitas ao longo do tempo.
<br />  </li>
<li> Ubuntu -  Ubuntu é um sistema operacional baseado em Linux que é desenvolvido pela Canonical Ltd. Ele é uma distribuição de Linux de código aberto e é conhecido por sua facilidade de uso, estabilidade e vasta comunidade de usuários e desenvolvedores.<br />  </li>
<li> Postman - Postman é uma plataforma de desenvolvimento de API que oferece uma variedade de ferramentas para facilitar a criação, teste, documentação e colaboração em APIs
<br />  </li>
<li>  dot env - dotenv é uma biblioteca popular em várias linguagens de programação, incluindo JavaScript (Node.js), Python, Ruby e outras, que permite carregar variáveis de ambiente de um arquivo .env em um projeto. Geralmente, em vez de carregar manualmente as variáveis de ambiente de um arquivo .env e defini-las no sistema operacional, você pode usar a biblioteca dotenv para fazer isso automaticamente no seu código-fonte.
 <br />  </li>
<ul></blockquote>


### Diagrama de Entidade Relacionamento do Banco de Dados



![image](https://github.com/GustavoJVvieira/DeployFeedup/assets/164119202/55b3a8b7-6508-4602-8963-0bbb3e1e8e0b)


### Modularização das Pastas

#### Modularização em NestJS
No NestJS toda a aplicação é desenvolvida em forma de módulos. Desta forma, um controller só terá acesso a um service caso ambos estejam explicitamente registrados no mesmo módulo.
A modularização é uma boa prática no desenvolvimento de aplicações empresariais uma vez que permite uma visualização mais clara da ligação existente entre as partes que compõem a aplicação. Além disso, uma vez modularizada, é mais fácil separar a aplicação em partes menores, o que pode viabilizar a criação de microservices, caso seja necessário.

![image](https://github.com/GustavoJVvieira/DeployFeedup/assets/164119202/e108ca1e-df20-415e-ab39-e7dde28ee674)

Project - Pasta referente ao projeto como todo
logs - da biblioteca winston do projeto 
test - pasta de teste na ferramenta jest  


