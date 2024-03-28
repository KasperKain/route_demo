import "./boxThree.css";

import { useParams } from "react-router-dom";

export default () => {
  const params = useParams();

  console.log(params);

  return (
    <div className="BoxThree page">
      <h1>{params.id}</h1>
    </div>
  );
};
