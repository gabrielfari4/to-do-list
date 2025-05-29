import styles from "./Textarea.module.css";

const Textarea = ({ value, onChange}) => {
    return (
        <textarea 
            name="description" 
            id="description" 
            value={value} 
            className={styles.textarea}
            onChange={onChange}
            placeholder="Digite uma descrição para a tarefa"
        ></textarea>
    )
}

export default Textarea;