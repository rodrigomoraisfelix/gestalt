$(window).scroll(function(){
    //SE A ROLAGEM FOR MAIOR OU IGUAL A 600
    //MOSTRA A SETA COM FADE
    //CASO CONTRÁRIO, OCULTA A SETA COM FADE
    if($(window).scrollTop() >= 300)
    {   
        $('.seta-home').fadeIn();
    }
    else
    {  
        $('.seta-home').fadeOut();
    }


});
$('.seta-home').click(function() {
    //aplica animação no body,html até o topo da pagina
        $('body,html').animate({
            scrollTop:0
        },1000);
    
    
    });