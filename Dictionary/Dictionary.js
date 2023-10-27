//making variables for all of the input and section
const button = document.getElementById("submit")
const input = document.getElementById("input")
const container = document.getElementById("main-section")

//loop to check if the input matches any of the definitions
function displayWord()
{
    for(i = 0; i < define.length; )
    {
        
    }
}

//define all of the objects and array's.
const define = ["yes","panacea","concatenation","saw","found","crane","minute","grotesque","label","debacle"]

const yes = {
    partOfSpeech: "noun" ,
    
    definitions:[
    "Used to give an affirmative response.",
    "Used as a response to someone addressing one or otherwise trying to attract one's attention." 
    ]
};

const panacea = {
    partOfSpeech: "noun" ,
    
    definitions: "An answer or solution for all problems or difficulties."
};

const concatenation = {
    partOfSpeech: "noun" ,
    
    definitions: "A series of interconnected or interdependent things or events."
};

const saw = {
    partOfSpeech: "verb" ,
    
    definitions: [
        "Cut (something) using a saw.",
        "Make rapid to-and-fro motions in cutting something or in playing a stringed instrument." 
    ]
};

const found = {
    partOfSpeech: "adjective" ,
    
    definitions: 
    [
        "Having been discovered by chance or unexpectedly.",
        "(of a ship) Equipped; Supplied."
    ]
};

const crane = {
    partOfSpeech: "verb" ,
    
    definitions:[
        "Stretch out one's body or neck in order to see something.",
        "Move (a heavy object) with a crane."
    ]
};

const minute = {
    partOfSpeech: "noun" ,
    
    definitions:[
        "A period of time equal to sixty seconds or a sixtieth of an hour.",
        "A sixtieth of a degree of angular measurement (symbol: ʹ)"        
    ]
};

const grotesque = {
    partOfSpeech: "adjective" ,
    
    definitions:  "Comically or repulsively ugly or distorted."
};

const label = {
    partOfSpeech: "noun" ,
    
    definitions:"A small piece of paper, fabric, plastic, or similar material attached to an object and giving information about it."
};

const debacle = {
    partOfSpeech: "noun" ,
    
    definitions:"A sudden and ignominious failure; a fiasco."
};

//add an event listener to launch the function when button is clicked

button.addEventListener("click", displayWord)