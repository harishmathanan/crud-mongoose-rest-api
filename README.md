# Sample Web API Server (Mongoose)
Simple REST based web API server built with Express framework and uses Mongoose as the
Object Data Mapper (ODM). This sample is built to demonstrate the simplicity of using
an ODM over direct interaction with a persistent data store.

## Instructions
1. Download or clone the repository.
2. Run `npm install` to install all the dependencies.
3. Run `npm run dev` to start the server.
4. API enpoints will be available on `http://localhost:3000`
4. Run the bash script `test.sh` to run through a simple *CRUD test*.

## Usage

### Model
```
{
  name: <string required>
  balance: <number required>
}

```

### Endpoints
```
GET /accounts
Retrieves a list of accounts
```

```
POST /accounts
Creates an account
```

```
PUT /accounts/:id
Updates an account
```

```
DELETE /accounts/:id
Deletes an account
```
