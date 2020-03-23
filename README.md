# Encurtador de URLs

Esse projeto consiste em um encurtador de links genérico desenvolvido para WEB, baseado <a href="https://www.youtube.com/watch?v=SLpUKAGnm-g">nese vídeo</a> do canal Web Dev Simplified.

### Melhorias:

* Melhorar o layout;
* Completar automaticamente o link com https://www;
* Conseguir um certificado para o link do site ficar https (ssl, openssl, lets encrypt);
* Entender porque os ads do google não são mostrados.

### Funcionamento:
No site, o usuário entra com um link em um campo input e o sistema gera um id relacionado a esse link, salvando o id e o link original no banco de dados (MongoDB Atlas). Para recuperar o link completo, foi criada uma rota no Express que recebe um parâmetro da requisição e faz a busca no banco de dados por um id igual ao informado na Url. Caso encontre, o usuário é redirecionado para o site correspondente armazenado neste banco de dados.

Nesse projeto foi utilizado o padrão <strong>MVC</strong> (<i>Model, View, Controller</i>) para arquitetura do código.

O banco de dados escolhido foi o <strong>MongoDB</strong> devido à familiaridade, o backend foi desenvolvido no <strong>Node.js</strong> com <strong>Express</strong>, e a parte do layout, foi escolhido utilizar o <strong>EJS</strong> (<i>Effective JavaScript templating</i>).

Para executar o projeto basta ter o <strong>node</strong> instalado, fazer um clone desse repositório e alterar os valores da <i>connection string</i> no arquivo <i>.env</i>, e da <i>baseUrl</i> em <i>controllers/info.json</i> para <i>http://localhost:5000/</i>.

Feito isso, devemos navegar até a pasta do projeto no prompt de comando e executar:

~~~
npm run devStart
~~~

<i>Vinícius Gajo Marques Oliveira</i>, 2020.
