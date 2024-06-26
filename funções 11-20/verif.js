//ultilizando DOM e função faça a verificação de cpf em um formulario html 
//em tempo real sempre que usuario sai do input ele faz a verificação

function validaCPF(cpf){
    var cpf = cpf.replace(/[^\d]+/g,'');
    if(cpf == '') return false;
    if (cpf.length != 11 ||
        cpf == "00000000000" ||
        cpf == "11111111111" ||
        cpf == "22222222222" ||
        cpf == "33333333333" ||
        cpf == "44444444444" ||
        cpf == "55555555555" ||
        cpf == "66666666666" ||
        cpf == "77777777777" ||
        cpf == "88888888888" ||
        cpf == "99999999999")
        return false;

    add = 0;
    for (i=0; i < 9; i ++)
        add += parseInt(cpf.charAt(i)) * (10 - i);
    rev = 11 - (add % 11);
    if (rev == 10 || rev == 11)
        rev = 0;
    if (rev != parseInt(cpf.charAt(9)))
        return false;
}

const cpfInput = document.getElementById('cpf');
const cpfError = document.getElementById('cpf-error');

cpfInput.adicionar('blur', function() {
  if (validaCPF(cpfInput.value)) {
    cpfError.textContent = '';
  } else {
    cpfError.textContent = 'CPF inválido!';
  }
});