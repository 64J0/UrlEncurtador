# Encurtador de URLs

:warning: Aviso: *Estou refatorando este projeto ainda, por isso não será possível encontrar todas as features mencionadas no README.*

Esse projeto consiste em um encurtador de links desenvolvido para WEB, baseado inicialmente <a href="https://www.youtube.com/watch?v=SLpUKAGnm-g">neste vídeo</a> do canal Web Dev Simplified. 

Para desenvolver este projeto precisei estudar a arquitetura **MVC - Model View Controller** e a sintaxe do **EJS - Embedded JavaScript templating** para criar templates de maneira simples que podem ser enviados para o browser do usuário a partir do *back-end*.

Busquei aplicar boas práticas e separar ao máximo possível os conceitos e componentes, com o *controller* implementando a lógica de negócio da aplicação, o *model* sendo uma representação dos dados armazenados no banco de dados (**MongoDB**) e a *view* sendo a parte visual que renderiza as informações para o usuário.

A primeira versão do projeto foi feita totalmente com *JavaScript* e sem testes. Na nova versão estou utilizando *TypeScript* em partes que podem aproveitar suas funcionalidades e aplicando testes automatizados com o *Jest*.

O deploy da aplicação foi feito no *Heroku* e para acessá-la basta seguir o site: [Encurtador de links](http://urlcurto.appspot.com/).

### Como executar:

Para executar o projeto basta ter o **Node.js** instalado e uma instância do **MongoDB** rodando com os valores padrões.

Em seguida deve ser feito um clone desse repositório para uma pasta qualquer, ir até a pasta que foi criada com os arquivos do projeto e executar um *npm install* para instalar as dependências (*node_modules*).

```bash
  # clona o repositório
  $ git clone https://github.com/64J0/UrlEncurtador

  # muda para o diretório do projeto
  $ cd UrlEncurtador/

  # instala as dependências
  $ npm install

  # executa o servidor de desenvolvimento
  $ npm run dev
```

---
## Referências:

Abaixo seguem algumas referências que utilizei, fora o vídeo do *YouTube* para desenvolver este projeto.

[1] - [How to Setup a TypeScript + Node.js Project](https://khalilstemmler.com/blogs/typescript/node-starter-project/)

Vinícius Gajo Marques Oliveira, 2020.
