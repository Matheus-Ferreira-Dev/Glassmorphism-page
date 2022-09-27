var type = new Typed('.typing-text',{
    strings : ['Web Designer', 'Desenvolvedor Front End', 'UX Designer'],
    typeSpeed: 110,
    loop: true,
});

let themeColor = document.querySelectorAll('.theme-toggler span');
themeColor.forEach(color => color.addEventListener('click', () => {
    let background = color.style.background;
    document.querySelector('body').style.background = background;
}))