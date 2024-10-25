import './App.css';
import Navbar from './components/navbar/Navbar';
import MyForm from './components/section/MyForm';
import FinancialGoalSummary from './components/section/FinancialGoalSummary';
import { createBrowserRouter } from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: 
    },
    {},
  ])
  return (
    <div className="App">
      <Navbar></Navbar>

      <div className="d-flex flex-column flex-md-row m-5 mx-10" style={{ gap: '1rem' }}>
      {/* First Column */}
      <div className="p-3 border bg-light" style={{ flex: 1 }}>
      <MyForm></MyForm>
      </div>

      {/* Second Column */}
      <div className="p-3 border bg-light" style={{ flex: 1 }}>
      <FinancialGoalSummary></FinancialGoalSummary>
    
      </div>
    </div>
    
    </div>
  );
}

export default App;
