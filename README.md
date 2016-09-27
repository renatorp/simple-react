# simple-react

#TRABALHO FINAL

- Curso – Arquitetura de Software Distribuído.
- Disciplina: Produtividade no Desenvolvimento de Software.
- Professor: Marco Aurélio de Souza Mendes.
- Nome: Renato Ribeiro de Paula.
- Matrícula: 66420.

##TECNOLOGIA: REACT

React é uma biblioteca open-source de componentes de interface (UI) em javascript. Ela foi criada pelo Facebook para facilitar a criação de componentes reusáveis, com estado e interativos. Sua proposta é a de atualizar automaticamente a view quando os dados forem modificados, renderizando novamente apenas as partes alteradas.

O React foi criado por Jordan Walke, um engenheiro de software do Facebook. Sua inspiração veio da influência com o XHP, um framework de componentes HTML para PHP. A primeira implantação do React foi no feed de notícias do Facebook em 2011, e mais tarde no Instagram.com em 2012. Ele tornou-se open-source na JSConf US em maio de  2013. Em fevereiro de 2015, na React.js Conf, o Facebook anunciou o React Native, que habilita o desenvolvimento de aplicações nativas em iOS e Android utilizando React. O mesmo tornou-se open-source em março do mesmo ano.

Com o auxílio do React, é possível trabalhar com dados complexos sem que haja necessidade de armazenar estados no DOM. Isto é possível através da utilização de uma conceito chamado Virtual DOM.

O Virtual DOM, hoje encontrado na biblioteca de suporte React DOM, é um mecanismo que renderiza determinadas sub-árvores do DOM seletivamente de acordo com as mudanças de estado que ocorreram na aplicação. Com a intenção de aumentar o desempenho na renderização dos componentes javascript, o Virtual DOM utiliza um DOM falso (fake DOM), através do qual se consegue identificar quais elementos foram modificados e atualizá-los. Dessa forma, para manter os componentes atualizados, o React procura fazer a menor quantidade de manipulações possíveis no DOM.

Devido ao fato do React utilizar um DOM próprio, torna-se possível utilizá-lo não só no lado cliente, mas também do lado servidor. Com isso, caso seja necessário, é possível utilizar o Virtual DOM para criar server pages com React. Um exemplo prático disso foi um caso do PayPal e do Netflix, que utilizaram React em seus projetos para fazer carregamento isomórfico (isomorphic loading) para renderizar HTML idêntico em ambos cliente e servidor.

Além da forma eficiente com que o React atualiza o HTML, ele permite uma separação limpa de seus componentes, que combinados resultam em uma moderna aplicação SPA (Single Page Application). O React também foi criado para ter uma flexibilidade suficiente para fazer interface com outras bibliotecas, frameworks e ferramentas de teste.

Para incrementar a legibilidade do código, o React permite a utilização do JSX. O JSX é uma extensão da linguagem Javascript que é similar ao XML. Com ele, é possível utilizar a sintaxe XML dentro do Javascript. Não é obrigatório o uso do JSX, pode-s utilizar o código Javascript puro. No entanto, recomenda-se utilizar o JSX	 pela sua sintaxe concisa e familiar para definir estruturas  de árvore com atributos. Árvores grandes em XML são mais fáceis de ler do que chamadas de função e objetos literais. Além disso, o XML é mais familiar para desenvolvedores casuais, como é o caso de web designers.

```javascript
// Exemplo de criação de componente utilização função:
var app = React.createElement( 
  Nav, 
  {color:"blue"}, 
  React.createElement(Profile, null, "click") 
);
```
```javascript
// Exemplo de criação do mesmo componente anterior utilizando JSX:
var app = <Nav color="blue"><Profile>click</Profile></Nav>;
```

Diferentemente de frameworks como Angular que possui two-way data binding, o fluxo de dados do React é unidirecional (One-way data flow). Assim, em uma hierarquia de componentes, o componente pai deve gerenciar o estado e passar para seus fílhos através de “props”. Os estados do componente são chamados de “state”. Para garantir que a interface do componente seja atualizada, sua propriedade “state” deve ser atualizada.

O React também possui algumas desvantagens. Primeiramente, sua curva de aprendizado não é baixa. O processo de aprendizado para “pensar em React” pode ser difícil, principalmente para quem possui extensa familiaridade com frameworks MVC. Neste caso, deve-se evitar cair na silada de utilizar padrões antigos, que muito provavelmente não serão efetivos. Além disso, o React não possui uma forma de estruturar a aplicação predefinida (separação em services, controllers, view, etc. Muitas vezes isto pode causar desorganização na estrutura do projeto e tempo de desenvolvimento mais longo quando a estrutura não for bem feita ou não atender às exigências da aplicação.

Para uma melhor experiência de uso do React, existem algumas boas práticas que alguns artigos recomendam que sejam seguindas. Entre elas está o uso de bibliotecas para gerenciar o estado da aplicação e disparar renderização quando necessário, como é o caso do Flux e do Redux. Outra prática é a utilização de objetos imutáveis, de forma a melhorar a performance na redenrização. Mais uma é a utilização de classe do ES2015 ao invés das chamada a createClass. Uma outra boa prática é a utilização de bundlers como o Webpack e o Browserify.

Algumas tecnologias relacionadas com o React são:

1. ECMAScript 6: Versão da especificação do Javascript que pode ser utilizada em uma aplicação com React;
2. Babel: Ferramenta utilizada para transpilar código ECMAScript 6 para ECMAScript 5 de forma a prover compatibilidade com versões anteriores do Javascript;
3. Webpack: Bundler que, entre outros, permite modularizar a aplicação;
4. JSX: linguagem de programação com sintaxe semelhante ao XML;
5. React DOM: Biblioteca que provê implementação do DOM virtual utilizado pelo React.

Algums casos reais do uso da tecnolgia são:

1. Facebook;
2. Instagram.com;
3. Netflix;
4. Imgur;
5. BBC;
6. Airbnb;
7. E muito outros: https://github.com/facebook/react/wiki/Sites-Using-React

Algumas fontes para aprendizado:

 - Documentação oficial: https://facebook.github.io/react/index.html
 - Tutorial do Scotch.io: https://scotch.io/tutorials/learning-react-getting-started-and-concepts
 - Exemplos: https://github.com/facebook/react/wiki/Examples
 - Ferramentas complementares: https://github.com/facebook/react/wiki/Complementary-Tools
 - Conferências: https://facebook.github.io/react/docs/conferences.html
 - Vídeos: https://facebook.github.io/react/docs/videos.html

