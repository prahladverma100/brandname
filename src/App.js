import Header from './Components/Header'
import './App.css'
import Practice_advice from './Components/Practice_advice';
import Popular_courses from './Components/Popular_courses';
import Section4 from './Components/Section4';
import Client_matter from './Components/Client_matter';
import Quality_education from './Components/Quality_education';
import Newsletter from './Components/Newsletter';
import Last_section from './Components/Last_section';
import Backtotop from './Components/common/Backtotop';
import {useEffect} from 'react';
import Aos from 'aos';
import "aos/dist/aos.css"
import Preloader from './Components/common/Preloader';

function App() {
      useEffect(() => {
        Aos.init({
          duration: 1500,
        });
      }, [])
  return (
    <div className=' overflow-hidden'>
    <Header/>
    <Practice_advice/>
    <Popular_courses/>
    <Section4/>
    <Client_matter/>
    <Quality_education/>
    <Newsletter/>
    <Last_section /> 
    < Backtotop />
    < Preloader/>
    </div>
  );
}

export default App;