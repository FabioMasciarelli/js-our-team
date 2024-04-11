// const $one = document.queryselector.bind("");
// const $all = document.queryselectorAll.bind("");

// creare array di oggetti con le informazioni fornite

const profile = [
    {
        name: "Wayne Barnett",
        profession: "Founder & CEO",
        profileImg: "wayne-barnett-founder-ceo.jpg",
    },
    {
        name: "Angela Caroll",
        profession: "Chief Editor",
        profileImg: "angela-caroll-chief-editor.jpg",
    },
    {
        name: "Walter Gordon",
        profession: "Office Manager",
        profileImg: "walter-gordon-office-manager.jpg",
    },
    {
        name: "Angela Lopez",
        profession: "Social Media Manager",
        profileImg: "angela-lopez-social-media-manager.jpg",
    },
    {
        name: "Scott Estrada",
        profession: "Developer",
        profileImg: "scott-estrada-developer.jpg",
    },
    {
        name: "Barbara Ramos",
        profession: "Graphic Designer",
        profileImg: "barbara-ramos-graphic-designer.jpg", 
    }
];

const containerElem = document.querySelector(".container");
// console.log(containerElem);

// Stampare su console le informazioni di nome, ruolo e la stringa della foto per ogni membro del team
// Stampare le stesse informazioni su DOM sottoforma di stringhe.

for(let i = 0; i < profile.length; i++) {
    let cardElem = document.createElement("div");
    let curProfile = profile[i];
    // console.log(curProfile);
    
    for(let key in curProfile) {
        const keyProfile = document.createElement("div");
        console.log(curProfile[key]);
        keyProfile.innerHTML = curProfile[key];
        // console.log(divElem);
        cardElem.append(keyProfile);
    }
    containerElem.append(cardElem);
    // console.log(containerElem);
}