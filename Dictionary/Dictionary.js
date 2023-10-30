//making variables for all of the input and section
const button = document.getElementById("submit");
const input = document.getElementById("input");
const container = document.getElementById("main-section");
const divContainer = document.getElementById ("div");
var input2 = input.value;

var defTitle = document.createElement ("h2");
var defPOS = document.createElement ("p");
var def = document.createElement ("p");
//loop to check if the input matches any of the definitions
function displayWord()
{
    if(input2 === "")
    {
        divContainer.innerText = "Please enter a word."
        return;
    }
    var isPresent = false;
    for(i = 0; i < define.length; i++)
    {
        if (input2 === define[i].word)
        {
            isPresent = true;
            container.appendChild(divContainer);
            divContainer.appendChild (defTitle);
            defTitle.textContent = define[i];
            divContainer.appendChild (defPOS);
            defPOS.textContent  = define[i].partOfSpeech;
            divContainer.appendChild = def;
            def.textContent = define[i].definitions;
            break;
        }

    //     if (input2 === define[i])
    //     {
            // container.appendChild(divContainer);
            // divContainer.appendChild (defTitle);
            // defTitle.textContent = define[i];
            // divContainer.appendChild (defPOS);
            // defPOS.textContent  = define[i].partOfSpeech;
            // divContainer.appendChild = def;
            // def.textContent = define[i].definitions;
    //     }
    //     else if (input2 != define[i])
    //     {   
    //         container.appendChild(divContainer);
    //         divContainer.appendChild(def);
    //         def.textContent = ("That word is not in the dictionary or does not exist.");
    //     }
    //     else
    //     {
            // container.appendChild(divContainer);
            // divContainer.appendChild(def);
            // def.textContent = ("Please enter Somthing to put search.");
    //     }
    }
    if(isPresent)
    {

    }
    else
    {

    }
};

//define all of the objects and array's.

const yes = {
    word: "yes",
    partOfSpeech: "noun" ,
    
    definitions:[
    "Used to give an affirmative response.",
    "Used as a response to someone addressing one or otherwise trying to attract one's attention." 
    ]
};

const panacea = {
    word: "panacea",
    partOfSpeech: "noun" ,
    
    definitions: "An answer or solution for all problems or difficulties."
};

const concatenation = {
    word: "concatenation",
    partOfSpeech: "noun" ,
    
    definitions: "A series of interconnected or interdependent things or events."
};

const saw = {
    word: "saw",
    partOfSpeech: "verb" ,
    
    definitions: [
        "Cut (something) using a saw.",
        "Make rapid to-and-fro motions in cutting something or in playing a stringed instrument." 
    ]
};

const found = {
    word: "found",
    partOfSpeech: "adjective" ,
    
    definitions: 
    [
        "Having been discovered by chance or unexpectedly.",
        "(of a ship) Equipped; Supplied."
    ]
};

const crane = {
    word: "crane",
    partOfSpeech: "verb" ,
    
    definitions:[
        "Stretch out one's body or neck in order to see something.",
        "Move (a heavy object) with a crane."
    ]
};

const minute = {
    word: "minute",
    partOfSpeech: "noun" ,
    
    definitions:[
        "A period of time equal to sixty seconds or a sixtieth of an hour.",
        "A sixtieth of a degree of angular measurement (symbol: ʹ)"        
    ]
};

const grotesque = {
    word: "grotesque",
    partOfSpeech: "adjective" ,
    
    definitions:  "Comically or repulsively ugly or distorted."
};

const label = {
    word: "label",
    partOfSpeech: "noun" ,
    
    definitions:"A small piece of paper, fabric, plastic, or similar material attached to an object and giving information about it."
};

const debacle = {
    word: "debacle",
    partOfSpeech: "noun" ,
    
    definitions:"A sudden and ignominious failure; a fiasco."
};

const define = [yes,panacea,concatenation,saw,found,crane,minute,grotesque,label,debacle]; 
//add an event listener to launch the function when button is clicked

button.addEventListener("click", displayWord);