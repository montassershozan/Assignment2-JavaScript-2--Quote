function generateQuotes(){
   var quotePa = document.getElementById('quote1');
   var quotes = [quotePa.innerHTML=`“So many books, so little time.”
   ― Frank Zappa` , quotePa.innerHTML="“A room without books is like a body without a soul.”― Marcus Tullius Cicero" ,
   quotePa.innerHTML="“You only live once, but if you do it right, once is enough.”― Mae West",quotePa.innerHTML="“Live as if you were to die tomorrow. Learn as if you were to live forever.”― Mahatma Gandhi",
   quotePa.innerHTML="“Here's to the crazy ones. The misfits. The rebels. The troublemakers. The round pegs in the square holes. The ones who see things differently. They're not fond of rules. And they have no respect for the status quo. You can quote them, disagree with them, glorify or vilify them. About the only thing you can't do is ignore them. Because they change things. They push the human race forward. And while some may see them as the crazy ones, we see genius. Because the people who are crazy enough to think they can change the world, are the ones who do.”― Steve Jobs",
]
var m1 = Math.random()*5;
var m2 = Math.floor(m1);
quotePa.innerHTML=quotes[m2];
}