import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import HomePage from './pages/HomePage';

function Router() {
  return (
    <Routes>
      <Route path='' element={<HomePage />} />
      
    </Routes>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  )
}

export default App;
