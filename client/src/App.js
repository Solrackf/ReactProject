import AccountAgreement from './components/AccountAgreement/AccountAgreement';
import Home from './layouts/home/Home';
import EstateInformation from './components/EstateInformation/EstateInformation';
import PaymentPanel from './components/PaymentPanel/PaymentPanel';
import States from './layouts/states/States';
import PaymentLink from './components/PaymentLink/PaymentLink';

function App(props) {
  return (
    <div>
      <Home/>
      <PaymentLink/>
      <PaymentPanel/>
      <States />
      <AccountAgreement/>
    </div>
  );
}
export default App;
