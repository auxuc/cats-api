# Cats

### Setup

##### DB
you need to install mysql in your computer
you have to create a new schema on your local database called `cats`

##### Node Project
on the root folder
you have to do npm install
I am using knex for the DB connection so you have to go to ./config/knexfile.ts
and update the credentials, if you have a normal mysql setup, you might not need to change anything at all since the user and psw are root and empty psw.

these are the default values that are there aleady, I didnt add any `.env` file to the root folder in interest of time

```   
  host: "127.0.0.1",
  port: "3306",
  user: "root",
  password: "",
  database: "cats",
```

after that you have to run `npm run start` to start the project,
on index.ts I added a `knex.default.migrate.latest()` that runs the migration files inside `./migrations` there I added just one file containing the script that will create a `cat` table inside the schema `cats`
