import { set, check, update, hide } from './event-listeners.js'
import { get } from './http-requests.js'
import { factoryProperty } from './factory-functions.js'

const setTheBorderBottomColorWhenOnClick = () => {
    const targets = document.querySelectorAll('.results-wrapper button.btn')
    set(targets)
}

const checkIfLocationIsValid = () => {
    const target = document.querySelector('#property-location')
    check(target)
}

const updateDropdownStyle = () => {
    const target = document.querySelector('#property-location')
    update(target)
}

const hideLocationFilter = () => {
    const target = document.querySelector('.location-item')
    hide(target)
}

export const getCityAndState = ({ city, state }) => {
    getData({ city, state })
}

const getData = async ({ city, state }) => {
    const data = await get({ city, state })
    createCards(data)
}

const createCards = data => {
    const { search } = data
    const { result } = search
    const { listings } = result

    listings.forEach(element => {
        const { name, address, amenities, propertyStructure, price, monthlyCondoFee } = factoryProperty(element)
        const main = document.querySelector('.results-wrapper div.main')
        
        // Card
        const card = document.createElement('div')
        card.className = 'card'
        main.append(card)
        
        // Img
        const imgWrapper = document.createElement('div')
        imgWrapper.className = 'img'
        card.append(imgWrapper)
        
        // Information
        const informationWrapper = document.createElement('div')
        informationWrapper.className = 'information'
        card.append(informationWrapper)
    
        // Address
        const addressWrapper = document.createElement('div')
        addressWrapper.className = 'address'
        informationWrapper.append(addressWrapper)
        addressWrapper.innerText = address
    
        // Title
        const titleWrapper = document.createElement('div')
        titleWrapper.className = 'title'
        informationWrapper.append(titleWrapper)
        titleWrapper.innerText = name
    
        // Property Structure
        const propertyStructureWrapper = document.createElement('div')
        propertyStructureWrapper.className = 'property-structure'
        informationWrapper.append(propertyStructureWrapper)
        propertyStructureWrapper.innerHTML = `<p>${propertyStructure}</p>`
    
        // Features
        const features = document.createElement('div')
        features.className = 'features'
        informationWrapper.append(features)
    
        amenities.forEach(element => {
            const feature = document.createElement('span')
            feature.className = 'feature'
            features.append(feature)
            feature.innerText = element
        })
    
        // Price
        const priceWrapper = document.createElement('div')
        priceWrapper.className = 'price'
        informationWrapper.append(priceWrapper)
        priceWrapper.innerText = price
    
        // Condo price
        const condoPriceWrapper = document.createElement('div')
        condoPriceWrapper.className = 'condo-price'
        informationWrapper.append(condoPriceWrapper)
        condoPriceWrapper.innerHTML = `<p>${monthlyCondoFee}</p>`
    })
}

const main = () => {
    setTheBorderBottomColorWhenOnClick()
    checkIfLocationIsValid()
    updateDropdownStyle()
    hideLocationFilter()
}

main()




