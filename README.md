# sinatra-react-frontend

## Introduction

This section is meant to fetch data from the backend and demonstrate the projrct functionalities

### Frontend Setup

After finishing with the Back-end, we can now proceed with the front-end part of the project.

Thebackend and  frontend are be in **two different repositories**.

cd out of the back-end and navigate to the front-end folder. Use the command below to create the project dependencies.

```
$ npx create-react-app (app_name)
```
Create the app components and continue with the functionalities including fetching of data from the Sinatra backend.
Below is an example of how we can fetch data from the localhost

```js
fetch("http://localhost:9292/test")
  .then((r) => r.json())
  .then((data) => console.log(data));