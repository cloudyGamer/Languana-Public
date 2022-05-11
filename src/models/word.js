                    const mongoose = require('mongoose');
                    const validator = require('validator');
                    
                                       //<editor-fold defaultstate="collapsed" desc="word-model">
                    const Word = mongoose.model(('Words'), {
                         input: {
                              type: String, 
                              required: true,
                              trim: true,
                              lowercase: true//,
                              //unique: true
                         },
                         target: {type: String, 
                              required: true,
                              lowercase: true
                         },
                         tag: {
                              type: String, 
                              required: true
                         },
                         gender: {type: String, 
                              required: true,
                              enum: {values:['FEMININE','MASCULINE','NUETER'], 
                                   message:'Gender must be FEMININE, MASCULINE or NUETER'}

                         },
                         number: {type: String, 
                              required: true}
                    });

                    //<editor-fold defaultstate="collapsed" desc="save word example">
//                    const word = new Word({
//                         input: 'Cat',
//                         target: 'Katze',
//                         tag: 'NOUN',
//                         gender: 'FEMININE',
//                         number: 'SINGULAR'
//                    });
//                    
//                    word.save().then(() => {
//                         console.log('model:  ', word);
//                    }).catch((error) => {
//                         console.log('Error!', error);
//                    });
                    //</editor-fold>

                    //</editor-fold>
                    module.exports = Word;