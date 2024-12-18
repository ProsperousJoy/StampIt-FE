import './Form.scss';
import InputText from '../../inputs/InputText/InputText';

export default ({ items, onChange }) => {
  return (
    <div className="Form">
      {items.map((item, index) => (
        <div key={index} className="form-item">
          <InputText
            width={300}
            placeholder={item.placeholder}
            onChange={onChange(item.key)}
          />
        </div>
      ))}
    </div>
  )
}