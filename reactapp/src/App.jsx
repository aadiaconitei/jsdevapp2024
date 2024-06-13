import "./App.css";

import Masina from "./Masina";
import Form from "./Form";
import MyForm from "./MyForm";

let myVar = "LinkAcademy";
let myCar = {
  name: "Dacia",
  model: "Logan",
};



function App() {
  const obj = { name: 'Alice', email: 'demo@demo.com', password: '123456', car: 'BMW', message: 'Salut' };
  
  return (
    <div className="App">
      <header className="App-header">
        <h1>Salut {myVar}</h1>
        <Form />
        <Masina car={myCar} />
        <MyForm {...obj} />
      </header>
    </div>
  );
}

export default App;
