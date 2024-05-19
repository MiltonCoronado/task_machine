import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App/App';
import './index.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);


// const App = (props) => {
//   return (
//     <h1>{props.saludo} {props.nombre}!</h1>
//   )
// };

// const withSaludo = (WrappedComponent) => {//ESTE ES EL HIGHTORDERCOMPONENT... el WrappedComponent es App
//   return function parameter(saludo) {
//     return function truthComponent (props) {
//       return (
//         <>
//           <WrappedComponent {...props} saludo={saludo}/>
//           <p>Estamos acompañando al WrappedComponent</p>
//         </>
//       )
//     }
//   }
// };

// const AnotherThing = withSaludo(App)('buenos diaaaaaaaaaaaaas...');

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<AnotherThing nombre='Milton'/>);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals