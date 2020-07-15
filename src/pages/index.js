import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

import "./index.css"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <section>
      <h2 className="texto">O que eu posso fazer por você hoje?</h2>
      <img
        className="foto-perfil"
        src={require("../images/photo-linkedin.jpeg")}
        alt="foto-perfil"
      />

      <div className="nome-funcao">
        <p>marcelo silva</p>
        <p>desenvolvedor web &amp; app</p>
      </div>

      <div className="redes-sociais">
        <a
          href="https://www.linkedin.com/in/marcelo-lopes-da-silva-2b831856/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={require("../images/linkedin.png")}
            alt="linkedin marcelo silva"
          />
        </a>
        <a
          href="https://www.github.com/desenv-marcelo-silva"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={require("../images/github.png")}
            alt="github marcelo silva"
          />
        </a>
      </div>

      <div className="tecnologias">
        <img alt="javascript" src={require("../images/javascript.png")} />
        <img alt="typescript" src={require("../images/typescript.png")} />
        <img alt="nodejs" src={require("../images/nodejs.png")} />
        <img alt="python" src={require("../images/python.png")} />
        <img alt="react" src={require("../images/react.png")} />
        <img alt="angular" src={require("../images/angular.png")} />
      </div>
    </section>
  </Layout>
)

export default IndexPage
