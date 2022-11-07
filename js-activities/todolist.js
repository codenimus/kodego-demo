// To Do List
let everydayRoutine = ["Pray to God before starting the day.", "Exercise for 15 to 20 min. (Warm-up included).", "Take a shower.", "Have a healthy breakfast.", "Go to work, then go straight back home, (no need to list all that is obvious, everything is performed as usual).", "Upon rturning home, take a rest, then have your dinner (provided that you have someone at home to cook for you, if you have no one, then I'm sorry, you need to skip the resting part.).", "Take a shower.", "Rest while reading whatever pleases you.", "End the day with a prayer, then sleep.", "Repeat the process."];
routine = everydayRoutine.length;
i = 0;
displayRoutine = "";

while(i < routine) {
    displayRoutine += "<li>" + everydayRoutine[i] + "</li>";
    i++;
}
document.getElementById("todonato").innerHTML = displayRoutine;