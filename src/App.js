import { FaqModule } from './pages/faqModule';
import { dummyData } from './data/dummyData';

import './App.css';

function App() {
  return (
    <div className="App">
      <FaqModule data={dummyData} iconPosition='right' />
    </div>
  );
}

export default App;
