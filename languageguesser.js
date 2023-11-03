const franc = require('franc'); // pravim const za franc
const langs = require('langs'); // pravim const za langs
const input = process.argv[2]; // pravim go taka che da zasicha inputa, [2] e poneje kato se runva koda se pishe node languegeguesser.js input
const langCode = franc(input); // pravim taka che franc da vzema stoinosta na inputa
// const langCode = franc('нещо не на английски'); 
if(langCode === 'und') { // if statement ako teksta e prekaleno kratuk
    console.log('will need more text')
} else {
    const language = langs.where("3", langCode); 
    console.log(language.name); // ezika koito misli che e 
}

