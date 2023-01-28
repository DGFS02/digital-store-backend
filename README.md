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

##### Database config.json 
```json
  {
    "development": {
    "username": "root",
    "password": "1234",
    "database": "digitalStore",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
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
$ http://localhost:3000/
```