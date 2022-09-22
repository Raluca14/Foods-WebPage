document.querySelector(".menu").addEventListener("click", ()=>{
    document.querySelectorAll(".target").forEach((item)=>{
        item.classList.toggle("change");
    } )
})





//prima data o sa obtiunem un vector de elemente, adica icons, acesta tine
//toate elementele de care au class .section-1-icons si sunt de variabila i
//astfel de exemplu icons[0] este prima imagine, cea cu ou
const icons = document.querySelectorAll(".section-1-icons i")
let i=1; //se decrala let pentru ca este counter si se schimba

setInterval(() => {
	i++;
    //pasul 2:
    //in icon vom folosi proprietatea querySlector care functioneaza asemenator cu getDocsByClass
    //selectam astfel primul elemente care are in componenta change, element ce prin functia scale este vizibil
    //classList are metodele remove si add si ne folosim de ele pentru a muta clasa change de la un elemente la altul

	const icon = document.querySelector(".section-1-icons .change")
	icon.classList.remove("change")
    //pasul 3:
    //pentru ca slideshow ul sa reinceapa dupa ultimul element se adauga un counter care sa tina cont cand am ajuns
    //la capatul incos si deci la ultimul element, cand se intampla asta aducem change inapoi la icons[0]
    if(i>icons.length){
        icons[0].classList.add("change");
        i=1;
    }else{
        icon.nextElementSibling.classList.add("change"); //muta clasa change la urmatorul element din icons
    }
    
    



},3000) // 3 secunde