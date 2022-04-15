document.getElementById("entrada").readOnly = false;

$(document).ready(function(){ 
	var estado = false;

	$('#botonGaleria').on('click',function(){
        $('#seccionToggle').slideToggle();
		$('#main').slideToggle();

		if (estado == true) {
			$(this).text("Abrir");
			$('body').css({
				"overflow": "auto"
			});
			estado = false;
		} else {
			$(this).text("Cerrar");
			estado = true;
		}
	});
}); 

function cambiar_fondo (){
    let boton = document.getElementById('boton1')
    if (boton.classList=='boton1'){
        document.body.classList.toggle('simp')
        document.getElementById("entrada").readOnly = true;
        boton.classList.toggle('boton2')
        boton.disabled = true
    }
}
function mostrar_inputs ()
{
    var listSymbols = ['˫', 'ʢ', '˧', '˩', '﴿', '˥', '₪', 'ʯ', 'ʭ', 'ɻ', 'ѻ', 'Ӿ', 'Ҩ', 'Ԅ', '۝', '۶'];
    var parrafoEncriptado = document.getElementById("entrada").value;
    let i = 0
    let t = ""
    let s = ""
    while (i<parrafoEncriptado.length)
    {
        if (listSymbols.includes(parrafoEncriptado[i])==false)
        {
            t+=parrafoEncriptado[i]
        };
        i+=1
    }
    i = t.length-1    
    while (i>=0)
    {
        s += t[i]
        i-=1
    }
    return s;
}

function siguiente_galeria (){
    if (document.getElementById('siguiente').text == 'Siguiente >'){
        var y = document.getElementsByClassName("itemGaleria")
        var x = document.getElementsByClassName("paginaDos")
        var i
        var j
        for (i = 0; i<y.length; i++){
            y[i].style.display= "none"
        }  
        for (j = 0; j<x.length; j++){
            x[j].style.display= "flex"
        }  
        document.getElementById('siguiente').text = '< Anterior'
    }
    else{
        if (document.getElementById('siguiente').text == '< Anterior'){
            var y = document.getElementsByClassName("itemGaleria")
            var x = document.getElementsByClassName("paginaDos")
            var i
            var j
            for (i = 0; i<y.length; i++){
                y[i].style.display= "flex"
            }
            for (j = 0; j<x.length; j++){
                x[j].style.display= "none"
            }  
            document.getElementById('siguiente').text = 'Siguiente >'
        }
    }
}

function verificarChar () 
{
    var listSymbols = '˫˧ʢ˩﴿˥₪ʯʭɻѻӾҨԄ۝۶';
    var stringEntrada = String(document.getElementById("entrada").value)
    for (i=0; i<stringEntrada.length; i++){
        if (listSymbols.indexOf(stringEntrada.charAt(i),0)!=-1)
        {
            return true
        }
    }
    return false
}

function botonOnClick (){
    if(document.getElementById('entrada').value!='' && verificarChar()){
        document.getElementById('entrada').value=mostrar_inputs()
        cambiar_fondo()
        document.getElementById('tituloPrincipal').textContent='Desencriptador'
    } 
    else{
        document.getElementById('ventModal').style.display = 'block'
        document.getElementById('matrix').style.filter = "blur(3.5px)"
    }
}