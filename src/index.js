import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// function App() {
//     const firsName = "Karina"
//     const lastName = "Shrestha"
// const date = new Date()
// const hours = date.getHours()
// let timeOfDay

// if(hours < 12){
//     timeOfDay = "morning"
// }else if(hours >= 12 && hours<13){
//     timeOfDay = "afternoon"
// }else{
//     timeOfDay= "night"
// }
//     return (
//         <h1> hello {firstName} {lastName} </h1>
//     )
// }
// ReactDOM.render(<App />, document.getElementById('root'));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
