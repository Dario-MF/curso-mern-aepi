

const tablaMultiplicar = async (number) => {
    try {
        let tabla = `
        \n==========================
        \n ---- Tabla del ${number} ----
        \n==========================`

        for (let i = 1; i <= 10; i++) {
            tabla += `\n${number} X ${i} = ${number * i}`
        }

        return tabla
    } catch (error) {
        throw error
    }
}

module.exports = { tablaMultiplicar }