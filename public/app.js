window.onload = function () {
  var audio2 = document.getElementById("audio2");
  audio2.play(); // calısmıto
};

function play() {
  setTimeout(() => {
    var audio = document.getElementById("audio");
    audio.play();
  }, 3000);
}

function changeImage() {
  setTimeout(() => {
    document.getElementById("imgChange").style.display = "block";
    document.getElementById("traverseimg").style.display = "none";
  }, 3000);
}

function showme() {
  setTimeout(() => {
    document.getElementById("change_fight_text").style.display = "block";
    document.getElementById("click_for_fight").style.display = "none";
  }, 3000);
}

class Me {
  constructor(name, age, country, bigboy) {
    this.name = name;
    this.age = age;
    this.country = country;
    this.bigboy = bigboy;
  }
}
const firstme = new Me("Kaan", 20, "Turkiye", true);

console.log(firstme);
