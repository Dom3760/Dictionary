//making variables for all of the input and section
const button = document.getElementById("submit");
const input = document.getElementById("input");
const container = document.getElementById("main-section");

const divContainer = document.createElement ("div");
divContainer.classList.add("divContainer");

const list = document.createElement("ol");


var defTitle = document.createElement ("h2");
defTitle.classList.add("emptyInput");

var defPOS = document.createElement ("p");
defPOS.classList.add("partOfSpeach");

var def = document.createElement ("p");

//function to check if word is in dictionary.
function displayWord()
{   
    //makes all input lowercase no matter what.
    const input2 = input.value.toLowerCase();

    //if the input feild is empty then it will say "Please enter a word."
    if(input2 === "")
    {   
        container.appendChild(divContainer);
        divContainer.appendChild(defTitle);
        defTitle.innerText = "Please enter a word.";
        defPOS.textContent = ("");
        def.textContent = ("");
        list.remove()
        return;
    }
    
    //declaring that is present is false so if condition is met it will be set to true.
    var isPresent = false;
    
    for(var i = 0; i < define.length; i++)
    {
        if (input2 === define[i].word)
        {
            isPresent = true;
            var i = [i];
            break;
        }
    }

    //if is present is true then it will add the word below the other content.
    if(isPresent)
    {
        container.appendChild(divContainer);
        
        divContainer.appendChild(defTitle);
        defTitle.textContent = input2;
        
        divContainer.appendChild(defPOS);
        defPOS.textContent = "Part Of Speech: "+define[i].partOfSpeech;
        
        
        divContainer.appendChild(list);

        while (list.firstChild) {
            list.removeChild(list.firstChild);
        }
        //list that creates a list for the definitions and adds the list definitions.
        for (let x=0 ; x<define[i].definitions.length; x++)
        {  
            const listItem = document.createElement ("li");
            listItem.classList.add("defText");
            listItem.textContent += define[i].definitions[x];
            list.appendChild (listItem);
            // listItem.innerText = (x + 1) + ". " + define[i].definitions[x];
        }
    }

    //if no other conditions are met then it will presume that the word does not exist or is not on the dictionary
    else
    {
        container.appendChild(divContainer);

        divContainer.appendChild(defTitle);
        defTitle.textContent = "That word does not exist or is not on our dictioary sorry.";
        defPOS.textContent = ("");
        def.textContent = ("");
        list.remove() 
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
    
    definitions: ["An answer or solution for all problems or difficulties."]
};

const concatenation = {
    word: "concatenation",
    partOfSpeech: "noun" ,
    
    definitions: ["A series of interconnected or interdependent things or events."]
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
    
    definitions:  ["Comically or repulsively ugly or distorted."]
};

const label = {
    word: "label",
    partOfSpeech: "noun" ,
    
    definitions:["A small piece of paper, fabric, plastic, or similar material attached to an object and giving information about it."]
};

const debacle = {
    word: "debacle",
    partOfSpeech: "noun" ,
    
    definitions:["A sudden and ignominious failure; a fiasco."]
};

const define = [yes,panacea,concatenation,saw,found,crane,minute,grotesque,label,debacle]; 
//add an event listener to launch the function when button is clicked

button.addEventListener("click", displayWord);