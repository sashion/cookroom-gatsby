import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"

const links = [
  {
    text: "Cookroom light – Kochevents ohne Koch",
    url: "http://e1.h0t3l.de",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam rhoncus convallis leo ac mattis. Sed ut sem nec nunc euismod interdum. Sed ut nulla tellus. ",
  },
  {
    text: "Cookroom - Kochevents mit Koch",
    url: "http://e2.h0t3l.de",
    description:
      "Nulla varius, orci vel dignissim elementum, orci orci sodales orci, non fermentum nisi risus pulvinar velit",
  },
  {
    text: "Grillevents",
    url: "http://e3.h0t3l.de",
    description:
      "Curabitur feugiat, libero cursus facilisis blandit, dui est pellentesque justo, quis gravida est tellus nec nunc. Etiam mi odio, egestas quis bibendum eget, volutpat eu metus. In hac habitasse platea dictumst.",
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
        src="../images/Fleisch_01.jpg"
        loading="eager"
        // width={500}
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

Im separaten Gebäude steht Ihnen eine hochwertige Eventküche zur Verfügung, in der die Kursteilnehmer in selbst kochen oder dem Profi über die Schulter schauen können.
<br /><br />
Für die Ausstattung der Küche zeichnete der Edeleinrichter Lukaszewitz aus Reutlingen verantwortlich. Jetzt steht Ihnen eine hochwertige Bulthaup B3 Küche mit innovativster Technik zur Verfügung.
Küche und Essbereich sind eng miteinander verbunden, so dass die Kochschüler das selbst zubereitete Menü direkt genießen können. Der hübsche Außenbereich lädt zum Verweilen ein.
<br /><br />
Unter fachmännischer Anleitung und mit viel Spaß werden Sie das vorgegebene Menü zubereiten. Alle Kursteilnehmer werden nicht nur einen Gang des Menüs zubereiten, sondern alle Gänge von der Herstellung durchlaufen.
<br /><br />
Während des Kochkurses sind enthalten:
<br />
- Aperitif<br />
- Mineralwasser<br />
- Ein Glas korrespondierender Wein pro Gericht<br />
- Kaffee, Espresso oder Cappuccino<br />
- Rezepte<br />
- Leihschürze<br /><br />

Ab 8 Personen bieten wir Ihnen Ihren individuellen Kochkurs zum Wunschthema und -termin an.      </p>
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
