let score = document.getElementById("score");
let tbyT = document.getElementById("tbyT");
let fbyF = document.getElementById("fbyF");
let sbyS = document.getElementById("sbyS");
let rand = 0;
let size = 0;
function createWrap(size) {
    let grid = document.getElementById('container');
    grid.innerHTML = "";

    for(let i = 0; i < size*size; i++) {
        let newDiv = document.createElement('div');
        newDiv.dataset.id = i;
        newDiv.style.width = "calc(100%/" + size +")";
        newDiv.style.height = "calc(100%/" + size + ")";
        grid.appendChild(newDiv);
    }
}



function randTaupe(size) {
    let id = Math.floor(Math.random() * size*size);
    let square = document.querySelector('[data-id="' + id + '"]');
    square.style.background = 'url("img/taupe.png") center center no-repeat';
    square.style.backgroundSize = 'cover';
    setInterval(function() {
        document.querySelector('[data-id="' + id + '"]').style.background = "";
        randTaupe(size);
    }, 3000);
    return id;
}

tbyT.addEventListener('click', function(){

    createWrap(tbyT.value);
    rand = randTaupe(tbyT.value);
    size = tbyT.value;

});
fbyF.addEventListener('click', function() {
    createWrap(fbyF.value);
    rand = randTaupe(fbyF.value);
    size = fbyF.value;

});
sbyS.addEventListener('click', function() {
    createWrap(sbyS.value);
    rand = randTaupe(sbyS.value);
    size = sbyS.value;

});

document.getElementById('container').addEventListener('click', function(e) {
    let intScore = parseInt(score.innerHTML);
    console.log(e.target.dataset.id);
    console.log(intScore);
    if(e.target.dataset.id == rand) {
        intScore++;
        score.innerHTML = `${intScore}`;
        console.log(intScore);
        document.querySelector('[data-id="' + rand + '"]').style.background = "";
        rand = randTaupe(size);
    }
    else {
        intScore--;
        score.innerHTML = `${intScore}`;
    }
});
