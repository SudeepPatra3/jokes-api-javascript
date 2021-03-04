var jokes = document.getElementById("jokes");
var ans = document.getElementById("ans");

function jokeload() {
  fetch("https://official-joke-api.appspot.com/random_joke")
    .then((res) => res.json())
    .then((data) => {
      let joke1 = data.setup;
      let joke2 = data.punchline;
      jokes.innerText = joke1;
      ans.innerText = "[ " + joke2 + " ]";
    })
    .catch((err) => console.log(err));
}
