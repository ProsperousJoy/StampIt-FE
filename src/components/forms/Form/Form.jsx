import './Form.scss';
import InputText from '../../inputs/InputText/InputText';

export default ({ items }) => {
  return (
    <div className="Form">
      {items.map((placeholder, index) => (
        <div key={index} className="form-item">
          <InputText
            width={300}
            placeholder={placeholder}
          />
        </div>
      ))}
    </div>
  );
};
