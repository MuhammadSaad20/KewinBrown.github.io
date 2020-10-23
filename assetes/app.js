const navSlide = () =>{
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    //ToP Nav
    burger.addEventListener('click',()=>{
        nav.classList.toggle('nav-active');
        
            //Transtion link
            navLinks.forEach( (link, index)=>{
            
            console.log(index);
        //link.style.animation = `navLinkFade 0.5s ease forwards ${index/5+0.5}s`;
        //console.log(index / 7);
        //console.log(link)
        if(link.style.animation){
            link.style.animation='';
        }else{
            link.style.animation = `navLinkFade 0.5s ease forwards ${index/7+0.3}s`;
        }


    });

            //Burger animation
            burger.classList.toggle('toggle');
    });

    
}


navSlide();