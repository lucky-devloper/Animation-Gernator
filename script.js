let btnE1 = document.querySelector('button')
let image = document.querySelector(".image")
let artistimage = document.createElement("img")
let artistname = document.querySelector(".image-name")

btnE1.addEventListener('click',picgernator)

async function picgernator(){
    image.innerHTML = "loading..."
    artistname.innerHTML = "Updating..."
    btnE1.innerHTML = "updating..."
    const url = `https://nekos.best/api/v2/neko`
    const response = await fetch(url);
    const data = await response.json()
    console.log(data);
    artistname.innerHTML = data.results[0].artist_name
    artistimage.src = data.results[0].url
    image.innerHTML = ""
    image.appendChild(artistimage)
    btnE1.innerHTML = "Generate Pic";
}