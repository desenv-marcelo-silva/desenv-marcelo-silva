import React from "react"

const stTecnologia = {
  display: "flex",
  flexDirection: "row",
}

const stIcones = {
  width: 40,
  height: 40,

  transform: "scale(1)",
  transition: "transform 0.3s ease-out",

  "&:not(:firstChild)": {
    marginLeft: "24px",
  },

  "&:hover": {
    transform: "scale(1.3)",
    transition: "transform 0.3s ease-in",
  },
}

const stIconesMargin = {
  ...stIcones,
  marginLeft: 64,
}
//https://desenv-marcelo-silva.github.io/desenv-marcelo-silva/
const Tecnologias = () => {
  return (
    <div style={stTecnologia}>
      <img style={stIcones} src={`javascript.png`} alt="javascript" />
      <img style={stIconesMargin} src={`typescript.png`} alt="typescript" />
      <img style={stIconesMargin} src={`nodejs.png`} alt="nodejs" />
      <img style={stIconesMargin} src={`python.png`} alt="python" />
      <img style={stIconesMargin} src={`react.png`} alt="react" />
      <img style={stIconesMargin} src={`angular.png`} alt="angular" />
    </div>
  )
}

export default Tecnologias
