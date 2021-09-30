import { Button } from "../component/Button";
import { Button2 } from "../component/Button2";
import React from "react";

const index = () => {
  return (
    <>
      <div>
        <Button color="primary">Click to See Nothing!! (MUI)</Button>
      </div>
      <div>
        <Button2 color="primary">Click to See Nothing!! (Material UI)</Button2>
      </div>
    </>
  );
};

export default index;
