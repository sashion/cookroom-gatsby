import { Link } from "gatsby"
import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <Seo title="404: Not found" />
    <div class="content">
      <h1>404: Seite nicht gefunden</h1>
      <p>
        Leider existiert diese Seite nicht. <Link to="/">Zur Startseite</Link>
      </p>
    </div>
  </Layout>
)

export default NotFoundPage
