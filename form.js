    const form  = document.getElementById('form'); //essa variavel ela pega o formulario pela ID
    const campos = document.querySelectorAll('.required'); //Pega todos os elementos que tem a classe required
    const spans = document.querySelectorAll('.span-required'); //Pega todos os elementos que tem a classe span-required
    const emailRegex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/; // Este é um validador de email (verifica se tem os simbolos necessários)

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        nameValidate();
        emailValidate();
        mainPasswordValidate();
        comparePassword();
    });

    function setError(index){
        campos[index].style.border = '2px solid #e63636';
        spans[index].style.display = 'block';
    }

    function removeError(index){
        campos[index].style.border = '';
        spans[index].style.display = 'none';
    }

    function nameValidate(){ // função que valida o nome
        if(campos[0].value.length < 3)
        {
            setError(0);
        }
        else
        {
            removeError(0);
        }
    }

    function raValidate(){
        if(campos[1].value.length < 3)
        {
            setError(1);
        }
        else
        {
            removeError(1);
        }
    }

    function emailValidate(){ // função que valida o email
        if(!emailRegex.test(campos[2].value))
        {
            setError(2);
        }
        else
        {
            removeError(2);
        }
    }

    function mainPasswordValidate(){ //função que valida a senha
        if(campos[3].value.length < 8)
        {
            setError(3);
        }
        else{
            removeError(3);
        }
    }

    function comparePassword(){ //compara os dois campos de senha
        if(campos[3].value == campos[4].value && campos[3].value.length >= 8) {
            removeError(4);
        }else {
            setError(4);
        }
    }

    /* */

    function pegarInformacoes(){
        let nome = campos[0].value
    
        let ra = campos[1].value

        let email = campos[2].value

        let senha = campos[3].value

        let confSenha = campos[4].value

        let descricao = document.getElementById('descricao').value

        const sexo = document.getElementsByName('sexo')
        let sexoEscolhido;

        if (sexo[0].checked == true){
            sexoEscolhido = 'Masculino'
    
        } else if (sexo[1].checked == true){
            sexoEscolhido = 'Feminino'
    
        } else if (sexo[2].checked == true){
            sexoEscolhido = 'Outro'
        }

        if (nome.length > 0 && ra.length > 0 && email.length > 0 && senha.length > 0 && descricao.length > 0 && senha === confSenha){
            let body = document.getElementsByTagName('body')[0]
            body.style.flexDirection = 'column'

            body.innerHTML = '<h1>Suas Informações:</h1>'

            body.innerHTML += `
                <h2>Nome: ${nome}</h2>
                <h2>RA: ${ra}</h2>
                <h2>Sexo: ${sexoEscolhido}</h2>
                <h2>E-mail: ${email}</h2> <br><br>
                <h2>Descrição: ${descricao}</h2>
            `
        }
    }

    