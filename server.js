const express = require("express");
const app = express();
const faker = require('faker')

const useFaker ={
  nameFake = faker.name.firstName(),
  lastnameFake = faker.name.lastName(),
  eFake = faker.internet.email(),
  cardFake = faker.random.uuid(),
  passFake = faker.internet.password(),
  cityFake = faker.address.city(),
  directionFake = faker.address.streetName(),
  zipCodeFake = faker.address.zipCode(),
  stateFake = faker.address.state(),
  countryFake = faker.address.country()
} 

const companies = {
  carnet: useFaker.cardFake,
  Nonmbre: useFaker.nameFake,
  direccion: {
    calle: useFaker.directionFake, 
    ciudad: useFaker.cityFake, 
    estado: useFaker.stateFake, 
    codigo_postal: useFaker.zipCodeFake, 
    pais: useFaker.countryFake
  }
};

const users = {
  carnet: useFaker.cardFake,
  Nonmbre: useFaker.nameFake,
  Apellido: useFaker.lastnameFake,
  email: useFaker.eFake, 
  contraseña: useFaker.passFake
};

const users_companies = {
  Nonmbre: useFaker.nameFake,
  email: useFaker.eFake, 
  contraseña: useFaker.passFake,
  direccion: {
    calle: useFaker.directionFake, 
    ciudad: useFaker.cityFake, 
    estado: useFaker.stateFake, 
    codigo_postal: useFaker.zipCodeFake, 
    pais: useFaker.countryFake
  }
}

app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );

app.post("/api/users", (req, res) => {
  console.log(req.body);
  users.push(req.body);
  res.json( { status: "ok" } );
});

app.get("/api/users", (req, res) => {
  res.json( users );
});

app.get("/api/users/:id", (req, res) => {
  res.json( users[req.params.id] );
  console.log(req.params.id);
  res.json( users[req.params.id] );
});

app.put("/api/users/:id", (req, res) => {
  const id = req.params.id;
  users[id] = req.body;
  res.json( { status: "ok" } );
});

app.post("/api/companies", (req, res) => {
  console.log(req.body);
  companies.push(req.body);
  res.json( { status: "ok" } );
});

app.get("/api/companies", (req, res) => {
  res.json( companies );
});

app.get("/api/companies/:id", (req, res) => {
  res.json( companies[req.params.id] );
  console.log(req.params.id);
  res.json( companies[req.params.id] );
});

app.put("/api/companies/:id", (req, res) => {
  const id = req.params.id;
  companies[id] = req.body;
  res.json( { status: "ok" } );
});

app.post("/api/users/company", (req, res) => {
  console.log(req.body);
  users_companies.push(req.body);
  res.json( { status: "ok" } );
});

app.get("/api/users/company", (req, res) => {
  res.json( users_companies );
});

app.get("/api/users/company/:id", (req, res) => {
  res.json( users_companies[req.params.id] );
  console.log(req.params.id);
  res.json( users_companies[req.params.id] );
});

app.put("/api/users/company/:id", (req, res) => {
  const id = req.params.id;
  users_companies[id] = req.body;
  res.json( { status: "ok" } );
});

app.get("/", (req, res) => {
  res.send("gg izi ff al 15");
});

const server = app.listen(8000, () =>
console.log(`el server esta usando el puerto: ${server.address().port}!`)
);