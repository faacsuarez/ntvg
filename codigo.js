var imagenesInicio = ["slider3.jpeg", "arribaazul.jpeg", "estudio1.jpeg", "varios2.jpeg", "azul.jpeg"];
var todasLasCanciones = []
var posicionEnSlider;



$(document).ready(inicio)

function inicio ()
{ 
    $(".nav-toggle").click(function(){
        $("#menu").slideToggle();
        $(this).toggleClass("cruz");
    })

    // ---------- INFO ----------

    setInterval(cargarImagenRandom, 3000);
    

    //  ---------- DISCOS ----------

    data.forEach(mostrarDatosDiscos);
    cancionesTotales()
    todasLasCanciones.forEach(mostrarDatosCanciones)
    $("#busquedaNombres").keyup(buscar)
    ocultarDiscos();
    $("#discos .oculto").click(ampliarDiscos);
    ocultandoCanciones();
    
    //  ---------- INTEGRANTES ----------

    integrantesTodos.forEach(mostrarDatosIntegrantes)
    $("#integrantes article img").click(ampliarIntegrantes);

    //  ---------- SHOWS ----------

    armarSelectDepartamentos();
    $("#filtracion").change(cambioFiltracion);
    shows.forEach(mostrarDatosShows);
    $("#departamentos").change(filtrarPorDepartamentos);
    $("#comprar").click(ampliarFormularios);


    //  ---------- SLIDER ----------

    cargarImagenRandomSlider()
    $("#avanzar").click(imagenSiguiente);
    $("#retroceder").click(imagenAnterior);

//  ---------- MODAL INICIO ----------
    
    setTimeout(mostrarMensaje, 3500);
    $("#cerrar").click(ocultarVentanaModal)
    

    //  ---------- VALIDACION MAIL ----------

    $("#email").keyup(validarEmail);
    $("#nombreUsuario , #apellidoUsuario").focusout(validarTextos);
    $("#finalizar").click(verificarCompra);
}

// ---------- INFO ----------


function cargarImagenRandom()
{
    let posicionImagen = Math.round(Math.random() * (imagenesInicio.length - 1));
    $("#randomInicio").css("background-image", 'linear-gradient(45deg, black, transparent), url(img/slider/' + imagenesInicio[posicionImagen] + ')')
    //$("#randomInicio").css("background-image", `url(img/slider/${imagenesInicio[posicionImagen]})`)
}


//  ---------- DISCOS ----------

function mostrarDatosDiscos(elemento){

    $("#discos .contenedor").append(`
        <article class="discos">
        <img alt="" src="img/discos/${elemento.portada}">
        <div>
        <h4>${elemento.titulo}</h4>
        <p>${elemento.ano}</p>
        </div>
        <a class="oculto" alt="${elemento.id}">Ver más</a>
        </article>
        `)
}

function mostrarDatosCanciones(elemento, posicion){

    $("#cancionesContenedor").append(`
        <article class="canciones">
        <p>${elemento.posicion}</p>
        <img src="img/discos/${elemento.portada}">
        <a target="_blank" href="${elemento.link}"><i class="fas fa-play"></i></a>
        <div>
        <h4>${elemento.nombre}</h4>
        <p>${elemento.titulo}</p>
        </div>
        <p>${elemento.duracion}</p>
        </article>
        `)
}

function ocultandoCanciones(){
    let input = $("#busquedaNombres").val().toLowerCase()
    
    if (input === 0){
        $(".canciones").css("display", "flex");
    }
    else{
        $(".canciones").css("display", "none");
    }
}

function buscar()
{
    let input = $("#busquedaNombres").val().toLowerCase();

    let cancionFiltrado = todasLasCanciones.filter(function(elemento){
        let nombreMinuscula = elemento.nombre.toLowerCase()

        if (input === ""){
            return
        }
        else {
            if(nombreMinuscula.includes(input) === true ) {
                return elemento
            }
        }
    })

    $("#cancionesContenedor").html("")

    if(cancionFiltrado.length===0){
        $("#cancionesContenedor").append('<p>No hay canciones con ese nombre</p>');
    }else{
        cancionFiltrado.forEach(mostrarDatosCanciones)
    }
}

function cancionesTotales(){
    data.forEach(function(disco){
        disco.canciones.forEach(function(cancion, posicion){
            var cancion2 = cancion
            cancion2["posicion"]=posicion
            var cancion3 = cancion2
            cancion2["portada"]=disco.portada
            var cancion4 = cancion3
            cancion3["titulo"]=disco.titulo
            
            todasLasCanciones.push(cancion4)
        })
    })
}

function ocultarDiscos(){
    $(".discos").slice(0, 4).show();
    $(".load_less").hide();
    $(".load_more").on('click', function(){
        $(".discos").show(400);
        $(".load_less").show();
	    $(".load_more").hide();
    })
    $(".load_less").on('click', function(){
        $(".discos:nth-of-type(n+5)").hide(400);
        $(".discos").slice(0, 4).show();
        $(".load_more").show();
	    $(".load_less").hide();
    })
}

function ampliarDiscos() {
    $("#ampliacion_discos").animate({
        top: 0
    }), 1000;
    let idAmpliar = $(this).attr("alt");
    $("#inforContent").html(`
    <img src="img/discos/${data[idAmpliar].portada}">
    <h4>${data[idAmpliar].titulo}</h4>
    <div>
    <p>${data[idAmpliar].listarCanciones()}</p>
    </div>
    <a href="${data[idAmpliar].spotify}">Escuchar en Spotify<i class="fab fa-spotify"></i></a>
    `)

    $("#cerrarDiscos").click(function() {
        $("#ampliacion_discos").animate({
            top: "-100vh"
        }), 1000;;
    })
}


//  ---------- INTEGRANTES ----------


function mostrarDatosIntegrantes(elemento){

    $("#integrantes .contenedor").append(`
        <article class="integrantes">
        <img alt="${elemento.id}" src="img/integrantes/${elemento.foto}">
        <h5>${elemento.nombre}</h5>
        <p>${elemento.rol}</p>
        </article> 
        `)
}

function ampliarIntegrantes() {
    $("#ampliacion_integrantes").animate({
        top: 0
    }), 1000;
    let idIntegrantes = $(this).attr("alt");
    $("#inforIntegrantes").html(`
    <img src="img/integrantes/${integrantesTodos[idIntegrantes].foto}">
    <h3>${integrantesTodos[idIntegrantes].nombre} ${integrantesTodos[idIntegrantes].apellido}</h3>
    <h5>${integrantesTodos[idIntegrantes].rol}</h5>
    <p>Edad: ${integrantesTodos[idIntegrantes].edad}</p>
    <p>Apodo: ${integrantesTodos[idIntegrantes].apodo}</p>
    <p>Nacionalidad: ${integrantesTodos[idIntegrantes].nacionalidad}</p>
    <p>Canción preferida: ${integrantesTodos[idIntegrantes].cancionpreferida}</p>
    <p>Hobbies: ${integrantesTodos[idIntegrantes].hobbies}</p>
    <p>Signo: ${integrantesTodos[idIntegrantes].signo}</p>
    `)

    $("#cerrarIntegrantes").click(function() {
        $("#ampliacion_integrantes").animate({
            top: "-100vh"
        }), 1000;;
    })
}

//  ---------- SHOWS ----------

function mostrarDatosShows(elemento){

    $("#shows .listashows").append(`
        <article class="shows">
        <img src="img/shows/${elemento.imagen}">
        <div class="ubicacion">
        <div>
        <h5><i class="fas fa-map-marker-alt"></i>${elemento.departamento}</h5>
        <p>${elemento.ubicacion}</p>
        </div>
        <div>
        <h5><i class="far fa-calendar-alt"></i>${elemento.fecha}</h5>
        <p>${elemento.hora}</p>
        </div>
        </div>
        <div class="precio">
        <p>precio:</p>
        <b><p>$${elemento.precio} UY</p></b>
        </div>
        <a id="comprar" alt="${elemento.id}">Comprar<i class="fas fa-shopping-cart"></i></a>
        </article>
        `)
}

function armarSelectDepartamentos()
{
    let arrayDepartamentos = [];

    shows.forEach(function(elemento) {
        if(arrayDepartamentos.includes(elemento.departamento) === false)
        {
            arrayDepartamentos.push(elemento.departamento)
        }
    });

    arrayDepartamentos.forEach(function(elemento) {
        $("#departamentos").append(`
        <option value="${elemento}">${elemento}</option>
    `)
    })
}

function filtrarPorDepartamentos()
{
    let departamentoSeleccionado = $("#departamentos").val();

    let departamentosFiltrados = shows.filter(function(elemento){
        if(elemento.departamento === departamentoSeleccionado || departamentoSeleccionado === "todos"){
            return elemento
        }
    })

    $("#shows .listashows").html("")
    departamentosFiltrados.forEach(mostrarDatosShows)
    $("#comprar").click(ampliarFormularios);
}


function cambioFiltracion (){
    var filtroSeleccionada = $("#filtracion").val();

    if(filtroSeleccionada === "reciente"){
        shows.sort(function compare(a, b) {
                var dateA = new Date(a.fecha);
                var dateB = new Date(b.fecha);
                return dateA - dateB;
            }); 
            
        }
        else if(filtroSeleccionada === "lejano"){
        shows.sort(function compare(a, b) {
                var dateA = new Date(a.fecha);
                var dateB = new Date(b.fecha);
                return dateB - dateA;
            }); 

        }
        else if(filtroSeleccionada === "menor"){
        shows.sort(function compare(a, b) {
                return a.precio - b.precio;
            }); 
            
        }
        else if(filtroSeleccionada === "mayor"){
        shows.sort(function compare(a, b) {
                return b.precio - a.precio;
            });  
        }
    
    $("#shows .listashows").html("")
    shows.forEach(mostrarDatosShows)
    $("#comprar").click(ampliarFormularios);
}



function ampliarFormularios() {
    $("#ampliacion_formulario").animate({
        top: 0
    }), 1000;
    let identifiacion = $(this).attr("alt");
    alert(identifiacion)
    $("#contenido").html(`
    <h3>Formulario de compra</h3>
    <p id="confirmacion"></p>
    <p>Usted está comprando una entrada para: ${shows[identifiacion].ubicacion} en ${shows[identifiacion].departamento}
        en la fecha <b>${shows[identifiacion].fecha}</b></p>
    <form action="#">
    <div id="variosinputs">
    
    <input type="text" id="nombreUsuario" placeholder="Nombre">
    <input type="text" id="apellidoUsuario" placeholder="Apellido">
    <input type="email" id="email" placeholder="E-mail">
    </div>
    <div id="variosradios">
    <div>
    <input type="radio" id="rd1" name="radios" value="r1">
    <label for="rd1">Tarjeta de débito - crédito</label>
    </div>
    
    <div>
    <input type="radio" id="rd2" name="radios" value="r2">
    <label for="rd2">Transferencia bancaria</label>
    </div>
    
    <div>
    <input type="radio" id="rd3" name="radios" value="r3">
    <label for="rd3">Redes de cobranza</label>
    </div>
    
    </div>
    <div id="cantidad">
    <label for="cantidad">Cantidad de entradas</label>
    <input type="text" id="cantidad" name="cantidad" placeholder="Nª entradas">
    </div>
    
    <a id="finalizar">Finalizar compra</a>
    </form>
    `)

    $("#cerrarForm").click(function() {
        $("#ampliacion_formulario").animate({
            top: "-100vh"
        }), 1000;;
    })
    $("#email").keyup(validarEmail);
    $("#nombreUsuario , #apellidoUsuario").focusout(validarTextos);
    $("#finalizar").click(verificarCompra);
}



//  ---------- SLIDER ----------


function cargarImagenRandomSlider()
{
    posicionEnSlider = Math.floor(Math.random() * (sliderContenido.length));
    $("#sliderFotos").css("background-image", 'linear-gradient(45deg, black, transparent), url(img/slider/' +  sliderContenido[posicionEnSlider].imagen + ')')
    $("#descripcion").html(`<h4>${sliderContenido[posicionEnSlider].texto}</h4>`)
}

function imagenSiguiente()
{
    posicionEnSlider++;
    if(posicionEnSlider>sliderContenido.length){
        posicionEnSlider=0
    }
    $("#sliderFotos").css("background-image", 'linear-gradient(45deg, black, transparent), url(img/slider/' +  sliderContenido[posicionEnSlider].imagen + ')')
    $("#descripcion").html(`<h4>${sliderContenido[posicionEnSlider].texto}</h4>`)
}

function imagenAnterior()
{
    posicionEnSlider--;
    if(posicionEnSlider<0)
    {
        posicionEnSlider=sliderContenido.length
    }
    $("#sliderFotos").css("background-image", 'linear-gradient(45deg, black, transparent), url(img/slider/' +  sliderContenido[posicionEnSlider].imagen + ')')
    $("#descripcion").html(`<h4>${sliderContenido[posicionEnSlider].texto}</h4>`)
}



//  ---------- MODAL INICIO ----------



function mostrarMensaje() {
    let posicionCancion = Math.floor(Math.random() * (cancionesParaElDia.length));
    $("#modal").css("display", "flex");
    $("#modalInfoContent").html
    (`<h4>${saludoBienvenida}</h4>
    <p>Hoy te recomendamos escuchar</p>
    <article class="canciones">
        <p>${cancionesParaElDia[posicionCancion].posicion}</p>
        <img src="img/discos/${cancionesParaElDia[posicionCancion].portada}">
        <a target="_blank" href="${cancionesParaElDia[posicionCancion].link}"><i class="fas fa-play"></i></a>
        <div>
        <h4>${cancionesParaElDia[posicionCancion].nombre}</h4>
        <p>${cancionesParaElDia[posicionCancion].titulo}</p>
        </div>
        <p>${cancionesParaElDia[posicionCancion].duracion}</p>
        </article>
        `)
}

function ocultarVentanaModal() {
    $("#modal").css("display", "none")
}

var fechaGeneral = new Date();
    var hora = fechaGeneral.getHours();

    var saludoBienvenida;

    if (hora < 12) {
        saludoBienvenida = 'Buen día!';
    }    
    else if (hora >= 12 && hora <= 18){
        saludoBienvenida = 'Buenas tardes!';
    }
    else if (hora >= 18 && hora <= 24){
        saludoBienvenida = 'Buenas noches!';
    }


//  ---------- VALIDACION MAIL ---------- 

function validarEmail() {

    let email = $("#email").val();
    $("#variosinputs p").text("");
    if (email.length===0){
        $("#variosinputs").append(`<p>No puede estar vacío el campo email</p>`);
        $("#variosinputs p").css("color", "red")
        $("#email").css("border-color", "red")
    }
    else if (email.indexOf("@")===-1){
        $("#variosinputs").append(`<p>Tu mail debe de tener un arroba</p>`);
        $("#variosinputs p").css("color", "red")
        $("#variosinputs").css("border-color", "red")
    }
    else if (email.indexOf(".", email.indexOf("@"))===-1){
        $("#variosinputs").append(`<p>Tu mail debe de tener punto</p>`);
        $("#varios inputs p").css("color", "red")
        $("#variosinputs").css("border-color", "red")
    }
    else if(email.charAt(email.length-1)==="."){
        $("variosinputs").text("Tu mail debe de tener texto despues del punto");
        $("#variosinputs p").css("color", "red")
        $("#variosinputs").css("border-color", "red")
    }
    else {
        $("#variosinputs").append(`<p>Tu mail es correcto</p>`);
        $("#variosinputs").css("color", "green")
        $("#email").css("border-color", "green")
    }
}

function validarTextos() {

    let nombre = $("#nombreUsuario").val();
    let apellido = $("#apellidoUsuario").val();
    $("#variosinputs p").text("");
    if (nombre.length===0 || apellido.length===0){
        $("#nombreUsuario, #apellidoUsuario").css("border-color", "red")
    }
    else if (!isNaN(nombre) || !isNaN(apellido)){
        $("#nombreUsuario, #apellidoUsuario").css("border-color", "red")
        $("#nombreUsuario, #apellidoUsuario").val("")
    }
    else {
        $("#nombreUsuario, #apellidoUsuario").css("border-color", "green")
    }
}


function verificarCompra() {

    let nombre = $("#nombreUsuario").val();
    let apellido = $("#apellidoUsuario").val();
    let email = $("#email").val();
    let entradas = $("#cantidad").val();

    if (nombre.length==="" || apellido.length==="" || email.length==="" || entradas.length==="")  {
        $("#confirmacion").text("Debes de completar todos los campos")
    }
    else {
        $("#confirmacion").text("Gracias por tu compra. Al mail le llegara el comprobante")
        $("#confirmacion").css("color", "green")
    }
}


/*
function buscar()
{
    let input = $("#busquedaNombres").val().toLowerCase();

    let cancionFiltrado = todasLasCanciones.filter(function(elemento){
        let nombreMinuscula = elemento.nombre.toLowerCase()
        
        if (input=== ""){
            return
        }
        else {
            for (let i=0; i<= input.length-1; i++){
                if(nombreMinuscula.includes(input) === true){
                    return elemento
                }
            }
        }
    })

    $("#cancionesCoso").html("")
    cancionFiltrado.forEach(mostrarDatosCanciones)
}
*/
/*
function cancionesTotales2(){
    var canciones = []
    for (let i=0; i<=data.length-1; i++){
        var disco = data[i]
        for(let j=0; j<=data[i]["canciones"].length-1; j++){
            var cancion = data[i]["canciones"][j]
            canciones.push(cancion)
        }
    }
    return canciones
}
*/       


/*
function cargarImagenRandomSlider()
{
    var posicionSlider = Math.floor(Math.random() * (imagenesInicio.length - 1));
    $("#sliderFotos").css("background-image", 'url(img/slider/' +  imagenesInicio[posicionSlider] + ')')
}
*/


//$("#randomInicio").html(`<img src="img/slider/${imagenesInicio[posicionImagen]}">`)


/*
for (let i=0; i<data.length; i++){
    for (let j=0; j<=data[i][3].length; j++){
        var cancion = data[i][3][j]
        console.log(cancion)
    }
}
*/

