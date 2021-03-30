const nomePetshop = "PETSHOP AVANADE"
let moment = require('moment')
const fs = require('fs')

let db = fs.readFileSync('./db-pets.json')
db = JSON.parse(db)
let pets = db.pets

const atualizarBancoDeDados = () => {
    let petsAtualizado = JSON.stringify(db)
    fs.writeFileSync('db-pets.json', petsAtualizado, 'utf-8')
}

const listarPets = (pets) => {
    for (let pet of pets) {
        console.log(`${pet.nome} ${pet.idade} ${pet.tipo} ${pet.raca}`)
        pet.vacinado ? console.log(`${pet.nome} esta vacinado! `) : console.log(`${pet.nome} nao esta vacinado! `)
    }
}

let vacinarPet = (pet) => {
    if (!pet.vacinado) {
        pet.vacinado = true
        console.log(`${pet.nome} foi vacinado!`)
        return true
        
    } else {
        console.log(`${pet.nome} ja é vacinado!`)
        return false
    }
}

function campanhaVacina(pets) {
    let petsVacinados = 0
    pets.map(function(pet){
        if (pet.vacinado) petsVacinados++
    })
    return petsVacinados
}

console.log(campanhaVacina(pets))

function campanhaVacina2(pets) {
    let vacinados = pets.map(function(pet){
        return pet.vacinado
    })

    let petsVacinados = 0
    for(let i = 0; i < vacinados.length; i++){
        if(vacinados[i]) petsVacinados++
    }

    return petsVacinados
}

function adicionarPet(pet) {
    if (typeof pet == 'object'){
        if(!pet.servicos) pet.servicos = []
        pets.push(pet)
        atualizarBancoDeDados()
        console.log('Pet adicionado com sucesso.')
    } else {
        console.log('Não foi possivel adicionar o pet')
    }
}

const darBanhoPet = (pet) => {
    pet.servicos.push('Banho' + moment().format())
    console.log(`${pet.nome} está de banho tomado!`)
}

const tosarPet = (pet) => {
    pet.servicos.push('Tosa' + moment().format())
    console.log(`${pet.nome} está com cabelinho na régua`)
}

const apararUnhasPet = (pet) => { 
    pet.servicos.push('corte de unhas' + moment().format())
    console.log(`${pet.nome} está de unhas aparadas!`)
}

function atenderClientes(pet, servico){
    servico
    console.log(`Seja bem vindo(a), ${pet.tutor}, vamos cuidar do seu dogo!`)
    atualizarBancoDeDados()
}

const buscarPet = (pets, pet, nome) => {
    let fPet = pets.find((pet)=>{
        return pet.nome === String(nome)
    })
    return fPet
}

const clientePremium = (pet) => {
    return (pet.servicos.length >=3) ? true : false
}

console.log(clientePremium(pets[0]))
// console.log(buscarPet(pets, pets[0], 'Billy'))
// atenderClientes(pets[0], apararUnhasPet(pets[0]))


// apararUnhasPet(pets[0])
// tosarPet(pets[0])
// darBanhoPet(pets[0])

// listarPets(pets)

// let dogo = { "nome": "Nicko", "tipo": "Pug", "idade": "1", "raca": "Pug", "peso": 1.8, "tutor": "Odin", "contato": "(81)998677622", "vacinado": false}
// adicionarPet(dogo)
// listarPets(pets)