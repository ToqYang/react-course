import { memo } from "react";

const Small = memo(({ value }) => {
  console.log("Me volvi a llamar");
  return <small>{value}</small>;
});

export default Small;
