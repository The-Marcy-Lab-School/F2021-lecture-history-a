// have a name, release, seasons, language
class Show{ 
    constructor(n, y, s = 1, l = "English"){
        this.name = n
        this.releaseYear = y
        this.seasons = s
        this.currentLanguage = l
    }
    
    setLanguage(language){
        this.currentLanguage = language
        return `The language for ${this.name} has been set to ${language}`
    }
    
    play(){
        console.log(`Currently playing ${this.name}`)
    }
    
    toString(){
        return `${this.name} released in ${this.releaseYear}.`
    }
}

// a list of animators
class AnimatedShow extends Show{
    constructor(n, y, s, l){
        super(n, y, s, l) 
        this.animators = []
    }
    
    play(){
        console.log("🥳 😏 😒 😞 😔 😟 😕 🙁️ 😣 😖")
        super.play() //access parent method 
    }
    
    toString(){
        let string = super.toString()
        return `${string} Best animated show ever!`
    }
}

let adventure = new AnimatedShow(
    "Adventure Time",
    2011,
    10,
    "Spanish"
)

let seinfeld = new Show("Seinfeld", 1970, 20)

console.log(adventure)
console.log(seinfeld)
