const nomePetshop = "PETSHOP AVANADE"
let moment = require('moment');
const fs = require('fs');

const db = require('./db-pets.json');
let pets = db;

const atualizarBancoDeDados = () => {
    json = JSON.stringify(pets, null, 2);
    fs.writeFile("db-pets.json", json, (err)=>{
        if (err) throw err;
    });
}


const listarPets = (pets) => {
    for (let pet of pets)
        console.log(`${pet.nome} ${pet.idade} ${pet.tipo} ${pet.raca}`);
}

let vacinarPet = (pet) => {
    if (!pet.vacinado) {
        pet.vacinado = true;
        console.log(`${pet.nome} foi vacinado!`);
        return true;
        
    } else {
        console.log(`${pet.nome} ja é vacinado!`);
        return false;
    }
}

function campanhaVacina(pets) {
    let petsVacinados = 0;
    for(pet of pets) {
        if(vacinarPet(pet))
            petsVacinados++;
    }
    console.log(`${petsVacinados} vacinados!`);
}

function adicionarPet(pet) {
    if (typeof pet == 'object'){
        if(!pet.servicos) pet.servicos = [];
        pets.push(pet);
        atualizarBancoDeDados();
        console.log('Pet adicionado com sucesso.');
    } else {
        console.log('Não foi possivel adicionar o pet');
    }
}

const darBanhoPet = (pet) => {
    pet.servicos.push('Banho' + moment().format());
    console.log(`${pet.nome} está de banho tomado!`);
}

const tosarPet = (pet) => {
    pet.servicos.push('Tosa' + moment().format());
    console.log(`${pet.nome} está com cabelinho na régua`);
}

const apararUnhasPet = (pet) => { 
    pet.servicos.push('corte de unhas' + moment().format());
    console.log(`${pet.nome} está de unhas aparadas!`);
}

// apararUnhasPet(pets[0])
// tosarPet(pets[0])
// darBanhoPet(pets[0])

listarPets(pets)

let dogo = 
{ "nome": "Nicko", "tipo": "Pug", "idade": "1", "raca": "Pug", "peso": 1.8, "tutor": "Odin", "contato": "(81)998677622", "vacinado": false}
adicionarPet(dogo);
listarPets(pets)