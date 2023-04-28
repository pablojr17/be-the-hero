import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { FiPower, FiMail } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import api from "../../services/api";

import "./styles.css";
import logoImg from "../../assets/logo.svg";

export default function Cases() {
  const [incidents, setIncidents] = useState([]);
  const history = useHistory();
  const ongId = localStorage.getItem("ongId");
  const ongName = localStorage.getItem("ongName");

  useEffect(() => {
    api.get("incidents").then((response) => {
      setIncidents(response.data);
    });
  }, [ongId]);

  function handleLogout() {
    localStorage.clear();

    history.push("/");
  }

  function abrirWhatsapp(numero, mensagem) {
    var url =
      "https://api.whatsapp.com/send?phone=" +
      numero +
      "&text=" +
      encodeURIComponent(mensagem);
    window.open(url);
  }

  function abrirEmail(destinatario, assunto, corpo) {
    var url =
      "mailto:" +
      destinatario +
      "?subject=" +
      encodeURIComponent(assunto) +
      "&body=" +
      encodeURIComponent(corpo);
    window.location.href = url;
  }

  return (
    <div className="profile-container">
      <header>
        <img src={logoImg} alt="be The Hero" />
        {ongName && (
          <>
            <div className="header-dados">
              <span>Bem vinda, {ongName}</span>

              <Link className="button" to="/incidents/new">
                Cadastra novo caso
              </Link>
            </div>
            <button onClick={handleLogout} type="button">
              <FiPower size={18} color="E02041" />
            </button>
          </>
        )}
      </header>

      <div className="info">
        <span>Bem vinda, {ongName}</span>

        <Link className="button" to="/incidents/new">
          Cadastra novo caso
        </Link>
      </div>

      <h1>Casos cadastrados</h1>

      <ul>
        {incidents.map((incident) => (
          <li key={incident.id}>
            <div className="dados">
              <p>Caso: {incident.title}</p>
            </div>

            <div className="ong">
              <span>Ong: {incident.name}</span>
            </div>

            <strong>DESCRIÇÂO:</strong>
            <p>{incident.description}</p>

            <strong>Valor:</strong>
            <p>
              {Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL",
              }).format(incident.value)}
            </p>

            <div className="contato">
              <span>Contato:</span>
              <FaWhatsapp
                size={20}
                color="#E02041"
                onClick={() =>
                  abrirWhatsapp(incident.whatsapp, "Olá gostaria de ajudar!")
                }
              />
              <FiMail
                size={20}
                color="#E02041"
                onClick={() =>
                  abrirEmail(
                    incident.email,
                    incident.title,
                    "Olá gostaria de ajudar!"
                  )
                }
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
