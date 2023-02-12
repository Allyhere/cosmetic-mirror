const video = document.querySelector("[data-video]");

navigator.mediaDevices
  .getUserMedia({
    audio: false,
    video: {
      width: { min: 270, max: 270 },
      height: { min: 480, max: 480},
      facingMode: "user",
    },
  })
  .then((stream) => {
    video.srcObject = stream;
    video.onloadedmetadata = () => video.play();
  })
  .catch((err) => {
    alert("You have to enable camera permissions!");
  });
