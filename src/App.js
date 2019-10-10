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
      }
      //otherwise find the first vowel
      else {
        for (let i = 0; i < word.length; i++) {
          let letter = word[i]
          if (vowelsArray.includes(letter)) {
            if (letter === 'u' && word[word.indexOf(letter)-1] === 'q')  {
              pigLatin += word.slice(word.indexOf(letter)+1) + word.slice(0, word.indexOf(letter)+1) + 'ay' 
            }
          }
        }
      }
      
      
      
      
      
      
      return pigLatin
      }

      ////if the first vowel is a u is preceeded by a q == then move the consonants + -qu to the end and add -ay
        
    
    //if y is the only vowel, treat as a vowel. Otherwise treat as a consonant
    
    //move the letters before the vowel to the end
    let translated = pigLatinTranslator(this.state.phrase)
    this.setState({phraseTranslated: translated})
    

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
