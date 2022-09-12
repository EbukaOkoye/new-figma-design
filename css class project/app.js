const logoToggler = document.querySelector('.image');
const hide = document.querySelectorAll('.hide');
// const cards = document.querySelectorAll('.tools-cards');
const sideNav = document.querySelector('.sidenav');
const logoText = document.querySelector('.logo-text');
const category = document.querySelector('.category');

hide.forEach((el) => {
    el.style.display = 'inline-block';
});

logoText.style.display = 'inline-block';
logoText.style.transition = 'all 1s';

category.style.display = 'flex';






// click to toggle the navbar
logoToggler.addEventListener('click', () => { 

    
    

    // Hide the nav texts
    for(let i = 0; i < hide.length; i++) {

        if(hide[i].style.display === 'inline-block') {

            hide[i].style.display = 'none';
        }
        else {

            hide[i].style.display = 'inline-block';
        }

        hide[i].style.transition = 'all 1s linear';
        
    }


        
    if(logoText.style.display === 'inline-block') {

        logoText.style.display = 'none'
        
    }
    else {
        logoText.style.display = 'inline-block'
        
    }

    if(category.style.display === 'flex') {

        category.style.display = 'none'
        
    }
    else {
        category.style.display = 'flex'
        
    }
   
});

// Mouseover event for the cards
// for(let i = 0; i < cards.length; i++) {
//     cards[i].addEventListener('mouseenter', (elly) => {

//         elly.target.transform = 'scale(1.5)';
//     });
// }

