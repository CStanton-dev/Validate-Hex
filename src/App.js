import Form from "./components/Form";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Hello World!</h1>
      <h2>
        Input a Hex Code
        <br /> below to see some magic happen!
      </h2>
      <Form />
    </div>
  );
}
