import './styles.css';

export const TextInput = ({value, onChange}) => {
return (
    <input className="text-input"
          onChange={onChange}
          value={value}
          type="search" 
          placeholder="Type your search"
        />
);
}