import styles from "./App.module.css";
import { Route, Routes } from "react-router-dom";
import Navbar from './components/navbar/navbar';
import HeaderBarComponent from "./components/headerBar/headerBarComponent";
import Dashboard from './pages/dashboard/dashboard';
import MetricsPage from "./pages/metrics/metricsPage";

function App() {
  return (
    <div className={styles.appContainer}>
      <div className={styles.sideBar}>
        <Navbar />
      </div>
      <div className={styles.main}>
        <HeaderBarComponent />
        <div className={styles.mainContent}>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/metrics" element={<MetricsPage />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
