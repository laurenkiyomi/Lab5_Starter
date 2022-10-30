// expose.js
window.addEventListener("DOMContentLoaded", init);

function init() {
  var selector = document.getElementById("horn-select");
  var image = document.querySelectorAll("img")[0];
  var imageTitle = document.querySelector("h2");
  var sound = document.querySelector("audio");
  var playButton = document.querySelector("button");
  var volumeInput = document.querySelector('input[type="range"]');
  var volumeIcon = document.querySelectorAll("img")[1];
  const confetti = new JSConfetti();

  selector.addEventListener("change", function () {
    if (selector.value == "select") {
      image.src = "assets/images/no-image.png";
      image.alt = "No image selected";
      // imageTitle.innerText = "Expose - Select";
      sound.src = "";
    }

    if (selector.value == "air-horn") {
      image.src = "assets/images/air-horn.svg";
      image.alt = "Air horn image";
      // imageTitle.innerText = "Expose - Air Horn";
      sound.src = "assets/audio/air-horn.mp3";
    }

    if (selector.value == "car-horn") {
      image.src = "assets/images/car-horn.svg";
      image.alt = "Car horn image";
      // imageTitle.innerText = "Expose - Car Horn";
      sound.src = "assets/audio/car-horn.mp3";
    }

    if (selector.value == "party-horn") {
      image.src = "assets/images/party-horn.svg";
      image.alt = "Party horn image";
      // imageTitle.innerText = "Expose - Party Horn";
      sound.src = "assets/audio/party-horn.mp3";
    }
  });

  playButton.addEventListener("click", function () {
    if (selector.value == "party-horn") {
      confetti.addConfetti();
    }

    sound.play();
  });

  volumeInput.addEventListener("change", function () {
    let volumeValue = volumeInput.value / 100;

    if (volumeInput.value == 0) {
      volumeIcon.src = "assets/icons/volume-level-0.svg";
      volumeIcon.alt = "Volume level 0";
    } else if (volumeInput.value >= 1 && volumeInput.value < 33) {
      volumeIcon.src = "assets/icons/volume-level-1.svg";
      volumeIcon.alt = "Volume level 1";
    } else if (volumeInput.value >= 33 && volumeInput.value < 67) {
      volumeIcon.src = "assets/icons/volume-level-2.svg";
      volumeIcon.alt = "Volume level 2";
    } else {
      volumeIcon.src = "assets/icons/volume-level-3.svg";
      volumeIcon.alt = "Volume level 3";
    }

    sound.volume = volumeValue;
  });
}
