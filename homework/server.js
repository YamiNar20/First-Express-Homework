const express = require ('express')
const app = express()

//GREETING ROUTE****
//Make a route '/greeting'that sends a generic greeting to the screen like "Hello, stranger".
app.get('/greeting', (req, res) => {
    res.send('Hello, stranger');
});

//Give the greetingroute a param /:name
app.get('/greeting/:name', (req, res) =>{
const name  = req.params.name;
res.send(`Hello, ${name}`);

});

//TIP CALCULATOR ROUT***
//Your app should have a route of '/tip'and it should expect 2 params. One should be totaland one should be tipPercentage.
app.get('/tip/:total/:tipPercentage', (req, res) => {
    const total = parseInt(req.params.total);
    const tipPercentage = parseInt(req.params.tipPercentage);
    const tipAmount = (tipPercentage/total) * 100;
    res.send(tipAmount.toString());
  });
//Magic 8 Ball ROUTES****
app.get('/magic/:question',(req, res) =>{
    const question = req.params.question;
    const responses = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"];
    const randomResponse = responses[Math.floor(Math.random() * responses.length)];
    const result = `<h1>Question: ${question}</h1><h1>Answer: ${randomResponse}</h1>`;
    res.send(result);
    
})


// Fibonacci route
app.get('/fibonacci/:number', (req, res) => {
    const number = parseInt(req.params.number);
    const isFibonacci = isPerfectSquare(5 * number * number + 4) || isPerfectSquare(5 * number * number - 4);
    if (isFibonacci) {
      res.send("Very good. It is Fibonacci.");
    } else {
      res.send("I can tell this is not a Fibonacci number.");
    }
  });
  
  // Helper function to check if a number is a perfect square
  function isPerfectSquare(num) {
    const sqrt = Math.sqrt(num);
    return sqrt === Math.floor(sqrt);
  }



app.listen(3000, () => {
    console.log('Yes i am listening on port 3000');
});
