import React from "react"
import { Helmet } from 'react-helmet'
//import './OpenGraph.css'

function OpenGraph({ enlace }) {
  const titulo = 'Título de tu sitio web'
  const descripcion = 'Descripción de tu sitio web'
  const imagen = 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'

  return (
    <>
      <Helmet>
        <title>{titulo}</title>
        <meta property="og:title" content={titulo} />
        <meta property="og:description" content={descripcion} />
        <meta property="og:image" content={imagen} />
        <meta property="og:url" content={enlace} />
        <meta property="og:type" content="website" />
      </Helmet>
    </>
  )
}

export default OpenGraph
