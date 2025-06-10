const sections = {
  reise: [
    "Tag 1: Ich bin hier. Ich lebe. Ich atme. Auch wenn es weh tut, ist das der Anfang von Heilung.",
    "Tag 2: Ich löse mich nicht von ihr – ich löse mich von der Illusion, dass sie mein Glück war.",
    "Tag 3: Dass jemand geht, sagt nichts über meinen Wert aus. Es zeigt nur, was er nicht sehen konnte.",
    "Tag 4: Heilung verläuft nicht linear. Und das ist okay.",
    "Tag 5: Sexuelle Fantasien sind kein Beweis für Liebe. Es sind gespeicherte Körpererinnerungen.",
    "Tag 6: Ich darf laut sein, still sein, verletzt sein. Ich darf alles sein – außer mich selbst verlassen.",
    "Tag 7: Ich entscheide mich, mich nicht länger selbst zu verlassen – auch wenn andere es getan haben."
  ],
  entkopplung: [
    "1. Klarheit gewinnen: Was war real? Was war Wunschdenken?",
    "2. Emotionen anerkennen: Wut, Schmerz, Sehnsucht dürfen da sein.",
    "3. Neue Ausrichtung: Wo will ich hin? Was will ich leben?",
    "4. Rückbindung an dich: Was brauchst du heute, um dich selbst zu halten?"
  ],
  selbstwert: [
    "Tag 1: Schreibe: Was bin ich ohne sie? Nenne 5 Eigenschaften.",
    "Tag 2: Stimme laut aus: 'Ich schulde ihr nichts mehr.'",
    "Tag 3: Geh heute 30 Minuten spazieren. Nur für dich.",
    "Tag 4: Erinnere dich an eine Stärke von dir.",
    "Tag 5: Tu heute etwas, das dir Kraft gibt.",
    "Tag 6: Schreibe einen Brief an dein zukünftiges Ich.",
    "Tag 7: Umarme dich selbst.",
    "Tag 8: Mach eine Pause und atme bewusst.",
    "Tag 9: Sprich mit einem Freund.",
    "Tag 10: Lies einen alten Text oder Brief von dir.",
    "Tag 11: Male deine aktuelle Stimmung als Farbe.",
    "Tag 12: Schreibe einen Satz, den du gebraucht hättest.",
    "Tag 13: Was war dein stolzester Moment?",
    "Tag 14: Welcher Teil an dir ist heute mutig?",
    "Tag 15: Lies dir Tag 1 noch einmal durch.",
    "Tag 16: Nimm dir 10 Minuten nur für dich.",
    "Tag 17: Spüre bewusst deine Füße.",
    "Tag 18: Erinnere dich an deinen Wert.",
    "Tag 19: Schreibe auf, was du gut gemacht hast.",
    "Tag 20: Welches Kompliment kannst du dir machen?",
    "Tag 21: Stell dir vor, du wärst dein bester Freund.",
    "Tag 22: Was würdest du dir raten?",
    "Tag 23: Meditiere oder bleib 5 Minuten still.",
    "Tag 24: Welche Fähigkeit macht dich besonders?",
    "Tag 25: Umarme innerlich dein jüngeres Ich.",
    "Tag 26: Welcher Mensch hat dir mal gut getan?",
    "Tag 27: Heute brauchst du nichts leisten.",
    "Tag 28: Du bist genug. Du warst es immer."
  ],
  visualisierung: [
    "Stell dir vor, du stehst auf einer Lichtung. Du atmest tief ein.",
    "Mit jedem Atemzug kehrst du zu dir zurück.",
    "Um dich herum lösen sich Bilder, Stimmen und Berührungen vergangener Bindungen in Nebel auf.",
    "Du bleibst. Still. Stark. Und frei."
  ],
  loslassen: [
    "1. Sag laut oder innerlich: 'Ich schulde ihr nichts mehr. Ich gehöre mir.'",
    "2. Spüre deinen Körper. Fäuste? Herz? Bauch?",
    "3. Stell dir vor, wie du die Verbindung loslässt wie einen Stein im Wasser.",
    "4. Kehre zurück ins Hier und Jetzt. Du bist sicher."
  ],
  romymeditation: [
    "Setz dich aufrecht hin. Schließe die Augen.",
    "Sag innerlich: 'Ich entziehe dir die Macht über mein Herz.'",
    "Atme tief ein. Stell dir vor, wie du dich von einer Schnur löst.",
    "Wiederhole: 'Ich wähle mich. Heute. Morgen. Immer.'"
  ]
};

let currentStep = 0;
let currentSection = "";

function showMenu() {
  document.getElementById("start").classList.add("hidden");
  document.getElementById("menu").classList.remove("hidden");
}

function startSection(id) {
  currentStep = 0;
  currentSection = id;
  document.getElementById("menu").classList.add("hidden");
  showStep();
}

function showStep() {
  const container = document.getElementById("content");
  container.classList.remove("hidden");
  container.innerHTML = "";

  const text = document.createElement("p");
  text.textContent = sections[currentSection][currentStep];
  container.appendChild(text);

  const button = document.createElement("button");
  if (currentStep < sections[currentSection].length - 1) {
    button.textContent = "Weiter";
    button.onclick = () => {
      currentStep++;
      showStep();
    };
  } else {
    button.textContent = "Zurück zum Menü";
    button.onclick = () => {
      container.classList.add("hidden");
      document.getElementById("menu").classList.remove("hidden");
    };
  }
  container.appendChild(button);
}

function activatePush() {
  Notification.requestPermission().then(permission => {
    if (permission === "granted") alert("Benachrichtigungen aktiviert!");
    else alert("Benachrichtigungen wurden blockiert.");
  });
}