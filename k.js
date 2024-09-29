function changeColor() {
    const title = document.getElementById('title');
    const colors = ['#ff6347', '#4682b4', '#32cd32', '#ff69b4', '#ffa500'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    title.style.color = randomColor;
}