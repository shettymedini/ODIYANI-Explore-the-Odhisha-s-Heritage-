// Scroll Reveal Animations
window.addEventListener('scroll', () => {
  document.querySelectorAll('.scroll-slide, .scroll-fade').forEach(el => {
    const top = el.getBoundingClientRect().top;
    const visible = window.innerHeight * 0.9;
    if (top < visible) el.classList.add('visible');
  });
});

// Manual Text + Audio Translations
const translations = {
  en: {
    history: "The Konark Sun Temple, built in the 13th century by King Narasimhadeva I, is a masterpiece of Odia architecture. Designed in the form of a colossal chariot for the Sun God Surya...",
    location: "Located near the Bay of Bengal in Konark, Odisha, the temple was constructed between 1243–1255 CE.",
    myths: "One myth tells of Samba, son of Lord Krishna, who built the temple. Another story speaks of Dharmapada, a boy who completed the temple’s top stone and sacrificed himself...",
    audio: "audio/konark_en.mp3"
  },
  hi: {
    history: "कोणार्क सूर्य मंदिर, 13वीं सदी में राजा नरसिंहदेव प्रथम द्वारा निर्मित, ओडिशा की वास्तुकला का एक अद्वितीय उदाहरण है। यह भगवान सूर्य के लिए विशाल रथ के रूप में बनाया गया था...",
    location: "यह मंदिर ओडिशा के कोणार्क में बंगाल की खाड़ी के पास स्थित है और 1243–1255 ईस्वी के बीच निर्मित हुआ था।",
    myths: "एक कथा के अनुसार कृष्ण पुत्र सांब ने सूर्य देवता की कृपा से यह मंदिर बनवाया। दूसरी कथा धर्मपद नामक बालक की है जिसने शिखर पूरा कर आत्मबलिदान दिया...",
    audio: "audio/konark_hi.mp3"
  },
  or: {
    history: "କୋଣାର୍କ ସୂର୍ଯ୍ୟ ମନ୍ଦିର ତ୍ରୟୋଦଶ ଶତାବ୍ଦୀରେ ରାଜା ନରସିଂହଦେବ ପ୍ରଥମଙ୍କ ଦ୍ୱାରା ନିର୍ମିତ ହୋଇଥିଲା। ଏହି ମନ୍ଦିର ସୂର୍ଯ୍ୟଦେବଙ୍କ ପାଇଁ ଏକ ବିଶାଳ ରଥ ଆକାରରେ ତିଆରି ହୋଇଛି...",
    location: "ଏହି ମନ୍ଦିର ଓଡ଼ିଶାର କୋଣାର୍କ ନଗରରେ, ବଙ୍ଗୋପସାଗର ପାଖରେ ଅବସ୍ଥିତ ଓ 1243–1255 ଖ୍ରୀ. ପ୍ରୟନ୍ତ ନିର୍ମିତ ହୋଇଥିଲା।",
    myths: "ଗଂଭୀର କଥାଅନୁସାରେ, ଶ୍ରୀକୃଷ୍ଣଙ୍କ ପୁଅ ସାମ୍ବ ଏହି ମନ୍ଦିର ନିର୍ମାଣ କରିଥିଲେ। ଅନ୍ୟ ଗଥା ଧର୍ମପଦ ନାମକ ଏକ ଶିଶୁଙ୍କ ବିଷୟରେ ଯିଏ ଶିଖର ସଂପୂର୍ଣ୍ଣ କରି ଆତ୍ମବଳି ଦେଇଥିଲେ...",
    audio: "audio/konark_or.mp3"
  }
};

function changeLang() {
  const lang = document.getElementById('langSelect').value;
  const t = translations[lang];

  document.getElementById('history').innerText = t.history;
  document.getElementById('location').innerText = t.location;
  document.getElementById('myths').innerText = t.myths;

  const audio = document.getElementById('audioPlayer');
  audio.src = t.audio;
  audio.play();
}
