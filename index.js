const countValue  = document.querySelector("#counter");


const increment = () => {
    //get the value from ui
    let value = parseInt(countValue.innerText);
   //update th value
    value = value+1;
    //set the value onto UI
    countValue.innerText = value;
};


const decrement = () => {
    //get the value from UI
    let value = parseInt(countValue.innerText);
    //update th value
    value = value-1;
    //set the value onto UI
    countValue.innerText = value;
};