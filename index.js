const wrapper = document.getElementById("tiles");

let columns = Math.floor(document.body.clientWidth / 60),
    rows    = Math.floor(document.body.clientHeight / 60);

const colors = [
    "rgb(255, 241, 118)",
    "rgb(129, 199, 132)",
    "rgb(79, 195, 247)",
    "rgb(149, 117, 205)",
    "rgb(240, 98, 146)",
    "rgb(255, 138, 101)",
]    

let toggled = false;

const handleOnClick = index => {
    toggled = !toggled;

    anime({
        targets: ".tile",
        opacity: toggled ? 0 : 1,
          
    })
}

const createTile = index => {
    const tile = document.createElement("div");

    tile.classList.add("tile");

    tile.onclick = e => handleOnClick(index);

    return tile;
}

const createTiles = quantity => {
    Array.from(Array(quantity)).map((tile, index) => {
        wrapper.appendChild(createTile(index));
    })
}

const createGrid = () => {
    wrapper.innerHTML = "";

    columns = Math.floor(document.body.clientWidth / 60),
    rows    = Math.floor(document.body.clientHeight / 60);

    wrapper.style.setProperty("grid-template-columns", "repeat(" + columns + ", 1fr)");
    wrapper.style.setProperty("grid-template-rows", "repeat(" + rows + ", 1fr)");


    createTiles(columns * rows);
}

createGrid();

window.onresize = () => createGrid();