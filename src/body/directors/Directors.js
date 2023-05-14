import './directors.css';
import {Paper} from "@mui/material";
import conductor1 from '../../assets/images/conductors/14 -.jpg';
import conductor2 from '../../assets/images/conductors/15.bmp';
import conductor3 from '../../assets/images/conductors/16.Joan Maria Aragonès.jpg';
import conductor4 from '../../assets/images/conductors/17 -.jpg';
import conductor5 from '../../assets/images/conductors/18 -.bmp';
import conductor6 from '../../assets/images/conductors/19.jpg';
import conductor7 from '../../assets/images/conductors/20 -.jpg';
import conductor8 from '../../assets/images/conductors/21 -.jpg';
import conductor9 from '../../assets/images/conductors/22 -.jpg';
import conductor10 from '../../assets/images/conductors/23 -.jpg';
import conductor11 from '../../assets/images/conductors/24 -.jpg';

const Directors = () => {
    return (
        <>
            <section className="directors-container">
                <p className="text-description-directors">Directors</p>
                <Paper elevation={2} className="paper-container hidden"
                       left={0}>
                    <img src={conductor1} alt="director" className="img-conductor"/>
                    <div className="paragraph-container">
                        <p>Leopold Massó (1948 - 1958 i 1971 - 1981)</p>
                    </div>
                </Paper>

                <Paper elevation={2} className="paper-container hidden">
                    <img src={conductor2} alt="director" className="img-conductor"/>
                    <div className="paragraph-container">
                        <p>Eugeni Gassull (1958 – 1961)</p>
                    </div>
                </Paper>

                <Paper elevation={2} className="paper-container hidden">
                    <img src={conductor3} alt="director" className="img-conductor"/>
                    <div className="paragraph-container">
                        <p>Joan Maria Aragonès (1961 – 1971)</p>
                    </div>
                </Paper>

                <Paper elevation={2} className="paper-container hidden">
                    <img src={conductor4} alt="director" className="img-conductor"/>
                    <div className="paragraph-container">
                        <p>Pere Pagès (1969 - 2018)</p>
                        <p>(Director de Cant Gregorià)</p>
                    </div>
                </Paper>

                <Paper elevation={2} className="paper-container hidden">
                    <img src={conductor5} alt="director" className="img-conductor"/>
                    <div className="paragraph-container">
                        <p>Joaquim Miranda (1981 – 1983)</p>
                    </div>
                </Paper>

                <Paper elevation={2} className="paper-container hidden">
                    <img src={conductor6} alt="director" className="img-conductor"/>
                    <div className="paragraph-container">
                        <p>Joaquim Garrigosa (1983 – 1996)</p>
                    </div>
                </Paper>

                <Paper elevation={2} className="paper-container hidden">
                    <img src={conductor7} alt="director" className="img-conductor"/>
                    <div className="paragraph-container">
                        <p>Jordi Boltes (1996 – 2009)</p>
                    </div>
                </Paper>

                <Paper elevation={2} className="paper-container hidden">
                    <img src={conductor8} alt="director" className="img-conductor"/>
                    <div className="paragraph-container">
                        <p>Ricard Rodriguez (2009 – 2010)</p>
                    </div>
                </Paper>

                <Paper elevation={2} className="paper-container hidden">
                    <img src={conductor9} alt="director" className="img-conductor"/>
                    <div className="paragraph-container">
                        <p>Lluís Perernau (2010 - 2014)</p>
                    </div>
                </Paper>

                <Paper elevation={2} className="paper-container hidden">
                    <img src={conductor10} alt="director" className="img-conductor"/>
                    <div className="paragraph-container">
                        <p>Gerard Farreras (2014 – 2015)</p>
                    </div>
                </Paper>

                <Paper elevation={2} className="paper-container hidden">
                    <img src={conductor11} alt="director" className="img-conductor"/>
                    <div className="paragraph-container">
                        <p>Guifré Canadell (2015 - ...)</p>
                    </div>
                </Paper>
            </section>
        </>
    );
}
export default Directors;