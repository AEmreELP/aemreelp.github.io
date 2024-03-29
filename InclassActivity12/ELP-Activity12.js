$(document).ready(function() {
   // Click event handler for navigation links
   $("#nav_list li a").click(function(event) {
      event.preventDefault(); // Prevent default link behavior
      
      // Get the JSON file path from the clicked link's "title" attribute
      var jsonFile = "json_files/"+$(this).attr("title") + ".json";
      
      // Load the JSON data
      $.getJSON(jsonFile, function(data) {
         var speaker = data.speakers[0]; // Assuming there's only one speaker in each JSON file
         
         // Update the main content with the speaker's information
         $("main h1").text(speaker.title);
         $("main img").attr("src", speaker.image);
         $("main h2").html(speaker.month + "<br>" + speaker.speaker);
         $("main p").text(speaker.text);
      })
   });
});
