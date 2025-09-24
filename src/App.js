import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import './App.css';

//import ChipsInput from './components/coding-challenges/ChipsInput/ChipInput';
//import { ConfirmationModal } from './components/coding-challenges/confirmation-modal/ConfirmationModal';
import ReadMoreToggle from './components/coding-challenges/ReadMoreToggle.js/ReadMoreToggle';
import {Profile} from './components/core-concepts/higher-order-components';
import withCompanyName from'./components/core-concepts/higher-order-components';
import ReactPureComp from './components/core-concepts/pure-components';
import Test from './components/core-concepts/classbased-comp-life-cycle-methods';
import UseStateExample from './components/core-concepts/hooks/useState-hook';
import LayoutEffectDemo from './components/core-concepts/hooks/useLayoutEffect';
import UseInsertionEffectDemo from "./components/core-concepts/hooks/useInsertionEffect";
import UseRefDemo from "./components/core-concepts/hooks/useRef";
import ToggleButton from "./components/core-concepts/custom-hooks/useToggle";
import CounterComponent from "./components/core-concepts/custom-hooks/useCounter";
import PostList from "./components/core-concepts/custom-hooks/useFetch";
import ParentComponent from "./components/performance-techniques/react-memo-pure-components";

const Home = lazy(()=>import('./components/performance-techniques/lazy-loading-with-routes/Home'));
const About = lazy(()=>import('./components/performance-techniques/lazy-loading-with-routes/About'));
const Contact = lazy(()=>import('./components/performance-techniques/lazy-loading-with-routes/Contact'));

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
      {/* <EnhancedProfile name="Srinivas" company="Meta" /> */}
      {/* <ReactPureComp /> */}  
      {/* <Test /> */}
      {/* <UseStateExample /> */}
      {/* <LayoutEffectDemo /> */}
      {/* <UseInsertionEffectDemo /> */}
      {/* <UseRefDemo /> */}
      {/* <ToggleButton /> */}
      {/* <CounterComponent /> */}
      {/* <PostList /> */}
      {/* <ParentComponent /> */}

      {/* Routing */}
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Suspense>
      </Router>

    </div>
  );
}


export default App;
