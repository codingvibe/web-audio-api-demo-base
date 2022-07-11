const AudioContext = window.AudioContext || window.webkitAudioContext;

async function addWebAudio() {
  const player = document.getElementById("player");
  const audioCtx = new AudioContext();
  const sourceNode = audioCtx.createMediaElementSource(player);

  const analyser = audioCtx.createAnalyser();
  analyser.fftSize = 2048;
  setUpVisualizer(analyser);
  
  sourceNode.connect(analyser).connect(audioCtx.destination);
  player.play();
}

async function getImpulseBuffer(audioCtx, impulseUrl) {
  const response = await fetch(impulseUrl);
  const responseBuffer = await response.arrayBuffer();
  return audioCtx.decodeAudioData(responseBuffer);
}

function setUpVisualizer(analyser) {
  const canvas = document.getElementById("visualizer");
  canvas.width = 1000;
  canvas.height = 250;
  const canvasCtx = canvas.getContext("2d");

  canvasCtx.clearRect(0, 0, canvas.width, canvas.height);
  const bufferLength = analyser.frequencyBinCount;
  const dataArray = new Uint8Array(bufferLength);

  const drawFrequency = () => {
    canvasCtx.clearRect(0, 0, canvas.width, canvas.height);
    drawVisual = requestAnimationFrame(drawFrequency);

    analyser.getByteFrequencyData(dataArray);

    canvasCtx.fillStyle = 'rgb(0, 0, 0)';
    canvasCtx.fillRect(0, 0, canvas.width, canvas.height);

    const barWidth = (canvas.width / bufferLength) * 2.5;
    let barHeight;
    let x = 0;

    for(let i = 0; i < bufferLength; i++) {
      barHeight = Math.floor(canvas.height*dataArray[i]/255);

      canvasCtx.fillStyle = 'rgb(' + (barHeight+100) + ',50,50)';
      canvasCtx.fillRect(x,canvas.height-barHeight,barWidth,barHeight);

      x += barWidth + 1;
    }
  };

  drawFrequency();
}

function createSlider(id, labelText, min, max, currentValue, step, parentElement = document.body) {
  const containerDiv = document.createElement("div");
  containerDiv.id = `${id}-container`
  const slider = document.createElement("input");
  slider.id = id;
  slider.type = "range"
  slider.labelText = labelText;
  slider.min = min;
  slider.max = max;
  slider.step = step;
  const label = document.createElement("label");
  label.for = labelText;
  label.innerText = labelText;
  containerDiv.appendChild(label);
  containerDiv.appendChild(slider);
  parentElement.appendChild(containerDiv)
  slider.value = currentValue;
  return slider;
}

document.addEventListener("DOMContentLoaded", addWebAudio);