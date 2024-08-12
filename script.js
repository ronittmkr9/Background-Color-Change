document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('colorButton');
    button.addEventListener('click', () => {
        // Generate a random color
        const randomColor = `hsl(${Math.floor(Math.random() * 360)}, 100%, 75%)`;
        // Apply the random color as the background color
        document.body.style.backgroundColor = randomColor;
    });
});
