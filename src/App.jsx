
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Scannen } from "./screens/Scannen/Scannen";
import { Measurement } from "./screens/Measurement/Measurement";
import Charts from "./screens/charts/charts";
import ChartsTwo from "./screens/charts/Charttwo";
import { Upload } from "./screens/Upload/Upload";
import { Location } from "./screens/Location/Location";
import { Welcome } from "./Pages/welcom/Welcom";
import { Login } from "./Pages/Login/Login";
import { Regist } from "./Pages/Regist/Regist";
import { Profile } from "./Pages/profile/profile";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Regist" element={<Regist />} />
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
