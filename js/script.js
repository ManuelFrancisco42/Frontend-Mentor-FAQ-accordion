document.addEventListener('DOMContentLoaded', function () {
    const toggles = document.querySelectorAll('.btn-toggle');
    
    toggles.forEach(toggle => {
      toggle.addEventListener('click', function () {
        const targetId = this.getAttribute('data-target');
        const targetElement = document.getElementById(targetId);
        
        if (targetElement.style.display === 'none' || targetElement.style.display === '') {
          targetElement.style.display = 'block';
          this.src = './assets/images/icon-minus.svg';
        } else {
          targetElement.style.display = 'none';
          this.src = './assets/images/icon-plus.svg';
        }
      });
    });
  });
  