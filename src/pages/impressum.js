import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

const Imprint = () => (
  <Layout>
    <Seo title="Impressum" />
    <div class="content">
      <h1>Impressum</h1>
      <p>
        <strong>Verantwortlich im Sinne des §6 MDStV & 6 TDG</strong>
        <br />
        Maik Hörz
        <br />
        <br />
        <strong>Niederlassung:</strong>
        <br />
        Lichtensteinstrasse 43
        <br />
        72124 Pliezhausen
        <br />
        Telefon: +49(0)7127-975-0
        <br />
        Fax: +49(0)7127-975-100
        <br />
        <br />
        <a
          // className={styles.listItemLink}
          href="http://www.cookroom.de"
          target="_blank"
        >
          cookroom.de ↗
        </a>
        <br />
        E-Mail: <a href="mailto:info@cookroom.de">info@cookroom.de</a>
        <br />
        <br />
        <strong>Design und Programmierung:</strong>
        <br />
        <a
          // className={styles.listItemLink}
          href="http://www.sashion.de"
          target="_blank"
        >
          sashion.de ↗
        </a>
      </p>
    </div>
  </Layout>
)

export default Imprint
