document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    
    
    alert('Your message has been successfully sent!');
    
    
    this.reset(); 
});
