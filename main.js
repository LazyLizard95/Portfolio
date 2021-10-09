window.onload = () => {
const tab_switchers = document.querySelectorAll('[data-switcher]');
let userInput = document.querySelector(".textBox");



userInput.addEventListener('keyup', (event) => {
    let current_page = document.querySelector('.pages .page.is-active');
    let userInput = document.querySelector(".textBox");
    userInput.value = userInput.value.toLowerCase();
    if (event.key == 'Enter'){
        
        if(userInput.value == "about"){
            current_page.classList.remove('is-active');
            let next_page = document.querySelector(`.pages .page[data-page="3"]`);
            next_page.classList.add('is-active');
            current_page = next_page;
            console.log("I hear you! 1");
            
        }
    }

    if (event.key == 'Enter'){
        if(userInput.value == "projects"){
            current_page.classList.remove('is-active');
            let next_page = document.querySelector(`.pages .page[data-page="2"]`);
            next_page.classList.add('is-active');
            current_page = next_page;
            console.log("I hear you! 2");
            
        }
    }
    
    if (event.key == 'Enter'){
        if(userInput.value == "contact"){
            current_page.classList.remove('is-active');
            let next_page = document.querySelector(`.pages .page[data-page="4"]`);
            next_page.classList.add('is-active');
            current_page = next_page;
            console.log("I hear you! 3");
            
        
        }
    }
    
    if (event.key == 'Enter'){
        if(userInput.value == "help"){
            alert("Lost are we? Commands I am willing to remind you of include the following: About, Projects, and Contact.")
            
        }
    }

});  



for (let i = 0; i < tab_switchers.length; i++) {
    const tab_switcher = tab_switchers[i];
    const page_id = tab_switcher.dataset.tab;

    
    
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

