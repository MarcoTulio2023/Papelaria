document.addEventListener('DOMContentLoaded', () => {
    const formInscricao = document.getElementById('form-inscricao');
    
    formInscricao.addEventListener('submit', (e) => {
      e.preventDefault(); // Previne o envio padrão do formulário
  
      // Coleta os dados do formulário
      const nome = document.getElementById('nome').value;
      const email = document.getElementById('email').value;
  
      // Simula o envio para um servidor
      const data = { nome, email };
  
      // Mostra um carregando enquanto envia os dados
      const submitButton = formInscricao.querySelector('button[type="submit"]');
      submitButton.innerHTML = '<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Enviando...';
      submitButton.disabled = true;
  
      // AJAX: simula envio com um atraso
      setTimeout(() => {
        fetch('https://jsonplaceholder.typicode.com/posts', { // Simulando um endpoint
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data),
        })
          .then((response) => {
            if (!response.ok) throw new Error('Erro ao enviar o formulário');
            return response.json();
          })
          .then((result) => {
            // Sucesso: feedback ao usuário
            alert(`Inscrição realizada com sucesso!\nNome: ${result.nome}\nEmail: ${result.email}`);
            formInscricao.reset(); // Limpa o formulário
          })
          .catch((error) => {
            // Erro: feedback ao usuário
            alert(`Ocorreu um erro: ${error.message}`);
          })
          .finally(() => {
            // Restaura o botão de envio
            submitButton.innerHTML = 'Enviar';
            submitButton.disabled = false;
          });
      }, 1000); // Simulação de atraso
    });
  });

  document.addEventListener('DOMContentLoaded', () => {
    const btnCertificado = document.getElementById('gerar-certificado');
    const inputNome = document.getElementById('nome-usuario');
  
    btnCertificado.addEventListener('click', () => {
      const nomeUsuario = inputNome.value.trim();
  
      if (!nomeUsuario) {
        alert('Por favor, insira seu nome para gerar o certificado.');
        return;
      }
  
      // Criação do PDF
      const { jsPDF } = window.jspdf;
      const doc = new jsPDF();
  
      // Configuração do certificado
      doc.setFont('Helvetica', 'bold');
      doc.setFontSize(20);
      doc.text('Certificado de Conclusão', 105, 50, null, null, 'center');
  
      doc.setFont('Helvetica', 'normal');
      doc.setFontSize(16);
      doc.text('Certificamos que', 105, 80, null, null, 'center');
  
      doc.setFont('Helvetica', 'bold');
      doc.setFontSize(18);
      doc.text(nomeUsuario, 105, 100, null, null, 'center');
  
      doc.setFont('Helvetica', 'normal');
      doc.setFontSize(14);
      doc.text(
        'Completou o curso com excelência, demonstrando conhecimento e habilidades.',
        105,
        120,
        null,
        null,
        'center'
      );
  
      // Assinatura e data
      doc.text('Assinatura do Instrutor', 40, 160);
      doc.text('Data: ' + new Date().toLocaleDateString(), 160, 160, null, null, 'right');
  
      // Rodapé
      doc.setFontSize(12);
      doc.text('Empresa de Papelaria - Todos os direitos reservados', 105, 280, null, null, 'center');
  
      // Download do arquivo
      doc.save(`Certificado_${nomeUsuario.replace(/\s+/g, '_')}.pdf`);
    });
  });
    