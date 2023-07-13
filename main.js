const generate = document.getElementById('generate');
generate.addEventListener('click',updateColor);

function updateColor(){
    const colorText = document.getElementById('colorText');
    const colorbox = document.getElementById('colorBox');
    
    const randomColor =  generateRandomColor();

    colorbox.style.backgroundColor = randomColor;
    colorText.textContent = randomColor;



}
function generateRandomColor(){
    const letters = "0123456789ABCDEF";
    let color  = "#";
    for(let i =0 ; i<6 ; i++){
        color += letters[Math.floor(Math.random()* 16)];
        console.log(color);
    }
    return color;
}