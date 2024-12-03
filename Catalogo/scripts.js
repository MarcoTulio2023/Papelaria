// Inicializar o mapa
function initMap() {
    const empresaLocalizacao = { lat: -23.55052, lng: -46.633308 }; // Substitua com as coordenadas reais
    const map = new google.maps.Map(document.getElementById('map'), {
      zoom: 14,
      center: empresaLocalizacao
    });
    const marker = new google.maps.Marker({
      position: empresaLocalizacao,
      map: map
    });
  }

  // Carregar o Google Maps API
  function loadGoogleMaps() {
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap`;
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);
  }

  // Carregar o mapa após o carregamento da página
  window.onload = loadGoogleMaps;

  $(document).ready(function() {
    // Carregar Produtos via AJAX
    function carregarProdutos() {
      $.ajax({
        url: 'produtos.json',
        method: 'GET',
        dataType: 'json',
        success: function(data) {
          let produtosHTML = '';
          data.produtos.forEach(produto => {
            produtosHTML += `
              <div class="col-md-4 mb-4">
                <div class="card" data-aos="fade-up">
                  <img src="${produto.imagem}" class="card-img-top" alt="${produto.nome}">
                  <div class="card-body">
                    <h5 class="card-title">${produto.nome}</h5>
                    <p class="card-text">${produto.descricao}</p>
                    <button class="btn btn-primary" onclick="abrirDetalhes('${produto.id}')">Ver Detalhes</button>
                  </div>
                </div>
              </div>
            `;
          });
          $('#produtosContainer').html(produtosHTML);
        },
        error: function(error) {
          console.error('Erro ao carregar produtos:', error);
        }
      });
    }
  
    // Carregar Galeria via AJAX
    function carregarGaleria() {
      $.ajax({
        url: 'produtos.json',
        method: 'GET',
        dataType: 'json',
        success: function(data) {
          let galeriaHTML = '';
          data.kits.forEach(kit => {
            galeriaHTML += `
              <div class="col-md-4 mb-4">
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
          $('#kitsGaleria').html(galeriaHTML);
        },
        error: function(error) {
          console.error('Erro ao carregar galeria:', error);
        }
      });
    }
  
    // Carregar Depoimentos via AJAX
    function carregarDepoimentos() {
      $.ajax({
        url: 'produtos.json',
        method: 'GET',
        dataType: 'json',
        success: function(data) {
          let depoimentosHTML = '';
          data.depoimentos.forEach((depoimento, index) => {
            depoimentosHTML += `
              <div class="carousel-item ${index === 0 ? 'active' : ''}" data-aos="fade-up">
                <p class="text-center">"${depoimento.texto}"</p>
                <h5 class="text-center">${depoimento.nome}</h5>
              </div>
            `;
          });
          $('#depoimentosContainer').html(depoimentosHTML);
        },
        error: function(error) {
          console.error('Erro ao carregar depoimentos:', error);
        }
      });
    }
  
    // Função para abrir detalhes do produto no modal
    window.abrirDetalhes = function(produtoId) {
      $.ajax({
        url: 'produtos.json',
        method: 'GET',
        dataType: 'json',
        success: function(data) {
          const produto = data.produtos.find(p => p.id === produtoId);
          if (produto) {
            $('#detalhesProdutoModalLabel').text(produto.nome);
            $('#detalhesProdutoConteudo').html(`
              <h5>${produto.nome}</h5>
              <img src="${produto.imagem}" alt="${produto.nome}" class="img-fluid mb-3">
              <p>${produto.descricao}</p>
              <button class="btn btn-primary"><i class="bi bi-whatsapp"></i> Contato via WhatsApp</button>
            `);
            $('#detalhesProdutoModal').modal('show');
          }
        },
        error: function(error) {
          console.error('Erro ao carregar detalhes do produto:', error);
        }
      });
    }
  
    // Inicializar as funções de carregamento
    carregarProdutos();
    carregarGaleria();
    carregarDepoimentos();
  });
  