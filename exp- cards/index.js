let panels = document.querySelectorAll('.panel')

let removeactiveclasses = () => {
    panels.forEach(panel => {
        panel.classList.remove('active');
    })
    };
    

panels.forEach(panel=>{
    panel.addEventListener('click',()=>{
        removeactiveclasses();
        panel.classList.add('active')
    })
})
