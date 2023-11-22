# node-jwt

a basic implementation of jwt in node ts.

## IMPORTANT

### install dotenv package locally (recommended):

npm install dotenv --save

### Add .env file and the add the secrets:

- add a named .env file
- add a line: JWT_SECRET_KEY=[your-secret-key-here]
- add a line: PORT=[your-port]

note: [your-secret-key-here] and [your-port] should be in plain text no "" and '' needed. example: myLittleSecrete, 3000.

### Spin up the server

npm run start
