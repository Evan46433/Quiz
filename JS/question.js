class Question{
    constructor(){
      this.title = createElement("h1")
      this.input1 = createInput("Enter your name...")
      this.input2 = createInput("Enter Correct Option Here...")
      this.quest = createElement("h3")
      this.option1 = createElement("h4")
      this.option2 = createElement("h4")
      this.option3 = createElement("h4")
      this.option4 = createElement("h4")
      this.message = createElement("h2")
      this.button = createButton("Submit")
    }


    display(){
    this.title.html("My Quiz Game!")    
    this.title.position(350,0)
    this.quest.html("QUESTION:- What starts and ends with the letter 'E',but has only one letter")
    this.quest.position(150,80)
    this.option1.html("1:Everyone")
    this.option2.html("2:Envelope")
    this.option3.html("3:Estimate")
    this.option4.html("4:Example")
    this.option1.position(150,100)
    this.option2.position(150,120)
    this.option3.position(150,140)
    this.option4.position(150,160)
    this.input1.position(150,230)
    this.input2.position(350,230)
    this.button.position(290,300)
    }
}

