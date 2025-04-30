import "../global.css"
//vytváříme funkci Bulb, kt bude sloužit k vytvoření žárovky
//on vstupní parametr, kt říká, jestli má být žárovka rozsvícená(true) nb zhasnutá(false)
export const Bulb = ({on}) => {
  return (
    <div className={on ? "bulb bulb--on" : "bulb"}></div>
  )
}
