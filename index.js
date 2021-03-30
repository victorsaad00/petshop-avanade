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
    (pets).forEach((pet) => {
        let {nome, tipo, idade, raca} = pet
        console.log(`${nome} ${idade} ${tipo} ${raca}`)
    });
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

const adicionarPet = (novosPet) => {
    db.pets.push(...novosPet);
    atualizarBancoDeDados()
    novosPets.forEach((pet) => {
        console.log(`${pet.nome} foi adicionado com sucesso!`);
    })
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

const buscarPet = (pets, nome) => {
    return pets.find((pet)=>{
        return pet.nome === String(nome)
    })
}

const clientePremium = (pet) => {
    return (pet.servicos.length >=3) ? true : false
}


//console.log(buscarPet(pets, "Billy"))
//console.log(campanhaVacina(pets))
//console.log(clientePremium(pets[0]))
// console.log(buscarPet(pets, pets[0], 'Billy'))
// atenderClientes(pets[0], apararUnhasPet(pets[0]))

// apararUnhasPet(pets[0])
// tosarPet(pets[0])
// darBanhoPet(pets[0])
// listarPets(pets)

// let dogo = { "nome": "Nicko", "tipo": "Pug", "idade": "1", "raca": "Pug", "peso": 1.8, "tutor": "Odin", "contato": "(81)998677622", "vacinado": false}
// adicionarPet(dogo)
// listarPets(pets)

// adicionarPet(
//     [
//         {
//             "nome": "Cavendish",
//             "tipo": "labrathor",
//             "idade": "1",
//             "raca": "labrathor",
//             "peso": 1.8,
//             "tutor": "Odin",
//             "contato": "(81)998677622",
//             "vacinado": false,
//             "servicos": []
//         },
//         {
//             "nome": "Thors",
//             "tipo": "Golden Retriver",
//             "idade": "2",
//             "raca": "Golden Retriver",
//             "peso": 1.8,
//             "tutor": "Odin",
//             "contato": "(81)998677622",
//             "vacinado": false,
//             "servicos": [
//                 "banho",
//                 "tosa"
//             ]
//         }
//     ]
// ) 