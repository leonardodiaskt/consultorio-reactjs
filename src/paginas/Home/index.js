import React from "react";
import { Link } from "react-router-dom";

import EstruturaPagina from '../../componentes/EstruturaPagina/';
import './styleHome.css';

const Home = () => {
    return(
        <EstruturaPagina>
            <div className="home-apresentacao">
                <div className="limitar-container">
                    <h1>Os Melhores <span>aparelhos dentários</span></h1>
                    <p>Confira abaixo todas as especialidades odontológica que temos à sua disposição!</p>

                    <ul className="lista-servicos">
                        <li>
                            <img src='assets/dente.png' title="Pré-Avaliação" alt="Pré-Avaliação"/>
                            <p>Pré-Avaliação</p>
                        </li>

                         <li>
                            <img src='assets/dente.png' title="Aparelhos Dentários" alt="Aparelhos Dentários"/>
                            <p>Aparelhos Dentários</p>
                        </li> 
                        
                        <li>
                            <img src='assets/dente.png' title="Raio X Digital" alt="Raio X Digital"/>
                            <p>Raio X Digital</p>
                        </li>
                         
                        <li>
                            <img src='assets/dente.png' title="Clareamento Dental" alt="Clareamento Dental"/>
                            <p>Clareamento Dental</p>
                        </li>
                    </ul>
                </div>
            </div>

            <h2>Por que usar <strong>aparelho?</strong></h2>

            <img className="img-aparelho" src="assets/aparelho.png" alt="Uso do Aparelho" title="Uso do Aparelho"/>

            <ul className="lista-sobre-aparelho limitar-container">
                <li>
                    <h3>Alinhar os Dentes</h3>
                    <p> Dentes desalinhados podem causar problemas nos dentes e afetar a mastigação dos alimentos e a respiração</p>
                </li>

                <li>
                    <h3>Melhorar a dicção e a higiene bucal</h3>
                    <p>Muitas pessoas não conseguem usar fio dental devido a posição 
                        da sua dentição. Contudo, a correção possibilita o cuidado com a 
                        saúde bucal de forma mais ampla.</p>
                </li>

                <li>
                <h3>Corrigir espaços entre os dentes</h3>
                <p>Uma dentição desalinhada e com espaços significativos incomodam muitas pessoas.
                    Usar aparelho nos dentes é uma das formas mais eficientes para que esses 
                    problemas possam ser corrigidos.
                </p>
                </li>

            </ul>

            <div className="home-depoimentos">
                <h2 className="titulo-sessao">Veja o que os nossos <strong>clientes</strong> estão falando...</h2>
                
                <ul className="lista-depoimentos">
                    <li>
                        <img src="assets/cliente01.png" alt="Cliente Jamal" title="Cliente Jamal" />
                        <p>Jamal</p>
                        <p>Usei aparelho por 2 ano e agora posso sorrir novamente.</p>
                    </li>

                    <li>
                        <img src="assets/cliente02.png" alt="Cliente Ester" title="Cliente Ester" />
                        <p>Ester</p>
                        <p>Meus dentes eram espaçados e depois de 1 ano estão no lugar.</p>
                    </li>

                    <li>
                        <img src="assets/cliente03.png" alt="Cliente Maria" title="Cliente Maria" />
                        <p>Maria</p>
                        <p>Comecei a usar no ano passado e já estou sentindo a diferença</p>
                    </li>
                </ul>

            </div>

            <div>
                <Link to="/contato" className="btn-contato">Entrar em contato</Link>
            </div>

        </EstruturaPagina>
    );
}


export default Home;