let pagesNum = document.querySelectorAll('#pagesNum button');
let btns = document.querySelectorAll('#btns button');
let weddingCakes = document.getElementById('weddingCakes');
let birthdayCakes = document.getElementById('birthdayCakes');
let partyCakes = document.getElementById('partyCakes');
let wedImgs = document.querySelectorAll('#weddingCakes div');
let firstImgsize = wedImgs[0].clientWidth + 7;

console.log(weddingCakes.scrollLeft)

// control btns

pagesNum.forEach(button =>{

    button.addEventListener('click',()=>{
        weddingCakes.scrollLeft += button.id == "next" ? firstImgsize : -firstImgsize;
        birthdayCakes.scrollLeft += button.id == "next" ? firstImgsize : -firstImgsize;
        partyCakes.scrollLeft += button.id == "next" ? firstImgsize : -firstImgsize;
    })
})


//toggle between menus
btns.forEach(button =>{
    
    button.addEventListener('click',()=>{
        weddingCakes.style.display = button.id == "wedding" ? "block" : "none" ;  
        birthdayCakes.style.display = button.id == "birthday" ? "block" : "none" ;  
        partyCakes.style.display = button.id == "party" ? "block" : "none" ; 
        document.querySelector('.special')?.classList.remove('special') ;
        button.classList.add('special');
    })
})




