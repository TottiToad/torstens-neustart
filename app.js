document.addEventListener("DOMContentLoaded", () => {
  const sections = ["reise", "entkopplung", "selbstwert", "visualisierung", "loslassen"];
  const texts = {
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
    selbstwert: Array.from({length: 28}, (_, i) => `Tag ${i + 1}: Selbstwert beginnt bei mir.`),
    visualisierung: [
      "Stell dir vor, du stehst auf einer Lichtung. Du atmest tief ein. Mit jedem Atemzug kehrst du zu dir zurück.",
      "Um dich herum lösen sich Bilder, Stimmen und Berührungen vergangener Bindungen in Nebel auf.",
      "Du bleibst. Still. Stark. Und frei."
    ],
    loslassen: [
      "1. Atme tief durch.",
      "2. Sprich innerlich: „Ich darf loslassen.“",
      "3. Stell dir vor, wie du ihr Bild in eine Seifenblase legst und sie davonzieht.",
      "4. Kehre zurück in deinen Körper. Bewege bewusst deine Finger und Füße."
    ]
  };

  sections.forEach(id => {
    const container = document.getElementById(id);
    if (container) {
      const ul = document.createElement("ul");
      texts[id].forEach(t => {
        const li = document.createElement("li");
        li.textContent = t;
        ul.appendChild(li);
      });
      container.appendChild(ul);
      const back = document.createElement("div");
      back.className = "back";
      back.textContent = "← zurück zum Menü";
      back.onclick = () => goBack();
      container.appendChild(back);
    }
  });
});

function showMenu() {
  document.getElementById("start").classList.add("hidden");
  document.getElementById("menu").classList.remove("hidden");
}
function showSection(id) {
  document.getElementById("menu").classList.add("hidden");
  document.querySelectorAll('.section').forEach(el => el.classList.add('hidden'));
  document.getElementById(id).classList.remove("hidden");
}
function goBack() {
  document.querySelectorAll('.section').forEach(el => el.classList.add('hidden'));
  document.getElementById("menu").classList.remove("hidden");
}
function activatePush() {
  Notification.requestPermission().then(permission => {
    if (permission === "granted") alert("Benachrichtigungen aktiviert!");
    else alert("Benachrichtigungen wurden blockiert.");
  });
}