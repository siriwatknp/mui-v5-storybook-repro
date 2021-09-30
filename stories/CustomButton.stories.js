import React from "react";

import { Button } from "../component/Button";

export default {
  title: "Utilities/Button (Material-UI V5)",
  component: Button,
};

export const Primary = () => (
  <Button color="primary" variant="primary">
    Primary
  </Button>
);

export const Secondary = () => (
  <Button color="secondary" variant="secondary">
    Secondary
  </Button>
);

export const fullwidth = () => (
  <Button variant="success" color="primary" width="100%">
    Primary
  </Button>
);
