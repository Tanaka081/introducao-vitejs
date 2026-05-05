/**
 * @file   src\pages\exemplos\ex-05\index.jsx
 * @author Ewerton
 * @date   2026-04-14
 * @desc   [Descrição do componente ou arquivo]
 */

import { useState } from 'react';

import styles from './index.module.css';

export default function Atividade04() {
    // exemplo básico entrada de dados
    const [nome, setNome] = useState('');
    const [quantidade, setQuantidade] = useState('');
    // exemplo uso real
    // const [formData, setFormData] = useState({ nome: '', email: '' }); 
    const [cadastros, setCadastros] = useState([]);

    const handleSubmit = (e) => {
    e.preventDefault();

    if (!nome || !quantidade) return;

    setCadastros([...cadastros, `${quantidade}x ${nome}`]);

    setNome('');
    setQuantidade('');
};
    
    return (
        <div className= {styles.full}>
        <div className={styles.container}>

            <h1>Atividade 4 - Lista de compra</h1>

            <form onSubmit={handleSubmit} className={styles.formulario}>
                
                <input
                    type="number"
                    placeholder='QTD'
                    value={quantidade}
                    onChange={e => setQuantidade(e.target.value)}
                />

          
                <input
                    type="text"
                    placeholder='Insira algo para listar'
                    value={nome}
                    onChange={e => setNome(e.target.value)}
                />
                {/* exemplo uso real */}
                {/* <input
                    id="user"
                    type="text"
                    placeholder='Insira seu nome aqui'
                    value={formData.nome}
                    onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                /> */}
                <button type="submit">Listar</button>
            </form>

            <h2>Lista</h2>
            {
              cadastros.map((item, index) => (
                <div key={index} className={styles.item}>
                    {item}
                </div>
                ))
            }
        </div>
        </div>
    );
}