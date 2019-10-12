import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      phrase: '',
      phraseTranslated: 'This is where your translated sentence will appear.'
    }
  }
  
  // The translate function is where you will put your logic to convert the sentence entered by the user to pig location.  What is currently in the function will only directly copy what the user has entered.
  
  translate = (e) => {
    e.preventDefault()


    const pigLatinTranslator = (word) => {
      let vowelsArray = ['a', 'e', 'i', 'o', 'u']
      let pigLatin = '';

      //if first letter is a vowel, - add -way to the end
      if (vowelsArray.includes(word[0])) {
            pigLatin = word + 'way';
            return pigLatin;
      }
      //otherwise find the first vowel
      else {
        for (let i = 1; i < word.length; i++) {
          if (vowelsArray.includes(word[i])) {
            let vowel = word[i];
            //if the first vowel is a u is preceeded by a q == then move the consonants + -qu to the end and add -ay
            if (vowel === 'u' && word[word.indexOf(vowel)-1] === 'q')  {
              pigLatin = word.slice(word.indexOf(vowel) +1) + word.slice(0, word.indexOf(vowel)+1) + 'ay'
              return pigLatin;
            }
            else { 
              //take off the consonants before the first vowel and add to the end.
              pigLatin = word.slice(word.indexOf(vowel)) + word.slice(0, word.indexOf(vowel)) + 'ay'
              return pigLatin
            }
          } 
        }
      }
        //if the only vowel in the sentence is a 'y', treat as a consonant
        if (word.includes('y')) {
            pigLatin = word.slice(word.indexOf('y')) + word.slice(0, word.indexOf('y')) + 'ay'
            return pigLatin
            }
          
    }
    const words = this.state.phrase.split(' ')
    const pigLatinWords = words.map((word) => {
      return pigLatinTranslator(word)
    })
    const pigLatinPhrase = pigLatinWords.join(' ')
    this.setState({phraseTranslated: pigLatinPhrase})









    


    

  }

  handleChange = (e) => {
    this.setState({phrase: e.target.value})
  }

  render() {
    return (
      
      <div className="wrapper">
        <header className="box header">
          <div id="pigImage">
            <img src='https://lh3.googleusercontent.com/QvvsRY5ShwDNEouVMK8_z7QCwS3grkgd4mzZOlom23Hurralk54ObvsyEMM8ZSNR5pEFBeBMzltzEEcgi2llYJnhXTuXClN3njmMjtw3vgn8Go5jr40fHMNzfI64eYRrnHbZUutxCA=w2400' alt="pig with butcher cut names in pig latin" id="butcherPig"></img>
          </div>
        </header>
        <sidebar className="box sidebar">
          <div>
            <form className="info" onSubmit={this.translate}>
              <label htmlFor="input-phrase">Translate this: </label>
              <input name="input-phrase" onChange={this.handleChange}></input>
              <input className="button" type="submit" value="Submit" />
            </form>
          </div>
        </sidebar>
        <main>
          <div className="text-center box content">
            <p>{this.state.phraseTranslated}</p>
          </div>
        </main>
        <footer className="box footer">
          <div className="text-center">
            <p>Coded by Lisa</p>
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
