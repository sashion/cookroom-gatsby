import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"

const links = [
  {
    text: "Cookroom light - Kochevents ohne Koch",
    url: "http://e1.h0t3l.de",
    description:
      "Buchen Sie exklusiv den Cookroom für private Feiern und kochen Sie gemeinsam mit Ihren Freunden oder Kollegen.",
  },
  {
    text: "Cookroom - Kochevents mit Koch",
    url: "http://e2.h0t3l.de",
    description:
      "Sie suchen eine außergewöhnliche Location als Kochevent mit einem professionellen Koch? Dann ist der Cookroom genau das Richtige für Sie.",
  },
  {
    text: "Grillevents",
    url: "http://e3.h0t3l.de",
    description:
      "Fleisch ist Ihr Gemüse? Schauen Sie sich die Grillevents im Cookroom an.",
  },
]

const samplePageLinks = [
  {
    text: "Page 2",
    url: "page-2",
    badge: false,
    description:
      "A simple example of linking to another page within a Gatsby site",
  },
  { text: "TypeScript", url: "using-typescript" },
  { text: "Server Side Rendering", url: "using-ssr" },
  { text: "Deferred Static Generation", url: "using-dsg" },
]



const utmParameters = `?utm_source=cookroom&utm_medium=singlepage&utm_campaign=cookroom-reloaded`

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <div className={styles.textCenter}>
      <StaticImage
        src="../images/_MG_6182_Entzerrt.jpg"
        loading="eager"
        width={1000}
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt="Willkommen im Cookroom"
        style={{ marginBottom: `var(--space-6)`, width: "100%" }}
      />
    </div>
    <div className="content">
      <h1>
      ERLEBEN SIE DEN COOKROOM.
      </h1>
      <p className={styles.intro}>
      Die kulinarische Eventlocation des Hotel Schönbuch </p>
      {/* <p className={styles.intro}>
        <b>Example pages:</b>{" "}
        {samplePageLinks.map((link, i) => (
          <React.Fragment key={link.url}>
            <Link to={link.url}>{link.text}</Link>
            {i !== samplePageLinks.length - 1 && <> · </>}
          </React.Fragment>
        ))}
        <br />
        Edit <code>src/pages/index.js</code> to update this page.
      </p> */}
      <ul className={styles.list}>
        {links.map(link => (
          <li key={link.url} className={styles.listItem}>
            <a
              className={styles.listItemLink}
              href={`${link.url}${utmParameters}`}
              target="_blank"
            >
              {link.text} ↗
            </a>
            <p className={styles.listItemDescription}>{link.description}</p>
          </li>
        ))}
      </ul>
    </div>
  </Layout>
)

export default IndexPage
