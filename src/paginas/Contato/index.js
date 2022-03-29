import React from "react";
import EstruturaPagina from "../../componentes/EstruturaPagina/";
import Mapa from "../../componentes/Mapa/";
import "./styleContato.css";

const Contato = () => {
  return (
    <EstruturaPagina>
      <div className="contato-container">
        <div className="contato-mapa">
          <h2 className="titulo-sessao">Horários de atendimento</h2>
          <p>Agende uma consulta pelo telefone: (11) 94268-5710</p>
          <ul className="lista-dentistas">
            <li>
              <img
                className="img-aparelho"
                title="foto do Dr. Hélio"
                alt="Foto do Dr. Hélio"
                src="assets/medico01.png"
              />
              <p>Dr. Hélio</p>
              <p>Segundas e Quartas das 08:00 às 16:00</p>
            </li>
            <li>
              <img
                className="img-aparelho"
                title="foto do Dr. Silvio"
                alt="Foto do Dr. Silvio"
                src="assets/medico02.png"
              />
              <p>Dr. Silvio</p>
              <p>Terças e Quintas das 13:00 às 20:00</p>
            </li>
            <li>
              <img
                className="img-aparelho"
                title="foto da Dra. Kimberly"
                alt="Foto da Dra. Kimberly"
                src="assets/medico03.png"
              />
              <p>Dra. Kimberly</p>
              <p>Sextas e Sábadps das 07:30 às 12:30</p>
            </li>
          </ul>
        </div>

        <div className="contato-mapa">
          <h2 className="titulo-sessao">Onde estamos localizados</h2>
          <p>Rua Francisco Peixoto Bizerra, 1353 - São Paulo - SP</p>
          <Mapa />
        </div>
      </div>
    </EstruturaPagina>
  );
};

export default Contato;
