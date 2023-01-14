Criação do Banco de Dados
Para realizar a criação do banco de dados:
1º - Atualizar o **password** no arquivo config/config.json conforme a senha cadastrada no MYSQL

![image](https://user-images.githubusercontent.com/106355267/212491088-75f796d8-ee08-4ed2-ad51-0e011578992c.png)

2º Rodar no terminal o script para criação do banco de dados: npx sequelize-cli db:create

3º: Rodar no terminal o script para criação da tabela products: npx sequelize-cli db:migrate
