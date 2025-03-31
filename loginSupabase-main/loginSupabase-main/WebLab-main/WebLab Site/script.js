function showForm(type) {
    document.getElementById('subscription-type').textContent = type;
    document.getElementById('form-container').style.display = 'block';
}

function closeForm() {
    document.getElementById('form-container').style.display = 'none';
}

function confirmSubscription(event) {
    event.preventDefault();
    document.getElementById('form-container').style.display = 'none';
    const confirmationMessage = document.getElementById('confirmation-message');
    confirmationMessage.classList.add('visible');
    confirmationMessage.style.display = 'block';
    setTimeout(() => {
        confirmationMessage.classList.remove('visible');
        setTimeout(() => {
            confirmationMessage.style.display = 'none';
        }, 500); // Espera a transição terminar antes de ocultar
    }, 1900); // Mostra a mensagem por 3 segundos
}

