document.addEventListener('DOMContentLoaded', function() {
    
    function verificarCamposPreenchidos() {
        let nome = document.getElementById('input-nome').value.trim();
        let email = document.getElementById('input-email').value.trim();
        let assunto = document.getElementById('input-assunto').value.trim();
        let mensagem = document.getElementById('input-mensagem').value.trim();        
        let todosPreenchidos = nome !== '' && email !== '' && assunto !== '' && mensagem !== '';                
        document.getElementById('botao').disabled = !todosPreenchidos;
    }    
    
    let camposEntrada = document.querySelectorAll('.input');
    camposEntrada.forEach(function(campo) {
        campo.addEventListener('input', verificarCamposPreenchidos);
    });        
    document.getElementById('contato').addEventListener('submit', function(event) {
        event.preventDefault();         
        alert ('Formulário enviado!');
    });
});