/*
This is empty on purpose! Your code to build the resume will go here.
 */
  
  var bio = {
	  "name" : "Justin Weberg",
	  "role" : "Front End Web Designer",
	  "contact" : {
      "mobile" : "800-555-1212",
      "email" : "me@email.com",
      "twitter" : "@justinweberg",
      "github" : "justweb1",
      "blog" : "http://www.justweb.ml",
  	  "location" : "Fort Worth, TX"
    },
	  "biopic" : "https://placeimg.com/640/480/people",
	  "welcomemsg" : "Welcome to my Resume.",
	  "skills" : ["Microsoft Office Suite", "Front-end Web Design", "Customer Experience", "Sales"]
  };

  var work = {
    "jobs" : [
    {
      "employer" : "Company 1",
      "title" : "Job title",
      "location" : "Boston, MA",
      "dates" : ["05/2010", "Current"],
      "description" : "Put stuff here.",
      "url" : "http://www.Company1.com"
    },
    {
      "employer" : "Company 2",
      "title" : "The Man",
      "location" : "Fort Worth, TX",
      "dates" : ["05/2009", "05/2010"],
      "description" : "It was the moon man!",
      "url" : "http://www.Company2.com"
    }
    ]
  };

  var projects = {
    "projects" : [
    {
      "title" : "Project 1",
      "dates" : ["04/2015", "05/2015"],
      "description" : "Doing Stuff",
      "images" : ["https://placeimg.com/320/240/tech", "https://placeimg.com/320/240/tech"],
      "url" : "http://www.project1.com"
    },
    {
      "title" : "Project 2",
      "dates" : ["04/2014", "05/2014"],
      "description" : "Coding and stuff",
      "images" : ["https://placeimg.com/320/240/tech", "https://placeimg.com/320/240/tech"],
      "url" : "http://www.project2.com"
    }
    ]
  };

  var education = {
    "schools" : [
    {
      "name" : "Smalltown High School",
      "location" : "Souix Falls, SD",
      "degree" : "Diploma",
      "major" : "Diploma",
      "dates" : 2000,
      "url" : "http://www.schoolsite.com"
    },
    {
      "name" : "Smalltown College",
      "location" : "Boston, MA",
      "degree" : "Bachelors of Science",
      "major" : "Computer Science",
      "dates" : 2001,
      "url" : "http://www.schoolsite2.com"
    }
    ],
    "onlineCourses" : [
    {
      "title" : "Frontend Web Design NanoDegree",
      "school" : "Udacity",
      "dates" : 2015,
      "url" : "http://www.udacity.com"
    },
    {
      "title" : "Android Programming NanoDegree",
      "school" : "Udacity",
      "dates" : "2015",
      "url" : "http://www.udacity.com"
    }
    ]
  };
  
  header.display = function() {
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    var formattedMobile = HTMLmobile.replace("%data%", bio.contact.mobile);
    var formattedEmail = HTMLemail.replace("%data%", bio.contact.email);
    var formattedTwitter = HTMLtwitter.replace("%data%", bio.contact.twitter);
    var formattedGithub = HTMLgithub.replace("%data%", bio.contact.github);
    var formattedBlog = HTMLblog.replace("%data%", bio.contact.blog);
    var formattedLocation = HTMLlocation.replace("%data%", bio.contact.location);  
    var formattedBiopic = HTMLbioPic.replace("%data%", bio.biopic);
    var formattedWelcomemsg = HTMLwelcomeMsg.replace("%data%", bio.welcomemsg);
    $("#header").prepend(formattedRole);
    $("#header").prepend(formattedName);
    $("#topContacts").prepend(formattedLocation);
    $("#topContacts").prepend(formattedBlog);
    $("#topContacts").prepend(formattedGithub);
    $("#topContacts").prepend(formattedTwitter);
    $("#topContacts").prepend(formattedEmail);
    $("#topContacts").prepend(formattedMobile);
    $("#footerContacts").append(formattedMobile);
    $("#footerContacts").append(formattedEmail);
    $("#footerContacts").append(formattedTwitter);
    $("#footerContacts").append(formattedGithub);
    $("#footerContacts").append(formattedBlog);
    $("#footerContacts").append(formattedLocation);
    $("#header").append(formattedBiopic);
    $("#header").append(formattedWelcomemsg);
    
    if(bio.skills.length > 0) {
      $("#header").append(HTMLskillsStart);
      for(skill in bio.skills) {
        var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
        $("#skills").append(formattedSkill);
      };
    };
  };

  header.display();
  

  work.display = function() {
    for(job in work.jobs) {
      var formattedWorkemployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer).replace("#", work.jobs[job].url);
      var formattedWorktitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
      var formattedWorklocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
      var formattedWorkdates = HTMLworkDates.replace("%data%", work.jobs[job].dates.splice(" - "));
      var formattedWorkdescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
      $("#workExperience").append(HTMLworkStart);
      $(".work-entry:last").append(formattedWorkemployer + formattedWorktitle);
      $(".work-entry:last").append(formattedWorklocation);
      $(".work-entry:last").append(formattedWorkdates);
      $(".work-entry:last").append(formattedWorkdescription);
    };
  };

  work.display();

  projects.display = function() {
    for(project in projects.projects) {
      var formattedProjecttitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title).replace("#", projects.projects[project].url);
      var formattedProjectsdates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
      var formattedProjectsdescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
      $("#projects").append(HTMLprojectStart);
      $(".project-entry:last").append(formattedProjecttitle);
      $(".project-entry:last").append(formattedProjectsdates);
      $(".project-entry:last").append(formattedProjectsdescription);
      for(image in projects.projects[project].images) {
        var formattedProjectsimages = HTMLprojectImage.replace("%data%", projects.projects[project].images);
        $(".project-entry:last").append(formattedProjectsimages);
      };
    };
  };

  projects.display();

  education.display = function() {
    for(school in education.schools) {
      var formattedSchoolname = HTMLschoolName.replace("%data%", education.schools[school].name).replace("#", education.schools[school].url);
      var formattedSchooldegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
      var formattedSchoolslocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
      var formattedSchooldates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
      var formattedSchoolmajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
      $("#education").append(HTMLschoolStart);
      $(".education-entry:last").append(formattedSchoolname);
      $(".education-entry:last").append(formattedSchoolslocation);
      $(".education-entry:last").append(formattedSchooldates);
      $(".education-entry:last").append(formattedSchooldegree);
      $(".education-entry:last").append(formattedSchoolmajor);
    };
    $("#education").append(HTMLonlineCourses);
    for(course in education.onlineCourses) {
      var formattedOnlinetitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title).replace("#", education.onlineCourses[course].url);
      var formattedOnlineschool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
      var formattedOnlinedates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates);
      var formattedOnlineurl = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url).replace("#", education.onlineCourses[course].url);
      $("#education").append(HTMLschoolStart);
      $('.education-entry:last').append(formattedOnlinetitle);
      $('.education-entry:last').append(formattedOnlineschool);
      $('.education-entry:last').append(formattedOnlinedates);
      // $('.education-entry:last').append(formattedOnlineurl);
    };
  };

  education.display();

  function inName(iName) {
    var newName = bio.name.split(" ");
    newName[0] = newName[0].charAt(0).toUpperCase() + newName[0].slice(1).toLowerCase();
    newName[1] = newName[1].toUpperCase();
    iName = newName[0] + " " + newName[1];
    return iName;
  };

clickLocations = [];

function logClicks(x,y) {
  clickLocations.push(
    {
      x: x,
      y: y
    }
  );
  console.log('x location: ' + x + '; y location: ' + y);
}

$(document).click(function(loc) {
  var x = loc.pageX;
  var y = loc.pageY;
  logClicks(x,y);
});

$("#main").append(internationalizeButton);
$("#map-div").append(googleMap);