// Odd or Even
function checkNum()
{
  num = parseInt(document.getElementById("num").value);
  if(num)
  {
    varNum = document.getElementById("displayNum");
    varNum.style.display = "block";
    if(num%2==0)
      document.getElementById("adiben").innerHTML = "Even";
    else
      document.getElementById("adiben").innerHTML = "Odd";
  }
}

// &#176F to &#176C
function tempConvert(valNum) {
    valNum = parseFloat(valNum);
    document.getElementById("outputCelsius").innerHTML = (valNum - 32) / 1.8 + " &#176C";
  }

// &#176C to &#176F
  function tempConvert2(valNum) {
    valNum = parseFloat(valNum);
    document.getElementById("outputFahrenheit").innerHTML = (valNum * 1.8) + 32 + " &#176F";
  }

  // Convert Feet to Meters
  function lengthConvert(valNum) {
    document.querySelector("#outputMeter").innerHTML = valNum / 3.2808 + " meters";
  }

  // Convert Meters to Feet-Inches
  function lengthConvert2(valNum) {
    var feet, feetTotal, inch;
    feetTotal = valNum * 3.2808;
    feet = Math.floor(feetTotal);
    inch = Math.round(feetTotal % 1 * 12);
    var outputString = `${feet} feet and ${inch} inches`;
    document.getElementById("outputFeet").innerHTML = outputString;
  }

  // Switch...Case
  function showDay() {
    let dayOfWeek = document.getElementById("selectDay").value;
    var displayMsg;

  switch(dayOfWeek) {
    case "Sunday":
      displayMsg = "It is the Lord's day! Let's go to church!";
      break;
    case "Monday":
      displayMsg = "Have a good start of your week's day!";
      break;
    case "Tuesday":
      displayMsg = "Way to go! You've got 3 more days before weekends!";
      break;
    case "Wednesday":
      displayMsg = "Wow! It's mid-week! Are you excited for the coming sale!";
      break;
    case "Thursday":
      displayMsg = "Come on, let's grab some coffee!";
      break;
    case "Friday":
      displayMsg = "Today is Black Friday Sale! You gotta fill that shopping cart!";
      break;
    case "Saturday":
      displayMsg = "You know the Pinoy saying when this day comes... Sabado nights! But don't stay up late...";
      break;  
    default:
      displayMsg = "Can't process... Write the day properly (e.g. 'Monday')";
    }
    document.getElementById("dayGreet").innerHTML = displayMsg;
  }