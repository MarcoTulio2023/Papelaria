document.addEventListener("DOMContentLoaded", function () {
    // Aqui, adicione o código que chama addEventListener
    const form = document.getElementById('uploadForm');
    if (form) {
        form.addEventListener('submit', function (event) {
            event.preventDefault();
            // Lógica para enviar o formulário
        });
    }
});

// Inicializar AOS
AOS.init();

// Upload de Arquivos
document.getElementById('uploadForm').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Arquivo enviado com sucesso!');
});

// Calculadora de Preços
document.getElementById('calculatePrice').addEventListener('click', function () {
    const serviceType = document.getElementById('serviceType').value;
    const quantity = parseInt(document.getElementById('quantity').value);

    if (isNaN(quantity) || quantity <= 0) {
        alert('Por favor, insira uma quantidade válida.');
        return;
    }

    // Lógica de cálculo (exemplo básico)
    const pricePerUnit = serviceType === 'print' ? 0.50 : 2.00; // Preços por tipo
    const totalPrice = (pricePerUnit * quantity).toFixed(2);

    document.getElementById('priceResult').textContent = `Preço Total: R$ ${totalPrice}`;
});

// Agendamento
document.getElementById('scheduleForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;

    if (!date || !time) {
        alert('Por favor, insira data e hora válidas.');
        return;
    }

    alert(`Agendamento confirmado para ${date} às ${time}.`);
});

// Formulário de Contato
document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (!name || !email || !message) {
        alert('Por favor, preencha todos os campos.');
        return;
    }

    alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
});

// Botão Voltar ao Topo
const backToTopButton = document.getElementById('backToTop');
window.addEventListener('scroll', function () {
    if (window.scrollY > 300) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});
backToTopButton.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Botão WhatsApp
const whatsappButton = document.getElementById('whatsappButton');
whatsappButton.addEventListener('click', function () {
    window.open('https://wa.me/SEU_NUMERO_DE_WHATSAPP', '_blank');
});

function verificarHorario() { 
    const now = new Date(); 
    const day = now.getDay(); 
    const hour = now.getHours(); 
    const horarioElement = document.getElementById('horario');
    
    if ((day >= 1 && day <= 5 && hour >= 8 && hour < 18) || (day === 6 && hour >= 8 && hour < 12)) {
        horarioElement.style.backgroundColor = 'green';
        horarioElement.style.color = 'white';
        horarioElement.style.padding = '10px';
        horarioElement.style.borderRadius = '10px';
    } else {
        horarioElement.style.backgroundColor = 'red';
        horarioElement.style.color = 'white'; 
        horarioElement.style.padding = '10px';
        horarioElement.style.borderRadius = '10px';
    }
}

  