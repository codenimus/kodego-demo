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