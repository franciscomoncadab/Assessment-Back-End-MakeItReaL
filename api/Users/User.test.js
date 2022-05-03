const req = require('supertest')
const app = require('../../app')
const { connectDB } = require('../../config/db')

describe('Testeo a Usuario', () => {

     async function connect(){
          await connectDB()
     };

     test('Should register new User', async () => {
          const body = {email: "example@example.com", password: "12345678"}
          const res = await req(app).post('/auth/local').send(body)
          expect(res.statusCode).toBe('200');
     });
     test('Should login user', async () => {
          const user = {email: "example@example.com", password: "12345678"}
          await req(app).post('/auth/local').send(user);
          const login = await req(app).post('/auth/local/login').send(user)
          expect(login.statusCode).toBe(200);
     });

}); 
