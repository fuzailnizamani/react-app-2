import {createRoot} from "react-dom/client"
import App from "./App";

const listName = ["alice", "bob", "charlie", "danielle"]
// --> ["Alice", "Bob", "Charlie", "Danielle"] 


const upCase = listName.map(function (name) {
  let newName;
  for(let i = 0; i <= name.length-1; i++){
    if(i === 0){
      newName = name.replace(name[i], name[i].toUpperCase());
    }
  }
  return newName;
});

console.log(upCase);

const pokemon = ["Bulbasaur", "Charmander", "Squirtle"]
// -->          ["<p>Bulbasaur</p>", "<p>Charmander</p>", "<p>Squirtle</p>"]
// Your code here

const newPokemon = pokemon.map( poke => `<p>${poke}</p>`);

console.log(newPokemon)

const root = createRoot(document.getElementById("root"))
root.render(
  <App />
)