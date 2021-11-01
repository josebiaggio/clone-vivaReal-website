function Property (obj) {
    const { result } = obj.search
    const { listings } = result
    const { listing, link } = listings[0]
    const { address, bathrooms, bedrooms, parkingSpaces, usableAreas } = listing
    const { city, neighborhood, stateAcronym, street, streetNumber } = address
    const { name } = link
    return {
        name,
        address: {
            city,
            neighborhood,
            stateAcronym,
            street,
            streetNumber
        },
        bathrooms,
        bedrooms,
        parkingSpaces,
        usableAreas
    }
  }