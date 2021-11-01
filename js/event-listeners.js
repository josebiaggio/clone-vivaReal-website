import { get } from './http-requests.js'

const set = targets => {
    targets.forEach((element, index, array) => {
        element.addEventListener('click', function () {
            // Clean border bottom color of each element
            array.forEach(element => {
                element.setAttribute('style', 'border-bottom-color: white;')
            })

            this.setAttribute('style', 'border-bottom-color: cornflowerblue;')
        })
    })
}

const check = target => {
    target.addEventListener('blur', function () {
        const value = this.value.toLocaleUpperCase()
        const possibleValuesForSP = ['SÃO PAULO', 'SAO PAULO', 'SP']
        const possibleValuesForRJ = ['RIO DE JANEIRO', 'RJ']
        let locationIsValid = null

        const dictionary = [
            { location: 'São Paulo', uf: 'SP' },
            { location: 'Rio de Janeiro', uf: 'RJ' }
        ]

        possibleValuesForSP.forEach(element => {
            if (value === element) locationIsValid = 'São Paulo'
        })

        possibleValuesForRJ.forEach(element => {
            if (value === element) locationIsValid = 'Rio de Janeiro'
        })

        if(locationIsValid) {
            dictionary.forEach(({ location, uf }) => {
                if(locationIsValid === location) {
                    document.querySelector('.location-item').style.display = 'flex'
                    document.querySelector('.location-name').textContent = `${location} - `
                    document.querySelector('.location-uf').textContent = uf
                    get({ city: location, state: uf })
                }
            })
        } else {
            document.querySelector('.location-item').style.display = 'none'
        }

        this.value = ''
    })
}

const change = target => {
    target.addEventListener('blur', function () {
        const display = document.querySelector('.location-item').style.display
        if(display === 'flex') {
            document.querySelector('.text-tip').setAttribute('style', 'display: none;')
            document.querySelector('.btn.dropdown-toggle').setAttribute('style', 'background-color: white;')
        } else if(display === 'none') {
            document.querySelector('.text-tip').setAttribute('style', 'display: flex;')
            document.querySelector('.btn.dropdown-toggle').setAttribute('style', 'background-color: #eeddbc;')
        }
    })
}

const hide = target => {
    target.addEventListener('click', function () {
        this.setAttribute('style', 'display: none;')
        document.querySelector('.text-tip').setAttribute('style', 'display: flex;')
        document.querySelector('.btn.dropdown-toggle').setAttribute('style', 'background-color: #eeddbc;')
    })
}

export { set, check, change, hide }