/**************************************************************
 * Author: Akebu                                              *
 * Program: JS code for the increment, save & total functions *
 * Date: 29th/09.2021                                         *
 * ***********************************************************/ 

let countEl = document.getElementById("count-el");
let saveBtn = document.getElementById("save-btn");
let incrementBtn = document.getElementById("increment-btn");
let totalEl = document.getElementById("total-el");
let saveEl = document.getElementById("save-el");


//setting the count variable to 0
let count = 0;

/*
1. The increment function increments the count variable by 1.
2. The count variable is used to display the current count on the page.
3. The countEl variable is used to reference the element on the page that displays the count.
4. The increment function is called when the increment button is clicked.
*/
function increment()
{
    count++;
    countEl.textContent = count;
}

/*
1. The save() function is called when the user clicks the save button.
2. The save() function adds the count to the saveEl element.
3. The saveEl element is the element with the id of save-status.
4. The count is the number of times the user has clicked the save button.
5. The count is incremented by 1 each time the user clicks the save button.
*/
function save()
{
    let saveFeature = count + " - "
    saveEl.textContent += saveFeature;
}

/*
1. The total() function adds the value of countEl.textContent to the value of totalEl.textContent.
2. The totalEl.textContent is set to 0.
3. The countEl.textContent is set to 0.
4. The count variable is set to 0.
*/
function total()
{
    totalEl.textContent = Number (totalEl.textContent) +
    Number (countEl.textContent);
    countEl.textContent = 0
    count = 0;
}

/*********************************************************************
* this listens for a click event by the user on the increment button *
* and then performs the function inside it                           *
**********************************************************************/
incrementBtn.addEventListener("click", increment);

/*****************************************************************
* this listens for a click event by the user on the save button  *
* and then performs the function inside it                       *
*****************************************************************/
saveBtn.addEventListener("click", total);

