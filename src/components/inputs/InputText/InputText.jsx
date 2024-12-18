import './InputText.scss'

export default ({width, placeholder}) => {
    return(
        <input
      className="InputText"
      style={{ width: `${width}px` }}
      type="text"
      placeholder={placeholder}
    />
    )
}