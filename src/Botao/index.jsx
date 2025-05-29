import styles from "./Botao.module.css";

const Botao = ({ onClick }) => {
    return (
        <button
            className={styles.botao}
            onClick={onClick}
        >
            Adicionar tarefa
        </button>
    )
}

export default Botao;