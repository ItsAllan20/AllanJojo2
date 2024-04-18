import react, {useState, useEffect} from "react";
import { Routes, Route } from "react-router-dom";
export default function Api() {

    const [dataD, setData] = useState();

  useEffect(() => {
    console.log("cheh");
    fetch("http://localhost:8000/questions")
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setData(json);
      })
      .catch((error) => console.error(error));
  }, []);

    return (
        <>
          <div className="total">
            <div className="id">
              <h1>Voici les id</h1>
              {dataD && dataD.map((affAPI) => <p>{affAPI.id}</p>)}
            </div>
    
            <div className="theme">
              <h1>Voici les themes</h1>
              {dataD && dataD.map((affAPI) => <p>{affAPI.theme}</p>)}
            </div>
    
            <div className="question">
              <h1>Voici la question</h1>
              {dataD && dataD.map((affAPI) => <p>{affAPI.question}</p>)}
            </div>
    
            <div className="reponse">
              <h1>Voici la réponse</h1>
              {dataD && dataD.map((affAPI) => <p>{affAPI.reponse}</p>)}
            </div>
          </div>
        </>
      );

}