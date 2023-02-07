let marque = document.querySelector(".marque");
let text = marque.getAttribute('data-text');
let words = ["DEVELOPMENT", 'STRATEGY', 'PRODUCT DESIGN', 'MOTION GRAPHIC', 'ART DIRECTION', 'DESIGN', 'BRANDING',
"DEVELOPMENT", 'STRATEGY', 'PRODUCT DESIGN', 'MOTION GRAPHIC', 'ART DIRECTION', 'DESIGN', 'BRANDING',
"DEVELOPMENT", 'STRATEGY', 'PRODUCT DESIGN', 'MOTION GRAPHIC', 'ART DIRECTION', 'DESIGN', 'BRANDING'
,"DEVELOPMENT", 'STRATEGY', 'PRODUCT DESIGN', 'MOTION GRAPHIC', 'ART DIRECTION', 'DESIGN',
'PRODUCT DESIGN', 'MOTION GRAPHIC', 'ART DIRECTION', 'DESIGN', 'BRANDING'
,"DEVELOPMENT", 'STRATEGY', 'PRODUCT DESIGN', 'MOTION GRAPHIC', 'ART DIRECTION', 'DESIGN',]


for(let i = 1; i < words.length; i++){
    marque.innerHTML += `<p>${words[i]}<p/> <img class="star" src="imgs/icon-star.svg" alt="">`
}