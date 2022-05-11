                    const mongoose = require('mongoose');
                    const validator = require('validator');
                    
                                       //<editor-fold defaultstate="collapsed" desc="word-model">
                    const Vocab = mongoose.model(('Vocab'), {
                         word: {
                              type: String, 
                              required: true,
                              trim: true,
                              lowercase: true
                         },
                         accuracy: {
                              type: mongoose.Types.Decimal128, 
                              required: true,
                              default: 0.0
                         },
                         frequency: {
                              type: mongoose.Types.Decimal128, 
                              required: true,
                              default: 0.0
                         }
                    });

                    //<editor-fold defaultstate="collapsed" desc="save vocab example">
//                    const vocab = new Vocab({
//                         word: 'Katze',
//                         accuracy: 0.2,
//                         frequency: 0.3
//                    });
//                    
//                    vocab.save().then(() => {
//                         console.log('model:  ', vocab);
//                    }).catch((error) => {
//                         console.log('Error!', error);
//                    });
                    //</editor-fold>

                    //</editor-fold>
                    module.exports = Vocab;
                    
                    //each vocab table should have the users id