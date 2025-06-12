
let currentPfad = null;
let currentIndex = 0;
const inhalte = {'reise': ['Tag 1: Heute entscheide ich mich für meinen Weg.', 'Tag 2: Ich bin nicht mehr verantwortlich für ihre Entscheidungen.', 'Tag 3: Ich verbinde mich mit meinem Atem.', 'Tag 4: Ich lasse die Vorstellung los, dass sie mich heilt.', 'Tag 5: Ich erkenne mein inneres Kind.', 'Tag 6: Ich bin genug – auch allein.', 'Tag 7: Ich starte jeden Tag neu – für mich.'], 'entkopplung': ['1. Ich schulde ihr nichts mehr. Ich gehöre mir.', '2. Spüre deinen Körper. Was sagt er dir? Atme.', '3. Nimm wahr, wie du dich gerade fühlst – ohne Urteil.', '4. Sprich es aus: Ich lasse sie gehen.'], 'selbstwert': ['Tag 1: Ich bin wertvoll, weil ich 1 Tage an mich glaube.', 'Tag 2: Ich bin wertvoll, weil ich 2 Tage an mich glaube.', 'Tag 3: Ich bin wertvoll, weil ich 3 Tage an mich glaube.', 'Tag 4: Ich bin wertvoll, weil ich 4 Tage an mich glaube.', 'Tag 5: Ich bin wertvoll, weil ich 5 Tage an mich glaube.', 'Tag 6: Ich bin wertvoll, weil ich 6 Tage an mich glaube.', 'Tag 7: Ich bin wertvoll, weil ich 7 Tage an mich glaube.', 'Tag 8: Ich bin wertvoll, weil ich 8 Tage an mich glaube.', 'Tag 9: Ich bin wertvoll, weil ich 9 Tage an mich glaube.', 'Tag 10: Ich bin wertvoll, weil ich 10 Tage an mich glaube.', 'Tag 11: Ich bin wertvoll, weil ich 11 Tage an mich glaube.', 'Tag 12: Ich bin wertvoll, weil ich 12 Tage an mich glaube.', 'Tag 13: Ich bin wertvoll, weil ich 13 Tage an mich glaube.', 'Tag 14: Ich bin wertvoll, weil ich 14 Tage an mich glaube.', 'Tag 15: Ich bin wertvoll, weil ich 15 Tage an mich glaube.', 'Tag 16: Ich bin wertvoll, weil ich 16 Tage an mich glaube.', 'Tag 17: Ich bin wertvoll, weil ich 17 Tage an mich glaube.', 'Tag 18: Ich bin wertvoll, weil ich 18 Tage an mich glaube.', 'Tag 19: Ich bin wertvoll, weil ich 19 Tage an mich glaube.', 'Tag 20: Ich bin wertvoll, weil ich 20 Tage an mich glaube.', 'Tag 21: Ich bin wertvoll, weil ich 21 Tage an mich glaube.', 'Tag 22: Ich bin wertvoll, weil ich 22 Tage an mich glaube.', 'Tag 23: Ich bin wertvoll, weil ich 23 Tage an mich glaube.', 'Tag 24: Ich bin wertvoll, weil ich 24 Tage an mich glaube.', 'Tag 25: Ich bin wertvoll, weil ich 25 Tage an mich glaube.', 'Tag 26: Ich bin wertvoll, weil ich 26 Tage an mich glaube.', 'Tag 27: Ich bin wertvoll, weil ich 27 Tage an mich glaube.', 'Tag 28: Ich bin wertvoll, weil ich 28 Tage an mich glaube.'], 'visualisierung': ['Stell dir vor, du stehst auf einem Steg.', 'Du hältst ein altes Bild von euch in der Hand.', 'Mit dem Wind lässt du es los.', 'Es fliegt davon – du bleibst.', 'Frei. Und bei dir.'], 'antiromy': ['Du bist nicht ihr Besitz.', 'Du bist nicht das, was sie in dir sehen wollte.', 'Du bist mehr.', 'Atme. Spüre dich. Und sprich: Ich löse mich von dir.', 'Wiederhole: Ich schulde dir nichts. Ich wähle mich.'], 'affirmationen': ['Ich bin genug.', 'Ich bin nicht abhängig.', 'Ich bin kraftvoll.', 'Ich bin ein Mensch mit Tiefe.', 'Ich bin mehr als meine Verletzung.', 'Ich bin Liebe.', 'Ich bin mein Zuhause.']};

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

function loadPfad(pfad) {
  currentPfad = pfad;
  currentIndex = 0;
  showStep();
}

function showStep() {
  const text = inhalte[currentPfad][currentIndex];
  const backBtn = currentIndex > 0 ? `<button onclick='prevStep()'>Zurück</button>` : "";
  const nextBtn = currentIndex < inhalte[currentPfad].length - 1
    ? `<button onclick='nextStep()'>Weiter</button>` : `<button onclick='startApp()'>Zurück zum Menü</button>`;
  document.getElementById('app').innerHTML = `
    <p>${text}</p>
    ${backBtn} ${nextBtn}
  `;
}

function nextStep() {
  if (currentIndex < inhalte[currentPfad].length - 1) {
    currentIndex++;
    showStep();
  }
}

function prevStep() {
  if (currentIndex > 0) {
    currentIndex--;
    showStep();
  }
}
