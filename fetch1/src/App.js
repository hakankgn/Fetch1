import "./styles.css";
import { useState, useRef, useEffect } from "react";

const url1 =
  "https://run.mocky.io/v3/f71c8fb1-6621-454b-8b4c-dc6258485261?mocky-delay=3000ms";

// Çağrı yapıldığı sırada butona tekrar tıklamak ref.current'i id set edilidği için yeni değere atayacak. id ilk console'da önceki değeri ikinci console'da yeni değeri atayacak. ikinci useEffect id'ye bağımlı olarak çağırıldığı için localId ilk console'da undefined dönecek ikinci console'da yeni değerle dönecektir.

const Example = () => {
  const [id, setId] = useState(1);
  const ref = useRef(id);

  useEffect(() => {
    ref.current = id;
  });

  useEffect(() => {
    let localId = id;

    fetch(url1).then(() => {
      console.log("=======================");
      console.log("ref.current", ref.current);
      console.log("id", id);
      console.log("localid", localId);
    });

    return () => {
      localId = undefined;
    };
  }, [id]);

  return (
    <>
      <button onClick={() => setId(Math.random())}>Change id</button>
    </>
  );
};

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <Example />
    </div>
  );
}
