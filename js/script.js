/***********************
  SCROLL TO TOP BUTTON
************************/
// Funzione che scrolla dolcemente in cima alla pagina //
function scrollToTop() {
    window.scrollTo({ 
      top: 0,
      behavior: 'smooth' // animazione fluida //
    });
  }
  
  // Seleziona il bottone "scroll to top" //
  const scrollTopBtn = document.getElementById("scrollTopBtn");
  
  // Mostra il bottone solo dopo uno scroll di almeno 200px //
  window.addEventListener("scroll", () => {
    if (window.scrollY > 200)  {
      scrollTopBtn.classList.add("show");
    } else {
      scrollTopBtn.classList.remove("show");
    }
  });

  /***********************
        MENU MOBILE
  ************************/
  // Funzione per mostrare la sidebar (menu mobile)//
  function showSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'  // mostra in flex per mantenere il layout //
  } 

  // Funzione per nascondere la sidebar //
  function hideSidebar(){
      const sidebar = document.querySelector('.sidebar')
      sidebar.style.display = 'none'     
  }

  /***********************
        CAROUSEL
  ************************/
// Scroll orizzontale di un contenitore tipo "carousel" //
// carouselId: id del contenitore //
// direction: 1 per avanti, -1 per indietro //
  function scrollCarousel(carouselId,direction) {
    const carousel = document.getElementById(carouselId);
    const scrollAmount = 320; // quantità di scroll in px (dipende dal layout) //
    carousel.scrollBy({ left: scrollAmount * direction, behavior: 'smooth' });
  }

/***********************
        COOKIES
************************/
// Funzione per accettare i cookie //
function acceptCookies() {
  // Salva l'accettazione dei cookie in sessionStorage (dura finché il browser è aperto) //
  sessionStorage.setItem('cookieAccepted', 'true');

  // Nasconde il popup cookie cambiando lo stile (display: none) //
  document.getElementById('cookiePopup').style.display = 'none';
}

// Mostra il popup cookie solo se non è già stato accettato //

// Aggiunge un event listener (quando c'è quest'evento fai...) che si attiva quando la pagina viene caricata //
window.addEventListener('load', () => {

  // Recupera il valore che indica se i cookie sono stati accettati //
  const accepted = sessionStorage.getItem('cookieAccepted');

  // Se l'utente non ha ancora accettato i cookie, mostra il popup //
  if (!accepted) {
    document.getElementById('cookiePopup').style.display = 'block';
  }
});

/***********************
    MODALITÀ NOTTE
************************/
// Al caricamento della pagina, imposta il tema in base alla preferenza salvata //
  function toggleTheme() {
const body = document.body;
const iconDesktop = document.getElementById('themeIcon');
const iconMobile = document.getElementById('themeIconMobile');
const searchIcon = document.getElementById('searchIcon');

body.classList.toggle('dark-mode');
const isDark = body.classList.contains('dark-mode');

// Cambia icona in alto (desktop) //
iconDesktop.src = isDark ? 'images/sun.svg' : 'images/moon.svg.svg';

// Cambia icona nella sidebar (mobile) //
iconMobile.src = isDark ? 'images/sun.svg' : 'images/moon.svg.svg';

// Cambia icona di ricerca //
searchIcon.src = isDark ? 'images/cerca.svg' : 'images/cercas.svg';

// Salva in sessionStorage //
sessionStorage.setItem('darkMode', isDark ? 'true' : 'false');
}

// Quando la pagina viene caricata //
window.addEventListener('load', () => {
  // Controlla se la pagina è in una sottocartella //
  const path = window.location.pathname;
  let basePath = 'images/'; // default per root //

  // Se siamo in sottocartelle come eventi, uni, others, usiamo ../images/ //
  if (path.includes('/eventi/') || path.includes('/uni/') || path.includes('/others/')) {
    basePath = '../images/';
  }

  const darkMode = sessionStorage.getItem('darkMode') === 'true';
  const body = document.body;
  const iconDesktop = document.getElementById('themeIcon');
  const iconMobile = document.getElementById('themeIconMobile');
  const searchIcon = document.getElementById('searchIcon');

   // Imposta le classi e le icone in base alla modalità salvata //
  if (darkMode) {
    body.classList.add('dark-mode');
    if (iconDesktop) iconDesktop.src = basePath + 'sun.svg';
    if (iconMobile) iconMobile.src = basePath + 'sun.svg';
    if (searchIcon) searchIcon.src = basePath + 'cerca.svg';
  } else {
    body.classList.remove('dark-mode');
    if (iconDesktop) iconDesktop.src = basePath + 'moon.svg';
    if (iconMobile) iconMobile.src = basePath + 'moon.svg';
    if (searchIcon) searchIcon.src = basePath + 'cercas.svg';
  }
});

// Funzione per attivare/disattivare il tema scuro manualmente //
function toggleTheme() {
  // Stessa logica del percorso //
  const path = window.location.pathname;
  let basePath = 'images/';

  if (path.includes('/eventi/') || path.includes('/uni/') || path.includes('/others/')) {
    basePath = '../images/';
  }

  const body = document.body;
  const iconDesktop = document.getElementById('themeIcon');
  const iconMobile = document.getElementById('themeIconMobile');
  const searchIcon = document.getElementById('searchIcon');

  body.classList.toggle('dark-mode');
  const isDarkMode = body.classList.contains('dark-mode');
    // Salva la preferenza dell’utente in sessione //
  sessionStorage.setItem('darkMode', isDarkMode);

    // Aggiorna le icone in base al tema attivo //
  if (isDarkMode) {
    if (iconDesktop) iconDesktop.src = basePath + 'sun.svg';
    if (iconMobile) iconMobile.src = basePath + 'sun.svg';
    if (searchIcon) searchIcon.src = basePath + 'cerca.svg';
  } else {
    if (iconDesktop) iconDesktop.src = basePath + 'moon.svg';
    if (iconMobile) iconMobile.src = basePath + 'moon.svg';
    if (searchIcon) searchIcon.src = basePath + 'cercas.svg';
  }
}
