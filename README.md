# 🎫 GeniusXP

## 💡 Explicação do projeto
GeniusXP é uma plataforma centralizada para imersão em eventos que simplifica operações como inscrições, pagamentos e check-in, enquanto aumenta o engajamento com enquetes e networking. A inteligência artificial da GeniusXP utiliza as preferências dos usuários para oferecer uma experiência altamente personalizada e otimizar o planejamento. Com análise de sentimento e assistência virtual, a plataforma proporciona interações mais significativas, elevando a eficiência da gestão e tornando os eventos mais impactantes para cada participante.

## Tecnologias Utilizadas
Node.js - Ambiente de execução para JavaScript no servidor
Express - Framework web para Node.js
MongoDB - Banco de dados NoSQL orientado a documentos
Instalação
Siga os passos abaixo para rodar a aplicação localmente.

## Pré-requisitos
Certifique-se de ter o seguinte software instalado em sua máquina:

Node.js
MongoDB

## Passo a Passo
Clone o repositório:

git clone https://github.com/geniusxp/NoSQL.git


## Acesse o diretório do projeto:

cd NoSQL

## Instale as dependências:

npm install

## Instale o pacote dotenv:

npm install mongodb dotenv

## Configure as variáveis de ambiente:

Crie um arquivo .env na raiz do projeto e adicione as seguintes variáveis (ajuste os valores conforme necessário):

MONGO_HOST=mongodb://127.0.0.1:27017

MONGO_DATABASE=geniusxp

## Inicie o servidor:

npm start

## Acesse a aplicação:

A aplicação estará disponível em http://localhost:3000.

## Scripts de Exportação e importação de Dados
O arquivo CollectionExport.bat, localizado em documentos_JSON_exportados/ScriptsDocumentosJSON, é um script executável que facilita a exportação das coleções do MongoDB para arquivos JSON. Ele exporta as seguintes coleções:

administrators, 
coupons, 
events, 
lectures, 
notifications, 
payments, 
polls, 
ticket_types, 
tickets, 
users

## Executando o Script de Exportação ou importação 
Navegue até a pasta documentos_JSON_exportados e execute os arquivos ".bat" de acordo com sua necessidade.
Certifique-se de que o MongoDB está em execução.

ColectionsImport.bat -->
Após a execução deste script, os dados serão importados do diretório documentos_JSON_exportados para o banco de dados geniusxp no MongoDB.


ColectionsExport.bat -->
exportará cada coleção para arquivos JSON correspondentes, que estarão salvos no diretorio: C:\CollectionsExportedFromGeniusxp


## 👥 Equipe
Este projeto está sendo desenvolvido pelos seguintes membros:

- RM99565 - Erick Nathan Capito Pereira (2TDSPV)
- RM99577 - Guilherme Dias Gomes (2TDSPX)
- RM550889 - Hemily Nara da Silva (2TDSPX)
- RM550841 - Lucas Araujo Oliveira Silva (2TDSPV)
- RM99409 - Michael José Bernardi Da Silva (2TDSPX)
