// let links = Array.from(document.querySelectorAll('ul.sidebar li:not(.title) a'));
// let ul = document.querySelector('ul.sidebar');
// let btn = document.querySelector('.menu');
// links.forEach(link => {
//     link.addEventListener('click', (e)=>{
//         for(x of links){
//             x.classList.remove('active');
//         }
//         link.classList.add('active');
//     })
// })


// btn.addEventListener('click',() => {
//     let spans = Array.from(document.querySelectorAll('ul span.link-text'));
//     if(ul.dataset.open == "true"){
//         ul.dataset.open = "false";
//         return ul.classList.add('close');
//     }
    
//     ul.classList.remove('close');
//     ul.dataset.open = "true";
// });