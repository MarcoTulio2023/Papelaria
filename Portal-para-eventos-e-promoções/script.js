document.addEventListener('DOMContentLoaded', function () {
    const calendarEl = document.getElementById('eventCalendar');
    const calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth',
        locale: 'pt-br',
        events: [
          { title: 'Promoção de Canetas', start: '2024-12-01' },
          { title: 'Workshop de DIY', start: '2024-12-05' },
          { title: 'Black Friday', start: '2024-12-10', end: '2024-12-12' },
          { title: 'Lançamento de Novos Produtos', start: '2024-12-15' },
        ],
        headerToolbar: {
          start: 'title',
          center: '',
          end: 'today prev,next',
        },
      });
      calendar.render();      
});

  // Função para carregar os cupons via AJAX
  function carregarCupons() {
    const promoContainer = document.getElementById('promoContainer');
    
    // Simulação de dados recebidos via API
    const cupons = [
      { id: 1, titulo: 'Desconto de 10% em Canetas', codigo: 'DESCONTO10' },
      { id: 2, titulo: 'Frete Grátis acima de R$100', codigo: 'FRETEGRATIS' },
      { id: 3, titulo: '30% OFF em Papel Sulfite', codigo: 'PAPEL30' },
    ];

    // Renderiza os cupons na página
    cupons.forEach(cupom => {
      const promoCard = document.createElement('div');
      promoCard.className = 'col-md-4';
      promoCard.innerHTML = `
        <div class="card border-primary text-center">
          <div class="card-body">
            <h5 class="card-title">${cupom.titulo}</h5>
            <p class="card-text">Use o código abaixo:</p>
            <div class="d-flex justify-content-center align-items-center">
              <input class="form-control text-center me-2" value="${cupom.codigo}" readonly id="codigo-${cupom.id}">
              <button class="btn btn-primary" onclick="copiarCodigo(${cupom.id})">
                <i class="bi bi-clipboard"></i>
              </button>
            </div>
          </div>
        </div>
      `;
      promoContainer.appendChild(promoCard);
    });
  }

  // Função para copiar o código do cupom
  function copiarCodigo(id) {
    const input = document.getElementById(`codigo-${id}`);
    input.select();
    input.setSelectionRange(0, 99999); // Compatibilidade com dispositivos móveis
    navigator.clipboard.writeText(input.value)
      .then(() => alert('Código copiado!'))
      .catch(() => alert('Erro ao copiar o código.'));
  }

  // Carregar cupons ao carregar a página
  document.addEventListener('DOMContentLoaded', carregarCupons);

  document.getElementById('newsletterForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const emailInput = document.getElementById('emailNewsletter');
    const feedback = document.getElementById('newsletterFeedback');
    const email = emailInput.value.trim();

    // Validação simples de e-mail
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      feedback.textContent = 'Por favor, insira um e-mail válido.';
      feedback.style.color = 'red';
      return;
    }

    // Simulação de envio com AJAX
    feedback.textContent = 'Enviando...';
    feedback.style.color = 'white';

    setTimeout(() => {
      // Simulação de resposta do servidor
      feedback.textContent = 'Inscrição realizada com sucesso! Confira seu e-mail.';
      feedback.style.color = 'lightgreen';
      emailInput.value = ''; // Limpa o campo de e-mail
    }, 2000);
  });





