
function mostrarSeccion(idSeccion) {
  // Ocultar todas las secciones
  document.querySelectorAll('section').forEach(function(seccion) {
    seccion.classList.remove('active');
  });
  // Mostrar la sección correspondiente
  document.getElementById(idSeccion).classList.add('active');
}

function guardarEnElLocal(){
  const jugadores = JSON.parse(localStorage.getItem('jugadores'));
  if(jugadores == null){
    fetch('./Datos/jugadores.json')
    .then((res) => {
      return res.json()
    })
    .then((data) => {
      // seteo el localstorage
      localStorage.setItem('jugadores', JSON.stringify(data));
    })
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: ' Datos guardados en el almacenamiento local',
      showConfirmButton: false,
      timer: 1500
    });
  }
};

function guardarFechasEnLocal(){
  const fechas = JSON.parse(localStorage.getItem('convocatorias'));
  if(fechas == null){
    fetch('./Datos/convocatorias.json')
    .then((res) => {
      return res.json()
    })
    .then((data) => {
      // seteo el localstorage
      localStorage.setItem('convocatorias', JSON.stringify(data));
    })
    Swal.fire({
      title: 'Almacenamiento Local cargado...',
      showClass: {
        popup: 'animate__animated animate__fadeInDown'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
      }
    });
    
  }
};

function agregarJugador(){
 
  const jsonFutbolistas= localStorage.getItem('jugadores');
  if (jsonFutbolistas !==null){
    const jsonData = JSON.parse(jsonFutbolistas);
    const futbolistaNuevo = {
      'DNI': document.getElementById('dni').value,
      'Nombre': document.getElementById('nombre').value,
      'Apellido': document.getElementById('apellido').value,
      'FechaDeNacimiento': document.getElementById('fecha').value,
      'Posicion': document.getElementById('position').value,
      'Apodo': document.getElementById('apodo').value,
      'Dorsal': document.getElementById('dorsal').value,
      'PieHabil': document.getElementById('pie').value,
    }
    Object.assign(jsonData, futbolistaNuevo);
    jsonData.push(futbolistaNuevo);
    localStorage.removeItem('jugadores');
    
    const guardar = JSON.stringify(jsonData);
    localStorage.setItem('jugadores', guardar);
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Jugador agregado',
      showConfirmButton: false,
      timer: 3000
    })
     
  }
  else{
    guardarEnElLocal();
    Swal.fire({
      icon: 'error',
      title: 'Oops... LocalStorage vacio',
      text: 'Haga click en Enviar nuevamente'
    });
    
  } 

};

function cargarDatosTabla(parametro){
  for(let j of parametro){
    let row = document.createElement('tr');
    let cel0 = document.createElement('td');
    let cel1 = document.createElement('td');
    let cel2 = document.createElement('td');
    let cel3 = document.createElement('td');
    let cel4 = document.createElement('td');
    let cel5 = document.createElement('td');
    let cel6 = document.createElement('td');
    let cel7 = document.createElement('td');
    let cel8 = document.createElement('td');

    
    let texto0 = document.createTextNode(j.Dorsal);
    let texto1 = document.createTextNode(j.DNI);
    let texto2 = document.createTextNode(j.Nombre);
    let texto3 = document.createTextNode(j.Apellido);
    let texto4 = document.createTextNode(j.FechaDeNacimiento);
    let texto5 = document.createTextNode(j.Posicion);
    let texto6 = document.createTextNode(j.Apodo);
    let texto7 = document.createTextNode(j.PieHabil);

    let eliminar = document.createElement('button');
    let editar = document.createElement('button');

    let texto8 = document.createTextNode('Eliminar');
    let texto9 = document.createTextNode('Editar');
    let algo = j.Dorsal;
    let something = j.Dorsal;
        
    eliminar.setAttribute('Dorsal',algo);
    eliminar.setAttribute('onclick', 'eliminar(this)');
    editar.setAttribute('Dorsal',something)
    editar.setAttribute('onclick', 'editarJugador(this)');

    cel0.appendChild(texto0);
    cel1.appendChild(texto1);
    cel2.appendChild(texto2);
    cel3.appendChild(texto3);
    cel4.appendChild(texto4);
    cel5.appendChild(texto5);
    cel6.appendChild(texto6);
    cel7.appendChild(texto7);
    
    eliminar.appendChild(texto8);
    editar.appendChild(texto9);

    cel8.appendChild(eliminar);
    cel8.appendChild(editar);
   
    row.appendChild(cel0);
    row.appendChild(cel1);
    row.appendChild(cel2);
    row.appendChild(cel3);
    row.appendChild(cel4);
    row.appendChild(cel5);
    row.appendChild(cel6);
    row.appendChild(cel7);
    row.appendChild(cel8);
    
    cuerpo.appendChild(row);
  }
}

function leerLocal(){
  const jsonFutbolistas = localStorage.getItem('jugadores');
  if (jsonFutbolistas !== null){
    const jsonData = JSON.parse(jsonFutbolistas);
    
    const cuerpotabla = document.getElementById('cuerpodos');
  
    for(let j of jsonData){
      let row = document.createElement('tr');
      let cel0 = document.createElement('td');
      let cel1 = document.createElement('td');
      let cel2 = document.createElement('td');
      let cel3 = document.createElement('td');
      let cel4 = document.createElement('td');
      let cel5 = document.createElement('td');
      let cel6 = document.createElement('td');
      let cel7 = document.createElement('td');
      
      let texto0 = document.createTextNode(j.Dorsal);
      let texto1 = document.createTextNode(j.DNI);
      let texto2 = document.createTextNode(j.Nombre);
      let texto3 = document.createTextNode(j.Apellido);
      let texto4 = document.createTextNode(j.FechaDeNacimiento);
      let texto5 = document.createTextNode(j.Posicion);
      let texto6 = document.createTextNode(j.Apodo);
      let texto7 = document.createTextNode(j.PieHabil);
      
      cel0.appendChild(texto0);
      cel1.appendChild(texto1);
      cel2.appendChild(texto2);
      cel3.appendChild(texto3);
      cel4.appendChild(texto4);
      cel5.appendChild(texto5);
      cel6.appendChild(texto6);
      cel7.appendChild(texto7);
      
      row.appendChild(cel0);
      row.appendChild(cel1);
      row.appendChild(cel2);
      row.appendChild(cel3);
      row.appendChild(cel4);
      row.appendChild(cel5);
      row.appendChild(cel6);
      row.appendChild(cel7);
      
      cuerpotabla.appendChild(row);

    }
  }
  else{
    
    guardarEnElLocal();
    
  }
}


function buscar(){
  guardarEnElLocal();
  const jsonFutbolistas = localStorage.getItem('jugadores');
  const jsonData = JSON.parse(jsonFutbolistas);
  const buscar = document.getElementById('buscarjugador').value; 
  let filtrado = jsonData.filter(item=>item.Apellido===buscar || item.Nombre===buscar || item.Dorsal===buscar);
  if (filtrado.length !== 0 ){
    let resultado = Object.values(filtrado);
    cargarDatosTabla(resultado);
  }
  else {
    Swal.fire({
      icon: 'error',
      title: 'Jugador No Encontrado',
      text: 'Vuelva a ingresar los datos',
      
    });
  };
};

function borrarLocalStorage(){
  localStorage.removeItem('jugadores');
}


function eliminar(param){
  const jugadores = localStorage.getItem('jugadores');
  if (jugadores === null){
    alert('No hay datos en el localstorage')
  }
  else{
    const jugadores = localStorage.getItem('jugadores');
    const jsonData = JSON.parse(jugadores);
    let td = param.parentNode;
    console.log(td);
    let tr = td.parentNode;
    console.log(tr);
    
    let eliminar = parseInt(tr.cells[0].textContent);

    const nuevo = jsonData.filter(function(item){
      console.log(item);
      return item.Dorsal != eliminar;
    });
    this.borrarLocalStorage();
    const jsonNuevo = JSON.stringify(nuevo);
    localStorage.setItem('jugadores',jsonNuevo);
    Swal.fire({
      icon: 'error',
      title: 'Jugador Eliminado',
    })
  }
};


function editarJugador(param){
  let td = param.parentNode;
  
  let tr = td.parentNode;
  
  let editar = parseInt(tr.cells[0].textContent);
  
  localStorage.setItem('editar',editar);

  window.location.href = 'modificacionJugadores.html';
  
};

document.addEventListener('DOMContentLoaded', () => {
  const botoneditar = document.getElementById('0');
  console.log(botoneditar);
  botonModi.addEventListener('click', editarJugador);
});


// function completarDatos(){
//   const dorsalModificar = parseInt(localStorage.getItem('editar'));
//   console.log(dorsalModificar);
//   const jsonFutbolistas = localStorage.getItem('jugadores');
//   const jsonData = JSON.parse(jsonFutbolistas);
//   console.log(jsonData);
//   const jugador = jsonData.find(item => item.dorsalModificar=== dorsalModificar);
//   console.log(jugador);
//   document.getElementById('dni').value = jugador.DNI;
//   document.getElementById('nombre').value = jugador.Nombre;
//   document.getElementById('apellido').value = jugador.Apellido;
//   document.getElementById('fecha').value = jugador.FechaDeNacimiento;
//   document.getElementById('position').value = jugador.Posicion;
//   document.getElementById('apodo').value = jugador.Apodo;
//   document.getElementById('dorsal').value =jugador.Dorsal;
//   document.getElementById('pie').value = jugador.PieHabil;
//   document.getElementById('nombre').value = alumno.id;
//   document.getElementById('apellido').value = alumno.apellido;
//   document.getElementById('nombre').value = alumno.nombre;
//   document.getElementById('dni').value = alumno.dni;
// };

function buscarInfo(){

  const body = document.getElementById('body34');
  const convocatoria = localStorage.getItem('convocatorias');

  if(convocatoria === null){
    fetch('./Datos/convocatorias.json')
    .then((res) => {
      return res.json()
    })
    .then((data) => {
      
      localStorage.setItem('convocatorias', JSON.stringify(data));
      
      data.forEach(element => {
        const tr = document.createElement('tr');

        const match = document.createElement('td');
        const fecha = document.createElement('td');
        const rival = document.createElement('td');
        const capitan = document.createElement('td');
        
        match.appendChild(document.createTextNode(element.match));
        fecha.appendChild(document.createTextNode(element.fecha));
        rival.appendChild(document.createTextNode(element.rival));
        capitan.appendChild(document.createTextNode(element.capitan));

        tr.appendChild(match);
        tr.appendChild(fecha);
        tr.appendChild(rival);
        tr.appendChild(capitan);    
        body.appendChild(tr);
      });
      })
    }   
};

document.addEventListener('DOMContentLoaded', () => {
  const botonguardar = document.getElementById('leerConvocatoria');
  console.log(botonguardar); // HTMLButtonElement object
  botonguardar.addEventListener('click',buscarInfo,false);
});









document.addEventListener('DOMContentLoaded', () => {
const botonguardar = document.getElementById('enviar');
console.log(botonguardar); // HTMLButtonElement object
botonguardar.addEventListener('click',agregarJugador,false);
});
document.addEventListener('DOMContentLoaded', ()=>{
  const botoneditar = document.getElementById('buscar');
  console.log(botoneditar);
  botoneditar.addEventListener('click',buscar,false);
});
document.addEventListener('DOMContentLoaded', ()=> {
  const botonmostrar = document.getElementById('mostarlista');
  console.log(botonmostrar);
  botonmostrar.addEventListener('click', leerLocal,false);
});

document.addEventListener("DOMContentLoaded", function() {
  const apiKey = '508d4b8febb043d68f05b62becc3b883';
  const tema= 'afa qatar 2022';

  const apiUrl = `https://newsapi.org/v2/everything?q=${tema}&sortBy=publishedAt&apiKey=${apiKey}`;

  const noticiasContainer = document.getElementById("noticias-container");

  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      const noticias = data.articles;

      noticias.forEach(function(noticia) {
        const div = document.createElement("div");
        const titulo = document.createElement("h3");
        titulo.textContent = noticia.title;
        const descripcion = document.createElement("p");
        descripcion.textContent = noticia.description;
        const imagen = document.createElement("img");
        imagen.src = noticia.urlToImage;
        imagen.alt = noticia.title;

        div.appendChild(titulo);
        div.appendChild(descripcion);
        div.appendChild(imagen);
        noticiasContainer.appendChild(div);
      });
    })
    .catch(error => {
      console.log("Error al obtener las noticias:", error);
    });
});

function buscarFecha() {
  const datosFechas = JSON.parse(localStorage.getItem('convocatorias'));

  if (datosFechas !== null) {
    console.log(datosFechas);

    const valorBuscado =  document.getElementsByClassName('d-flex')[0];
    const valorAEncontrado = valorBuscado.querySelector('#entrada').value;
    
    console.log(valorAEncontrado);
    

    let filtrado = datosFechas.filter(item=>item.fecha === valorAEncontrado);

    console.log(filtrado); 

    if ( filtrado.length !== 0) {
      let resultado = JSON.stringify(filtrado);
      console.log(resultado);
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Fecha encontrada',
        text : `${resultado}`,
      })
    
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Algo salio mal o valor no encontrado!',
        
      })
    }
  } 
  else {
    guardarFechasEnLocal();
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const formulario = document.getElementsByClassName('d-flex')[0];
  console.log(formulario);
  const botonBuscar = formulario.querySelector('#buscarPorFechas');
  console.log(botonBuscar);

  botonBuscar.addEventListener('click', buscarFecha);
  
});
