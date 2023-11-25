const filtro = document.querySelector('#btnFiltrar');
const tabla = document.querySelector('#listaAnimes tbody');

function cargarUsuarios() {
    fetch('data/db.json')
        .then(respuesta => respuesta.json())
        .then(usuarios => {
            usuarios.forEach(usuario => {
                if (usuario.animeEstado === "En emision") {
                    const row = document.createElement('div');
                    row.innerHTML += `
                    <td ><img src=" ${usuario.animeImagen}" class="maxImagen " alt=""></td>
                    <td ><h3> ${usuario.animeName}</h3></td>
                    <td><h5 class="textoAnime escritor" > ${usuario.animeEscritor}</h5></td>
                    <td > <h5  class="textoAnime">${usuario.animeGenero}</h5></td>
                    <td ><h5 class="enEmision"> ${usuario.animeEstado}</h5></td>
                `;
                    row.className = 'tablai';
                    tabla.appendChild(row);
                } else {
                    const row = document.createElement('div');
                    row.innerHTML += `
                        <td ><img src=" ${usuario.animeImagen}" class="maxImagen " alt=""></td>
                        <td ><h3> ${usuario.animeName}</h3></td>
                        <td><h5 class="textoAnime escritor" > ${usuario.animeEscritor}</h5></td>
                        <td > <h5  class="textoAnime">${usuario.animeGenero}</h5></td>
                        <td ><h5  class="finalizado"> ${usuario.animeEstado}</h5></td>
                    `;
                    row.className = 'tablai';
                    tabla.appendChild(row);
                }
            });
        })
        .catch(error => console.log('Hubo un error : ' + error.message))
}



/*
function cargarUsuariosFiltro (estado) {
    console.log(selectedOption);
    fetch('data/db.json')
        .then(respuesta => respuesta.json())
        .then(usuarios => {
            usuarios.forEach(usuario => {
                if (usuario.animeEstado === estado) {
                    if (usuario.animeEstado === "En emision") {
                        const row = document.createElement('div');
                        row.innerHTML += `
                    <td ><img src=" ${usuario.animeImagen}" class="maxImagen " alt=""></td>
                    <td ><h3> ${usuario.animeName}</h3></td>
                    <td><h5 class="textoAnime escritor" > ${usuario.animeEscritor}</h5></td>
                    <td > <h5  class="textoAnime">${usuario.animeGenero}</h5></td>
                    <td ><h5 class="enEmision"> ${usuario.animeEstado}</h5></td>
                `;
                        row.className = 'tablai';
                        tabla.appendChild(row);
                    } else {
                        const row = document.createElement('div');
                        row.innerHTML += `
                        <td ><img src=" ${usuario.animeImagen}" class="maxImagen " alt=""></td>
                        <td ><h3> ${usuario.animeName}</h3></td>
                        <td><h5 class="textoAnime escritor" > ${usuario.animeEscritor}</h5></td>
                        <td > <h5  class="textoAnime">${usuario.animeGenero}</h5></td>
                        <td ><h5  class="finalizado"> ${usuario.animeEstado}</h5></td>
                    `;
                        row.className = 'tablai';
                        tabla.appendChild(row);
                    }
                }
            });
        })

        .catch(error => console.log('Hubo un error : ' + error.message))
}*/

filtro.addEventListener('click', function () {

    const e = document.getElementById("contenedor"),
        deleted = [];
    Array.from(e.childNodes).forEach(child => { e.removeChild(child); deleted.push(child.tagName); });

    var select = document.getElementById("animeEstado");
    console.log(select.value);
    fetch('data/db.json')
        .then(respuesta => respuesta.json())
        .then(usuarios => {
            usuarios.forEach(usuario => {
                if (usuario.animeEstado === select.value) {
                    if (usuario.animeEstado === "En emision") {
                        const row = document.createElement('div');
                        row.innerHTML += `
                    <td ><img src=" ${usuario.animeImagen}" class="maxImagen " alt=""></td>
                    <td ><h3> ${usuario.animeName}</h3></td>
                    <td><h5 class="textoAnime escritor" > ${usuario.animeEscritor}</h5></td>
                    <td > <h5  class="textoAnime">${usuario.animeGenero}</h5></td>
                    <td ><h5 class="enEmision"> ${usuario.animeEstado}</h5></td>
                `;
                        row.className = 'tablai';
                        tabla.appendChild(row);
                    } else {
                        const row = document.createElement('div');
                        row.innerHTML += `
                        <td ><img src=" ${usuario.animeImagen}" class="maxImagen " alt=""></td>
                        <td ><h3> ${usuario.animeName}</h3></td>
                        <td><h5 class="textoAnime escritor" > ${usuario.animeEscritor}</h5></td>
                        <td > <h5  class="textoAnime">${usuario.animeGenero}</h5></td>
                        <td ><h5  class="finalizado"> ${usuario.animeEstado}</h5></td>
                    `;
                        row.className = 'tablai';
                        tabla.appendChild(row);
                    }
                }
            });
        })
        .catch(error => console.log('Hubo un error : ' + error.message))
})

cargarUsuarios();

/* name, imagen, escritor, estado, genero*/

// function agregarAnime() {
//     let data = {
//         animeName: "Flask Room",
//         animeImagen: "Talk about Flask here.",
//         animeEscritor: "TUTUTU",
//         animeEstado: "Finalizado",
//         animeGenero: [
//             "Aventura",
//             "Artes Marciales",
//             "Comedia"]
//     }
//     fetch('data/db.json', {
//         "method": "POST",
//         "headers": { "Content-Type": "application/json" },
//         "body": JSON.stringify(data),
//     })
// }

// agregarAnime();


// async function postData() {
//     try {
//       const response = await fetch('data/db.json', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({animeName: 'Boruto'})
//       });
//       const data = await response.json();
//       console.log(data);
//     } catch (error) {
//       console.log('Error:', error);
//     }
//   }
//   postData();

const fs = require('fs');

let data = fs.readFileSync('./data/db.json');
console.log(data);