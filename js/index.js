
const newQuotes = [{quotes:"The greatest and the mighthiest is God, our Father.",author:"~Lisa-Marie.",inspo:"Have a great day."},
{quotes:"Touch not my anointed and do my prophet no harm.",author:"~Psm 105:15.",inspo:"Have a productive week."},
{quotes:"80% of the things you do constitutes 20% of your results.",author:"~Unknown.",inspo:"Have a good day."},
{quotes:"If you have more than 3 prioties,then you don't have any.",author:"~Unknown.",inspo:"A blessed day for you colleagues."},
{quotes:"Seek ye first the kingdom of God and His righteousness",author:"~Mt 6:33",inspo:"Hey,cheer up!!..it's going to be a bright day."},
{quotes:"My God shall supply all my needs.",author:"~Phil 4:19.",inspo:"A blessed day for you colleagues."},
{quotes:"Plan and measure your progress.Do the urgent 1st,not the important.",author:"~Phil 4:19.",inspo:"A blessed day for you colleagues."},
{quotes:"Believe in the Lord Jesus and you will be saved.",author:"~Acts 16:31.",inspo:"A blessed day for you colleagues."}];

const diffQuote = document.getElementById("generate-btn")
const text = document.querySelector("#quote")
const myAuthor = document.querySelector(".author")
const myQuote = document.querySelector("#nicequote")

diffQuote.addEventListener('click',genQuote)

function genQuote(){
  // console.log(newQuotes[0].quotes);
  // console.log(newQuotes[0].author);
  // let index = Math.floor(Math.random()* newQuotes.length)
  let index = parseInt(Math.random()* newQuotes.length)
  text.textContent = newQuotes[index].quotes;
  myAuthor.textContent = newQuotes[index].author;
  myQuote.textContent = newQuotes[index].inspo;
}
