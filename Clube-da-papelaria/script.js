// Código do botão WhatsApp
document.getElementById('whatsappBtn').addEventListener('click', function() {
    window.location.href = 'https://wa.me/1234567890';
  });

    // Função para carregar os kits via AJAX
    function carregarKits() {
      fetch('kits.json')
        .then(response => response.json())
        .then(data => {
          let galeriaHTML = '';
          data.kits.forEach(kit => {
            galeriaHTML += `
              <div class="col-md-4">
                <div class="card" data-aos="fade-up">
                  <img src="${kit.imagem}" class="card-img-top" alt="${kit.titulo}">
                  <div class="card-body">
                    <h5 class="card-title">${kit.titulo}</h5>
                    <p class="card-text">${kit.descricao}</p>
                  </div>
                </div>
              </div>
            `;
          });
          document.getElementById('kitsGaleria').innerHTML = galeriaHTML;
        });
    }
  
    // Função para carregar os depoimentos via AJAX
    function carregarDepoimentos() {
      fetch('kits.json')
        .then(response => response.json())
        .then(data => {
          let depoimentosHTML = '';
          data.depoimentos.forEach(depoimento => {
            depoimentosHTML += `
              <div class="col-md-6" data-aos="fade-up">
                <div class="card p-3 mb-3">
                  <p><strong>${depoimento.nome}</strong></p>
                  <p>${depoimento.depoimento}</p>
                </div>
              </div>
            `;
          });
          document.getElementById('depoimentosContainer').innerHTML = depoimentosHTML;
        });
    }
  
    // Carregar os kits e depoimentos quando a página carregar
    window.onload = function() {
      carregarKits();
      carregarDepoimentos();
    };

    // Inicializar o mapa
    function initMap() {
      const empresaLocalizacao = { lat: -23.55052, lng: -46.633308 }; // Exemplo de coordenadas
      const map = new google.maps.Map(document.getElementById('map'), {
        zoom: 14,
        center: empresaLocalizacao
      });
      const marker = new google.maps.Marker({
        position: empresaLocalizacao,
        map: map
      });
    }