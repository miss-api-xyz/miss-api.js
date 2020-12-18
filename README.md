## 🔑 Install 
```shell
$ npm i miss-api.js
```
or u can use yarn
```shell
$ yarn add miss-api.js
```

## ❓ How to use?

```js
let klasa = require("miss-api.js"); // import main class
let miss = new klasa("User 1606585263234.xY4wbayvxQ8PFFdyXc"); // API Key. 

miss.get("cat").then(console.log); // return object with data
/*
{
  code: 200,
  message: '',
  image: 'https://cdn.discordapp.com/attachments/673255125908848673/678578242273411102/109449098_catsstaring.jpg'
} 
*/

// If you get a response like this:
// { code: 401, message: 'Unauthorized user', image: null }
// it means that you specified an invalid token.
```

- 📚 Docs - **https://github.com/miss-api-xyz/docs**
- 🔍 Site - **https://miss-api.ml**
- 💜 Support - **https://discord.gg/RPb2KXN**
