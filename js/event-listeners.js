import { getCityAndState } from './index.js'

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
        const value = this.value.toLocaleUpperCase().trim()
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

        if (locationIsValid) {
            document.querySelector('div.main').setAttribute('style', 'display: block;')
            document.querySelectorAll('div.card').forEach(element => element.remove())
            document.querySelector('div.error').setAttribute('style', 'display: none;')
            dictionary.forEach(({ location, uf }) => {
                if (locationIsValid === location) {
                    document.querySelector('.location-item').style.display = 'flex'
                    document.querySelector('.location-name').textContent = `${location} - `
                    document.querySelector('.location-uf').textContent = uf
                    getCityAndState({ city: location, state: uf })
                }
            })
        } else {
            document.querySelector('div.error').setAttribute('style', 'display: block;')
            document.querySelector('div.main').setAttribute('style', 'display: none;')
            document.querySelector('.location-item').style.display = 'none'
        }

        this.value = ''
    })
}

const update = target => {
    target.addEventListener('blur', function () {
        const display = document.querySelector('.location-item').style.display
        if (display === 'flex') {
            document.querySelector('.text-tip').setAttribute('style', 'display: none;')
            document.querySelector('.btn.dropdown-toggle').setAttribute('style', 'background-color: white;')
        } else if (display === 'none') {
            document.querySelector('.text-tip').setAttribute('style', 'display: flex;')
            document.querySelector('.btn.dropdown-toggle').setAttribute('style', 'background-color: #eeddbc;')
        }
    })
}

const hide = target => {
    target.addEventListener('click', function () {
        document.querySelector('.location-item').setAttribute('style', 'display: none;')
        document.querySelector('.text-tip').setAttribute('style', 'display: flex;')
        document.querySelectorAll('div.card').forEach(element => element.remove())
        document.querySelector('div.summary-title').remove()
        document.querySelector('div.summary-filter').remove()
        document.querySelector('.btn.dropdown-toggle').setAttribute('style', 'background-color: #eeddbc;')
    })
}

const showBtns = targets => {
    targets.forEach(element => {
        element.addEventListener('mouseover', function () {
            this.children[1].children[4].children[1].children[0].style.display = 'block'
            this.children[1].children[4].children[1].children[1].style.display = 'block'
        })
    })
}

const hideBtns = targets => {
    targets.forEach(element => {
        element.addEventListener('mouseout', function () {
            this.children[1].children[4].children[1].children[0].style.display = 'none'
            this.children[1].children[4].children[1].children[1].style.display = 'none'
        })
    })
}

export { set, check, update, hide, showBtns, hideBtns }