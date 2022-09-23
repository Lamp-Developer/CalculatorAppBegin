const display = document.querySelector("#display"); //ระวังเรื่องSyntaxตายดาดเพราะ ' '  '        """   เจ้าsingle code double code \\
const buttons = document.querySelectorAll("button");//carefulSyntaxError\\

buttons.forEach((item) => {
  item.onclick = () => {
    if (item.id == "clear") {           //carefulSyntaxError\\
      display.innerText = "";
    } else if (item.id == "backspaec") {    //carefulSyntaxError\\
      let String = display.innerText.toString();
      display.innerHTML = String.substr(0, String.length - 1);
    } else if (display.innerHTML != "" && item.id == "equal") { //carefulSyntaxError\\
      display.innerText = eval(display.innerText);
    } else if (display.innerText == "" && item.id == "equal") {//carefulSyntaxError\\
      display.innerText = "Empty!";
      setTimeout(() => (display.innerText = ""), 2000);
    } else {
      display.innerText += item.id;
    }
  };
});

const themeToggleBtn = document.querySelector(".theme-toggler");    //carefulSyntaxError\\
const calculator = document.querySelector(".calculator");//carefulSyntaxError\\
const toggleIcon = document.querySelector(".toggler-icon");//carefulSyntaxError\\
let isDark = true; /*ตายตรงนี้ เพราะ truel มันมีlที่ไหนละไอชาย*/
themeToggleBtn.onclick = () => {
  calculator.classList.toggle("dark");//carefulSyntaxError\\
  themeToggleBtn.classList.toggle("active");//carefulSyntaxError\\
  isDark = !isDark;
};
