const element = document.querySelector("h1");
const arr = ["red","green","yellow","purple","blue","white"];


//random colors generatoe
function generateColor(){
    const randomColorLength = arr.length;
    const random = Math.floor(Math.random() * randomColorLength);
    const finalColors = arr[random];
    document.body.style.backgroundColor = finalColors;

    element.textContent = arr[random]
    

}



