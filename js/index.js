document.addEventListener("DOMContentLoaded", function () {
  let generateButton = document.querySelector("#generate");
  var imageContainer = document.querySelector("#image");

  document
    .querySelector("#image-caption")
    .addEventListener("keyup", function (e) {
      if (e.keyCode === 13) {
        generateMeme();
      }
    });

  generateButton.addEventListener("click", function () {
    generateMeme();
  });

  let downloadRawImage = document.querySelector("#download");
  downloadRawImage.addEventListener("click", function () {
    downloadImage();
  });

  let downloadImage = () => {
    fetch(imageContainer.src)
      .then((resp) => resp.blob())
      .then((blobobject) => {
        const blob = window.URL.createObjectURL(blobobject);
        const anchor = document.createElement("a");
        anchor.style.display = "none";
        anchor.href = blob;
        anchor.download = `bestin${Date.now()}.png`;
        document.body.appendChild(anchor);
        anchor.click();
        window.URL.revokeObjectURL(blob);
      })
      .catch(() => console.log("An error in downloadin gthe file sorry"));
  };

  let generateMeme = () => {
    let caption = document.querySelector("#image-caption").value;
    let loader = document.querySelector(".loader");

    loader.style.display = "block";

    fetch(
      `https://api.imgflip.com/caption_image?template_id=393371323&username=N3-rd&password=1232112321&text1=${caption}`
    )
      .then((res) => res.json())
      .then((data) => {
        imageContainer.src = data.data.url;
        loader.style.display = "none";
      });
  };
});
