import React, { Component } from 'react';
import './App.css';
var less = require('less');

let css;

less.render('.header { color: red }', function (e, output) {
  console.log(output.css);
  css = output;
});
console.log('csss', css);

class Addition extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      open: false,
    };
  };

  toggleOpen() { this.setState({open: !this.state.open}) };

  render() {
    return (
      <div className="addition">
        <div className="header" onClick={ this.toggleOpen.bind(this) }>
          { this.props.header }
        </div>
        <div>
          { this.state.open && this.props.children }
        </div>
      </div>
    );
  }
};


class App extends Component {
  render() {
    return (
      <div className="text">
        <ul>
        {content.map((elem, index)=>
          <Addition key={index} header={elem.name}>
            {elem.desc}
            <Addition key={(index+1)*0.1} header={<button className="button">Открыть коментарии</button>}>
              {elem.comments.map((elem, index)=> <div key={index}><h4>Комментарий от {elem.from}</h4><p><b>Текст:</b> {elem.text}</p></div>)}
            </Addition>
          </Addition>
        )}
        </ul>
      </div>
    );
  }
}

export default App;


const content = [
  {
    name: 'Статья под номером 1',
    desc: 'описание статьи 1, здесь может быть ваша реклама.',
    comments: [
      {from: 'luda', text:'1Коментарий номер 1'},
      {from: 'viktor', text:'1Коментарий номер 2'},
      {from: 'vadim', text:'1Коментарий номер 3'},
      {from: 'andrey', text:'1Коментарий номер 4'},
      {from: 'luda', text:'1Коментарий номер 5'},
      {from: 'sasha', text:'1Коментарий номер 6'},
      {from: 'luda', text:'1Коментарий номер 7'},
      {from: 'viktor', text:'1Коментарий номер 8'},
      {from: 'vadim', text:'1Коментарий номер 9'},
      {from: 'andrey', text:'1Коментарий номер 10'},
    ],
  },
  {
    name: 'Статья под номером 2',
    desc: 'описание статьи 2, здесь может быть ваша реклама.',
    comments: [
      {from: 'luda', text:'2Коментарий номер 1'},
      {from: 'viktor', text:'2Коментарий номер 2'},
      {from: 'vadim', text:'2Коментарий номер 3'},
      {from: 'andrey', text:'2Коментарий номер 4'},
      {from: 'luda', text:'2Коментарий номер 5'},
      {from: 'sasha', text:'2Коментарий номер 6'},
      {from: 'luda', text:'2Коментарий номер 7'},
      {from: 'viktor', text:'2Коментарий номер 8'},
      {from: 'vadim', text:'2Коментарий номер 9'},
      {from: 'andrey', text:'2Коментарий номер 10'},
    ],
  },
  {
    name: 'Статья под номером 3',
    desc: 'описание статьи 3, здесь может быть ваша реклама.',
    comments: [
      {from: 'luda', text:'3Коментарий номер 1'},
      {from: 'viktor', text:'3Коментарий номер 2'},
      {from: 'vadim', text:'3Коментарий номер 3'},
      {from: 'andrey', text:'3Коментарий номер 4'},
      {from: 'luda', text:'3Коментарий номер 5'},
      {from: 'sasha', text:'3Коментарий номер 6'},
      {from: 'luda', text:'3Коментарий номер 7'},
      {from: 'viktor', text:'3Коментарий номер 8'},
      {from: 'vadim', text:'3Коментарий номер 9'},
      {from: 'andrey', text:'3Коментарий номер 10'},
    ],
  },
  {
    name: 'Статья под номером 4',
    desc: 'описание статьи 4, здесь может быть ваша реклама.',
    comments: [
      {from: 'luda', text:'4Коментарий номер 1'},
      {from: 'viktor', text:'4Коментарий номер 2'},
      {from: 'vadim', text:'4Коментарий номер 3'},
      {from: 'andrey', text:'4Коментарий номер 4'},
      {from: 'luda', text:'4Коментарий номер 5'},
      {from: 'sasha', text:'4Коментарий номер 6'},
      {from: 'luda', text:'4Коментарий номер 7'},
      {from: 'viktor', text:'4Коментарий номер 8'},
      {from: 'vadim', text:'4Коментарий номер 9'},
      {from: 'andrey', text:'4Коментарий номер 10'},
    ],
  },
]