**API DOCUMENTATION**

- after cloning the repo
- run the following command in the terminal to install all dependencies
```
  npm install
```

- create a dotenv file `.env`
- add the following environment variables
  > JWT_SECRET_KEY = VALUE [ value should be a long string that is dificult to guess. i recommend you use crypto to generate the string]
  > MONGOBD_URI = VALUE [ log into your mongodb account, click connect and choose connection string. copy the string given and replace <password> with your password. password you entered when creating the database nor your mongodb user account password]
  > PORT=8900