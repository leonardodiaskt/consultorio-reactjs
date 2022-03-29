import React from 'react';
import { Link } from 'react-router-dom';
import './styleTopo.css';

const Topo = () => {
    return(
        <header className='topo'>
            <div className='topo-conteudo'>
                <Link className='topo-logo-box' to='/'>
                   <img className='topo-logo-img' src="assets/dente.png" alt='Logo da Clínica'/>
                   <p className='topo-nome-empresa'>Dentes Saudáveis</p>
                   <nav className='topo-links'>
                        <Link className='topo-link' to='/'>Home</Link>
                        <Link className='topo-link' to='/contato'>Contato</Link>
                   </nav>
                </Link> 
            </div>
        </header>
    );
}

export default Topo;