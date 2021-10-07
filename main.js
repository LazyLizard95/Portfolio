let userInput = document.getElementById("main");
let display = document.querySelector(".page.is-active");
window.onload = () => {
const tab_switchers = document.querySelectorAll('[data-switcher]');


for (let i = 0; i < tab_switchers.length; i++) {
    const tab_switcher = tab_switchers[i];
    const page_id = tab_switcher.dataset.tab;

    userInput.addEventListener('keyup', (event) => {
        const current_page = document.querySelector('.pages .page.is-active');
        if (event.key == 'Enter'){
            if(userInput.value == "about"){
                current_page.classList.remove('is-active');
                const next_page = document.querySelector(`.pages .page[data-page="1"]`);
                next_page.classList.add('is-active');
                console.log("I hear you! 1");
                document.getElementById("main");
            }
        }
    
        if (event.key == 'Enter'){
            if(userInput.value == "projects"){
                current_page.classList.remove('is-active');
                const next_page = document.querySelector(`.pages .page[data-page="2"]`);
                next_page.classList.add('is-active');
                console.log("I hear you! 2");
                document.getElementById("main");
            }
        }
        
        if (event.key == 'Enter'){
            if(userInput.value == "contact"){
                current_page.classList.remove('is-active');
                const next_page = document.querySelector(`.pages .page[data-page="3"]`);
                next_page.classList.add('is-active');
                console.log("I hear you! 3");
                document.getElementById("main");
            
            }
        }
        
        if (event.key == 'Enter'){
            if(userInput.value == "help"){
                
            
            }
        }
    
    });  
    
     tab_switcher.addEventListener('click', () =>{
        document.querySelector('.tabs .tab.is-active').classList.remove('is-active');
        tab_switcher.parentNode.classList.add('is-active');

        SwitchPage(page_id)
    });
    }
}

function SwitchPage (page_id) {
    const current_page = document.querySelector('.pages .page.is-active');
    current_page.classList.remove('is-active');

    const next_page = document.querySelector(`.pages .page[data-page="${page_id}"]`);
    next_page.classList.add('is-active');

}

