# AggiornaMi 

**AggiornaMi** è un prototipo di piattaforma web dedicata alla vita universitaria e culturale milanese.  
Il progetto raccoglie eventi, luoghi studio, serate, mostre, concerti e informazioni utili in un unico spazio digitale pensato per studenti pendolari, fuorisede e residenti.

L’obiettivo è chiaramente quello di aiutare chi vive la città, soprattutto se è appena arrivato e non conosce ancora bene il posto, a non perdersi nulla di interessante.

Realizzato per il corso al primo anno di **Fondamenti di Informatica per il Web Design**  
Corso di Laurea in Design della Comunicazione, Politecnico di Milano.

## Concept  

L’idea alla base di AggiornaMi è quella di centralizzare informazioni frammentate sulla città di Milano e renderle accessibili attraverso un’interfaccia chiara, navigabile e responsive.

Il sito simula il funzionamento di una reale piattaforma informativa urbana, progettata per:

- orientare nuovi studenti in città, offrendo una panoramica chiara della vita milanese  
- aiutare chi è appena arrivato in città a orientarsi
- facilitare la scoperta di eventi e luoghi  
- migliorare l’esperienza urbana attraverso il digitale  

Il sito è pensato per essere intuitivo, ordinato e facilmente aggiornabile.

**Nota**  
Il sito è un prototipo accademico: i contenuti sono stati selezionati come esempio riferito a un periodo simulato e non vengono aggiornati periodicamente.  
L’obiettivo è dimostrare struttura, logica e funzionalità di una possibile applicazione reale.

---
## Architettura del progetto  

Il sito è composto da 11 pagine HTML collegate tra loro, organizzate semanticamente con:

- `<nav>`  
- `<main>`  
- `<section>`  
- `<footer>`  

Struttura ricorrente:
- Header fisso con menu a tendina  
- Main dinamico con contenuti variabili  
- Footer con contatti e pagina dedicata alle autrici  

---

## Funzionalità implementate  

### Responsive Design  
Layout completamente adattivo tramite media queries (1024px / 768px).  

### Navigazione dinamica  
- Navbar desktop con dropdown  
- Hamburger menu mobile attivato via JavaScript  
- Sidebar laterale per sottocategorie  

### Tema chiaro / scuro  
Implementazione tramite:
```javascript
body.classList.toggle('dark-mode')
```
Preferenza salvata in `sessionStorage`.

### Cookie popup  
Gestione consenso tramite JavaScript con memorizzazione sessione.

### Scroll to top  
Comparsa dinamica dopo 200px di scroll:
```javascript
window.scrollTo({ top: 0, behavior: 'smooth' })
```

### Carousel orizzontali  
Scroll fluido tramite funzione JavaScript:
```javascript
scrollCarousel(id, direction)
```

### Hero video full-screen  
Video background con overlay sfumato e testo centrato.

### Mappa interattiva  
Incorporamento Google MyMaps personalizzato con quartieri universitari, spazi studio ed eventi.

---

## Tecnologie utilizzate  

- **HTML5** → struttura semantica
- **CSS3** → layout responsive, animazioni, variabili CSS
- **JavaScript** → interazioni dinamiche

Approccio utilizzato: **Dynamic HTML (DHTML)**

---

## Aspetti grafici  

- Palette pastello (rosa, bianco, grigio chiaro)
- Angoli stondati e ombre leggere
- Animazioni fade-in
- Transizioni fluide
- Variabili CSS in `:root`
- Tema scuro con override CSS (`body.dark-mode`)

Layout costruito con:
- `flex`
- `flex-wrap`
- `gap`
- `box-sizing: border-box`


## Organizzazione dei file  

```
AGGIORNAMI/
│
├── home.html
├── css/
│   ├── style.css
│   └── style2.css
├── js/
│   └── script.js
├── immagini/
├── video/
└── sottopagine/
```

---

## Competenze sviluppate  

- Strutturazione semantica HTML  
- Gestione layout responsive  
- Manipolazione DOM con JavaScript  
- Gestione stato tramite sessionStorage  
- Organizzazione modulare dei file  
- Progettazione UX base per piattaforme informative  

---

## Stato del progetto  

✔ Prototipo funzionante  
✔ Responsive  
✔ Interazioni dinamiche implementate  
✱ Non collegato a database  
✱ Contenuti dimostrativi  

---

## Autrici  

Progetto sviluppato da:  
- Irene Massignani  
- Rebecca Sole Bassani

Corso di Laurea Triennale in Design della Comunicazione  
Politecnico di Milano  

---

### Contatti  

Per domande, collaborazioni o approfondimenti sul progetto:

- Email: irene.massignani@mail.polimi.it & bassanirebecca@gmail.com 
- GitHub: https://github.com/irenemassignani & https://github.com/rebeccasole-design

Siamo disponibili per confronti, feedback o per raccontare più nel dettaglio il processo progettuale e tecnico dietro AggiornaMi.

---

## Conclusione  

AggiornaMi è un prototipo funzionante che integra struttura semantica, responsività e interazioni dinamiche.  

Il progetto dimostra l’applicazione pratica delle basi di HTML, CSS e JavaScript nella costruzione di un’esperienza utente chiara, navigabile e visivamente coerente.