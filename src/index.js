import { promises as fs } from 'fs'

// exer 1
async function city_states(){
    try{
        const data = JSON.parse(await fs.readFile("./src/estados-cidades-atividade.json"))
        return data
    }
    catch(err) {
        console.log("Houve um equívoco " + err)
    }
}

// exer 2
async function states(){
    const data = await city_states()

    const states = data.map((state) => {
        return state.nome     
    })

    states.forEach((state) => {
        console.log(state)
    });
}
// states()

// exer 3
async function stateStartsWithA(){
    const data = await city_states()

    const state = data.map((state) => {
        return state.nome
    })

    const stateWithA = state.filter((state) => {
        return state.startsWith('A')
    })
    
    stateWithA.forEach((state) => {
        console.log(state)
    })
}
// stateStartsWithA()

// exer 4
async function statesOrderedByLessLetter(){
    const data = await city_states()
    const states = data.map((state) => {
        return state.nome
    })

    const orderedStates = states.sort((state1, state2) => {
        return state1.length - state2.length
    })

    orderedStates.forEach((state) => {
        console.log(state)
    })
}
statesOrderedByLessLetter()

// exer 5
async function SpCities(){
    const data = await city_states()
    
    const state = data.filter((state) => {
        return state.nome === "São Paulo" 
    })

    const cities = state.map((state) => {
        return state.cidades
    })


    cities[0].forEach((city) => {
        console.log(city)
    })
}
// SpCities()

// exer 6
async function MaranhaoCities(){
    const data = await city_states()

    const maranhao = data.find((state) => {
        return state.nome === "Maranhão"
    })

    const cities = maranhao.cidades

    const moreThanSix = cities.filter((city) => {
        return city.length > 6
    })

    moreThanSix.forEach((city) => {
        console.log(city)
    })
}
// MaranhaoCities()

// exer 7
async function citiesAmmount(){
    const data = await city_states()

    const citiesAmmount = data.map((state) => {
        return{
            state: state.nome,
            cities: state.cidades.length
        }
    })
    citiesAmmount.forEach((state) => {
        console.log(state)
    })
}
// citiesAmmount()


// exer 8
async function bahiaCities(){
    const data = await city_states()

    const bahia = data.find((state) => {
        return state.nome === "Bahia"
    })

    const cities = bahia.cidades

    const lessThanFive = cities.filter((city) => {
        return city.length < 5
    })

    lessThanFive.forEach((state) => {
        console.log(state)
    })
}
// bahiaCities()
