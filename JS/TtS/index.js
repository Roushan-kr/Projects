"use strict"
let textarea = document.querySelector("textarea")
let button = document.querySelectorAll("button")



function getVoices() {
    let voices = speechSynthesis.getVoices();
    if (!voices.length) {
        // some time the voice will not be initialized so we can call spaek with empty string
        // this will initialize the voices 
        let utterance = new SpeechSynthesisUtterance("");
        speechSynthesis.speak(utterance);
        voices = speechSynthesis.getVoices();
    }
    return voices;
}


function speak(text, voice, rate, pitch, volume) {
    // create a SpeechSynthesisUtterance to configure the how text to be spoken 
    let speakData = new SpeechSynthesisUtterance();
    speakData.volume = volume; // From 0 to 1
    speakData.rate = rate; // From 0.1 to 10
    speakData.pitch = pitch; // From 0 to 2
    speakData.text = text.toString();
    speakData.lang = 'en';
    speakData.voice = voice;
    speakData.onstart = (event) => {
        console.log(`We have started uttering this speech: ${event.utterance.text}`);
    }
    // pass the SpeechSynthesisUtterance to speechSynthesis.speak to start speaking 
    speechSynthesis.speak(speakData);

    // if not try to run it again 
    speakData.addEventListener("error", (event) => {
        console.log(
          `An error has occurred with the speech synthesis: ${event.error}`,
        );
        speechSynthesis.speak(speakData);

      });
      
    console.log(`is it speaking -${speechSynthesis.speaking}`)
    console.log(`status of voice ${voice}, and text is -${text}`)
}

if ('speechSynthesis' in window) {

    let voices = getVoices();
    let rate = 1, pitch = 1.2, volume = 1;
    button[0].onclick = function () {
        const text = textarea.value;
        speak(text, voices[1], rate, pitch, volume);

    }

    // setTimeout(() => { // speak after 2 seconds 
    //     rate = 0.5; pitch = 1.5, volume = 0.5;
    //     text = textarea.value;
    //     speak(text, voices[10], rate, pitch, volume);
    // }, 2000);
} else {
    console.log(' Speech Synthesis Not Supported 😞');
}