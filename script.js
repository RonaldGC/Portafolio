function toggleContactMenu() {
    const contactMenu = document.getElementById('contact-menu');
    
    if (contactMenu.classList.contains('show')) {
        contactMenu.classList.remove('show');
        contactMenu.classList.add('none');

        
        setTimeout(() => {
            contactMenu.style.display = 'none';
        }, 300); 
    } else {
        contactMenu.style.display = 'flex';
        contactMenu.classList.remove('hidden');
        contactMenu.classList.add('show');
    }
}


