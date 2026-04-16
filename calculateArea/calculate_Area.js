
function calculateArea() {
   const length = parseFloat(document.getElementById("length").value);
   const width= parseFloat(document.getElementById("width").value);
   let area = length * width;
   document.getElementById("result").innerHTML = "The area of the rectangle is: " + area;

   
   const canvas = document.getElementById("myCanva");
    const ctx= canvas.getContext("2d"); 
    const scaleFactor = 1; // Scale factor to make the rectangle visible on the canvas
    const rectWidth = width * scaleFactor;
    const rectHeight = length * scaleFactor;

    // Clear the canvas before drawing
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw the rectangle
    ctx.fillStyle = "lightblue";
    ctx.fillRect(50, 50, rectWidth, rectHeight);   
    ctx.font = "20px Arial";    
    ctx.fillStyle = "black";
    ctx.fillText(width, 50 , 50 + rectHeight/2);
    ctx.fillText(length, 50 + rectWidth/2, 50);


}