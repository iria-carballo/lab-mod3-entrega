/* Definición de la interfaz */
interface GrupoMusical {
    nombre: string;
    añofundacion: number;
    activo: boolean;
    genero: string;
    }

/* Información de los grupos */

const grupoA : GrupoMusical = {
    nombre: 'The Beatles',
    añofundacion: 1960,
    activo: true,
    genero: "🎵 Pop Rock",

};

const grupoB: GrupoMusical = {
    nombre: 'Queen',
    añofundacion: 1970,
    activo: false,
    genero: "🎸 Rock",

};

const grupoC : GrupoMusical = {
    nombre: 'AC DC',
    añofundacion: 1973,
    activo: true,
    genero: "🤘 Hard Rock",

};

const grupoD : GrupoMusical = {
    nombre: 'Ludwig van Beethoven',
    añofundacion: 1770,
    activo: false,
    genero: "🎼 Clásica",

};

const grupoE: GrupoMusical = {
    nombre: 'The Rolling Stones',
    añofundacion: 1962,
    activo: true,
    genero: "🎸 Rock",

};

/* Estilo para el título */

const estilotitulo = "background-color:green; color:lightgreen; font-size:16px; font-weight: bold;"


/* Resultado final*/


console.log(`%c${grupoA.nombre}`, estilotitulo);

console.log(
    `- Año de fundacion: ${grupoA.añofundacion}
- En activo: ${grupoA.activo}
- Género: ${grupoA.genero}`
);

console.log("--------------------------")

console.log(`%c${grupoB.nombre}`, estilotitulo);

console.log(
    `- Año de fundacion: ${grupoB.añofundacion}
- En activo: ${grupoB.activo}
- Género: ${grupoB.genero}`
);

console.log("--------------------------")

console.log(`%c${grupoC.nombre}`, estilotitulo);

console.log(
    `- Año de fundacion: ${grupoC.añofundacion}
- En activo: ${grupoC.activo}
- Género: ${grupoC.genero}`
);

console.log("--------------------------")

console.log(`%c${grupoD.nombre}`, estilotitulo);

console.log(
    `- Año de fundacion: ${grupoD.añofundacion}
- En activo: ${grupoD.activo}
- Género: ${grupoD.genero}`
);

console.log("--------------------------")

console.log(`%c${grupoE.nombre}`, estilotitulo);

console.log(
    `- Año de fundacion: ${grupoE.añofundacion}
- En activo: ${grupoE.activo}
- Género: ${grupoE.genero}`
);
