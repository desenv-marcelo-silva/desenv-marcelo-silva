import React from "react"

const stRedesSociais = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  marginBottom: "32px",
}

const stImageIcone = {
  backgroundSize: "cover",
  borderRadius: "50%",
  width: 40,
  height: 40,
}

const stImageIconeGitHub = { ...stImageIcone, marginLeft: "64px" }

const RedesSociais = () => {
  return (
    <div style={stRedesSociais}>
      <a
        href="https://www.linkedin.com/in/marcelo-lopes-da-silva-2b831856/"
        target="_blank"
        rel="noreferrer"
      >
        <img
          style={stImageIcone}
          src={`linkedin.png`}
          alt="linkedin marcelo silva"
        />
      </a>
      <a
        href="https://www.github.com/desenv-marcelo-silva"
        target="_blank"
        rel="noreferrer"
      >
        <img
          style={stImageIconeGitHub}
          src={`github.png`}
          alt="github marcelo silva"
        />
      </a>
    </div>
  )
}

export default RedesSociais
