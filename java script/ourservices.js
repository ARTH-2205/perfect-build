document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.toggle-description').forEach(button => {
        button.addEventListener('click', function() {
            const description = this.nextElementSibling;
            const isExpanded = this.getAttribute('aria-expanded') === 'true';

            description.style.display = isExpanded ? 'none' : 'block';
            this.setAttribute('aria-expanded', !isExpanded);

            const icon = this.querySelector('i');
            icon.classList.toggle('fa-chevron-down');
            icon.classList.toggle('fa-chevron-up');
        });
    });

    const searchInput = document.getElementById('search');
    const serviceBoxes = document.querySelectorAll('.service-box');

    searchInput.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase();
        serviceBoxes.forEach(service => {
            const title = service.querySelector('h3').textContent.toLowerCase();
            if (title.includes(searchTerm)) {
                service.style.display = 'block';
            } else {
                service.style.display = 'none';
            }
        });
    });
});
