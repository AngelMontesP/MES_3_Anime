const tabla = document.querySelector('#listaAnimes tbody');
const filtro = document.querySelector('#btnFiltrar');
const addanime= document.querySelector('#btnAddAnime')
// decalramos array de datos
let animes1 = [
    {
        "animeName": "Fullmetal Alchemist",
        "animeImagen": "https://www.crunchyroll.com/imgsrv/display/thumbnail/480x720/catalog/crunchyroll/0662921aa3b81ff85737ddeb56deefab.jpe",
        "animeEscritor": "Hiromu Arakawa",
        "animeEstado": "Finalizado",
        "animeGenero": [
            "Aventura",
            "Fantasia"
        ]
    },
    {
        "animeName": "Naruto Shippūden",
        "animeImagen": "https://i.pinimg.com/736x/bc/7a/de/bc7adee823853259c5ddb61b755dbe9e.jpg",
        "animeEscritor": "Masashi Kishimoto",
        "animeEstado": "Finalizado",
        "animeGenero": [
            "Aventura",
            "Artes Marciales",
            "Accion",
            "Comedia"
        ]
    },
    {
        "animeName": "Death Note",
        "animeImagen": "https://moviepostermexico.com/cdn/shop/files/riuka-42_1024x1024@2x.webp?v=1687359263",
        "animeEscritor": "Tsugumi Ōba",
        "animeEstado": "En emision",
        "animeGenero": [
            "Misterio",
            "Sobrenatural",
            "Thriller"
        ]
    },
    {
        "animeName": "Kimetsu no Yaiba",
        "animeImagen": "https://www.crunchyroll.com/imgsrv/display/thumbnail/480x720/catalog/crunchyroll/9b22fdc9b3c0a5e0c6373adba8b7ac61.jpe",
        "animeEscritor": "Koyoharu Gotōge",
        "animeEstado": "En emision",
        "animeGenero": [
            "Aventura",
            "Accion",
            "Fantasia Oscura"
        ]
    }
];

// localStorage.clear();
let animes=[];

if(localStorage.getItem('myArray')=== null){
localStorage.setItem('myArray', JSON.stringify(animes1));
var array = localStorage.getItem('myArray');
array = JSON.parse(array);
console.log(array);
animes = animes1;
console.log(animes);
}else{
    var array = localStorage.getItem('myArray');
    array = JSON.parse(array);
    console.log(array);
    animes= array;
    console.log(animes);
}

function cargarAnimes() {
    for (let x = 0; x < animes.length; x++) {
        let animeIterar = animes[x];

        if (animeIterar.animeEstado === "En emision") {
            const row = document.createElement('div');
            row.innerHTML += `
                    <td ><img src=" ${animeIterar.animeImagen}" class="maxImagen " alt=""></td>
                    <td ><h3> ${animeIterar.animeName}</h3></td>
                    <td><h5 class="textoAnime escritor" > ${animeIterar.animeEscritor}</h5></td>
                    <td > <h5  class="textoAnime">${animeIterar.animeGenero}</h5></td>
                    <td ><h5 class="enEmision"> ${animeIterar.animeEstado}</h5></td>
                `;
            row.className = 'tablai';
            tabla.appendChild(row);
        } else {
            const row = document.createElement('div');
            row.innerHTML += `
                        <td ><img src=" ${animeIterar.animeImagen}" class="maxImagen " alt=""></td>
                        <td ><h3> ${animeIterar.animeName}</h3></td>
                        <td><h5 class="textoAnime escritor" > ${animeIterar.animeEscritor}</h5></td>
                        <td > <h5  class="textoAnime">${animeIterar.animeGenero}</h5></td>
                        <td ><h5  class="finalizado"> ${animeIterar.animeEstado}</h5></td>
                    `;
            row.className = 'tablai';
            tabla.appendChild(row);
        }
    }
}

cargarAnimes();



function filtrarAnimes(filtrarEstado,filtrarGenero){
    const e = document.getElementById("contenedor"),
    deleted = [];
Array.from(e.childNodes).forEach(child => { e.removeChild(child); deleted.push(child.tagName); });

    for (let x = 0; x < animes.length; x++) {
        let animeIterar = animes[x];
if(animeIterar.animeEstado === filtrarEstado & animeIterar.animeGenero.includes(filtrarGenero)=== true){
        ///inicio mostrar
        if (animeIterar.animeEstado === "En emision") {
            const row = document.createElement('div');
            row.innerHTML += `
                    <td ><img src=" ${animeIterar.animeImagen}" class="maxImagen " alt=""></td>
                    <td ><h3> ${animeIterar.animeName}</h3></td>
                    <td><h5 class="textoAnime escritor" > ${animeIterar.animeEscritor}</h5></td>
                    <td > <h5  class="textoAnime">${animeIterar.animeGenero}</h5></td>
                    <td ><h5 class="enEmision"> ${animeIterar.animeEstado}</h5></td>
                `;
            row.className = 'tablai';
            tabla.appendChild(row);
        } else {
            const row = document.createElement('div');
            row.innerHTML += `
                        <td ><img src=" ${animeIterar.animeImagen}" class="maxImagen " alt=""></td>
                        <td ><h3> ${animeIterar.animeName}</h3></td>
                        <td><h5 class="textoAnime escritor" > ${animeIterar.animeEscritor}</h5></td>
                        <td > <h5  class="textoAnime">${animeIterar.animeGenero}</h5></td>
                        <td ><h5  class="finalizado"> ${animeIterar.animeEstado}</h5></td>
                    `;
            row.className = 'tablai';
            tabla.appendChild(row);
        }
    ////fin mostrar
    }
    }
}

filtro.addEventListener('click', function () {
    filtrarAnimes(animeEstado.value,animeGenero.value);
});
