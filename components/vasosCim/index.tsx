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
                    <div className={styles.img} style={{ backgroundImage: `url(${VasosCimento[id].img})` }}>
                    </div>
                    <div className={styles.infosArea}>
                        <div className={styles.infos}>
                            <div className={styles.titleNormal}>Medidas</div>
                            <div className={styles.tamanho}>{VasosCimento[id].medidas}</div>
                            <div className={styles.titleNormal}>Tamanho</div>
                            <div className={styles.tamanho}>{VasosCimento[id].tamanho}</div>
                            <div className={styles.titleNormal}>Preço</div>
                            <div className={styles.price}>R$ {(VasosCimento[id].preco * 2.2).toFixed(2)}</div>
                        </div>
                        <div className={styles.infos}>
                            <div className={styles.titleNormal}>Medidas</div>
                            <div className={styles.tamanho}>{VasosCimento[id].medidas2}</div>
                            <div className={styles.titleNormal}>Tamanho</div>
                            <div className={styles.tamanho}>{VasosCimento[id].tamanho2}</div>
                            <div className={styles.titleNormal}>Preço</div>
                            <div className={styles.price}>R$ {(VasosCimento[id].preco2 * 2.2).toFixed(2)}</div>
                        </div>
                        <div className={styles.infos}>
                            <div className={styles.titleNormal}>Medidas</div>
                            <div className={styles.tamanho}>{VasosCimento[id].medidas3}</div>
                            <div className={styles.titleNormal}>Tamanho</div>
                            <div className={styles.tamanho}>{VasosCimento[id].tamanho3}</div>
                            <div className={styles.titleNormal}>Preço</div>
                            <div className={styles.price}>R$ {(VasosCimento[id].preco3 * 2.2).toFixed(2)}</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.vasosList}>
                {VasosCimento.map((item, index) => (
                    <div key={index} className={styles.eachVaso} onClick={() => changeDisplay(index)}>
                        <div>{item.tipo}</div>
                        <div className={styles.imgProd} style={{ backgroundImage: `url(${item.img})` }}>
                        </div>
                        <h3>{item.nome}</h3>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default VasosCim;