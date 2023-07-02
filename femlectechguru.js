const triggers = document.querySelectorAll('.cool > li');
const background = document.querySelector('.dropdownBackground');
const nav = document.querySelector('.top');

function toggleEnter() {
    this.classList.add('trigger-enter');
    setTimeout(() => (this.classList.contains('trigger-enter')) && this.classList.add('trigger-enter-active'), 150);
    /* setTimeout(() => { 
        if(this.classList.contains('trigger-enter')) {
            this.classList.add('trigger-enter-active')
        }
         }, 150); */
    background.classList.add('open');

    const dropdown = this.querySelector('.dropdown');
    console.log(dropdown);
    const dropdowncoords = dropdown.getBoundingClientRect();
    const navCoords = nav.getBoundingClientRect();

    const coords = {
        height: dropdowncoords.height,
        width: dropdowncoords.width,   
        top: dropdowncoords.top - navCoords.top, 
        left: dropdowncoords.left - navCoords.left,  
        
    };
    background.style.setProperty('width', `${coords.width}px`);
    background.style.setProperty('height', `${coords.height}px`);
    background.style.setProperty('transform', `translate(${coords.left}px, ${coords.top}px)`);
    

    
}
function toggleLeave() {
    this.classList.remove('trigger-enter', 'trigger-enter-active');
    background.classList.remove('open');
    console.log('Leave...');

}

triggers.forEach(trigger => trigger.addEventListener('mouseenter', toggleEnter));
triggers.forEach(trigger => trigger.addEventListener('mouseleave', toggleLeave));