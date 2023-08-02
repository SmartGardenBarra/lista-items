import VasosCimento from '@/utils/listaVasos';
import styles from './style.module.css';
import { useState } from 'react';

const itemUnico = [
    { nome: '', img: '', tipo: '', preco: 0, medidas: '?', tamanho: '?', preco2: 49, medidas2: '45x48', tamanho2: '?', preco3: 0, medidas3: '?', tamanho3: '?' },
]

type Props = {
    categoria: string,
}

const VasosCim = (categoria: Props) => {
    const [display, setDisplay] = useState('none')
    const [id, setId] = useState(0)
    const [prodName, setProdName] = useState('')
    const [filterList, setFilterList] = useState(VasosCimento)

    const changeDisplay = (idProd: number) => {
        setDisplay('flex')
        setId(idProd)
        itemUnico.shift()
        itemUnico.push({ nome: filterList[idProd].nome, img: filterList[idProd].img, tipo: filterList[idProd].tipo, preco: filterList[idProd].preco, medidas: filterList[idProd].medidas, tamanho: filterList[idProd].tamanho, preco2: filterList[idProd].preco2, medidas2: filterList[idProd].medidas2, tamanho2: filterList[idProd].tamanho2, preco3: filterList[idProd].preco3, medidas3: filterList[idProd].medidas3, tamanho3: filterList[idProd].tamanho3 })
    }

    const filterBySearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        const query = event.target.value;
        var updateList = [...VasosCimento];

        updateList = updateList.filter((item) => {
            return item.nome.toLowerCase().indexOf(query.toLowerCase()) !== -1;
        })

        setFilterList(updateList)
    }



    return (
        <div className={styles.main}>
            <div className={styles.inputArea}>
                <input type="text" className={styles.input} placeholder='pesquisar produto' onChange={(e) => filterBySearch(e)} />
            </div>
            <div className={styles.vasoInfo} style={{ display: display }}>
                <div className={styles.topArea}>
                    <div className={styles.close} onClick={() => setDisplay('none')}>X</div>
                </div>
                <div className={styles.content}>
                    {itemUnico.map((item, index) => (
                        <>
                            <h2>{item.nome}</h2>
                            <div className={styles.img} style={{ backgroundImage: `url(${item.img})` }}>
                            </div>
                            <div className={styles.infosArea}>
                                <div className={styles.infos}>
                                    <div className={styles.titleNormal}>Medidas</div>
                                    <div className={styles.tamanho}>{item.medidas}</div>
                                    <div className={styles.titleNormal}>Tamanho</div>
                                    <div className={styles.tamanho}>{item.tamanho}</div>
                                    <div className={styles.titleNormal}>Preço</div>
                                    <div className={styles.price}>R$ {(item.preco * 2.2).toFixed(0)},00</div>
                                </div>
                                <div className={styles.infos}>
                                    <div className={styles.titleNormal}>Medidas</div>
                                    <div className={styles.tamanho}>{item.medidas2}</div>
                                    <div className={styles.titleNormal}>Tamanho</div>
                                    <div className={styles.tamanho}>{item.tamanho2}</div>
                                    <div className={styles.titleNormal}>Preço</div>
                                    <div className={styles.price}>R$ {(item.preco2 * 2.2).toFixed(0)},00</div>
                                </div>
                                <div className={styles.infos} >
                                    <div className={styles.titleNormal}>Medidas</div>
                                    <div className={styles.tamanho}>{item.medidas3}</div>
                                    <div className={styles.titleNormal}>Tamanho</div>
                                    <div className={styles.tamanho}>{item.tamanho3}</div>
                                    <div className={styles.titleNormal}>Preço</div>
                                    <div className={styles.price}>R$ {(item.preco3 * 2.2).toFixed(0)},00</div>
                                </div>
                            </div>
                        </>
                    ))}

                </div>
            </div>
            <div className={styles.vasosList}>
                {filterList.map((item, index) => (
                    <>
                        {item.tipo === categoria.categoria ?
                            <div key={index} className={styles.eachVaso} onClick={() => changeDisplay(index)}>
                                <h3>{item.nome}</h3>
                                <div className={styles.imgProd} style={{ backgroundImage: `url(${item.img})` }}>
                                </div>
                                <div>{item.tipo}</div>
                            </div>
                            :
                            ''
                        }
                    </>
                ))}
            </div>
        </div>
    )
}

export default VasosCim;