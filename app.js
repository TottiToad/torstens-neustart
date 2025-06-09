const slides = [
  {
    title: "🕊 Tägliche Loslassen-Übung",
    text: "1. Sag laut oder innerlich:\n„Ich schulde ihr nichts mehr. Ich gehöre mir.“"
  },
  {
    title: "Spür dich",
    text: "2. Fühle deinen Körper. Fäuste? Herz? Bauch?\nLege eine Hand dorthin und sag:\n„Ich bin da.“"
  },
  {
    title: "Atme bewusst",
    text: "3. Atme 5x tief durch die Nase ein –\ndurch den Mund aus.\nStell dir vor: Du atmest sie aus."
  },
  {
    title: "Täglicher Abschluss",
    text: "4. Sag zum Abschluss:\n„Ich nehme heute keine alten Geschichten mit.\nIch gehe meinen eigenen Weg.“"
  },
  {
    title: "🌒 Anti-Romy-Meditation",
    text: "Augen zu. Sag innerlich:\n„Ich sehe, was war.\nIch nehme an, was ist.\nIch lasse los, was nicht mehr zu mir gehört.“"
  },
  {
    title: "Stell es dir vor",
    text: "Stell dir vor:\nEin Band zwischen euch zerreißt.\nSie geht.\nDu bleibst.\nFrei. Ruhig. Vollständig."
  },
  {
    title: "💛 Dein Licht",
    text: "Zum Abschluss:\n„Ich bin nicht das, was sie in mir ausgelöst hat.\nIch bin mein eigenes Licht.“"
  }
];

let current = 0;

function updateSlide() {
  document.getElementById('title').innerText = slides[current].title;
  document.getElementById('text').innerText = slides[current].text;
  document.getElementById('prevBtn').disabled = current === 0;
  document.getElementById('nextBtn').disabled = current === slides.length - 1;
}

function nextSlide() {
  if (current < slides.length - 1) {
    current++;
    updateSlide();
  }
}

function prevSlide() {
  if (current > 0) {
    current--;
    updateSlide();
  }
}

window.onload = updateSlide;
