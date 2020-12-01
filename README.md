command

json-server --watch db.json

json-server server.js

# Deploy `json-server` to `{{ free hosting site }}`

> Instructions how to deploy the full fake REST API [json-server](https://github.com/sharozraees802/jsonDb) to various free hosting sites. Should only be used in development purpose but can act as a simpler database for smaller applications.

- [**Create your database**](#create-your-database)

## Create your database

1. Press the green `Use this template`-button in the right corner
2. Give your new repo a name and press the green `Create repository from template`-button
3. Clone your newly created repository to your computer

4 . Change the contents of `db.json` to **your own content** according to the [`json-server example`](https://github.com/typicode/json-server#example) and then `commit` your changes to git locally.

_this example will create `/employees` route , each resource will have `id`, `first_name` and `last_name`. `email` will auto increment!_

```json
{
  "employees": [
    {
      "id": 1,
      "first_name": "Sylvester Friesen",
      "last_name": "Gulgowski",
      "email": "Jerald18@gmail.com"
    }
  ]
}
```

---

## Deploy to **Heroku**

<img align="right" width="100px" height="auto" src="https://cdn.worldvectorlogo.com/logos/heroku.svg" alt="Heroku">

Heroku is a free hosting service for hosting small projects. Easy setup and deploy from the command line via _git_.

###### Pros

- Easy setup
- Free

###### Cons

- App has to sleep a couple of hours every day.
- "Powers down" after 30 mins of inactivity. Starts back up when you visit the site but it takes a few extra seconds. Can maybe be solved with [**Kaffeine**](http://kaffeine.herokuapp.com/)

---

### Install Heroku

1 . [Create your database](#create-your-database)

2 . Create an account on <br/>[https://heroku.com](https://heroku.com)

3 . Install the Heroku CLI on your computer: <br/>[https://devcenter.heroku.com/articles/heroku-cli](https://devcenter.heroku.com/articles/heroku-cli)

4 . Connect the Heroku CLI to your account by writing the following command in your terminal and follow the instructions on the command line:

```bash
heroku login
```

5 . Then create a remote heroku project, kinda like creating a git repository on GitHub. This will create a project on Heroku with a random name. If you want to name your app you have to supply your own name like `heroku create project-name`:

```bash
heroku create my-cool-project
```

```bash
6 . heroku git:clone -a my-cool-project
```

```bash
7 . git add .
```

```bash
8 . git commit -am "make it better"
```

```bash
9 . create a Procfile
```

```bash
10 . open Procfiel write web : node server.js or web : node index.js
```

11 . Push your app to **Heroku** (you will see a wall of code)

```bash
git push heroku master
```

12 . Visit your newly create app by opening it via heroku:

```bash
heroku open
```

13 . For debugging if something went wrong:

```bash
heroku logs --tail
```

---

#### How it works

Heroku will look for a startup-script, this is by default `npm start` so make sure you have that in your `package.json` (assuming your script is called `server.js`):

```json
 "scripts": {
    "start" : "node server.js"
 }
```

You also have to make changes to the port, you can't hardcode a dev-port. But you can reference herokus port. So the code will have the following:

```js
const port = process.env.PORT || 3000;
```

- [**Deploy db.json server**](#create-your-database)
