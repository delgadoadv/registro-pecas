// function calcularDuracaoKm() {
    let kmInicial = parseFloat(document.getElementById('km_inicial').value) || 0;
    let kmFinal = parseFloat(document.getElementById('km_final').value) || 0;
    let duracao = kmFinal - kmInicial;
    document.getElementById('duracao_km').value = duracao >= 0 ? duracao : 0;
// }

document.getElementById('km_inicial').addEventListener('input', calcularDuracaoKm);
document.getElementById('km_final').addEventListener('input', calcularDuracaoKm);

document.getElementById('formulario').addEventListener('submit', function(event) {
    event.preventDefault();

    let motociclista = document.getElementById('nome').value;
    let instagram = document.getElementById('instagram').value;
    let fabricante = document.getElementById('fabricante').value;
    let modelo = document.getElementById('modelo').value;
    let ano = document.getElementById('ano').value;
    let tipoPeca = document.getElementById('tipo_peca').value;
    let marcaModeloPeca = document.getElementById('marca_modelo_peca').value;
    let roda = document.getElementById('roda').value;
    let kmInicial = document.getElementById('km_inicial').value;
    let kmFinal = document.getElementById('km_final').value;
    let duracaoKm = document.getElementById('duracao_km').value;
    let observacoes = document.getElementById('observacoes').value;

    // Exibir mensagem de confirmação por 5 segundos
    let mensagem = document.createElement('div');
    mensagem.textContent = 'Cadastro realizado com sucesso!';
    mensagem.style.backgroundColor = '#dff0d8';
    mensagem.style.padding = '10px';
    mensagem.style.marginTop = '10px';
    mensagem.style.border = '1px solid #c3e6cb';
    mensagem.style.borderRadius = '4px';
    mensagem.style.color = '#155724';
    document.body.appendChild(mensagem);
    setTimeout(() => {
        mensagem.remove();
    }, 5000);

    // Enviar o formulário
    this.submit();
