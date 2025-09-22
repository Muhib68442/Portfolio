
$(document).ready(function() {
    // jQuery STARTS ------------------------------------------------
    
    // DUMMY DATA GENERATE
    // for (let i = 0; i < 6; i++) {
    //     let html = $(".project").first().clone(true);
    //     $(".project-container").append(html);
    // }


    // HOVER ON PROJECT TO VIEW DETAILS 
    $(document).on('mouseenter', '.project', function(){
        $(this).find(".project-details")
        .fadeIn(200)
        .css("display", "flex")
        .css("min-width", "300px")
        .css("min-height", "200px");
    })

    $(document).on('mouseleave', '.project', function(){
        $(this).find(".project-details").fadeOut(200);
    })



    // function fetchProjects(){
    //     $.ajax({
    //         url : "/res/js/data.json",
    //         type : "GET",
    //         dataType : "json",
    //         success : function(data){
    //             $.each(data.projects, function(index, project) {
    //                 let html = `
    //                     <div class="project">
    //                         <img src="${project.img}" alt="${project.name}">
    //                         <div class="project-details">
    //                             <h3>${project.name}</h3>
    //                             <p>${project.desc}</p>
    //                             <ul>
    //                                 ${project.stack.map(stack => `<li>${stack}</li>`).join('')}
    //                             </ul>
    //                             <div>
    //                                 <a href="${project.live}">Live</a>
    //                                 <a href="${project.source}">Source</a>
    //                             </div>
    //                         </div>
    //                     </div>
    //                 `;
    //                 $(".project-container").append(html);
    //             })
    //         }
    //     })
    // }
    // fetchProjects();


// RENDER PROJECT CATEGORIES
 $.ajax({
    url : "/res/js/data.json",
    type : "GET",
    dataType : "json",
    success : function(data){
        Object.keys(data.projects).forEach(key => {
            let btn = "<a>" + key + "</a>"
            $("#projectCategoryBtnContainer").append(btn);
        });
        $("#projectCategoryBtnContainer").children().first().addClass("selected");
    }
});

// SHOW DATA OF SELECTED CATEGORY
$("#projectCategoryBtnContainer").on("click", "a", function(){
    $(this).siblings().removeClass("selected");
    $(this).addClass("selected");
    let key = $(this).text();
    $(".project").hide();
    fetchProject(key);
})

// SHOW FEATURED BY DEFAULT 
fetchProject("Featured");
function fetchProject(key){
    $.ajax({
        url : "/res/js/data.json",
        type : "GET",
        dataType : "json",
        success : function(data){
            let projects = data.projects[key];
            $(".project").remove();
            $.each(projects, function(index, project) {
                let html = `
                    <div class="project">
                        <img src="${project.cover}" alt="${project.name}">
                        <div class="project-details">
                            <h3>${index}</h3>
                            <p>${project.desc}</p>
                            <ul>
                                ${project.tech.map(tech => `<li>${tech}</li>`).join('')}
                            </ul>
                            <div>
                                <a href="${project.live}">Live</a>
                                <a href="${project.source}">Source</a>
                            </div>
                        </div>
                    </div>
                `;
                $(".project-container").append(html).hide().fadeIn(100);
            })
        }
    })
}



    // SHOW SKILLS 
    function fetchSkills(){
        // CALL TO JSON
        $.ajax({
            url : "/res/js/data.json", 
            type : "GET", 
            dataType : "json", 
            success : function(data){
                $.each(data.skills, function(skillName, list) {
                    // PILL 
                    let pills = list.map(skill => `
                        <div class="skillpill">
                            <span></span>
                            <p>${skill}</p>
                        </div>
                    `).join('');

                    // UPPERBLOCK + PILL
                    const html1 = `
                        <div class="skill-topic"> 
                            <div class="skill-head"> 
                                <span></span>
                                <h3>${skillName}</h3>
                            </div>
                            <div class="skillpill-container">
                                ${pills}
                            </div>
                        </div>
                    `;

                    $(".skill-container").append(html1);
                })
            }
        });

    }
    fetchSkills();



    // CONTACT
    let phone = "";
    function fetchContact(){
        $.ajax({
            url : "/res/js/data.json", 
            type : "GET", 
            dataType : "json", 
            success: function(data){
                const value = data.contact; // assuming contact is a single object
                $("#linkedinBtn").attr('href', value.linkedin);
                $("#githubBtn").attr('href', value.github);
                $("#facebookBtn").attr('href', value.facebook);
                $("#whatsappBtn").attr('href', value.whatsapp);
                $("#telegramBtn").attr('href', value.telegram);
                $("#phoneBtn").attr("href", "tel:" + value.phone);
                $("#emailBtn").attr("href", "mailto:" + value.mail);
                phone = value.phone;
                $("#cvBtn").attr("href", value.cv);
                $("#resumeBtn").attr("href", value.resume);
            }
        })
    }
    fetchContact();
    $("#phoneBtn").click(function(){
        alert("Phone : "+phone);
    })




    // FOOTER COPYRIGHT YEAR
    $("footer p span").innerHTML = new Date().getFullYear();


})