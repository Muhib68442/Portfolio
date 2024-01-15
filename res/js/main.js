console.log("JS Connected from res/js/main.js");


document.addEventListener('DOMContentLoaded', function () {
    // Function to open the project popup
    // Updated openProjectPopup function
     // Updated openProjectPopup function
     window.openProjectPopup = function (title, logoSrc, createdWith, description, imageSrc, liveLink) {
        // Update popup content

        var popupContainer = document.querySelector('.project-popup .popup-container');
        var popupImage = popupContainer.querySelector('.proj-img');
        var logoImage = popupContainer.querySelector('.proj-logo');
        var projectName = popupContainer.querySelector('.proj-name');
        var createdWithText = popupContainer.querySelector('.proj-created');
        var descriptionText = popupContainer.querySelector('.proj-desc');
        var projectLink = popupContainer.querySelector('.proj-link-btn');
        var projLinkText = popupContainer.querySelector('.proj-link-text');
        
        // Set the content with the data
        popupImage.src = imageSrc;
        logoImage.src = logoSrc;
        projectName.textContent = title;
        createdWithText.textContent = createdWith;
        descriptionText.textContent = description;
        projLinkText.textContent = liveLink;
        projectLink.href = liveLink;
        
        // Show the project popup and center it
        var projectPopup = document.querySelector('.project-popup');
        projectPopup.style.display = 'block';
        projectPopup.style.top = '50%';
        projectPopup.style.left = '50%';
        projectPopup.style.transform = 'translate(-50%, -50%)';
    };


    // Function to close the project popup
    window.closeProjectPopup = function () {
        document.querySelector('.project-popup').style.display = 'none';
    };
    

    // Your JSON array of projects
    var projectsData = [
        {
            "title": "SPI Navigation",
            "logoSrc": "data/proj-thumb/proj-logo/spinav.png",
            "createdWith" : "Navigation of SPI Campus",
            "shortDesc" : "Lost in SPI Campus ? No More !",
            "description": "Lost in SPI Campus ? No More ! Our Navigation guide app helps you to find your classrooms easier in the complex building !",
            "imageSrc": "data/proj-thumb/spinav.png",
            "liveLink": "https://spinav.netlify.app"
          },
          {
            "title": "To Do",
            "logoSrc": "data/proj-thumb/proj-logo/to_do.png",
            "createdWith" : "To Do App (PHP, MySQL)",
            "shortDesc" : "A To Do Web-App",
            "description": "A ToDo Web-App that allows you to track and manage all your task and remind you of them. (Demo Version)",
            "imageSrc": "data/proj-thumb/todo.png",
            "liveLink": "http://todomuhib.42web.io"
          },
          {
            "title": "UKiit",
            "logoSrc": "data/proj-thumb/proj-logo/ukiit.png",
            "createdWith" : "Optimize your PC",
            "shortDesc" : "Utility Toolkit",
            "description": "Utility Toolkit. Make your PC Optimized, Faster and Best In Performance. UKiit contains all essential softwares and tips all in one place !",
            "imageSrc": "data/proj-thumb/ukiit.png",
            "liveLink": "https://ukiit.netlify.app"
          },
          {
            "title": "LAB IMS",
            "logoSrc": "data/proj-thumb/proj-logo/ims.png",
            "createdWith" : "Inventory Management System (PHP, MySQL)",
            "shortDesc" : "Inventory Management System for Lab",
            "description": "Inventory Manageent System for Lab, a modern version of your old system of management. LAB IMS allows you to manage your stocks and items in ease.",
            "imageSrc": "data/proj-thumb/lab_ims.jpg",
            "liveLink": "https://muhib68442.github.io/IMS-Showcase/pages/project-details.html?project=0"
          },
          {
            "title": "Muhib Photography",
            "logoSrc": "data/proj-thumb/proj-logo/muhib-photography.png",
            "createdWith" : "Photography Gallery",
            "shortDesc" : "Photography Gallery",
            "description": "A gallery of photographs clicked by Md. Muhibbur Rahman. Visit and get to see my amaizing clicks ! (Big Update on the way !)",
            "imageSrc": "data/proj-thumb/muhib-photography.jpg",
            "liveLink": "https://muhib68442.github.io/Muhib-Photography"
          },
          {
            "title": "Project C",
            "logoSrc": "data/proj-thumb/proj-logo/projectc.png",
            "createdWith" : "Basic programs with C Programming",
            "shortDesc" : "Basic programs with C Programming",
            "description": "A collection of basic programs created with C Programming. Ex. Calculation, Math, Temperature converter, Loop operations, Conversions etc",
            "imageSrc": "data/proj-thumb/projectc.png",
            "liveLink": "https://muhib68442.github.io/ProjectC/"
        }
    ];

    // Function to dynamically create project cards
    function createProjectCards() {
        var projectsContainer = document.getElementById('projectsContainer');

        projectsData.forEach(function (project, index) {
            var projectCard = document.createElement('a');
            projectCard.href = "#";
            projectCard.classList.add('project');
            projectCard.dataset.project = index; // Use the index as a unique identifier

            projectCard.innerHTML = `
                <img class="project-img" src="${project.imageSrc}" alt="project-thumb">
                <div class="project-text-container">
                    <h3>${project.title}</h3>
                    <p>${project.shortDesc}</p>
                </div>
            `;

            projectCard.addEventListener('click', function (event) {
                event.preventDefault();
                openProjectPopup(project.title, project.logoSrc, project.createdWith, project.description, project.imageSrc, project.liveLink);
            });

            projectsContainer.appendChild(projectCard);
        });
    }

    // Call the function to create project cards
    createProjectCards();
});
