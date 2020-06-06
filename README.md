
# Fleez

## Stack
Esse é um projeto de Backend feito utilizando NodeJS, Express, Typescript e MySQL.Além disso todas as tabelas feitas em MySQL foram hospedadas em uma EC2 da aws. O backend todo está hospedado em um serviço de LAMBDA do aws. Além disso, ele segue uma arquitetura em camadas simples:
1. Presentation: responsável pela comunicação com agentes externos (como o Frontend)
2. Data: responsável pela comunicação direta com o banco de dados
3. Business: responsável pela lógica de negócio
Por fim, ressalta-se que a comunicação da camada `Data` e a `Business` é feita através de interfaces denominadas `Gateway`, para possibilitar os testes unitários desta última camada (inversão de dependências)


## Sobre
Esse é um projeto onde é possível criar suas metas/tarefas. Nele é possivel criar um novo usuário, fazer login, cadastrar uma nova meta/tarefa, editar e deletar.

## Instruções para rodar
As instruções são:
1. `yarn install` para instalar todas as dependências;
2. `yarn run start` para rodar localmente o projeto
3. `yarn run build` para gerar uma versão possível de ser deployada com os arquivos transpilados para Javascript

## Contato
Lucas Campioto Constantino
l_campioto@hotmail.com
(011) 94783-7190