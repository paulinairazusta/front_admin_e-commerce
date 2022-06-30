import OffCanvas from "./OffCanvas";

function Options() {
  const options = [
    {
      name: "Enable body scrolling",
      scroll: true,
      backdrop: false,
    },
  ];
  return (
    <>
      {options.map((props, idx) => (
        <OffCanvas key={idx} {...props} />
      ))}
    </>
  );
}

export default Options;
