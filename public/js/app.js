 console.log('your gender highlight will come from here mein brueder');



 const wordInput = document.querySelector('form');
 const searchTerm = document.querySelector('input');
 const messageOne = document.querySelector('#message-1');
 const messageTwo = document.querySelector('#message-2');
 const block = document.querySelector('#block');

 //not currently working because you changed the data send from natLang
 const translate = (word) => {
      messageOne.textContent = 'Loading...';
      messageTwo.textContent = '';
      //Look. You are calling off your own server - your own api which then calls others 
      fetch(`http://localhost:3000/translation?word=${word}`).then((response) => {
           response.json().then((data) => {
                if (data.error) {
                     console.log('error', data.error);
                     return messageOne.textContent = 'Error: ' + data.error;
                }
                const {input, target, natLang: {data: {gender}}} = data;
                console.log('Eng:', input, 'De:', target, 'Gender:', gender);
                messageOne.textContent = 'Eng: ' + input + ' De: ' + target;
                messageTwo.textContent = 'Gender: ' + gender;
                messageOne.className = gender;
           });
      });
 };

 const analyzeSyntax = (word) => {
      messageOne.textContent = 'Loading....';
      messageTwo.textContent = '';
      //Look. You are calling off your own server - your own api which then calls others 
      fetch(`http://localhost:3000/syntax?block=${encodeURIComponent(word)}`).then((response) => {
           response.json().then((data) => {
                if (data.error) {
                     console.log('error', data.error);
                     return messageOne.textContent = 'Error: ' + data.error;
                }
                      messageOne.textContent = ' ';
                      block.textContent = ' ';
                data.forEach(part => {
                     let txt = document.createElement("span");
                     txt.className = part.partOfSpeech.gender;
                     txt.textContent = part.text.content+' ';
                     block.append(txt);
                     console.log(`tag ${part.partOfSpeech.tag}: word ${part.text.content}`);
                     console.log('Gender:', part.partOfSpeech.gender);
                });
           });
      });
 };

 wordInput.addEventListener('submit', (e) => {
      e.preventDefault();
      const word = searchTerm.value;
      analyzeSyntax(word);


 });