/* 
Snack 1:
Creare un array di oggetti, 
//ogni oggetto descriverà una bici da corsa con le seguenti proprietà:
nome
peso
Stampare a schermo la bici con peso minore 
//utilizzando destructuring e template literal
*/
const bicycles = [
    {
        nome: "Cannondale",
        peso: 7.3
    },
    {
        nome: "Giant TCR",
        peso: 6.8
    },
    {
        nome: "Tamrac SL7",
        peso: 6.9
    },
    {
        nome: "Systemsix",
        peso: 6.6
    },
    {
        nome: "Trek Madone",
        peso: 7.98
    },
    {
        nome: "Canyon Aeroad",
        peso: 7.25
    },
    {
        nome: "Trek Emonda",
        peso: 6.7
    }
];

//Stampare a schermo la bici con peso minore utilizzando destructuring e template literal

let biciLeggera = bicycles[0];


for (let i = 0; i < bicycles.length; i++) {
    const bycicle = bicycles[i];
    //cerco bici con peso minore
    if (bycicle.peso < biciLeggera.peso) {
        biciLeggera = bycicle
    }
    
}

console.log(biciLeggera);

const {nome, peso} = biciLeggera;
const markup =
`
<ul>
    <li>Nome : ${nome}</li>
    <li>Peso: ${peso}</li>
</ul>
`
document.querySelector(".container").insertAdjacentHTML("beforeend", markup);


/* 
Snack2:
Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà:
nome,
punti fatti,
falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà: Punti fatti e falli subiti.
Infine usando la destrutturazione 
//creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

*/

/* 
Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà:
nome,
punti fatti,
falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
*/

const footballTeams = [
    {
        nomeTeam: "Milan",
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nomeTeam: "Sassuolo",
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nomeTeam: "Juventus",
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nomeTeam: "Inter",
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nomeTeam: "Atalanta",
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nomeTeam: "Roma",
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nomeTeam: "Lazio",
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nomeTeam: "Vicenza",
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nomeTeam: "Genoa",
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nomeTeam: "Sampdoria",
        puntiFatti: 0,
        falliSubiti: 0
    },
]

/* Generare numeri random al posto degli 0 nelle proprietà: Punti fatti e falli subiti. */

function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}
generateRandomNumber(0, 100)

for (key in footballTeams) {
    var footballTeam = footballTeams[key];
    //console.log(footballTeam);
    footballTeam.falliSubiti = generateRandomNumber(0, 100);
    footballTeam.puntiFatti = generateRandomNumber(0, 100);
    //Infine usando la destrutturazione 
    //creiamo un nuovo array i cui elementi contengono 
    //solo nomi e falli subiti e stampiamo tutto in console.
    const { nomeTeam, falliSubiti } = footballTeam;
    console.log(nomeTeam, falliSubiti);

}
console.log(footballTeams);
