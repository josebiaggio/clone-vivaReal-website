export const get = async ({ city, state }) => {
    const cityWithoutAccent = city.normalize('NFD').replace(/[\u0300-\u036f]/g, "")
    const cityInLowerCase = cityWithoutAccent.toLowerCase()
    const cityWithoutBlankSpaces = cityInLowerCase.replace(' ', '-').replace(' ', '-')
    const stateInLowerCase = state.toLowerCase()
    const url = `https://private-9e061d-piweb.apiary-mock.com/venda?state=${stateInLowerCase}&city=${cityWithoutBlankSpaces}`
    const response = fetch(url).then(data => data.json())
    const data = await Promise.resolve(response)
    return data
}