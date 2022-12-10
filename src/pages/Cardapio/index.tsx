import React from 'react';
import styles from './Cardapio.module.scss'
import {ReactComponent as Logo} from 'assets/cardapio/logo.svg'
import { Buscador } from './Buscador';
import { Filtros } from './Filtros';
import { Ordenador } from './Ordenador';
import { Itens } from './itens';
const Cardapio = () =>{

    const [busca, setBusca] = React.useState("")
    const [filtro, setFiltro] = React.useState<number |null>(null)
    const [ordenador, setOrdenador] = React.useState("");
    return(
        <main>
            <nav className= {styles.menu}>
                <Logo/>
            </nav>
            <header className={styles.header}>
                <div className= {styles.header__text}>A casa do Código e da Massa

                </div>
            </header>
            <section className={styles.cardapio}>
                <h3 className={styles.cardapio__titulo}>Cardápio</h3>
                <Buscador busca={busca} setBusca={setBusca}/>
                <div className={styles.cardapio__filtros}>
                    <Filtros filtro={filtro} setFiltro={setFiltro}/>
                    <Ordenador ordenador={ordenador} setOrdenador={setOrdenador}/>
                </div>
                <Itens busca = {busca} filtro = {filtro} ordenador = {ordenador}/>
            </section>
        </main>
    );
} 

export {Cardapio}