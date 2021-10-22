const codePhraseFactory = (name, relatedNouns) =>{
return {
    name: name,
    relatedNouns: relatedNouns,
    whisper(){
        const codePrepositions = ['in', 'behind', 'in front of', 'under', 'on top of', 'deep within', 'over'];
        let codename = this.name;
        let codeLocation = this.relatedNouns[Math.floor(Math.random() * this.relatedNouns.length)];
        let codePrep = codePrepositions[Math.floor(Math.random() * codePrepositions.length)];
        return `The ${codename} is ${codePrep} the ${codeLocation}`;
    }
}
};

const codePhrases = [];

const displayCodePhrase = () => {
    let index = Math.floor(Math.random() * codePhrases.length);
    return codePhrases[index].whisper();
}

const foxRelatedLocations = ['henhouse', 'foxhole', 'rabbit\'s den', 'yiffing corner'];
const eagleRelatedLocations = ['nest', 'trees', 'sky', 'river', 'rich yuppie\'s cabin'];
const mooseRelatedLocations = ['baseball field', 'forest', 'water', 'taxidermy center'];

codePhrases.push(codePhraseFactory('fox', foxRelatedLocations));
codePhrases.push(codePhraseFactory('eagle', eagleRelatedLocations));
codePhrases.push(codePhraseFactory('moose', mooseRelatedLocations));

console.log(displayCodePhrase());