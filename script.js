$(document).ready(function(){
    $('#slides').slick({
        autoplay: true,
    });

    $('.menu-hamburguer').click(function(){
        $('nav').slideToggle();
    })

    $('#telefone').mask('(00) 00000-0000');

    $('form').validate({
       rules: {
        nome: {
            required: true
        },
        email: {
            required: true,
            email : true
        },
        telefone: {
            required: true
        }
        
       },
       messages: {
        nome: 'Por favor, insira seu nome'
       },
       submitHandler: function(form){
        console.log(form);
       },
       
    })

    $('.lista-veiculos button').click(function(){
        const destino = $('#contato');

        const nomeVeiculo = $(this).parent().find('h3').text();

        $('#Veiculo-interesse').val(nomeVeiculo);

        $('html').animate({
            scrollTop: destino.offset().top
        }, 1000)
    })
})