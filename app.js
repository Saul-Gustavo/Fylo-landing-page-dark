const submitBtn = document.querySelector('.submit')

submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const mensaje = document.querySelector('.text');
    const emailInput = document.querySelector('.email');
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailInput.value === "" || !emailRegex.test(emailInput.value)) {
        mensaje.style.display = 'block';
        emailInput.style.border = "1.5px solid red";
    } else {
        mensaje.style.display = "none"
        emailInput.style.border = "1px solid green";
    }
})