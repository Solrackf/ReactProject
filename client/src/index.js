import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';
import './index.css';
import App from './App';
// import SimplePay from './layouts/SimplePayment/SimplePay';
// import UserSignUp from './layouts/UserSignUp/UserSignUp';
// import SimpleSignIn from './layouts/simpleSignIn/simpleSignIn';
// import States from './layouts/states/States';
// import InternalUserDashboard from './layouts/InternalUserDashboard/InternalUserDashboard';
// import SignInView from './layouts/SignInView/SignInView';
// import MinState from './layouts/MinState/MinState';
// import Error404 from './layouts/404/404';
// import InvoiceCreation from './layouts/InvoiceCreation/InvoiceCreation';

const store = createStore(reducers, compose(applyMiddleware(thunk)));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);

// ReactDOM.render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<App/>}/>        
//         <Route path="/SimplePay" element={<SimplePay/>}/>
//         <Route path="/SimpleSignIn" element={<SimpleSignIn/>}/>
//         <Route path="/SignUp" element={<UserSignUp/>}/>
//         <Route path="/SignIn" element={<SignInView/>}/>
//         <Route path="/invoiceCreation" element={<InvoiceCreation/>}/>
//         <Route path="/InternalUserDashboard" element={<InternalUserDashboard/>}/>
//         <Route path="/States" element={ <States/> } />
//         <Route path="/MinState" element={<MinState/>} />
//         <Route path="*" element={ <Error404/> }/>
//       </Routes>
//     </BrowserRouter>
//   </React.StrictMode>,
//   document.getElementById('root')
// );
