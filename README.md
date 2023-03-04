# DIGITAL STORE

### Requirements

- Node
- Mysql
- Npm

##### Install dependences

```sh
$ npm i
```

##### Create .env file

Create an file .env using the .env.example as an example using the command bellow in the terminal.

```
cp .env.example .env
```

In the .env file change the password to the MYQSL Workbench password.

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

##### Seeding

If you want to fill the database with some random data run 

```sh
$ npx sequelize-cli db:seed:all
```
