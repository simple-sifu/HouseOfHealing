import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { DocumentList } from './components/DocumentList';
import { DocumentView } from './components/DocumentView';
import './i18n/config';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DocumentList />} />
        <Route path="/document/:slug" element={<DocumentView />} />
      </Routes>
    </Router>
  );
}

export default App;

