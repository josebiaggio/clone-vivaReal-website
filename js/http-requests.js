export const get = async ({ city, state }) => {
    const cityWithoutAccent = city.normalize('NFD').replace(/[\u0300-\u036f]/g, "")
    const cityInLowerCase = cityWithoutAccent.toLowerCase()
    const cityWithoutBlankSpaces = cityInLowerCase.replace(' ', '-').replace(' ', '-')
    const stateInLowerCase = state.toLowerCase()
    const url = `https://private-9e061d-piweb.apiary-mock.com/venda?state=${stateInLowerCase}&city=${cityWithoutBlankSpaces}`
    const response = await fetch(url).then(response => response.json())
    const data = Promise.resolve(response)
    return data
}