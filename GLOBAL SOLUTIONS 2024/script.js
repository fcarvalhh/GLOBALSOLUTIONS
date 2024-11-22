
document.querySelectorAll('.cta-btn').forEach(button => {
    button.addEventListener('mouseover', () => {
        button.style.backgroundColor = '#18bc9c';
        button.style.color = '#fff';
    });

    button.addEventListener('mouseout', () => {
        button.style.backgroundColor = '#2c3e50';
        button.style.color = '#fff';
    });
});

// Formatação e validação do formulário da página Fale Conosco até a linha 87

function formatarCPF(cpf) {
    return cpf.replace(/\D/g, '') 
        .replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4'); 
}

function formatarTelefone(telefone) {
    return telefone.replace(/\D/g, '') 
        .replace(/^(\d{2})(\d{4})(\d{4})$/, '($1) $2-$3') 
        .replace(/^(\d{2})(\d{5})(\d{4})$/, '($1) $2-$3'); 
}

function validarCPF(cpf) {
    const regexCPF = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
    return regexCPF.test(cpf);
}


function validarTelefone(telefone) {
    const regexTelefone = /^\(\d{2}\) \d{4,5}-\d{4}$/;
    return regexTelefone.test(telefone);
}


function formatarCampos() {
    const cpfInput = document.getElementById('cpf');
    const telefoneInput = document.getElementById('telefone');

    cpfInput.addEventListener('input', function() {
        this.value = formatarCPF(this.value);
    });

    telefoneInput.addEventListener('input', function() {
        this.value = formatarTelefone(this.value);
    });
}


function enviarFormulario(event) {
    event.preventDefault(); 

    const cpf = document.getElementById('cpf').value;
    const telefone = document.getElementById('telefone').value;

 
    if (!validarCPF(cpf)) {
        alert("CPF inválido, digite novamente!");
        return false;
    }

    
    if (!validarTelefone(telefone)) {
        alert("Telefone inválido, digite novamente!");
        return false;
    }

    
    mostrarMensagemSucesso();

    
    setTimeout(function() {
        location.reload(); 
    }, 3000); 
}


function mostrarMensagemSucesso() {
    const sucessoAlert = document.getElementById('sucesso-alert');
    sucessoAlert.classList.add('show');
}


formatarCampos();
