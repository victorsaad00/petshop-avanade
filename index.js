const nomePetshop = "PETSHOP AVANADE"

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

campanhaVacina(pets);