import { Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import './index.css'; 

function App() {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<MainLayout />} />
      </Routes>
    </MainLayout>
  );
}
export default App;
