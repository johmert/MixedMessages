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

/* Testing the Factory
let relatedArray = ['henhouse', 'foxhole', 'rabbit\'s den'];
let test = codePhraseFactory ('fox', relatedArray);
console.log(test.whisper()) */

const codePhrases = [];

const displayCodePhrase = () => {
    let index = Math.floor(Math.random() * codePhrases.length);
    return codePhrases[index].whisper();
}

const foxRelatedLocations = ['henhouse', 'foxhole', 'rabbit\'s den', 'yiffing corner'];
const eagleRelatedLocations = ['nest', 'trees', 'sky', 'river', 'rich yuppie\'s cabin'];
const mooseRelatedLocations = ['baseball field', 'forest', 'water', 'taxidermist\'s hands'];

codePhrases.push(codePhraseFactory('fox', foxRelatedLocations));
codePhrases.push(codePhraseFactory('eagle', eagleRelatedLocations));
codePhrases.push(codePhraseFactory('moose', mooseRelatedLocations));

console.log(displayCodePhrase());