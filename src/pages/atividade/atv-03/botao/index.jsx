import styles from './index.module.css';

function Botao({ texto, aoClicar, acao }) {
    return (
        <button
            className={`${styles.botao} ${styles[acao]}`}
            onClick={aoClicar}
        >
            {texto}
        </button>
    );
}
export default Botao;