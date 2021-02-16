import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './index.css'

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

// function Greeting() {
//   return (
//     <>
//       <div>
//         <h3>Hello Mr Cool</h3>
//         <ul>
//           <li>
//             <a href="https://www.google.com/">Hello Agin Mr Cool</a>
//           </li>
//         </ul>
//       </div>
//     </>
//   );
// }

// ReactDOM.render(<Greeting />, document.getElementById('root'));

// class Football extends Component {
//   constructor(props) {
//     super(props)
//     this.shoot = this.shoot.bind(this)
//   }
//   shoot() {
//     alert(this)
//   }
//   render() {
//     return <button onClick={this.shoot}>Take the shot!</button>
//   }
// }

// ReactDOM.render(<Football />, document.getElementById('root'))

// class Football extends Component {
//   shoot = (a) => {
//     alert(a)
//   }
//   render() {
//     return (
//       <button onClick={() => this.shoot('Gooool!!')}>Take the shot !!!</button>
//     )
//   }
// }
// ReactDOM.render(<Football />, document.getElementById('root'))

// class MyForm extends Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       userName: '',
//       age: null,
//     }
//   }
//   changeHandler = (event) => {
//     let nam = event.target.name
//     let val = event.target.value
//     this.setState({ [nam]: val })
//   }
//   render() {
//     return (
//       <form>
//         <h1>
//           Hello {this.state.userName} {this.state.age}
//         </h1>
//         <p>Enter your name</p>
//         <input type="text" name="userName" onChange={this.changeHandler} />
//         <p>Enter your age</p>
//         <input type="text" name="age" onChange={this.changeHandler} />
//       </form>
//     )
//   }
// }

// ReactDOM.render(<MyForm />, document.getElementById('root'))

// class MyForm extends Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       userName: '',
//       age: null,
//     }
//   }
//   changeHandler = (event) => {
//     let nam = event.target.name
//     let val = event.target.value
//     if (nam === 'age') {
//       if (!Number(val)) {
//         alert('Your age must be a number')
//       }
//     }
//     this.setState({ [nam]: val })
//   }
//   render() {
//     return (
//       <form>
//         <h1>
//           Hello {this.state.name} , {this.state.age}
//         </h1>
//         <p>Enter your name</p>
//         <input type="text" name="name" onChange={this.changeHandler} />
//         <p>Enter your age</p>
//         <input type="text" name="age" onChange={this.changeHandler} />
//       </form>
//     )
//   }
// }

// ReactDOM.render( <MyForm />, document.getElementById( 'root' ) )

class MyForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userName: '',
      age: null,
    }
  }

  mySubmitHandler = (event) => {
    event.preventDefault()
    let age = this.state.age
    if (!Number(age)) {
      alert('Your age must be a number')
    }
  }

  changeHandler = (event) => {
    let nam = event.target.name
    let val = event.target.value
    this.setState({ [nam]: val })
  }

  render() {
    return (
      <form onSubmit={this.mySubmitHandler}>
        <h1>
          Hello {this.state.name} , {this.state.age}{' '}
        </h1>
        <p>Enter your name</p>
        <input type="text" name="name" onChange={this.changeHandler} />
        <p>Enter your age</p>
        <input type="text" name="age" onChange={this.changeHandler} />
        <br />
        <br />
        <input type="submit" />
      </form>
    )
  }
}

ReactDOM.render(<MyForm />, document.getElementById('root'))
