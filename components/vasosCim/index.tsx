import VasosCimento from '@/utils/listaVasos';
import styles from './style.module.css';
import { useState } from 'react';

type ListProps = {
    nome: string,
    img: string,
    tipo: string,
    preco: number,
    medidas: string,
    tamanho: string,
    preco2: number,
    medidas2: string,
    tamanho2: string,
    preco3: number,
    medidas3: string,
    tamanho3: string,
    preco4?: number,
    medidas4?: string,
    tamanho4?: string,
    preco5?: number,
    medidas5?: string,
    tamanho5?: string
}

const itemUnico = [
    { nome: '', img: '', tipo: '', preco: 0, medidas: '?', tamanho: '?', preco2: 49, medidas2: '45x48', tamanho2: '?', preco3: 0, medidas3: '?', tamanho3: '?', preco4: 0, medidas4: '?', tamanho4: '?', preco5: 0, medidas5: '?', tamanho5: '?', },
]

type Props = {
    categoria: string,
}

const VasosCim = (categoria: Props) => {
    const [display, setDisplay] = useState('none')
    const [id, setId] = useState(0)
    const [prodName, setProdName] = useState('')
    const [filterList, setFilterList] = useState<[ListProps]>(VasosCimento)

    const changeDisplay = (idProd: number) => {
        setDisplay('flex')
        setId(idProd)
        itemUnico.shift()
        itemUnico.push({ nome: filterList[idProd].nome, img: filterList[idProd].img, tipo: filterList[idProd].tipo, preco: filterList[idProd].preco, medidas: filterList[idProd].medidas, tamanho: filterList[idProd].tamanho, preco2: filterList[idProd].preco2, medidas2: filterList[idProd].medidas2, tamanho2: filterList[idProd].tamanho2, preco3: filterList[idProd].preco3, medidas3: filterList[idProd].medidas3, tamanho3: filterList[idProd].tamanho3, preco4: filterList[idProd].preco4, medidas4: filterList[idProd].medidas4, tamanho4: filterList[idProd].tamanho4, preco5: filterList[idProd].preco5, medidas5: filterList[idProd].medidas5, tamanho5: filterList[idProd].tamanho5 })
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
            <a href='/'>
                <div className={styles.upButton}>
                ↑
                </div>
            </a>
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
                                {item.preco == 0 || item.preco == undefined ?
                                    ''
                                    :
                                    <div className={styles.infos}>
                                        <div className={styles.infosItens}>
                                            <div className={styles.titleNormal} style={{ marginLeft: '2px', marginRight: '2px' }}>Med:</div>
                                            <div className={styles.tamanho}>{item.medidas}</div>
                                        </div>
                                        <div className={styles.infosItens}>
                                            <div className={styles.titleNormal} style={{ marginLeft: '2px', marginRight: '2px' }}>Tam:</div>
                                            <div className={styles.tamanho}>{item.tamanho}</div>
                                        </div>
                                        <div className={styles.infosItens}>
                                            <div className={styles.titleNormal} style={{ marginLeft: '2px', marginRight: '2px' }}>Preço:</div>
                                            <div className={styles.price}>R$ {(item.preco * 2.2).toFixed(0)},<span className={styles.span} >00</span></div>
                                        </div>
                                    </div>
                                }
                                {item.preco2 == 0 || item.preco2 == undefined ?
                                    ''
                                    :
                                    <div className={styles.infos}>
                                        <div className={styles.infosItens}>
                                            <div className={styles.titleNormal} style={{ marginLeft: '2px', marginRight: '2px' }}>Med:</div>
                                            <div className={styles.tamanho}>{item.medidas2}</div>
                                        </div>
                                        <div className={styles.infosItens}>
                                            <div className={styles.titleNormal} style={{ marginLeft: '2px', marginRight: '2px' }}>Tam:</div>
                                            <div className={styles.tamanho}>{item.tamanho2}</div>
                                        </div>
                                        <div className={styles.infosItens}>
                                            <div className={styles.titleNormal} style={{ marginLeft: '2px', marginRight: '2px' }}>Preço:</div>
                                            <div className={styles.price}>R$ {(item.preco2 * 2.2).toFixed(0)},<span className={styles.span} >00</span></div>
                                        </div>
                                    </div>
                                }
                                {item.preco3 == 0 || item.preco3 == undefined ?
                                    ''
                                    :
                                    <div className={styles.infos} >
                                        <div className={styles.infosItens}>
                                            <div className={styles.titleNormal} style={{ marginLeft: '2px', marginRight: '2px' }}>Med:</div>
                                            <div className={styles.tamanho}>{item.medidas3}</div>
                                        </div>
                                        <div className={styles.infosItens}>
                                            <div className={styles.titleNormal} style={{ marginLeft: '2px', marginRight: '2px' }}>Tam:</div>
                                            <div className={styles.tamanho}>{item.tamanho3}</div>
                                        </div>
                                        <div className={styles.infosItens}>
                                            <div className={styles.titleNormal} style={{ marginLeft: '2px', marginRight: '2px' }}>Preço:</div>
                                            <div className={styles.price}>R$ {(item.preco3 * 2.2).toFixed(0)},<span className={styles.span} >00</span></div>
                                        </div>
                                    </div>
                                }
                                {item.preco4 == 0 || item.preco4 == undefined ?
                                    ''
                                    :
                                    <div className={styles.infos} >
                                        <div className={styles.infosItens}>
                                            <div className={styles.titleNormal} style={{ marginLeft: '2px', marginRight: '2px' }}>Med:</div>
                                            <div className={styles.tamanho}>{item.medidas4}</div>
                                        </div>
                                        <div className={styles.infosItens}>
                                            <div className={styles.titleNormal} style={{ marginLeft: '2px', marginRight: '2px' }}>Tam:</div>
                                            <div className={styles.tamanho}>{item.tamanho4}</div>
                                        </div>
                                        <div className={styles.infosItens}>
                                            <div className={styles.titleNormal} style={{ marginLeft: '2px', marginRight: '2px' }}>Preço:</div>
                                            <div className={styles.price}>R$ {(item.preco4 * 2.2).toFixed(0)},<span className={styles.span} >00</span></div>
                                        </div>
                                    </div>
                                }
                                {item.preco5 == 0 || item.preco5 == undefined ?
                                    ''
                                    :
                                    <div className={styles.infos} >
                                        <div className={styles.infosItens}>
                                            <div className={styles.titleNormal} style={{ marginLeft: '2px', marginRight: '2px' }}>Med:</div>
                                            <div className={styles.tamanho}>{item.medidas5}</div>
                                        </div>
                                        <div className={styles.infosItens}>
                                            <div className={styles.titleNormal} style={{ marginLeft: '2px', marginRight: '2px' }}>Tam:</div>
                                            <div className={styles.tamanho}>{item.tamanho5}</div>
                                        </div>
                                        <div className={styles.infosItens}>
                                            <div className={styles.titleNormal} style={{ marginLeft: '2px', marginRight: '2px' }}>Preço:</div>
                                            <div className={styles.price}>R$ {(item.preco5 * 2.2).toFixed(0)},<span className={styles.span} >00</span></div>
                                        </div>
                                    </div>
                                }
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