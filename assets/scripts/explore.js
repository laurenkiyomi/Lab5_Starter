// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  var voicesList = {};
  var voiceSelect = document.getElementById("voice-select");
  var textArea = document.getElementById("text-to-speak");
  var speakButton = document.querySelector("button");
  var speakingIcon = document.querySelector("img");

  speechSynthesis.addEventListener('voiceschanged', function() {
    let newVoices = speechSynthesis.getVoices();
    for (let i = 0; i < newVoices.length; i++) {
      let option = document.createElement('option');
      option.value = newVoices[i].name;
      option.textContent =`${newVoices[i].lang}`;
      voiceSelect.appendChild(option);

      voicesList[newVoices[i].name] = newVoices[i];
    }
  })

  speakButton.addEventListener('click', function() {
    let text = textArea.value;
    let selectedVoice = voicesList[voiceSelect.value];
    let speaker = new SpeechSynthesisUtterance(text);
    speaker.voice = selectedVoice;
    speechSynthesis.speak(speaker);
  })

  setInterval(function() {
    if (speechSynthesis.speaking) {
      speakingIcon.src = "assets/images/smiling-open.png";
      speakingIcon.alt = "Smiling Open Face";
    } else {
      speakingIcon.src = "assets/images/smiling.png";
      speakingIcon.alt = "Smiling Face";
    }
  }, 25)



}