$(document).ready(function(){
    $("#telefone").mask("(00) 0 0000-0000");
    $("#cpf").mask("000.000.000-00");
    $("#cep").mask("00000-000")

    $("form").validate({
        rules:{
            nome:{required:true},
            email:{required:true},
            telefone:{required:true},
            cpf:{required:true},
            endereco:{required:true},
            cep:{required:true},
        },
        messages:{
            nome:"Por favor digite o seu nome completo",
            email:"Digite o seu E-mail",
            telefone:"Digite o seu telefone",
            cpf:"Digite o seu CPF",
            endereco:"Digite o seu endereço",
            cep:"Digite o seu CEP  "
        }
    })
})