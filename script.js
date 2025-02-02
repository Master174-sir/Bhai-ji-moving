const canvas = document.getElementById("ballCanvas");
const ctx = canvas.getContext("2d");

// Canvas size
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Load image
const img = new Image();
img.src = "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiHMZr3z70P8oAaonnzu7AGI11ASA8gs35NOGu7rsWz79hHt4Sco9PQQB9ZOKiihJCHYXWa9waStJMteCMwNXHdSRO3GxyOfCXMBZjCy64JpWJWcCSyCPT_riT8JtVHXOSx1JEypfdzDO7Dsqbpn7DCakuH1-WWPvbpDDIdCgj1GanuaKTJV6M6DwAT2GM/s1001/Screenshot_2025-02-02-06-17-41-47_6012fa4d4ddec268fc5c7112cbb265e7.jpg";

let imageObj = {
    x: canvas.width / 2,
    y: canvas.height / 2,
    width: 100,  // Image width
    height: 100, // Image height
    dx: 5,  // Speed in x direction
    dy: 5   // Speed in y direction
};

// Function to update image position
function update() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw image
    ctx.drawImage(img, imageObj.x, imageObj.y, imageObj.width, imageObj.height);

    // Move image
    imageObj.x += imageObj.dx;
    imageObj.y += imageObj.dy;

    // Bounce from walls
    if (imageObj.x <= 0 || imageObj.x + imageObj.width >= canvas.width) {
        imageObj.dx *= -1; // Reverse direction on X-axis
    }
    if (imageObj.y <= 0 || imageObj.y + imageObj.height >= canvas.height) {
        imageObj.dy *= -1; // Reverse direction on Y-axis
    }

    requestAnimationFrame(update);
}

// Start animation after image loads
img.onload = () => {
    update();
};