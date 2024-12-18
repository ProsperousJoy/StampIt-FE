import './InputText.scss'

export default ({width, placeholder, onChange}) => {

    return(
        <input
      className="InputText"
      style={{ width: `${width}px` }}
      type="text"
      onChange={onChange}
      placeholder={placeholder}
    />
    )
}