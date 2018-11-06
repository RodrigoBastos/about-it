# about-it
Serviço que exibe as últimas postagens, das principais mídias sociais, a partir de um tema central

# Executar a aplicação

## Pré-requisitos

  - Execute o comando `npm i` para instalar as dependências
  - Acesse https://apps.twitter.com para gerar chaves de acesso da API do Twitter.
  - Crie o arquivo twitterKeys.json na raiz da aplicação. Adicione as credencias do twitter conforme o exemplo abaixo: 

  ```json
  {
    "consumer_key": "<CONSUMER_KEY>",
    "consumer_secret": "<CONSUMER_SECRET>",
    "access_token": "<ACCESS_TOKEN>",
    "access_token_secret": "<ACCESS_TOKEN_SECRET>",
    "strictSSL": true
  }
  ```

  
## Execução

 - Para usar aplicação é necessário executar o comando `npm start`;
 - Acesse a aplicação via `localhost:3000`.
