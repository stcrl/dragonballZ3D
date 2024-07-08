document.querySelector('.slider').addEventListener('mouseover', () => {
    document.querySelector('.slider').style.animationPlayState = 'paused';
});

document.querySelector('.slider').addEventListener('mouseout', () => {
    document.querySelector('.slider').style.animationPlayState = 'running';
});
