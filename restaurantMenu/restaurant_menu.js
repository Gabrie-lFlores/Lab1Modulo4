const breakfastMenu = ['Pancakes', 'Eggs Benedict', 'Oatmeal', 'Frittata'];
const mainCourseMenu = ['Steak', 'Pasta', 'Burger', 'Salmon'];
const dessertMenu = ['Cake', 'Ice Cream', 'Pudding', 'Fruit Salad'];

// string contains 5 items, each item is an  hmtl paragraph tag. Implemented using map() method.
 const breakfastMenuItemsHTML = breakfastMenu.map((item, index) => `<p>Item ${index + 1}: ${item}</p>`).join('');
        document.getElementById('breakfastMenuItems').innerHTML = breakfastMenuItemsHTML;

// string contain 4 items, each item is an  hmtl paragraph tag. Implemented using forEach loop.
let mainMenu="";
mainCourseMenu.forEach ((item, index) =>
      mainMenu+= `<p>Item ${index + 1}: ${item}</p>`);  

document.getElementById('maincourseMenuItems').innerHTML= mainMenu;

// string contain 5 items, each item is an  hmtl paragraph tag. Implemented using for loop.
let dessertMenuItemsHTML="";
for(let i=0; i<dessertMenu.length; i++){
dessertMenuItemsHTML+= `<p>Item ${i + 1}: ${dessertMenu[i]}</p>`;
} 
document.getElementById('dessertMenuItems').innerHTML = dessertMenuItemsHTML;   