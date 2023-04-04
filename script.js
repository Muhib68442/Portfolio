window.addEventListener('scroll', function() {
    var sections = ['.home', '.about', '.projects', '.skills', '.contact'];
    var listItems = ['.home-li', '.about-li', '.projects-li', '.skills-li', '.contact-li'];
    var maxSectionHeight = 0;
    var currentSectionIndex;
    for (var i = 0; i < sections.length; i++) {
        var sectionElement = document.querySelector(sections[i]);
        var sectionPosition = sectionElement.getBoundingClientRect();
        var sectionHeight = Math.min(sectionPosition.bottom, window.innerHeight) - Math.max(sectionPosition.top, 0);
        if (sectionHeight > maxSectionHeight) {
            maxSectionHeight = sectionHeight;
            currentSectionIndex = i;
        }
    }
    // Highlight
    for (var i = 0; i < listItems.length; i++) {
        var listItemElement = document.querySelector(listItems[i]);
        if (i === currentSectionIndex) {
            listItemElement.style = '4px solid #1176ff';
            listItemElement.style.borderLeft = '4px solid #1176ff';
            listItemElement.style.backgroundColor = '#121212';  
            listItemElement.style.color = '#1176ff';
            listItemElement.style.fontWeight = '700';  
            listItemElement.style.fontSize = '20px';
            listItemElement.style.transition = '0.2s';

        } else {
            listItemElement.style.borderLeft = '';
            listItemElement.style.backgroundColor = '';
            listItemElement.style.color = '';
            listItemElement.style.fontWeight = '';  
            listItemElement.style.fontSize = '';
            listItemElement.style.transition = '';
        }
    }
});


// Skill-Animation
window.addEventListener('scroll', function() {
    var progressBars = document.querySelectorAll('.progress-bar');
    progressBars.forEach(function(progressBar) {
      var progressAnim = progressBar.querySelector('.progress-anim');
      var progressBarRect = progressBar.getBoundingClientRect();
      var isVisible = (progressBarRect.top >= 0) && (progressBarRect.bottom <= window.innerHeight);
      if (isVisible) {
        progressAnim.classList.add('start-animation');
      } else {
        progressAnim.classList.remove('start-animation');
        var newProgressAnim = progressAnim.cloneNode(true);
        progressAnim.parentNode.replaceChild(newProgressAnim, progressAnim);
      }
    });
  });