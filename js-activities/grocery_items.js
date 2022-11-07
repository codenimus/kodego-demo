// Grocery Items
let groceryItems = ["A Partridge on a Pear Tree", "10 Apples", "2 Turtle Doves", "9 Orranges", "3 French Hens", "8 Unipack Sardines (Hot)", "4 Calling Birds", "7 Kgs of Rice", "5 Golden Rings", "6 Corned Beef", "6 Laying Geese", "5 Packs Pancit Canton", "7 Swimming Swans", "4 Kgs Pork Kasim (Raw)", "8 Milkmaids", "3 Whole Roasted Chicken", "9 Ladies Dancing Toy", "2 Kgs Crispy Pata", "12 Drummer-Boy Toy", "1 Whole Lechong Baboy"];
displayGroceryList = "";

for(i = 0; i < groceryItems.length; i++) {
    displayGroceryList += "<li>" + groceryItems[i] + "</li>";
}
document.getElementById("grcryitms").innerHTML = displayGroceryList;