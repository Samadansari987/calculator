document.addEventListener("DOMContentLoaded", function () {
    const screen = document.querySelector(".screen");
    const buttons = document.querySelectorAll(".buttons");
  
   



    buttons.forEach(func1);// to perfrom the handle function with every button
    function func1(button){
 button.addEventListener("click",func2);
 console.log(button)
 function func2(){
     handleButtonClick(button.innerText)
 }
    }
  //function to perform action by checking which button is clicked
    function handleButtonClick(value) {
      if (value === "=") {
        try {
          screen.value = eval(screen.value);
        } catch (error) {
          screen.value = "Error";
        }
      } else if (value === "C") {
        screen.value = "";
      } else if (value === "DEL") {
        screen.value = screen.value.slice(0, -1);
      } else {
        screen.value += value;
      }
    }
  });
  
