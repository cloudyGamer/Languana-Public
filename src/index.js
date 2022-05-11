                    //<editor-fold defaultstate="collapsed" desc="requirements">
const express = require('express');
require('./db/mongoose');

const User = require('./models/user');
const Word = require('./models/word');
const Vocab = require('./models/vocab');
//</editor-fold>

                    //<editor-fold defaultstate="collapsed" desc="express configuration">
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
//</editor-fold>

                    //routes

                    //<editor-fold defaultstate="collapsed" desc="add user">
                    app.post('/users', async (req, res) => {
                         const user = new User(req.body);
                         try {
                              await user.save();
                              res.status(201).send(user);
                         } catch (e) {
                              res.status(400).send(e);
                         }
                    });
                    //</editor-fold>

                    //<editor-fold defaultstate="collapsed" desc="save word">
                    app.post('/words', async (req, res) => {
                         const word = new Word(req.body);
                         try {
                              await word.save();
                              res.send(word);
                         } catch (e) {
                              res.send(e);
                         }
                    });
                    //</editor-fold>

                    //<editor-fold defaultstate="collapsed" desc="find all users">
                    app.get('/users', async (req, res) => {
                         try {
                              const users = await User.find({});
                              res.send(users);
                         } catch (e) {
                              res.status(500).send(e);
                         }
                    });
                    //</editor-fold>

                    //<editor-fold defaultstate="collapsed" desc="find user by id">
                    app.get('/users/:id', async (req, res) => {
                         const _id = req.params.id;
                         
                         try {
                              const user = await User.findById(_id);
                              if (!user) {
                                   return res.status(404).send();
                              }
                              res.send(user);
                         } catch (e) {
                              res.status(500).send(e);
                         }
                    });
                    //</editor-fold>

                    //<editor-fold defaultstate="collapsed" desc="find all words">
                    app.get('/words', async (req, res) => {
                         
                         const word = await Word.find({});
                         try {
                              res.send(word);
                         } catch (e) {
                              res.status(500).send(e);
                         }
                    });
                    //</editor-fold>

                    //<editor-fold defaultstate="collapsed" desc="find word by id">
                    app.get('/words/:id', async (req, res) => {
                         const _id = req.params.id;
                         
                         const word = await Word.findById(_id);
                         try {
                              if (!word) {
                                   res.status(400).send();
                              }
                              res.send(word);
                         } catch (e) {
                              res.status(500).send();
                         }
                    });
                    //</editor-fold>

                    app.listen(port, () => {
                         console.log('server up on port ' + port);
                    });
                    
                    //<editor-fold defaultstate="collapsed" desc="notes">
                    //ultimately you want it to check first if the word is in the database before adding it
                    //then see if it should be added to voacab
                    //if not raise frequency
                    //measure quantity of new words
                    //allow used to highlight known words
                    //</editor-fold>

                    