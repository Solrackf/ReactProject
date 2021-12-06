import AccountAgreement from './components/AccountAgreement/AccountAgreement';
import Home from './layouts/home/Home';

import PaymentPanel from './components/PaymentPanel/PaymentPanel';
import States from './layouts/states/States';
import InternalUserDashboard from './layouts/InternalUserDashboard/InternalUserDashboard';
import InvoiceCreation from './layouts/InvoiceCreation/InvoiceCreation';

function App(props) {
  return (
    <div>{
      <Home/>
      <PaymentLink/>
      <InvoiceCreation />
      <PaymentPanel/>
      <States />
      <AccountAgreement/>
    </div>
  );
}
export default App;
