export default function Car(props) {
  // https://www.learnbestcoding.com/post/69/why-react-onclick-function-fires-on-render
  const vinde = (a) => {
    return () => {
      alert("S-a vandut masina " + a);
    };
  };
  const service = (a) => {
    alert("Masina care merge la service este " + a);
  };

  return (
    <li>
      {props.key} - I am a {props.brand}
      <button type="button" onClick={vinde(props.brand)}>
        Masina este {props.brand}
      </button>
      <button type="button" onClick={() => service(props.brand)}>
        Service pentru {props.brand}
      </button>
    </li>
  );
}
