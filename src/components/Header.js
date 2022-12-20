import Button from "./Button"
const Header = ({title,onAdd,showAdd}) => {
  return (
    <div className="header">

<h1>{title}</h1>
<Button color={showAdd ? "red": "green"} text={showAdd ? "close": "Add"} onClick={onAdd} />
    </div>
  )
}


Header.defaultProps = {
title:"Task Tracker"
}

export default Header