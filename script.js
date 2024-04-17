// Créer un événement au scroll ***********************

// Réduire la navbar quand on descend vers le vite, la remettre à sa taille initiale si on remonte tout en haut********************

// Faire apparaitre l'image de la partie improvise ***************

// Faire apparaitre la popup quand on est en bas du site

// Bonus : quand on clicke sur la popup elle disparait pour toujours

let previousScroll = 0;
//Pour pas reapparaitre
let playOnce = true

window.addEventListener("scroll", () => {

    if (window.scrollY > previousScroll) {
        navbar.style.height = "60px";
    } else {
        navbar.style.height = "90px";
    }

    let scrollValue = (window.scrollY + window.innerHeight) / document.body.offsetHeight;
    
    if (scrollValue > 0.45) {
        imgImprovise.style.transform = "translateX(0px)";
        imgImprovise.style.opacity = "1";
    }
    
    if (scrollValue > 0.85 && playOnce) {
        popup.style.transform = "translateX(0px)";
        popup.style.opacity = "1";
        playOnce = false;
    }
})


closeBtn.addEventListener("click", () => {
        popup.style.transform = "translateX(500px)";
        popup.style.opacity = "0";
})


