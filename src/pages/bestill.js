
import React from "react"
import { navigate } from "gatsby-link"
import Layout from "components/layout"

import { Outer } from "ui"
function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

export default function Contact() {
  const [state, setState] = React.useState({})

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...state,
      }),
    })
      .then(() => navigate(form.getAttribute('action')))
      .catch((error) => alert(error))
  }

  return (
    <Layout>
    <Outer>
      <h1>Forhåndsbestill Guide til Norges fugleliv - 2. utgave</h1>
      <br />
     <div> <center>På lager fra<strong> 8. juni 2020!</strong></center></div>
      <form
        name="bestill"
        method="post"
        action="/utgivelser/guide-til-norges-fugleliv/"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={handleSubmit}
      >
        {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
        <input type="hidden" name="form-name" value="contact" />
        <p hidden>
          <label>
            Don’t fill this out: <input name="bot-field" onChange={handleChange} />
          </label>
        </p>
        
        <div>
          <label>
            Fornavn*:
            <br />
            <input type="text" name="fornavn"   placeholder="Ola" onChange={handleChange} />
          </label>
        </div>
        <div>
          <label>
            Etternavn*:
            <br />
            <input type="text" name="etternavn"    placeholder="Nordmann" onChange={handleChange} />
          </label>
        </div>
        <div>
          <label>
            Adresser 1*:
            <br />
            <input type="text" name="adresse1" placeholder="Eksempel gata 2" onChange={handleChange} />
          </label>
        </div>
        <div>
          <label>
            Adresse 2:
            <br />
            <input type="text" name="adresse2" onChange={handleChange} />
          </label>
        </div>
        <div>
          <label>
            Postnr.*:
            <br />
            <input type="number" name="postnr"  placeholder="2212" onChange={handleChange} />
          </label>
        </div>
        <div>
          <label>
            Poststed*:
            <br />
            <input type="text" name="poststed"  placeholder="Oslo" onChange={handleChange} />
          </label>
        </div>
        <div>
          <label>
            Land*:
            <br />
            <input type="text" name="land" placeholder="Norge" onChange={handleChange} />
          </label>
        </div>

        <div>
          <label>
            Epost*:
            <br />
            <input type="email" name="email" placeholder="din@epost.com" onChange={handleChange} />
          </label>
        </div>
        
        <div>
          <label>
            Antall bøker*:
            
            <input type="number" name="antall" placeholder="1" onChange={handleChange} />
          </label>
        </div>
        <div>
          <label>
            Evt beskjed til forlaget:
            <br />
            <textarea name="message" placeholder="Ved behov, melding her" onChange={handleChange} />
          </label>
          </div>
          <br />
        <div>
          <button type="submit">[Bestill nå!]</button>
        </div>
      </form>
     </Outer>
    </Layout>
  )
}