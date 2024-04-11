const $one = document.querySelector.bind(document);
const $all = document.querySelectorAll.bind(document);

// creare array di oggetti con le informazioni fornite

const profile = [
    {
        profileImg: "wayne-barnett-founder-ceo.jpg",
        name: "Wayne Barnett",
        profession: "Founder & CEO",
    },
    {
        profileImg: "angela-caroll-chief-editor.jpg",
        name: "Angela Caroll",
        profession: "Chief Editor",
    },
    {
        profileImg: "walter-gordon-office-manager.jpg",
        name: "Walter Gordon",
        profession: "Office Manager",
    },
    {
        profileImg: "angela-lopez-social-media-manager.jpg",
        name: "Angela Lopez",
        profession: "Social Media Manager",
    },
    {
        profileImg: "scott-estrada-developer.jpg",
        name: "Scott Estrada",
        profession: "Developer",
    },
    {
        profileImg: "barbara-ramos-graphic-designer.jpg", 
        name: "Barbara Ramos",
        profession: "Graphic Designer",
    }
];

const container = $one(".container");

// Stampare su console le informazioni di nome, ruolo e la stringa della foto per ogni membro del team
// Stampare le stesse informazioni su DOM sottoforma di stringhe.

for(let i = 0; i < profile.length; i++) {
    let cardElem = document.createElement("div");
    cardElem.classList.add("card");
    let curProfile = profile[i];
    let profileAttribute;

    for(let key in curProfile) {
        if(key === "name" || key === "profession" ) {
            profileAttribute = document.createElement("div");
            profileAttribute.innerHTML = curProfile[key];
            cardElem.append(profileAttribute);
        } else {
            const profileImage = document.createElement("img");
            profileImage.src = "./img/" + curProfile[key];
            cardElem.append(profileImage);
        }
    }

    container.append(cardElem);
}
