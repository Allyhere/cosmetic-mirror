const video = document.querySelector("[data-video]");

navigator.mediaDevices
  .getUserMedia({
    audio: false,
    video: { width: 400, height: 600, facingMode: "environment" },
  })
  .then((stream) => {
    video.srcObject = stream;
    video.onloadedmetadata = () => video.play();
  })
  .catch((err) => {
    console.log({ err });
  });
