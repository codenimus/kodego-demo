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

// F&#176 to C&#176
function tempConvert(valNum) {
    valNum = parseFloat(valNum);
    document.getElementById("outputCelsius").innerHTML = (valNum-32) / 1.8;
  }

// C&#176 to F&#176
  function tempConvert2(valNum) {
    valNum = parseFloat(valNum);
    document.getElementById("outputFahrenheit").innerHTML = (valNum*1.8) + 32;
  }

  // Convert Feet to Meters
  function lengthConvert(valNum) {
    document.getElementById("outputMeter").innerHTML = valNum / 3.2808;
  }

  // Convert Meters to Feet
  function lengthConvert2(valNum) {
    document.getElementById("outputFeet").innerHTML = valNum * 3.2808;
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