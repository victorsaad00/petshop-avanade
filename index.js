const nomePetshop = "PETSHOP AVANADE"
let moment = require('moment');

let pets = [
    {
        nome:'Billy',
        tipo:'Pug',
        idade:'2',
        raca:'Pug',
        peso:2,
        tutor:'Doug',
        contato:'(81)998677622',
        vacinado:false,
        servicos:['banho','tosa']
    },
    {
        nome:'Snoopy',
        tipo:'Beagle',
        idade:'2',
        raca:'Beagle',
        peso: 1.8,
        tutor:'Doug',
        contato:'(81)998677622',
        vacinado:false,
        servicos:['banho','tosa']
    },
    {
        nome:'Scot',
        tipo:'Pug',
        idade:'2',
        raca:'vira-late',
        peso:'2',
        tutor:'Doug',
        contato:'(81)998677622',
        vacinado:true,
        servicos:['banho','tosa']
    }
]

const listarPets = () => {
    for (let pet of pets)
        console.log(`${pet.nome} ${pet.idade} ${pet.tipo} ${pet.raca}`)
}

let vacinarPet = (pet) => {
    if (!pet.vacinado) {
        pet.vacinado = true;
        console.log(`${pet.nome} foi vacinado!`);
        return true
    } else {
        console.log(`${pet.nome} ja é vacinado!`);
        return false
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

function adicionarCliente(nome,tipo,idade,raca,peso,tutor,contato,vacinados) {
    newPet = {
        nome: nome,
        tipo: tipo,
        idade: idade,
        raca: raca,
        peso: peso,
        tutor:tutor,
        contato: contato,
        vacinado: vacinados,
        servicos: []
    }

    pets.push(newPet);

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

apararUnhasPet(pets[0])
tosarPet(pets[0])
darBanhoPet(pets[0])