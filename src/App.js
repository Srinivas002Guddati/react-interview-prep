
import './App.css';
//import ChipsInput from './components/coding-challenges/ChipsInput/ChipInput';
//import { ConfirmationModal } from './components/coding-challenges/confirmation-modal/ConfirmationModal';
import ReadMoreToggle from './components/coding-challenges/ReadMoreToggle.js/ReadMoreToggle';
import {Profile} from './components/core-concepts/higher-order-components';
import withCompanyName from'./components/core-concepts/higher-order-components';

function App() {
  // const fruits = ['apple', 'banana', 'orange', 'guava'];
  const EnhancedProfile = withCompanyName(Profile);
  return (
    <div className="App">
      {/* <ChipsInput /> */}
      {/* <ConfirmationModal /> */}
      {/* <ReadMoreToggle /> */}
      {/* <ul>
        {fruits.map((fruit)=>(
          <li key={fruit}>{fruit}</li>
        ))}
      </ul> */}
      <EnhancedProfile name="Srinivas" company="Meta" />
    </div>
  );
}


export default App;
