import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';

                //projects
// import Appp from './Bikes/Appp';

// import App from './components/App';
// import App from './logg/App';   //calling and login and home page
// import Rotuuu from './home/Rotuuu';   //calling main page only

// import Appp from './Service/Appp';  //call service form page
// import Main from './Service/Main';

// import Main from './home/Main';
// import Sampp from './home/Sampp';


import Horbanner from './home/Horbanner';





      //intern train

      // import prop from './intern/Prop';

  //main project caller app
  import App from './logg/App';


import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App/>
    
    {/* <prop />  */}
    {/* <Horbanner /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
