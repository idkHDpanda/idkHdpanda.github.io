// HTML-elementer
const main = document.querySelector("main");

//database
const db = firebase.database();
const prosjekter = db.ref("portfolio/prosjekter");


function visProsjekt(snap){
  const key = snap.key;
  const prosjekt = snap.val();

  const bilder = prosjekt.bilder;
  const indeks = prosjekt.forsidebilde;

  main.innerHTML +=`
    <article style="background-image: url('${bilder[indeks]}')">
      <h1>${prosjekt.tittel}</h1>
      <p>${prosjekt.beskrivelse}</p>
      <a href="prosjekt.html?pid=${key}">les mer</a>
    </article>
  `;
}


//Event listener
prosjekter.on("child_added", visProsjekt);
