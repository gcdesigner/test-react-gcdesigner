# Desafio de análise técnica

Esse desafio consiste em duas etapas:

- Validar se o código do componente Breadcrumb cumpre com o que está documento no Figma. [Documentação aqui](https://www.figma.com/file/EYcIWSzoPn0IHfs5oI6o32/Teste-Front-React-WeFit-2024?type=design&node-id=9802-914&mode=design&t=6UViYcE94a5uHvGE-0)
- Especificar um endpoint, sugerindo payload da requisição e as possíveis respostas garantindo as regras documentadas no protótipo.

O código do componente a ser analisado esta na pasta `technical-analytics` e o resultado dos dois desafios devem ser feitas em um arquivo markdown dentro da pasta `technical-analytics`.

\*Obs: Não é necessário implementar o código com as sugestões que você apontar e deixamos um [exemplo](/technical-analytics/Exemplo-endpoint.md) de como documentar o endpoint.

## Avaliação

- Pontos avaliados:
  - Avaliar código existente e planejar evolução
  - Visão sistêmica

# Desafio de Estruturação de Projeto React + TypeScript + styled-components

O desafio consiste na criação de um site de e-commerce simplificado do zero, onde o candidato terá que criar um fluxo com três módulos/telas.

São elas:

- **Home**: Onde ele terá que fazer uma requisição na API, trazendo assim, a lista de filmes quem podem ser adicionados ao carrinho.
- **Carrinho**: Onde ele poderá ver os itens que foram adicionados, somando o valor total com base em cada item adicionado, podendo remover um item do carrinho. Por padrão, se o carrinho tiver nenhum item adicionado, deverá aparecer a tela de **empty** com a opção de voltar para tela inicial.
- **Compra realizada**: Após confirmar o pedido na tela anterior, o usuário deverá ser encaminhado para a tela de pedido confirmado. Aqui o usuário também terá a opção de voltar para tela inicial.

[Protótipo do Figma](https://www.figma.com/file/EYcIWSzoPn0IHfs5oI6o32/Teste-Front-React-WeFit-2024?type=design&t=ObXSBfm5ZUrCaisz-6)

\*Obs: os assets podem ser exportados do próprio Figma.

**Sobre a API**

Para o desafio, simularemos uma API, onde o candidato terá que realizar um **GET** para [**https://wefit-movies.vercel.app/api/movies**](https://wefit-movies.vercel.app/api/movies) onde terá a lista de filmes.

## Avaliação

- Pontos avaliados:
  - Fidelidade do layout do Figma;
  - Funcionamento da aplicação (ausência de bugs);
  - Qualidade do código:
    - Organização das pastas;
    - Domínio do TypeScript;
    - Domínio do styled-components;
    - Bom nível de Componentização;
    - Aplicação de tecnologias;
      - Ex: aplicar uma biblioteca específica que acelere o desenvolvimento.
    - Aplicação das melhores práticas para isolar comportamento de UI da lógica de Integração;
    - Código legível e de fácil manutenção;
      - Ex: variáveis com nomes claros.
    - Código limpo
      - Ex: evitar `console.log` ou códigos desnecessários.

Como você pode perceber, são dois desafios, sendo o primeiro de Análise e o segundo para a estruturação de um projeto React.
Solicito a gentileza, exclusivamente para o teste React deixe o seu código na pasta `wemovie-ecommerce` e que hospede a aplicação em uma URL pública, por exemplo na Vercel ou Netlify, envie os links em até 24 horas a contar do envio teste caso você precise de mais tempo, por favor, nos informe. Nesse momento é muito importante para nós que você consiga entregar o desafio completo :)

## URL Pública da aplicação

- https://test-react-gcdesigner.vercel.app/
