import styles from "./Botao.module.css";

const Botao = ({ onClick }) => {
    return (
        <button
            className={styles.botao}
            onClick={onClick}
            type="submit"
        >
            Adicionar tarefa
        </button>
    )
}

export default Botao;