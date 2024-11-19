
document.querySelectorAll('.cta-btn').forEach(button => {
    button.addEventListener('mouseover', () => {
        button.style.backgroundColor = '#18bc9c';
        button.style.color = '#fff';
    });

    button.addEventListener('mouseout', () => {
        button.style.backgroundColor = '#2c3e50';
        button.style.color = '#fff';
    });
});
