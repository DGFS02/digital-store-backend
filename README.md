# DIGITAL STORE

### Setup Versions
* Sequelize CLI:
  * Node: 16.17.1 
  * CLI: 6.5.2
  * ORM: 6.3.5

##### Install dependences
```sh
$ npm i
```

##### Create .env file 
```
Create an file .env using the .env.example as an example.
In the .env file change the password to the MYQSL Workbench password.
```

##### Database create 
```sh
$ npx sequelize-cli db:create
```

##### Database migrate 
```sh
$ npx sequelize-cli db:migrate
```

##### Run
```sh
$ npm start
```