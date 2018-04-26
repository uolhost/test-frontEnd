$(document).ready(function () {
   
    getJsonData('');

    // Busca no arquivo por nome ou email quando aperta as teclas no input de busca
    $("#buscar").keyup(function( event ) {
       var a = $("#buscar").val();
       getJsonData(a);
    });

    // Limpa a caixa de busca
    $("#botao-limpar").click(function() {
        getJsonData('');
        $("#buscar").val('');
    });

    // Remove o placeholder quando esta em foco
    $('input').focus(function(){
        $(this).data('placeholder', $(this).attr('placeholder'))
               .attr('placeholder','');
     }).blur(function(){
        $(this).attr('placeholder', $(this).data('placeholder'));
     });


});


$(document).ready(function () {
   
    getJsonData('');

    // Busca no arquivo por nome ou email quando aperta as teclas no input de busca
    $("#buscar").keyup(function( event ) {
       var a = $("#buscar").val();
       getJsonData(a);
    });

    // Limpa a caixa de busca
    $("#botao-limpar").click(function() {
        getJsonData('');
        $("#buscar").val('');
    });

    // Remove o placeholder quando esta em foco
    $('input').focus(function(){
        $(this).data('placeholder', $(this).attr('placeholder'))
               .attr('placeholder','');
     }).blur(function(){
        $(this).attr('placeholder', $(this).data('placeholder'));
     });


});


function getJsonData(busca){

    function sortJsonName(a,b){
	    return a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1;
	};

    $.getJSON('users.json', function (data) {

        data = $(data).sort(sortJsonName);

        var cli_dados = '';       
        
        $.each(data, function(key, value) {

            var nome = value.name;
            var email = value.contact;
            var tipoStatus = value.status.type;
            var descricaoStatus = value.status.description;
            
            if(nome.toLowerCase().indexOf(busca.toLowerCase()) >= 0 ||
               email.toLowerCase().indexOf(busca.toLowerCase()) >= 0 || 
               busca == ''){

                cli_dados += '<div class="result">';             
                cli_dados += '<div id="foto-perfil"><img src="images/foto-perfil.png" alt="Foto Perfil"></div>';
                
                cli_dados += '    <div id="nome-contato">';

                if(tipoStatus == 'WAITING' || tipoStatus == 'WAITING-ACCEPTED'){
                    cli_dados += '      <p id="nome" style="color:#999999">' + nome + '</p>';
                    cli_dados += '      <p id="contato" style="color:#999999">' + email + '</p>';
                }else{
                    cli_dados += '      <p id="nome" style="color:#1082be">' + nome + '</p>';
                    cli_dados += '      <p id="contato"  style="color:#484848">' + email + '</p>';
                }
                cli_dados += '    </div>';
                
                cli_dados += getImage(tipoStatus, descricaoStatus);
                cli_dados += '    <div id="config"><img src="images/config.jpg" alt="Config"></div>';
                cli_dados += '</div>';

            }
        });
        $('#tabela-resultado').html(cli_dados);
    });
}

function getImage(type, description){

    var color;

    switch(type){
        case 'ACTIVE':
            color = 'verde';
            break;
        case 'WAITING':
            color = 'amarelo';
            break;
        case 'EXIPIRED':
            color = 'vermelho';
            break;
        case 'WAITING-ACCEPTED':
            color = 'preto';
            break;
    }


    return '<div id="painel">' +
                '<p><img src="images/status-' + color + '.png" alt="Painel Compartilhado">' + description + '</p>'+
            '</div>';

}

function getImage(type, description){

    var color;

    switch(type){
        case 'ACTIVE':
            color = 'verde';
            break;
        case 'WAITING':
            color = 'amarelo';
            break;
        case 'EXIPIRED':
            color = 'vermelho';
            break;
        case 'WAITING-ACCEPTED':
            color = 'preto';
            break;
    }


    return '<div id="painel">' +
                '<p><img src="images/status-' + color + '.png" alt="Painel Compartilhado">' + description + '</p>'+
            '</div>';

}