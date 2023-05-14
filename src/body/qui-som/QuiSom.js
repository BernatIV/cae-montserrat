import fotoRessenyaHistorica from "../../assets/images/ressenya-historica.jpg";
import './QuiSom.css';

const QuiSom = () => {
    return (
        <div className="qui-som-container">
            <div className="position-relative">
                <img className="image-background-historic" src={fotoRessenyaHistorica} alt="Concert 100 anys naixement P. Irineu"/>
            </div>

            <div className="position-absolute-qui-som">
                <div className="gradient-title">
                    <h1 className="history-title title-large-screen">Ressenya històrica de la coral</h1>
                    <p className="text-description-qui-som">La "Coral d'Antics Escolans de Montserrat" va ser fundada l'any 1948 en
                        el si de la "Unió Escolans de Montserrat" per Leo Massó, Lluís Ximenis i un grup de cantaires tots
                        ells antics escolans, encoratjats pel P. Ireneu Segarra, que va morir el 19 de novembre del 2005,
                        però que en tot moment n'ha estat un important valedor.
                    </p>
                </div>
                <div className="gradient">
                    <p className="text-description-qui-som">
                        La Coral és un cor de veus masculines i des de la seva creació ha prestat sempre un màxim interès en
                        la interpretació de música litúrgica tant en la seva vessant monòdica amb el cant gregorià, com
                        polifònica dels autors més reconeguts, no oblidant tampoc els compositors del romanticisme i la
                        música popular catalana.
                    </p>
                    <p className="text-description-qui-som">
                        Al llarg d'aquests 75 anys d'història ha actuat arreu del país, també en la resta de l'estat i en
                        diverses ciutats d'Europa.
                    </p>
                    <p className="text-description-qui-som">
                        Entre els cicles que cal destacar hi ha el Teatre Medieval del Tinell (Barcelona) i més recentment
                        la participació coral en varies operes en el Gran Teatre del Liceu ("L'holandès errant",
                        "Billy Budd" i "Aida").
                    </p>
                    <p className="text-description-qui-som">
                        Ha col·laborat ocasionalment amb la Capella de Música i l'Escolania de Montserrat en algunes
                        celebracions litúrgiques. També ha realitzat enregistraments per la televisió i produccions
                        discogràfiques.
                    </p>
                    <p className="text-description-qui-som">
                        Des de l'any 2015 el seu director és en Guifré Canadell.
                    </p>
                </div>
            </div>
        </div>
    )
}
export default QuiSom;