function ejecutar(){
    let opciones = $('#opciones').val();
    let valor1 = Number($('#valor1').val());
    let mensaje = ' ';
    let resultado = 0;
    switch (opciones) {
        case 'bitcoin':
            mensaje ='bitcoin con $' + valor1;
            resultado ='puedes comprar '+ valor1/500000;
            break;
        case 'Etherium':
            mensaje ='Etherium con $' + valor1;
            resultado ='puedes comprar '+  valor1/20000;
            break;
        case 'Dogcoin':
            resultado ='puedes comprar ' + valor1/.60;
            mensaje ='Dogcoin con $' + valor1;
        break;
        case 'XRP':
            resultado ='puedes comprar ' + valor1/6;
            mensaje ='XRP con $' + valor1;
            break;
        default:
            alert('No existe esta opcion!!!');
            break;
    }
    //alert(mensaje + resultado);
    swal(mensaje,resultado.toString(),'success')
}

$(document).ready(function(){
    $('#btnEjecutar').click(function() {
      ejecutar();  
    });
});