import Home from './layouts/home/Home';
import States from './layouts/states/States';
import PaymentLink from './components/PaymentLink/PaymentLink';

function App(props) {
  return (
    <div>{
      <Home/>
      <PaymentLink/>
      <States />
    </div>
  );
}
export default App;
