import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { StudyPage } from './pages/StudyPage';
import { StudyWithPDF } from './pages/StudyWithPDF';
import { BookPage } from './pages/BookPage';
import { TopicPage } from './pages/TopicPage';
import { StudyTools } from './pages/StudyTools';
import { About } from './pages/About';
import './App.css';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/studies/:studyId" element={<StudyPage />} />
          <Route path="/studies/:studyId/pdf" element={<StudyWithPDF />} />
          <Route path="/books/:bookId" element={<BookPage />} />
          <Route path="/topics/:topicId" element={<TopicPage />} />
          <Route path="/study-tools" element={<StudyTools />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
