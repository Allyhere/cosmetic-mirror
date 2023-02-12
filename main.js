const video = document.querySelector("[data-video]");

navigator.mediaDevices
  .getUserMedia({
    audio: false,
    video: {
      width: { exact: 300 },
      height: { exact: 500 },
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
