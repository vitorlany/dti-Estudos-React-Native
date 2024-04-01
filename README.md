# Material

- [x] [Styled Component](https://styled-components.com/)
      Usado para criar componentes estilizados, envolvendo lógica, parâmetros e etc. Também oferece suporte para tema que pode ser usado para todos os componentes da aplicação.
- [x] [React Navigation](https://reactnavigation.org/)
      Navegação mobile da aplicação. Dica: use hooks para pilha de tela, e deixe os props apenas para props para tela, assim como React.js.
- [x] [Redux (Toolkit)](https://redux-toolkit.js.org/)
      Uma maneirafácil de se usar Redux. Usado para gerenciar estado global da aplicação de forma otimizada. Poderia ser substituiído pelo useContext, porém, é muito mais otimizado e impácta somente o componente que está usando e possui apenas uma definição na raiz (App) do projeto.
- [ ] [Reactotron](https://github.com/infinitered/reactotron)
      App externo que auxilia no debug em React Native. Mostra todas as chamadas de api e ajuda muito em debug.
- [ ] [React Query / Tan Stack](https://tanstack.com/query/latest)
      Muito útil para relacionamento de chamada de APIs com a aplicação. Além de usar um useEffect que reccarrega o componente com as informações da API e cancela, caso a chamada for feita e o componente não estar em tela, manualmente como é feito hoje. Deixe com que a biblioteca cuide do trabalho.
- [ ] [Tradução / i18n](https://www.npmjs.com/package/i18n)
      Biblioteca para tradução de textos em json. O acima é para javascript em geral, mas possuem bibliotecas específicas para React.
