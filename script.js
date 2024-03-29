const speeech = new SpeechSynthesisUtterance();
let typeOfVoices = [];
let voiceSelector = document.getElementById("select-lang");
let voicePitch = document.getElementById("select-pitch");

document.getElementById("play-button").addEventListener("click", (event) => {
  let text = document.getElementById("text").value;
  speeech.text = text;
  window.speechSynthesis.speak(speeech);
});

window.speechSynthesis.onvoiceschanged = () => {
  typeOfVoices = window.speechSynthesis.getVoices();
  typeOfVoices.forEach((voice, idx) => {
    voiceSelector.options[idx] = new Option(voice.name, idx);
  });
  speeech.voice = typeOfVoices[0];
};

voiceSelector.addEventListener("change", () => {
  speeech.voice = typeOfVoices[voiceSelector.value];
});

voicePitch.addEventListener("change", (e) => {
  console.log("debug pitch", e.target.value);
  speeech.pitch = e.target.value;
});
