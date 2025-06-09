import styles from "./Filtro.module.css";

const Filtro = ({ onChange, value, children, checked }) => {
    return (
        <div className={styles.filtro}>
            <input
                type="radio"
                id={value}
                value={value}
                checked={checked}
                onChange={() => onChange(value)}
            />
            <label htmlFor={value}>{children}</label>
        </div>
    );
};

export default Filtro;
