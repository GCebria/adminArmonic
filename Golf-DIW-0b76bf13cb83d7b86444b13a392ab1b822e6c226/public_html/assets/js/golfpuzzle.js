

function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
    $(".palo").addClass("colocado");
    $(".bola").addClass("colocada");
}

function lanzarPelota() {
    if($(".palo").hasClass("colocado")&& $(".bola").hasClass("colocada")) {
     var tamanyoBarra = document.getElementById("barra_potencia").offsetWidth;
    var colorBarra = $("#barra_potencia").css("background-color");

    var potencia = tamanyoBarra / 60;
    potencia = potencia.toFixed(0);
    calcularPotencia(potencia);

    establecerBarra(tamanyoBarra, colorBarra);   
    }else{
        $('#modalError').modal();
    }
    
    
}
function calcularPotencia(potencia) {
    if (potencia > 8) {
        tiroFuerte();
    }
    if (potencia <= 8 && potencia >= 6) {
        tiroOptimo();
    }
    if (potencia < 6) {
        tiroFlojo();
    }
}

function tiroFuerte() {
    $(".palo").addClass("palo_potencia_fuerte");
    $(".bola").addClass("bola_potencia_fuerte");
}
function tiroOptimo() {
    $(".palo").addClass("palo_potencia_optima");
    $(".bola").addClass("bola_potencia_optima");
    setTimeout(function () {
        $('#modalVictoria').modal();
    }, 4000);
}
function tiroFlojo() {
    $(".palo").addClass("palo_potencia_floja");
    $(".bola").addClass("bola_potencia_floja");

}

function establecerBarra(tamanyo, color) {
    $("#barra_potencia").removeClass("barra_potencia");
    $("#barra_potencia").css("width", tamanyo);
    $("#barra_potencia").css("background-color", color);

}

function darPotencia() {
    $(".barra").addClass("barra_potencia");
    $(".palo").removeClass("palo_potencia_floja palo_potencia_optima palo_potencia_fuerte");
    $(".bola").removeClass("bola_potencia_fuerte bola_potencia_optima bola_potencia_floja");

}

function devolverObjetos() {
    $('.palo').appendTo(".hueco_palo");
    $('.palo').removeClass("colocado");
    $('.bola').appendTo(".hueco_bola");
    $('.bola').removeClass("colocada");
}

function instrucciones(){
    $('#modalInstrucciones').modal();
}