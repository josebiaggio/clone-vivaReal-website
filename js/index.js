import { set, check, change, hide } from './event-listeners.js'

const setTheBorderBottomColorWhenOnClick = () => {
    const targets = document.querySelectorAll('.results-wrapper button.btn')
    set(targets)
}

const checkIfLocationIsValid = () => {
    const target = document.querySelector('#property-location')
    check(target)
}

const changeDropdownStyle = () => {
    const target = document.querySelector('#property-location')
    change(target)
}

const hideLocationFilter = () => {
    const target = document.querySelector('.location-item')
    hide(target)
}

export const createCard = obj => {
    const { result } = obj.search
    const { listings } = result
    const { listing, link } = listings[0]
    const { address, amenities, bathrooms, bedrooms, parkingSpaces, pricingInfos, usableAreas } = listing
    const { price } = pricingInfos
    const { name } = link

    console.log(listings[0])
    const main = document.querySelector('.results-wrapper div.main')
    const card = document.createElement('div')
    card.className = 'card'
    main.append(card)
    const imgWrapper = document.createElement('div')
    imgWrapper.className = 'img'
    card.append(imgWrapper)
    const informationWrapper = document.createElement('div')
    informationWrapper.className = 'information'
    card.append(informationWrapper)

    const addressWrapper = document.createElement('div')
    addressWrapper.className = 'address'
    informationWrapper.append(addressWrapper)
    const { city, neighborhood, stateAcronym, street, streetNumber } = address
    addressWrapper.innerText = `${street}, ${streetNumber} - ${neighborhood}, ${city} - ${stateAcronym}`

    const titleWrapper = document.createElement('div')
    titleWrapper.className = 'title'
    informationWrapper.append(titleWrapper)
    titleWrapper.innerText = name

    const propertyStructureWrapper = document.createElement('div')
    propertyStructureWrapper.className = 'property-structure'
    informationWrapper.append(propertyStructureWrapper)
    propertyStructureWrapper.innerText = `${usableAreas[0]} m² ${bedrooms[0]} Quartos ${bathrooms[0]} Banheiros ${parkingSpaces[0]} Vagas`

    const particulars = document.createElement('div')
    particulars.className = 'particulars'
    informationWrapper.append(particulars)

    amenities.forEach(element => {
        const particular = document.createElement('span')
        particular.className = 'particular'
        particulars.append(particular)
        particular.innerText = element
    })

    const priceWrapper = document.createElement('div')
    priceWrapper.className = 'price'
    informationWrapper.append(priceWrapper)
    
}

const main = () => {
    setTheBorderBottomColorWhenOnClick()
    checkIfLocationIsValid()
    changeDropdownStyle()
    hideLocationFilter()
}

main()




