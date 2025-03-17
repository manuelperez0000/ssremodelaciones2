import axios from 'axios'

/* document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("counter-btn");
    const countSpan = document.getElementById("count");
    let count = 0;

    button.addEventListener("click", () => {
        count++
        countSpan.textContent = count
    })
}) */

document.addEventListener("DOMContentLoaded", async () => {
    const personInfo = document.getElementById("person-info")

    try {
        const response = await axios.get("https://swapi.dev/api/people/1")

        const { name, height, mass, hair_color, skin_color, gender } = response.data

        personInfo.innerHTML = /*html*/`
        <p><strong>Nombre:</strong> ${name} <b>df</b>  </p>
        <p><strong>Altura:</strong> ${height} cm</p>
        <p><strong>Peso:</strong> ${mass} kg</p>
        <p><strong>Color de cabello:</strong> ${hair_color}</p>
        <p><strong>Color de piel:</strong> ${skin_color}</p>
        <p><strong>Género:</strong> ${gender}</p>
      `
    } catch (error) {
        personInfo.innerHTML = /*html*/`<p style="color:red;">Error al cargar los datos.</p>`
        console.error(error)
    }
})
