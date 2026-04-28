import { useState } from 'react';

import Botao from './botao';

import styles from './index.module.css';

function Atividade03() {
    // O hook useState gerencia o valor do contador
    const [mostrar, setMostrar] = useState();

    const cadastrar = () => setMostrar('Cadastrar');
    const editar = () => setMostrar('Editar');
    const listar = () => setMostrar('Listar');
    const excluir = () => setMostrar('Excluir');
    const cancelar = () => setMostrar('Cancelar');

    return (
        <div className={styles.container}>
            <h1>Atividade 3 - Uso de componentes</h1>
            <h2>Ação selecionada: {mostrar}</h2>

            <div className='botoes'>
            <Botao texto="Cadastrar" aoClicar={cadastrar} acao={'cadastrar'} />
            <Botao texto="Editar" aoClicar={editar} acao={'editar'} />
            <Botao texto="Listar" aoClicar={listar} acao={'listar'} />
            <Botao texto="Excluir" aoClicar={excluir} acao={'excluir'} />
            <Botao texto="Cancelar" aoClicar={cancelar} acao={'cancelar'} />
            </div> 
        </div>
    );
}

export default Atividade03;