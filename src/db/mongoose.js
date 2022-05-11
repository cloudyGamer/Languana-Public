                    const mongoose = require('mongoose');

                    mongoose.connect('mongodb://127.0.0.1:27017/languana-api', {
                         useNewUrlParser: true,
                         useCreateIndex: true,
                         useUnifiedTopology: true,
                         useFindAndModify: false
                    });

                    

                    //<editor-fold defaultstate="collapsed" desc="user-example">
                    //                    const me = new User({
                    //                         name: ' Jeff Goldblum',
                    //                         status: 'premium',
                    //                         email: 'pyjana@gmail.com',
                    //                         password: 'Passdkeieiekssks'
                    //                    });
                    //
                    //                    me.save().then(() => {
                    //                         console.log('model', me);
                    //                    }).catch((error) => {
                    //                         console.log('Error!', error);
                    //                    });
                    //</editor-fold>


 
