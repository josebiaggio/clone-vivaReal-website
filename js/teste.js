const sp = ['SÃO PAULO', 'SAO PAULO', 'SP']
const rj = ['RIO DE JANEIRO', 'RJ']

const value = 'Sp'.toLocaleUpperCase()
let exists = null

sp.forEach(element => {
    if(value === element) {
        exists = true
    }
}) 

console.log(exists)