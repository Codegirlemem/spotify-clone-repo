import "./Button.css";

export default function Button(props) {
  const style = {
    backgroundColor: props.bgColor,
    border: props.border,
  };
  console.log(style.backgroundColor);
  return (
    <>
      <button style={style}>{props.children}</button>
    </>
  );
}
