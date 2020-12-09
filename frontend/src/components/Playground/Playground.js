import {React,useState,useEffect} from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const Playground = () => {
  const [res, setRes] = useState("");
    useEffect(() => {
      axios
        .get("/get")
          .then((response) => {
              setRes(response.data);
        })
        .catch((err) => console.log(err));
    }, [])
    console.log(res);
  return(
    <div>
      <h2>{res}</h2>
    </div>
  );
};

export default Playground;
