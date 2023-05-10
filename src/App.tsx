import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'

import About from './components/About'
import Home from './components/Home'
import Resume from './components/Resume'
import CoverLetter from './components/CoverLetter'
import LetterOfRecommendation from './components/LetterOfRecommendation'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/resume" element={<Resume/>}/>
          <Route path="/cover-letter" element={<CoverLetter/>}/>
          <Route path="/letter-of-recommendation" element={<LetterOfRecommendation/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
