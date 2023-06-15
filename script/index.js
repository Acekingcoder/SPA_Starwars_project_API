function main() {
    const charactersList = document.querySelector("#characters");
  const characterName = document.querySelector("#character-name");
  const characterGender = document.querySelector("#character-gender");
  const characterHeight = document.querySelector("#character-height");
  const characterImage = document.querySelector("#character-image");

  const url = "https://swapi.dev/api/people";

  const images = [
    "luke.jpg",
    "c-3po.jpg",
    "r2d2.jpg",
    "darth.jpg",
    "leia.jpg",
    "owen.jpg",
    "beru.jpg",
    "r5.jpeg",
    "biggs.jpg",
    "c-30po.jpg",
  ];

  async function populate() {
    let request = new Request(url);
    let response = await fetch(request);
    let data = await response.json();

    // console.log(data.next);
    let ken = data.next;
    while (ken) {
      console.log(ken);
      request = new Request(ken);
      response = await fetch(request);
       data = await response.json();
      data.results.forEach((character, index) => {
        const li = document.createElement("li");
        
        li.textContent = character.name;

        li.addEventListener("click", () => {
          characterImage.src = "style/" + images[index];
          // characterImage.setAttribute('src', 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fstock.adobe.com%2Fsearch%2Fimages%3Fk%3Dstar%2Bwars&psig=AOvVaw0MB076RH5V9ltXCUwM-GVq&ust=1686736367629000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCIiUp-L8v_8CFQAAAAAdAAAAABAJ');

          characterName.textContent = character.name;
          characterGender.textContent = `Gender: ${character.gender}`;
          characterHeight.textContent = `Height: ${character.height}cm`;
        });
        charactersList.appendChild(li);
      });
      
    }
  }
  populate();
}

main();
module.exports = { main }
