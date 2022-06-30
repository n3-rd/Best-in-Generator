

document.addEventListener('DOMContentLoaded', function() {
 
    let generateButton = document.querySelector('#generate');

    generateButton.addEventListener('click', function() {
        generateMeme()  

    });

let generateMeme = ()=> {
    let caption = document.querySelector('#image-caption').value;
    let imageContainer = document.querySelector('#image');
    let downloadImage = document.querySelector('#download-image');
    let loader = document.querySelector('.loader')

    loader.style.display = 'block';

        fetch(`https://api.imgflip.com/caption_image?template_id=393371323&username=N3-rd&password=1232112321&text1=${caption}`)
        .then(res => res.json())
        .then(data => {
            imageContainer.src = data.data.url;
            downloadImage.src = data.data.url;
            loader.style.display = 'none';
        })
    }
    


});
