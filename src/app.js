const PLAYERS = [
    "Spiderman",
    "Captain America",
    "Wonderwoman",
    "Popcorn",
    "Gemwoman",
    "Slingo",
    "Antwoman",
    "Mask",
    "Tiger",
    "Cap Shield",
    "Catwoman",
    "Fish",
    "Hulk",
    "Deadpool",
    "Black Panther",
    "Doctor Strange",
    "Thor",
    "Manhunter",
    "Yellowjacket",
    "Thanos",
];


var hero_strngth = 0;
var villain_strngth  = 0;
function rand(s,index){
    if(index % 2 == 0){
        hero_strngth +=s;
        return "hero"
    }
    villain_strngth+=s;
    return "villain"
}
// initialize players with image and strength
const initPlayers = (players) => {
    let detailedPlayers = [];
    // Create players using for loop
    // Type your code here
    players.forEach((item, index) => {
        detailedPlayers.push({
            name: item,
            strength: getRandomStrength(),
            image: 'images/super-' + (index + 1) + '.png',
            type: index % 2 == 0 ? 'hero' : 'villain',
            id: index + 1,
        });
    });
    return detailedPlayers;
    // console.log(initPlayers);
};

// getting random strength
const getRandomStrength = () => {
    // Return a random integer (0,100]
    // Note: You can use Math.random() and Math.ceil()
    return Math.ceil(Math.random() * 100);
};
console.log(getRandomStrength())


// Loop through players and accumulate HTML template
// depending of type of player(hero|villain)
// Type your code here

const see = (play) => {
    let player = document.createElement("div");
    player.classList.add("player");

    let div1 = document.createElement('div');
    div1.className = 'name';
    div1.textContent = play.name;

    let div2 = document.createElement('div');
    div2.textContent = play.strength;
    div2.className = 'strength';

    let image = document.createElement("img");
    image.setAttribute("src", play.image);
    image.setAttribute('alt', '');

    player.append(image, div1, div2);
    return player;
}



const buildPlayers = (players, type) => {
    let fragment = document.createElement('div');
    players
        .filter((player) => player.type == type)
        .forEach((player) => fragment.append(see(player)));
    return fragment.innerHTML;
};

// Display players in HTML
const viewPlayers = (players) => {
    document.getElementById('heroes').innerHTML = buildPlayers(players, 'hero');
    document.getElementById('villains').innerHTML = buildPlayers(players, 'villain');
};



let array1 = [];
let array2 = [];
let sum1 = 0;
let sum2 = 0;

const updateScore=() => {
    if (sum1 > sum2) {
        sr1++;
    }
    else if (sum1 < sum2) {
        sr2++;
    }
    sr.textContent = `${sr1}-${sr2}`;
    sessionStorage.setItem('sr1', sr1.toString());
    sessionStorage.setItem('sr2', sr2.toString());


    if(sr1 ===5){
        swal("Hero Wins");
    }
    else if(sr2 === 5){
        swal("Villain Wins");
    }
};




const viewPlayerss = (players) => {
    const heroesContainer = document.getElementById("heroes");
    const villainsContainer = document.getElementById("villains");

    heroesContainer.innerHTML = buildPlayers(players, "hero");
    villainsContainer.innerHTML = buildPlayers(players, "villain");
    array1 = players.filter(player => player.type === "hero").map(hero => hero.strength);
    array2 = players.filter(player => player.type === "villain").map(villain => villain.strength);
    console.log(array1);
    console.log(array2);

};

window.onload = () => {
    viewPlayerss(initPlayers(PLAYERS));

    for (let i = 0; i < array1.length; i++) {
        sum1 += array1[i];

    }
    console.log(sum1);
    for (let i = 0; i < array2.length; i++) {
        sum2 += array2[i];
    }
    console.log(sum2)


    sr1= Math.floor(sessionStorage.getItem('sr1'))
    sr2= Math.floor(sessionStorage.getItem('sr2'))

    updateScore();
};



//score
const sr = document.getElementById("score")
var srText = sr.textContent;
var score = srText.split('-');

var sr1 = Math.floor(score[0]);
var sr2 = Math.floor(score[1]);







