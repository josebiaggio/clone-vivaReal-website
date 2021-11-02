import { set, check, update, hide, showBtns, hideBtns } from './event-listeners.js'
import { get } from './http-requests.js'
import { factoryProperty } from './factory-functions.js'

const setTheBorderBottomColor = () => {
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

const hideSummaryFilter = () => {
    const target = document.querySelector('span.filter')
    hide(target)
}

const showActionsBtn = () => {
    const targets = document.querySelectorAll('div.card')
    showBtns(targets)
}

const hideActionsBtn = () => {
    const targets = document.querySelectorAll('div.card')
    hideBtns(targets)
}

export const getCityAndState = ({ city, state }) => {
    getData({ city, state })
}

const getData = async ({ city, state }) => {
    const data = await get({ city, state })
    createSummary(data)
    createCards(data)
}

const createSummary = data => {
    const { search } = data
    const { result } = search
    const { listings } = result
    const { listing } = listings[0]
    const { address } = listing
    const { city, stateAcronym } = address

    const main = document.querySelector('.results-wrapper div.main')

    document.querySelectorAll('div.summary-title').forEach(element => element.remove())

    // Summary title
    const summaryTitleWrapper = document.createElement('div')
    summaryTitleWrapper.className = 'summary-title'
    main.append(summaryTitleWrapper)
    summaryTitleWrapper.innerHTML = `${listings.length.toString().bold()} Imóveis à venda em ${city} - ${stateAcronym}`

    document.querySelectorAll('div.summary-filter').forEach(element => element.remove())

    // Summary Filter
    const summaryfilterWrapper = document.createElement('div')
    summaryfilterWrapper.className = 'summary-filter'
    const filter = document.createElement('span')
    filter.className = 'filter'
    summaryfilterWrapper.append(filter)
    const cityfilter = document.createElement('span')
    cityfilter.className = 'city-filter'
    filter.append(cityfilter)
    cityfilter.innerText = `${city} - `
    const statefilter = document.createElement('span')
    statefilter.className = 'state-filter'
    filter.append(statefilter)
    statefilter.innerText = stateAcronym
    main.append(summaryfilterWrapper)
}

const createCards = data => {
    const { search } = data
    const { result } = search
    const { listings } = result

    listings.forEach(element => {
        const { name, address, amenities, propertyStructure, price, monthlyCondoFee, url } = factoryProperty(element)
        const main = document.querySelector('.results-wrapper div.main')

        // Card
        const card = document.createElement('div')
        card.className = 'card'
        main.append(card)

        // Img
        const imgWrapper = document.createElement('div')
        imgWrapper.className = 'img'
        card.append(imgWrapper)
        const img = document.createElement('img')
        img.className = 'property-img'
        img.src = url
        imgWrapper.append(img)

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

        // Footer
        const footerWrapper = document.createElement('div')
        footerWrapper.className = 'footer'
        informationWrapper.append(footerWrapper)

        // Prices
        const pricesWrapper = document.createElement('div')
        pricesWrapper.className = 'prices'
        footerWrapper.append(pricesWrapper)

        // Price
        const priceWrapper = document.createElement('div')
        priceWrapper.className = 'price'
        pricesWrapper.append(priceWrapper)
        priceWrapper.innerText = price

        // Condo price
        const condoPriceWrapper = document.createElement('div')
        condoPriceWrapper.className = 'condo-price'
        pricesWrapper.append(condoPriceWrapper)
        condoPriceWrapper.innerHTML = `<p>${monthlyCondoFee}</p>`

        //Actions
        const actionsWrapper = document.createElement('div')
        actionsWrapper.className = 'actions'
        footerWrapper.append(actionsWrapper)
        const phoneBtn = document.createElement('button')
        phoneBtn.className = 'phone-btn'
        phoneBtn.innerText = 'Telefone'
        const messageBtn = document.createElement('button')
        messageBtn.className = 'message-btn'
        messageBtn.innerText = 'Enviar Mensagem'
        actionsWrapper.append(phoneBtn)
        actionsWrapper.append(messageBtn)

    })

    showActionsBtn()
    hideActionsBtn()
    hideSummaryFilter()
}

const main = () => {
    setTheBorderBottomColor()
    checkIfLocationIsValid()
    updateDropdownStyle()
    hideLocationFilter()
}

main()




