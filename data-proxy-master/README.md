# Passos para configurar criar a imagem do proxy:

* Alterar ip usado no proxy pelo ip da vm com os dashboards na rede interna do AWS;
* Alterar arquivo init-letsencrypt.sh, informando o domínio correto na variável domains, linha 8; Se necessário, atualizar o email na linha 11;
* Alterar arquivo data/nginx/app.conf, inserindo domínio correto nas diretrizes "server_name";
* Rodar script init-letsencrypt.sh para gerar os certificados
* Rodar comando docker-compose up para iniciar o proxy

# Passos para atualizar configurações nos proxy:

* Alterar arquivo de configuração app.conf
* Versionar imagem do proxy na wiki
* Realizar build da imagem atualizada

    - Homolog

    export PROXY_VERSION=1.0 && docker-compose -f docker-compose.homolog.yml build

    - Prod

    export PROXY_VERSION=1.0 && docker-compose build

* Atualizar container

