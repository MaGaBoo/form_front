import { Route, Routes } from "react-router-dom";
import Form from "./components/Form";

function App() {
  return (
    <div>

        <Routes>
          <Route path="/" element={<Form />} />
        </Routes>

    </div>
  );
}

export default App;
