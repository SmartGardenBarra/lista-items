import VasosCimento from '@/utils/listaVasos';
import styles from './style.module.css';
import { useState } from 'react';

const VasosCim = () => {
    const [display, setDisplay] = useState('none')
    const [id, setId] = useState(0)

    const changeDisplay = (idProd: number) => {
        setDisplay('flex')
        setId(idProd)
    }

    return (
        <div className={styles.main}>
            <div className={styles.vasoInfo} style={{ display: display }}>
                <div className={styles.topArea}>
                    <div className={styles.close} onClick={() => setDisplay('none')}>X</div>
                </div>
                <div className={styles.content}>
                    <h2>{VasosCimento[id].nome}</h2>
                    <img src={VasosCimento[id].img} alt="" />
                    <div className={styles.infosArea}>
                        <div className={styles.infos}>
                            <div>Medidas</div>
                            <div>{VasosCimento[id].medidas}</div>
                            <div>Tamanho</div>
                            <div>{VasosCimento[id].tamanho}</div>
                            <div className={styles.price}>R$ {VasosCimento[id].preco},00</div>
                        </div>
                        <div className={styles.infos}>
                            <div>Medidas</div>
                            <div>{VasosCimento[id].medidas2}</div>
                            <div>Tamanho</div>
                            <div>{VasosCimento[id].tamanho2}</div>
                            <div className={styles.price}>R$ {VasosCimento[id].preco2},00</div>
                        </div>
                        <div className={styles.infos}>
                            <div>Medidas</div>
                            <div>{VasosCimento[id].medidas3}</div>
                            <div>Tamanho</div>
                            <div>{VasosCimento[id].tamanho3}</div>
                            <div className={styles.price}>R$ {VasosCimento[id].preco3},00</div>
                        </div>
                    </div>
                </div>
            </div>
            {VasosCimento.map((item, index) => (
                <div key={index} className={styles.eachVaso} onClick={() => changeDisplay(index)}>
                    <div>
                        <img src={item.img} alt="" />
                    </div>
                    <h3>{item.nome}</h3>
                </div>
            ))}
        </div>
    )
}

export default VasosCim;