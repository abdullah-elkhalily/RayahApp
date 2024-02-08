
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ScreenOne } from "./screens/Login&regist/screenOne";
import { ScreenTwo } from "./screens/Login&regist/screenTwo";
import { Screen3 } from "./screens/Login&regist/screen3";
import { Profile } from "./screens/profile/profile";
import { Scannen } from "./screens/Scannen/Scannen";
import { Measurement } from "./screens/Measurement/Measurement";
import Charts from "./screens/charts/charts";
import ChartsTwo from "./screens/charts/Charttwo";
import { Upload } from "./screens/Upload/Upload";
import { Location } from "./screens/Location/Location";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ScreenOne />} />
        <Route path="/login" element={<ScreenTwo />} />
        <Route path="/Regist" element={<Screen3 />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/Scannen" element={<Scannen />} />
        <Route path="/Measurement" element={<Measurement/>} />
        <Route path="/Charts" element={<Charts/>} />
        <Route path="/ChartsTwo" element={<ChartsTwo/>} />
        <Route path="/Upload" element={<Upload/>} />
        <Route path="/Location" element={<Location/>} />

      </Routes>
    </Router>
  );
}

export default App;
