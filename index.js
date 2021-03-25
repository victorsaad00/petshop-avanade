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
        vaniado:true,
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
        vaniado:true,
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
        vaniado:true,
        servicos:['banho','tosa']
    }
]

const listarPets = () => {
    for (let pet of pets)
        console.log(`${pet.nome} ${pet.idade} ${pet.tipo} ${pet.raca}`)
}

listarPets();