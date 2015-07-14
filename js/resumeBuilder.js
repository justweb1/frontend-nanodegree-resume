/*
This is empty on purpose! Your code to build the resume will go here.
 */
  
  var bio = {
	  "name" : "Justin Weberg",
	  "role" : "Front End Web Designer",
	  "contactinfo" : ["555-1212", "me@email.com", "@justinweberg", "justweb1", "http://www.justweb.ml"],
	  "location" : "Fort Worth, TX",
	  "biopic" : "https://placeimg.com/640/480/people",
	  "welcomemsg" : "Welcome to my Resume.",
	  "skills" : ["Microsoft Office Suite", "Frontend Web Design", "Desktop Support", "Networking Support"]
  };

  var education = {
    "schools" : [
    {
      "name" : "Smalltown High School",
      "city" : "Fort Worth, TX",
      "degree" : "Diploma",
      "major" : "Diploma",
      "dates" : 2000
    },
    {
      "name" : "Smalltown College",
      "city" : "Fort Worth, TX",
      "degree" : "Bachelors of Science",
      "major" : "Computer Science",
      "dates" : 2001
    }
    ],
    "onlineCourses" : [
    {
      "title" : "Frontend Web Design NanoDegree",
      "school" : "Udacity",
      "dates" : 2015,
      "url" : "udacity.com"
    }
    ]
  };
  
  var formattedName = HTMLheaderName.replace("%data%", bio.name);
  var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
  var formattedMobile = HTMLmobile.replace("%data%", bio.contactinfo[0]);
  var formattedEmail = HTMLemail.replace("%data%", bio.contactinfo[1]);
  var formattedTwitter = HTMLtwitter.replace("%data%", bio.contactinfo[2]);
  var formattedGithub = HTMLgithub.replace("%data%", bio.contactinfo[3]);
  var formattedBlog = HTMLblog.replace("%data%", bio.contactinfo[4]);
  var formattedLocation = HTMLlocation.replace("%data%", bio.location);  
  var formattedBiopic = HTMLbioPic.replace("%data%", bio.biopic);
  var formattedWelcomemsg = HTMLwelcomeMsg.replace("%data%", bio.welcomemsg);
  var formattedSkills = HTMLskills.replace("%data%", bio.skills.splice(", "));

  $("#header").prepend(formattedRole);
  $("#header").prepend(formattedName);

  $("#topContacts").prepend(formattedLocation);
  $("#topContacts").prepend(formattedBlog);
  $("#topContacts").prepend(formattedGithub);
  $("#topContacts").prepend(formattedTwitter);
  $("#topContacts").prepend(formattedEmail);
  $("#topContacts").prepend(formattedMobile);
  
  $("#header").append(formattedBiopic);
  $("#header").append(formattedWelcomemsg);
  $("#header").append(HTMLskillsStart);
  $("#header").append(formattedSkills);
  
  
  