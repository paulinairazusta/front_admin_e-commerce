import OffCanvas from "./OffCanvas";
import options from "./options";

function Options() {
  return (
    <>
      {options.map((props, idx) => (
        <OffCanvas key={idx} {...props} />
      ))}
    </>
  );
}

export default Options;
