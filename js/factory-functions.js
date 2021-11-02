export function factoryProperty(element) {
    const { listing, link, medias } = element
    const { address, amenities, pricingInfos } = listing
    const { name } = link
    const { url } = medias[0]
    const { price, monthlyCondoFee } = pricingInfos[0]

    const createPriceTemplateString = price => {
        const templateString = parseInt(price).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })
        return templateString
    }

    const createAddressTemplateString = address => {
        const { city, neighborhood, stateAcronym, street, streetNumber } = address
        const templateString = `${street}, ${streetNumber} - ${neighborhood}, ${city} - ${stateAcronym}`
        return templateString
    }

    const createPropertyStructureTemplateString = listing => {
        const { bathrooms, bedrooms, parkingSpaces, usableAreas } = listing
        const usableAreasString = usableAreas[0].toString().bold()
        const bedroomsString = bedrooms[0].toString().bold()
        const bathroomsString = bathrooms[0].toString().bold()
        const parkingSpacesString = parkingSpaces[0].toString().bold()

        const templateString = `${usableAreasString} m² ${bedroomsString} Quartos ${bathroomsString} Banheiros ${parkingSpacesString} Vagas`
        return templateString
    }

    const createTranslator = () => {
        // Como consegui criar um translator?
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

        const featuresInPortuguese = [
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

        const translator = featuresInPortuguese.map((element, index) => {
            return {
                portuguese: element,
                english: featuresInEnglish[index]
            }
        })

        return translator
    }

    const translateFeatures = amenities => {
        const translator = createTranslator()
        const featuresInPortuguese = []

        amenities.forEach(element => {
            const feature = element.replace('_', ' ').replace('_', ' ')
            translator.forEach(({ portuguese, english }) => {
                if(feature === english) featuresInPortuguese.push(portuguese)
            })
        })

        return featuresInPortuguese
    }

    const createCondoPriceTemplateString = monthlyCondoFee => {
        let templateString = null
        if(monthlyCondoFee) {
            templateString = `Condomínio: ${'R$'.bold()} ${monthlyCondoFee.bold()}`
        } else {
            templateString = `Condomínio: ${'R$'.bold()} ${'-'.bold()}`
        }
        return templateString
    }

    return {
        name,
        address: createAddressTemplateString(address),
        amenities: translateFeatures(amenities),
        propertyStructure: createPropertyStructureTemplateString(listing),
        price: createPriceTemplateString(price),
        monthlyCondoFee: createCondoPriceTemplateString(monthlyCondoFee),
        url
    }
}