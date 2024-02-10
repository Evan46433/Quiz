var canvas, database, quiz


function setup(){
 canvas = createCanvas(850,400)


quiz = new Quiz()
quiz.start()
}

function draw(){
background("lightblue")
}