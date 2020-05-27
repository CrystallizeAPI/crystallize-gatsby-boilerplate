
import React from 'react'

import Layout from "components/layout"
import { Form, Field } from 'react-final-form'


const BestillSide = () => (
  <Layout>
    <h1>Forhåndsbestilling av Guide Til Norges Fugleliv 2nd utgave</h1>
    <a
      href="https://ornforlag.no/utgivelser/guide-til-norges-fugleliv-2-utgave"
      target="_blank"
      rel="noopener noreferrer"
    >
      Besøk siden
    </a>
    <Form
      onSubmit={onSubmit}
      initialValues={{ land: 'Norge', antall: '1', bok: 'Guide til Norges fugleliv 2. utgave'}}
      render={({ handleSubmit, form, submitting, pristine, values }) => (
        <form onSubmit={handleSubmit}>
          <div>
            <label>Fornavn*</label>
            <Field
              name="Fornavn"
              component="input"
              type="text"
              placeholder="Ola"
            />
          </div>
          <div>
            <label>Etternavn*</label>
            <Field
              name="Etternavn"
              component="input"
              type="text"
              placeholder="Nordmann"
            />
          </div>
          <div>
            <label>Adresse 1*</label>
            <Field
              name="Adresse1"
              component="input"
              type="text"
              placeholder="Eksempel gata 2"
            />
          </div>
          <div>
            <label>Adresse 2</label>
            <Field
              name="Adresse2"
              component="input"
              type="text"
              placeholder=""
            />
          </div>
          <div>
            <label>Postnr.*</label>
            <Field
              name="Postnr"
              component="input"
              type="number"
              placeholder="2212"
            />
          </div>
          <div>
            <label>Poststed*</label>
            <Field
              name="Poststed"
              component="input"
              type="text"
              placeholder="Oslo"
            />
          </div>
          <div>
            <label>Land*</label>
            <div>
              <label>
                <Field
                  name="Land"
                  component="input"
                  type="radio"
                  value="Norge"
                />{' '}
                Norge
              </label>
              <label>
                <Field
                  name="Land"
                  component="input"
                  type="radio"
                  value="Sverige"
                />{' '}
                Sverige
              </label>
              <label>
                <Field
                  name="Land"
                  component="input"
                  type="radio"
                  value="Danmark"
                />{' '}
                Danmark
              </label>
            </div>
          </div>
          <div>
            <label>Antall kopier</label>
            <Field
              name="antall"
              component="input"
              type="number"
              placeholder="1"
            />
          </div>
         
      
          <div>
            <label>Beskjed til forlaget</label>
            <Field name="beskjed" component="textarea" placeholder="'skriv evt beskjed til forlaget her'" />
          </div>
          <div className="buttons">
            <button type="submit" disabled={submitting || pristine}>
              Bestill 
            </button>
            <button
              type="button"
              onClick={form.reset}
              disabled={submitting || pristine}
            >
              Nullstil
            </button>
          </div>
     
        </form>
      )}
    />
  </Layout>
)

export default BestillSide
