import style from "./Button.module.css";

export default function Button({ bgColor, color, children }) {
  return (
    <>
      <button
        style={{ backgroundColor: bgColor, borderColor: color }}
        className={style.button}
      >
        {children}
      </button>
    </>
  );
}
