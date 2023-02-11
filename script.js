
/*21-je point mon h3 ici */
const counterDisplay = document.querySelector("h3");

/*22- J'injecte à mon counterDisplay un compteur*/
let counter = 0
;


/*13- Je crée cette fonction js et je mets toute la logique dedans */
const bubbleMaker = () => {
    const bubble = document.createElement("span");
    /* 1-je viens de créer un span ici en js qui représente ma bulle*/
    
    /*3-J'injecte ma class "."bubble" ici avec le code suivant*/
    bubble.classList.add("bubble");
    
    /* 2-j'injecte ce span dans le body */
    document.body.appendChild(bubble);
    
    /*4-la bulle n'apparait pas encore car je lui ai pas donné de taille. Pour cela, je vais utiliser la méthode ci-après car je veux donner à mes bulles plusieurs tailles. "Mahs->l'objet et random->méthode. Chiffre compris entre 0 et 1 console.log(Math.random()*/
    
    // /*5-chiffre compris entre 0 et 100. tout ceci à voir dans la console*/
    // console.log(Math.random()*100);
    
    
    // /*6-Pour avoir un chiffre compris entre  100 et 200*/
    // console.log(Math.random()* 100 +100); 
    
    
    // /*7-Pour un chiffre compris entre 100 et 300 */
    // console.log(Math.random()* 200 +100); 
    
    /*8Je stok ce chiffre compris entre 100 et 300 dans une variable */
const size = Math.random()* 200 + 100 + "px"; 

/*9-Je donne une largeur et une hauteur à mes bulles grace à la valeur de la variable "size"*/
bubble.style.height = size;
bubble.style.width = size;
bubble.style.top = Math.random() * 100 +  50 + "%";
bubble.style.left = Math.random() * 100 + "%";


/*15-Je veux que mes bulles partent aussi sur la gauche */
const plusMinus =  Math.random()>0.5? 1 : -1;

bubble.style.setProperty("--left", Math.random()* 100 * plusMinus + "%"); /* 9-la bulles se déporte sur partout sur la page */


/*18-je crée l'événement click pour détruire mes bulles */
bubble.addEventListener("click", () =>{
    /*24-j'ai incrémente le compteur ici */
    counter++;

    /*25-le counter donne sa valeur à h3 et grace à textContent, on affiche ces valeurs */
    counterDisplay.textContent = counter;
    bubble.remove();
});


/*16-Je créer une fonction qui permet de supprimer la bulle chaque 8s  définie dans le css */
    setTimeout(()=> {
        bubble.remove();
    }, 8000);


};

/*14-Ici, j'appelle ma fonction "bubbleMaker" et  je lui dit que tu joue toutes les 300s */
setInterval(bubbleMaker, 000);





