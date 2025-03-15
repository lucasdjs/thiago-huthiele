# ThiagoHuthiele

Este projeto é uma landing page desenvolvida para um cliente do ramo imobiliário em Urubici.

## Sobre o Projeto

A landing page foi criada para apresentar os serviços imobiliários do cliente, incluindo compra, venda e aluguel de imóveis na região. O design é responsivo e otimizado para proporcionar uma experiência intuitiva aos usuários.

## Tecnologias Utilizadas

- **Angular** (versão 19.2.3)
- **HTML5 e CSS3**
- **TypeScript**
- **Bootstrap** (para estilização e responsividade)

## Servidor de Desenvolvimento

Para iniciar um servidor de desenvolvimento local, execute:

```bash
ng serve
```

Após iniciar o servidor, abra seu navegador e acesse `http://localhost:4200/`. A aplicação recarregará automaticamente ao modificar qualquer arquivo-fonte.

## Estrutura do Projeto

O projeto segue a estrutura padrão do Angular, utilizando:

- **Componentes** para modularização do código
- **Serviços** para integração com APIs
- **Módulos** para melhor organização do código

## Geração de Código

Para criar um novo componente, utilize:

```bash
ng generate component nome-do-componente
```

Para visualizar todas as opções de esquemáticos disponíveis (como `components`, `directives` e `pipes`), execute:

```bash
ng generate --help
```

## Build

Para compilar o projeto, execute:

```bash
ng build
```

Os arquivos compilados ficarão na pasta `dist/`. A compilação em modo produção otimiza a aplicação para melhor desempenho.

## Testes

### Testes Unitários

Para executar testes unitários com [Karma](https://karma-runner.github.io), utilize:

```bash
ng test
```

### Testes End-to-End

Para testes de ponta a ponta (e2e), utilize:

```bash
ng e2e
```

O Angular CLI não inclui um framework de testes e2e por padrão. Escolha um que melhor atenda às suas necessidades.

## Recursos Adicionais

Para mais informações sobre o Angular CLI, consulte a [documentação oficial](https://angular.dev/tools/cli).

