
// Imports the Google Cloud client library
const {Translate} = require('@google-cloud/translate').v2;

// Creates a client
const translate = new Translate();

const request = require('postman-request');

// import key
const key = 'redacted';

//${encodeURIComponent(text)}${target}
const translateTxt = (target,source,query,callback) => {
      
      const transUrl = 
`https://translation.googleapis.com/language/translate/v2?key=${key}&q=${query}&source=${source}&target=${target}&format=text`;

      request({url:transUrl,json:true},(error,response) => {
           if (error) {
                callback(`unable to connect to translation services`);
           } else if (response.body.length===0){
                callback(`unable to translate`);
           }else {
                const data = response.body.data;
                callback(undefined, {
                     target:data.translations[0].translatedText
                });
           };
      });


 };


// const text = 'The text to translate, e.g. Hello, world!';
// const target = 'The target language, e.g. ru';
//
//async function translateTxt() {
//  // Translates the text into the target language. "text" can be a string for
//  // translating a single piece of text, or an array of strings for translating
//  // multiple texts.
//  let [translations] = await translate.translate(text, target);
//  translations = Array.isArray(translations) ? translations : [translations];
//  console.log('Translations:');
//  translations.forEach((translation, i) => {
//    console.log(`${text[i]} => (${target}) ${translation}`);
//  });
//};
module.exports = translateTxt;