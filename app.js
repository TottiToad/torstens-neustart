
function startApp() {
  document.getElementById('app').innerHTML = `
    <h2>Hauptmenü</h2>
    <ul>
      <li><button onclick="loadPfad('reise')">Tägliche 7-Tage-Reise</button></li>
      <li><button onclick="loadPfad('entkopplung')">Entkopplung in 4 Schritten</button></li>
      <li><button onclick="loadPfad('selbstwert')">28 Tage Selbstwert</button></li>
      <li><button onclick="loadPfad('visualisierung')">Visualisierung: Ich befreie mich</button></li>
      <li><button onclick="loadPfad('antiromy')">Anti-Romy-Meditation</button></li>
      <li><button onclick="loadPfad('affirmationen')">Ich bin genug</button></li>
    </ul>
  `;
}

function loadPfad(name) {
  document.getElementById('app').innerHTML = '<p>Lade Bereich: ' + name + ' …</p><button onclick="startApp()">Zurück</button>';
}
