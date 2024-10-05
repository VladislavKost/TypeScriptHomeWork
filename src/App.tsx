import { Stars } from "./components/Stars";
import { Listing } from "./components/Listing";
import { data } from "./data";

import "./App.css";
function App() {
  return (
    <div className="container">
      <Stars count={5} />
      <Listing items={data} />
    </div>
  );
}

export default App;
