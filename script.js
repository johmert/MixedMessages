const codePhraseFactory = (name, relatedNouns) =>{
return {
    name: name,
    relatedNouns: relatedNouns,
    whisper(){
        let codename = this.name;
        let codeLocation = this.relatedNouns[Math.floor(Math.random() * this.relatedNouns.length)];
        return `The ${codename} is in the ${codeLocation}`;
    }
}
};

// Testing the Factory
let relatedArray = ['henhouse', 'foxhole', 'rabbit\'s den'];
let test = codePhraseFactory ('fox', relatedArray);
console.log(test.whisper())