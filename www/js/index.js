
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
$( document ).on( "click", ".show-page-loading-msg", function() {
    var $this = $( this ),
        theme = $this.jqmData( "theme" ) || $.mobile.loader.prototype.options.theme,
        msgText = $this.jqmData( "msgtext" ) || $.mobile.loader.prototype.options.text,
        textVisible = $this.jqmData( "textvisible" ) || $.mobile.loader.prototype.options.textVisible,
        textonly = !!$this.jqmData( "textonly" );
    html = $this.jqmData( "html" ) || "";
    $.mobile.loading( "show", {
        text: msgText,
        textVisible: textVisible,
        theme: theme,
        textonly: textonly,
        html: html
    });
})
    .on( "click", ".hide-page-loading-msg", function() {
        $.mobile.loading( "hide" );
    });

function out() {
    $.mobile.loading( "hide" );

}