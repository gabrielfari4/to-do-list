import styles from "./Tarefa.module.css";
import CheckboxBlank from "./assets/checkbox-blank.svg?react";
import CheckboxMarked from "./assets/checkbox-marked.svg?react";
import Trash from "./assets/trash.svg?react";

const Tarefa = ({ title, onDeleting, id, toggleCompleted, completed }) => {

    return (
        <div className={styles.div}>
            <p className={styles.tarefa}>{title}</p>
            {!completed
                ? <CheckboxBlank className={styles.img} onClick={() => toggleCompleted(id)}/> 
                : <CheckboxMarked className={styles.img} onClick={() => toggleCompleted(id)}/>
            }
            <Trash className={styles.img} onClick={() => onDeleting(id)}/>
        </div>
    )
}

export default Tarefa;