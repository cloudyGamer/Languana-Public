 const path = require('path');
 const express = require('express');
 const hbs = require('hbs');
 const name = hbs.name;
 const app = express();
 //define paths for configure
 const pubPath = path.join(__dirname, '../public');
 const viewsPath = path.join(__dirname, '../templates/views');
 const partialsPath = path.join(__dirname, '../templates/partials');
//translate fncs
 const translateTxt = require('./utils/translateTxt');
 const natLangNode = require('./utils/natLangNode');
 const anaSyntax = require('./utils/anaSyntax');
 const target = 'de';
 const source = 'en';

 //set up handlebars
 app.set('view engine', 'hbs');
 app.set('views', viewsPath);
 hbs.registerPartials(partialsPath);

//set up static directory to serve
 app.use(express.static(pubPath));


 app.get('', (req, res) => {
      res.render('index', {
           title: 'Gender Highlighting',
           word: 'girl'
      });
 });
 
 app.get('/translate', (req, res) => {
      res.render('translate', {
           title: 'Translations',
           word: 'girl'
      });
 });

 app.get('/about', (req, res) => {
      res.render('About', {
           title: 'About',
           about: 'this app is for self directed learning'
      });
 });

 app.get('/help', (req, res) => {
      res.render('help', {
           title: 'Help',
           message: 'Due to Google Natural Language API and  Google Translate API being paid for services above a certain threshold usage of this Demo’s features are restricted on a monthly basis.  You may find this limit has been reached by other viewers of the Demo and will not be able to make requests.'

      });
 });



 app.get('/translation', (req, res) => {

      if (!req.query.word) {
           return           res.send({error: 'You must provide a search term'});
      }
      const {query: {word: input}} = req;
      translateTxt(target, source, input, (error, {target} = {}) => {
           if (error) {
                return res.send({error});
           } else if (target === input) {
                return res.send({error: 'no lingual equivalent'});

           }
           natLangNode(target, (error, natLang) => {
                if (error) {
                     return res.send({error});
                }
                //console.log(JSON.stringify(natLang));
                res.send({natLang, target, input});
           });
      });

 });

 app.get('/syntax', (req, res) => {

      if (!req.query.block) {
           return           res.send({error: 'You must provide a search term'});
      }
      const {query: {block: input}} = req;

      anaSyntax(input, (error, data) => {
           if (error) {
                return res.send({error});
           }
           
           res.send(data);
      });


 });

 app.get('/help/*', (req, res) => {
      res.render('404', {
           message: 'Help Article not found. God be with the days.'

      });
 });

 app.get('*', (req, res) => {
      res.render('404', {
           message: 'Page Not Found. Sorry n anyways'

      });
 });

 app.listen(3000, () => {
      console.log('server up on port 3000');
 });