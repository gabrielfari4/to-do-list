import styles from "./Input.module.css";

const Input = ({ type, value, onChange }) => {
    return (
        <input 
            type={type}
            value={value}
            onChange={onChange}
            className={styles.input}
        />
    )
}

export default Input;