// Referencias a los elementos de la interfaz
const searchInput = document.getElementById('search');
const searchButton = document.getElementById('search-btn');
const rickySection = document.getElementById('ricky-section');
const gyuvinSection = document.getElementById('gyuvin-section');
const gunwookSection = document.getElementById('gunwook-section');
const hanbinSection = document.getElementById('hanbin-section');
const haoSection = document.getElementById('hao-section');
const matthewSection = document.getElementById('matthew-section');
const taeraeSection = document.getElementById('taerae-section');
const yujinSection = document.getElementById('yujin-section');
const jiwoongSection = document.getElementById('jiwoong-section');
const mensajeSection = document.getElementById('mensaje');
const galeriaSection = document.getElementById('galeria');

// Referencias a los botones del menú
const mensajeBtn = document.getElementById('mensaje-btn');
const galeriaBtn = document.getElementById('galeria-btn');

// Función para mostrar la sección de Ricky
function showRickySection() {
    hideAllSections(); // Oculta todas las demás secciones
    rickySection.classList.remove('hidden');
}

// Función para mostrar la sección de Gyuvin
function showGyuvinSection() {
    hideAllSections(); // Oculta todas las demás secciones
    gyuvinSection.classList.remove('hidden');
}

// Función para mostrar la sección de Hanbin
function showHanbinSection() {
    hideAllSections(); // Oculta todas las demás secciones
    hanbinSection.classList.remove('hidden');
}

// Función para mostrar la sección de Yujin
function showYujinSection() {
    hideAllSections(); // Oculta todas las demás secciones
    yujinSection.classList.remove('hidden');
}

// Función para mostrar la sección de Gunwook
function showGunwookSection() {
    hideAllSections(); // Oculta todas las demás secciones
    gunwookSection.classList.remove('hidden');
}

// Función para mostrar la sección de Jiwoong
function showJiwoongSection() {
    hideAllSections(); // Oculta todas las demás secciones
    jiwoongSection.classList.remove('hidden');
}

// Función para mostrar la sección de Matthew
function showMatthewSection() {
    hideAllSections(); // Oculta todas las demás secciones
    matthewSection.classList.remove('hidden');
}

// Función para mostrar la sección de Taerae
function showTaeraeSection() {
    hideAllSections(); // Oculta todas las demás secciones
    taeraeSection.classList.remove('hidden');
}

// Función para mostrar la sección de Hao
function showHaoSection() {
    hideAllSections(); // Oculta todas las demás secciones
    haoSection.classList.remove('hidden');
}

// Función para mostrar la sección de mensaje
function showMensajeSection() {
    hideAllSections(); // Oculta todas las demás secciones
    mensajeSection.classList.remove('hidden');
}

// Función para mostrar la sección de galería
function showGaleriaSection() {
    hideAllSections(); // Oculta todas las demás secciones
    galeriaSection.classList.remove('hidden');
}

// Función para ocultar todas las secciones
function hideAllSections() {
    rickySection.classList.add('hidden');
    gyuvinSection.classList.add('hidden');
    gunwookSection.classList.add('hidden');
    hanbinSection.classList.add('hidden');
    haoSection.classList.add('hidden');
    matthewSection.classList.add('hidden');
    taeraeSection.classList.add('hidden');
    yujinSection.classList.add('hidden');
    jiwoongSection.classList.add('hidden');
    mensajeSection.classList.add('hidden');
    galeriaSection.classList.add('hidden');
}

// Evento de búsqueda cuando se presiona el botón de búsqueda
searchButton.addEventListener('click', function() {
    const query = searchInput.value.toLowerCase(); // Obtiene el texto de búsqueda y lo convierte a minúsculas
    hideAllSections(); // Oculta todas las secciones antes de mostrar la correspondiente

    switch(query) {
        case 'ricky':
            showRickySection();
            break;
        case 'gyuvin':
            showGyuvinSection();
            break;
        case 'hanbin':
            showHanbinSection();
            break;
        case 'gunwook':
            showGunwookSection();
            break;
        case 'hao':
            showHaoSection();
            break;
        case 'matthew':
            showMatthewSection();
            break;
        case 'taerae':
            showTaeraeSection();
            break;
        case 'yujin':
            showYujinSection();
            break;
        case 'jiwoong':
            showJiwoongSection();
            break;
        default:
            hideAllSections(); // Si no se encuentra el nombre, oculta todas las secciones
    }
});


// Eventos para los botones del menú
mensajeBtn.addEventListener('click', showMensajeSection);
galeriaBtn.addEventListener('click', showGaleriaSection);

