import { Route, Routes } from "react-router-dom";
import Form from "./components/form";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Form />} />
      </Routes>
    </div>
  );
}

export default App;
