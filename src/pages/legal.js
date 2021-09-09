import React from "react";
import Title from "../components/general/Title";
import Layout from "../components/general/Layout";

const legal = () => {
  return (
    <Layout darkFooter={true}>
      <section className="legal-page">
        <Title title="Legal Notice / Impressum" />
        <div className="section-center">
          <h1>Impressum</h1>
          <h2>Angaben gemäß § 5 TMG:</h2>
          <div>
            <div className="impressum-name">
              <div className="impressum-name">S&nbsp;a&nbsp;</div>
              <div className="impressum-name">m&nbsp;u&nbsp;</div>
              <div className="impressum-name">e&nbsp;l&nbsp;&nbsp;</div>
              <div className="impressum-name">B&nbsp;l&nbsp;</div>
              <div className="impressum-name">e&nbsp;h&nbsp;m</div>
            </div>
          </div>
          <h3>Postanschrift:</h3>
          <div>
            <div className="impressum-name">
              <div className="impressum-name">Al</div>
              <div className="impressum-name">te&nbsp;</div>
              <div className="impressum-name">Gl</div>
              <div className="impressum-name">ock</div>
              <div className="impressum-name">engi</div>
              <div className="impressum-name">eße</div>
              <div className="impressum-name">re</div>
              <div className="impressum-name">i&nbsp;4</div>
            </div>
          </div>
          <div>
            <div className="impressum-name">
              <div className="impressum-name">681</div>
              <div className="impressum-name">65&nbsp;</div>
              <div className="impressum-name">He</div>
              <div className="impressum-name">id</div>
              <div className="impressum-name">elb</div>
              <div className="impressum-name">er</div>
              <div className="impressum-name">g</div>
            </div>
          </div>
          <h3>Kontakt:</h3>
          <div>
            <div className="impressum-name">
              <p>Telefon:&nbsp;</p>
              <div className="impressum-name">+4</div>
              <div className="impressum-name">9</div>
              <div className="impressum-name">&nbsp;</div>
              <div className="impressum-name">176&nbsp;</div>
              <div className="impressum-name">49</div>
              <div className="impressum-name">69</div>
              <div className="impressum-name">56</div>
              <div className="impressum-name">17</div>
            </div>
            <div className="impressum-name">
              <p>E-Mail:&nbsp;</p>
              <div className="impressum-name">s</div>
              <div className="impressum-name">a</div>
              <div className="impressum-name">mu</div>
              <div className="impressum-name">e</div>
              <div className="impressum-name">l.</div>
              <div className="impressum-name">b</div>
              <div className="impressum-name">le</div>
              <div className="impressum-name">hm</div>
              <div className="impressum-name">@</div>
              <div className="impressum-name">g</div>
              <div className="impressum-name">mai</div>
              <div className="impressum-name">l.c</div>
              <div className="impressum-name">om</div>
            </div>
          </div>
          <p>
            <br />
          </p>
          <p></p>
          <h2>Hinweise zur Website</h2>
          <p></p>
          <h2>Information gemäß § 36 VSBG</h2>
          <p>
            Gemäß § 36 VSBG (Verbraucherstreitbeilegungsgesetz – Gesetz über die
            alternative Streitbeilegung in Verbrauchersachen) erklärt der
            Betreiber dieser Website:
          </p>
          <p>
            Wir sind weder bereit noch verpflichtet, an
            Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
            teilzunehmen.
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default legal;