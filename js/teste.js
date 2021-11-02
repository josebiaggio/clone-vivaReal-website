
// Para pegar todas as características em português e em inglês, no site da Viva Real acessei o console 
// em especionar e fiz o seguinte:
// 
// const featuresInEnglish = []
// 
// document.querySelectorAll('.amenities__list label.hbs-filter__label ').forEach(element => {
//     featuresInEnglish.push(element.getAttribute('for').replace('amenity-', '').replace('_', ' ').replace('_', ' '))
// })
//  
// const featuresInPortuguese = []
// 
// document.querySelectorAll('.amenities__list label.hbs-filter__label ').forEach(element => {
//     featuresInPortuguese.push(element.innerText.split('(')[0].trim())
// })
//
// Com isso, consegui dois arrays: um com as características em português e o outro em inglês.
// A partir disso, consigo criar um translator.

const featuresInPortuguese =[
    "Academia",
    "Churrasqueira",
    "Cinema",
    "Espaço gourmet",
    "Espaço verde / Parque",
    "Gramado",
    "Jardim",
    "Piscina",
    "Pista de cooper",
    "Playground",
    "Quadra de squash",
    "Quadra de tênis",
    "Quadra poliesportiva",
    "Quintal",
    "Salão de festas",
    "Salão de jogos",
    "Aceita animais",
    "Aquecimento",
    "Ar-condicionado",
    "Conexão à internet",
    "Depósito",
    "Elevador",
    "Garagem",
    "Gerador elétrico",
    "Lareira",
    "Lavanderia",
    "Sala de massagem",
    "Mobiliado",
    "Recepção",
    "Sauna",
    "Spa",
    "TV a cabo",
    "Circuito de segurança",
    "Condomínio fechado",
    "Interfone",
    "Segurança 24h",
    "Sistema de alarme",
    "Vigia",
    "Área de serviço",
    "Cozinha",
    "Escritório",
    "Varanda",
    "Varanda gourmet"
]

const featuresInEnglish = [
    "GYM",
    "BARBECUE GRILL",
    "CINEMA",
    "GOURMET SPACE",
    "GREEN SPACE",
    "GRASS",
    "GARDEN",
    "POOL",
    "HIKING TRAIL",
    "PLAYGROUND",
    "SQUASH",
    "TENNIS COURT",
    "SPORTS COURT",
    "BACKYARD",
    "PARTY HALL",
    "ADULT GAME ROOM",
    "PETS ALLOWED",
    "HEATING",
    "AIR CONDITIONING",
    "INTERNET ACCESS",
    "DEPOSIT",
    "ELEVATOR",
    "GARAGE",
    "ELECTRIC GENERATOR",
    "FIREPLACE",
    "LAUNDRY",
    "MASSAGE",
    "FURNISHED",
    "RECEPTION",
    "SAUNA",
    "SPA",
    "CABLE TV",
    "SAFETY CIRCUIT",
    "GATED COMMUNITY",
    "INTERCOM",
    "SECURITY 24 HOURS",
    "ALARM SYSTEM",
    "WATCHMAN",
    "SERVICE AREA",
    "KITCHEN",
    "HOME OFFICE",
    "BALCONY",
    "GOURMET BALCONY"
]

const createTranslator = (featuresInPortuguese, featuresInEnglish) => {
     const translator = featuresInPortuguese.map((element, index) => {
        return {
            portuguese: element,
            english: featuresInEnglish[index]
        }
    })

    console.log(translator)
} 

createTranslator(featuresInPortuguese, featuresInEnglish)