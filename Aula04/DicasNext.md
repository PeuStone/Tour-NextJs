# Glossário do NextJS

- **Static**
    - Tudo que é estático só vai estar rodando em tempo de BUILD, roda somente no 
    lado do servidor onde está gerando e buildando sua biblioteca.
    - Ele é o Padrão do NextJs
    - Só vai utilizar o `next export`, em casos onde TUDO é pré-renderizado
    - `getStaticProps`: versão com menos recursos

- **SSG (Static Site Generation) = Basicamente HTML, CSS e JavaScript**:
    - Também é quando utilizamos o `getStaticProps`
        - Dentro do `getStaticProps` temos o `revalidate` em caso de true
        precisa rodar o [npm run build && npm start]
    - **Incremental Static Generation** [npm run build && npm start]
        - fallback: true || 'blocking' e o getStaticPaths vem
        vazio ou com somente alguns itens

- **SSR (Server Side Render)**:
    - Tem acesso a cookies, vai estar rodando em ambiente do usuário, terá dinamismo
    e vai rodar a cada requisição que tiver.
    - Cada chamada realizada faz com que a pagina seja feita novamente
    - `gerServerSideProps`
    - Se tiver dentro da pasta `/api` é uma API Route e é SSR