import { addMixin } from "swiss-react";

addMixin("font", (fz = null, lh = null, fw = null) => ({
  fontSize: fz || "initial",
  lineHeight: isNaN(lh) ? parseInt(lh, 10) / parseInt(fz, 10) : "1",
  fontWeight: !fw && !isNaN(lh) ? lh : fw
}));
