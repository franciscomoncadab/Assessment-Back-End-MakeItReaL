# API - Favs List

Este Assesment Backend - Mandatory, define crear una API donde tendremos  usuarios y listas de favoritos, el cual permitira crear usuario, hacer login, crear listas, ver todas las listas y una en concreto por medio de su identificado; y podremos tambien eliminar las listas de favoritos.

# Requisitos

Para este proyecto necesitas tener instalado lo siguiente:

- Node.js
- MongoDB
- Express
- Bcrypt
- Mongoose
- Jsonwebtoken (JWT)

~Dev Dependence 
- Nodemoon
- Jest

## Configuración

Para configurar este proyecto de forma local sigue estas instrucciones:

1. Clona el proyecto de Git:
   ```
   $ git clone

## How does it work Users


Usaras la ruta: "/auth/local" para crear usuario. <br>
Usaras la ruta: "/auth/local/login"
| Method | Endpoint | Action | Body
| --- | --- | --- | --- |
| POST | /auth/local | Crear User | { <br> &nbsp; &nbsp; "email": String, <br> &nbsp; &nbsp; "password" : String, <br> }
| POST | /auth/local/login | Login | { <br> &nbsp; &nbsp; "email": String, <br> &nbsp; &nbsp; "password" : String, <br> }

## How does it work Favs List

La ruta base de las Favs List es: /api/favs. Aqui podremos hacer las operaciones CRUD.

| Method | Endpoint | Action | Query Param | Body
| --- | --- | --- | --- | --- |
| POST | / | Crear lista favoritos | | { <br> &nbsp; &nbsp; "name": String, <br> &nbsp; &nbsp; "favs" : [{ <br> title: String, <br>description: String, <br>link: String}], <br> }
| GET | / | Mostrar todas las listas | | { <br> &nbsp; &nbsp; "title": String, <br> &nbsp; &nbsp; "description" : String, <br> &nbsp; &nbsp; "link" : String <br> }
| GET | /:id | Mostrar una lista de favoritos | id: String |
| DELETE | /:id | Eliminar una lista de favoritos | id: String |

