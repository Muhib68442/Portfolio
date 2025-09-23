// MAIN SCRIPT
$(document).ready(function() {
    // jQuery STARTS ------------------------------------------------

    let json_url = 'https://muhib68442.github.io/Portfolio/res/js/data.json';


    // HOVER ON PROJECT TO VIEW DETAILS 
    $(document).on('mouseenter', '.project', function(){
        $(this).find(".project-details")
        .fadeIn(200)
        .css("display", "flex")
    })
    $(document).on('mouseleave', '.project', function(){
        $(this).find(".project-details").fadeOut(200);
    })

    // RENDER PROJECT CATEGORIES
    $.ajax({
        url : json_url,
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
            url : json_url,
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
            url : json_url, 
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
            url : json_url, 
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



    // THEME CHANGE BUTTON
    $(".theme").click(function(){
        $("body").toggleClass("dark");

        // DIM THE BG-IMG
        $("#landing").css("filter", "brightness(0.7)");
        if(!$("body").hasClass("dark")){
            $("#landing").css("filter", "brightness(1)");
        }
        
    });



    // FOOTER COPYRIGHT YEAR
    $("footer p span").innerHTML = new Date().getFullYear();

    // SCROLL TO TOP
    $(window).scroll(function() {
        if ($(this).scrollTop() > 200) {
            $("#scrollToTop").fadeIn();
        } else {
            $("#scrollToTop").fadeOut();
        }
    });

    $("#scrollToTop").click(function() {
        $("html, body").animate({ scrollTop: 0 }, 600);
        return false;
    });


}) // jQuery ENDS ---------------------------------------