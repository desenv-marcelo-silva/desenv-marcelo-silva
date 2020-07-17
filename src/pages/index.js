import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import FotoPerfil from "../components/fotoPerfil"
import RedesSociais from "../components/redesSocais"
import Tecnologias from "../components/tecnologias"

import "./index.css"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <section>
      <h2 className="texto">O que eu posso fazer por você hoje?</h2>

      <FotoPerfil />

      <div className="nome-funcao">
        <p>marcelo silva</p>
        <p>desenvolvedor web &amp; app</p>
      </div>

      <RedesSociais />

      <Tecnologias />
    </section>
  </Layout>
)

export default IndexPage
