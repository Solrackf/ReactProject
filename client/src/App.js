import Home from './layouts/home/Home';
import States from './layouts/states/States';
import InternalUserDashboard from './layouts/InternalUserDashboard/InternalUserDashboard';
import InvoiceCreation from './layouts/InvoiceCreation/InvoiceCreation';

function App(props) {
  return (
    <div>{/* 
      <Home/>
      <InternalUserDashboard />
      <States /> */}
      <InvoiceCreation />
    </div>
  );
}
export default App;
