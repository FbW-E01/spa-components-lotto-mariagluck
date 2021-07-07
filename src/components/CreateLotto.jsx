import './CreateLotto.css';
import React from 'react';


class CreateLotto extends React.Component {

    constructor(){
        super();
        this.state = { lottoNumbers: [] };
        this.originalState = this.state;
      }
    
    luckyNumbers = counter => {
        let emptyArray = [];
        let randomGenerator = num => {
          return parseInt(Math.random() * num + 1);
        };
         while (counter) {
          let randomNum = randomGenerator(49);
          while (emptyArray.indexOf(randomNum) !== -1) {
            randomNum = randomGenerator(49);
          }
          emptyArray.push(randomNum);
          counter--;
        }
        emptyArray[emptyArray.length] = randomGenerator(10);
        return emptyArray;
      };
      
    click =() => {
        this.setState({
            lottoNumbers: this.luckyNumbers(6)
          });   
    }

    resetLotto = () => {
        this.setState(this.originalState);
    }

    
    render() {
         return (
         <div className="lottoCreate">
             <ul className= "lottoNumber_list">
             {this.state.lottoNumbers.map((num, i) => {
                 return (
                    <li key={i}>
                      <p>{num}</p>
                    </li>
                  );
                 })}
             </ul>
             <p>{this.state.message}</p>
             <button className="reset_btn"
                     onClick = {this.resetLotto}>Reset</button>
             <button className="showNumbers_btn" 
                     onClick = {this.click}>
                 Show me lucky numbers
             </button>
         </div>
        );
    }
    
}


export default CreateLotto;