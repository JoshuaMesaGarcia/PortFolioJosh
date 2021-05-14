    // Create a function to change
    // the hash value of the page
    function changeLanguage(lang) {
      location.hash = lang;
      location.reload();
    }

    //Creation of the variables for the texts
    var siteCodingText = document.getElementById("codingText");
    var siteHobbyText = document.getElementById("hobbyText");
    var siteMeText = document.getElementById("aboutmeText");

    // Define the language reload anchors
    var language = {
      eng: {
        coding: "My speciality is Front-End Design and development. I have great ideas for design and develop them with HTML, CSS and JavaScript." + "<br/>" + "<br/>"+
        "I completed some front end challenges from FronEndMentor.io . The ones I have finished are located in my github" + "<br/>" + "<br/>" +
        "I also have made some projects in other languages, come and have a look at them!",
        hobby: ""
      },

      es: {
        coding: "My especialidad es el desarrollo y el diseño de Front-End. Siempre tengo nuevas ideas las cuales puedo desarrollar con HTML, CSS and JavaScript." + "<br/>" + "<br/>"+
        "He completado algunos desafios de FronEndMentor.io, algunos de estos desafios puedes encontrarlos en mi github" + "<br/>" + "<br/>" +
        "Tambien he estado trabajando en otros proyectos en otros lenguajes, si quieres pasate y echales un vistazo!",

        hobby: "Cuando no estoy en el ordenador programando o jugando a videojuegos, paso el tiempo en mi pequeño estudio tocando la batería y construyendo maquetas " + "<br/>" + "<br/>" +
        "Durante la pandemia use el tiempo que estaba en casa para aprender un instrumento que siempre me gustó. Aunque al principio a mis vecinos no les gustó esta decisión tan particular." + "<br/>" + "<br/>" +
        "En el tiempo libre construyo algunas maquetas históricas de la Primera y Segunda Guerra Mundial, desde aviones hasta acorazados" + "<br/>" +
        "Si quieres ver algunos vídeos y fotos de mis aficiones, ¡haz clic aquí mismo!",


        aboutme:"¡Hola! Soy un desarrollador web de las Islas Canarias, España, que vive en Alemania." + "<br>" +
        "Llevo un año y medio aquí pero desde que empezó la pandemia he pasado más tiempo dentro de mi casa que viendo la preciosa ciudad de Mainz." + "<br>" +
        "También he vivido en Irlanda, un lugar que siempre será mi segundo hogar. El misticismo de Connemara y el ambiente acogedor de Galway siempre estarán en mi corazón. "

      },
      deu: {
        coding: "Meine Spezialität ist Front-End Design und Entwicklung. Ich habe tolle Ideen für Design und entwickle sie mit HTML, CSS und JavaScript." + "<br/>" + "<br/>"+
        "Ich habe einige Frontend-Herausforderungen von FronEndMentor.io abgeschlossen. Die, die ich fertiggestellt habe, befinden sich in meinem github" + "<br/>" + "<br/>" +
        "Ich habe auch einige Projekte in anderen Sprachen gemacht, komm und schau sie dir an!",

        hobby: "Wenn ich nicht gerade am Computer programmiere oder Videospiele spiele, verbringe ich meine Zeit in meinem kleinen Studio, spiele Schlagzeug und baue Demos " + "<br/>" + "<br/>" + "<br/>" +
        "Während der Pandemie habe ich die Zeit, die ich zu Hause war, genutzt, um ein Instrument zu lernen, das ich schon immer geliebt habe. Obwohl meine Nachbarn diese Entscheidung zunächst nicht gut fanden." + "<br/>" + "<br/>" + "<br/>" +
        "In der Freizeit baue ich einige historische Modelle des Ersten und Zweiten Weltkriegs, von Flugzeugen bis zu Schlachtschiffen" + "<br/>" + "<br/>" +
        "Wenn Sie einige Videos und Fotos von meinen Hobbys sehen wollen, klicken Sie hier!",

        aboutme:"Hallo! Ich bin ein Webentwickler von den Kanarischen Inseln, Spanien, der in Deutschland lebt." + "<br>" +
        "Ich bin seit eineinhalb Jahren hier, aber seit die Pandemie begonnen hat, habe ich mehr Zeit in meinem Haus verbracht, als dass ich die schöne Stadt Mainz gesehen hätte." + "<br>" +
        "Ich habe auch in Irland gelebt, ein Ort, der immer meine zweite Heimat sein wird. Die Mystik von Connemara und die einladende Atmosphäre von Galway werden immer in meinem Herzen sein. "
      }
    };

    // Check if a hash value exists in the URL
   if (window.location.hash) {

     // Set the content of the webpage
     // depending on the hash value
     if (window.location.hash == "#es") {
       siteCodingText.innerHTML = language.es.coding;
       siteHobbyText.innerHTML = language.es.hobby;
       siteMeText.innerHTML = language.es.aboutme;
     }
     else if (window.location.hash == "#deu") {
       siteCodingText.innerHTML = language.deu.coding;
       siteHobbyText.innerHTML = language.deu.hobby;
       siteMeText.innerHTML = language.deu.aboutme;
     }
   }
