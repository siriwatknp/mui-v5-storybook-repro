import React from "react";

import { Button2 } from "../component/Button2";

export default {
  title: "Utilities/Button2 (Material-UI V4)",
  component: Button2,
};

export const Primary = () => (
  <Button2 color="primary" variant="contained">
    Primary
  </Button2>
);

export const Secondary = () => (
  <Button2 color="secondary" variant="contained">
    Secondary
  </Button2>
);

export const fullwidth = () => (
  <Button2 variant="contained" color="primary" width="100%">
    Primary
  </Button2>
);
