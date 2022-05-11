 async function natLangNode(text, callback) {
      
      // Imports the Google Cloud client library
      const language = require('@google-cloud/language');

      // Instantiates a client
      const client = new language.LanguageServiceClient({keyFilename: 'languana-credentials.json'});

      // The text to analyze
      
      const document = {
           content: text,
           type: 'PLAIN_TEXT',
           language: 'de'
      };

      const encodingType = 'UTF8';

// Detects the sentiment of the document
      const [syntax] = await client.analyzeSyntax({document, encodingType});
      const tokens = syntax.tokens;
      
//      if (tokens[0].partOfSpeech.aspect==="ASPECT_UNKNOWN"){
//                callback(`unable to analyze syntax`);
//           }else {
                const data = tokens; //[0].partOfSpeech;
                callback(undefined, {
                     data,
                     text
                });
           //};

 }

 module.exports = natLangNode;