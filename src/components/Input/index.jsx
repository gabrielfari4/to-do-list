import styles from "./Input.module.css";

const Input = ({ type, value, onChange }) => {
    return (
        <input 
            type={type}
            value={value}
            onChange={onChange}
            className={styles.input}
            placeholder={"Digite um título para a tarefa"}
            required
        />
    )
}

export default Input;