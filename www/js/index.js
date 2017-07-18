
function menumobile() {

    var menu = $(".nav-mobile");
    var element = $(".login");
    if(menu.hasClass('open')){
        //Menu Aberto
        $('.nav-mobile').removeClass('open');
        $('.menu-open').removeClass('menu-open');


    }else{
        //Menu Fechado

        $('.nav-mobile').addClass('open');
        $('.itens').addClass('menu-open');
        $('.body-app').addClass('menu-open');
        $('.tab-content').addClass('menu-open');
        $('.tab-pane').addClass('menu-open');
    }

}