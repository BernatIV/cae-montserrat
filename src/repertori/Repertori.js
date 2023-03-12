import imgRepertori1 from "../repertori_img2.png";
import imgRepertori2 from '../repertori_img3.png';
import './Repertori.css';

const Repertori = (props) => {

    return (
        <>
            <h1>Repertori</h1>

            <img className="image-size" src={imgRepertori1} alt=""/>
            <img className="image-size" src={imgRepertori2} alt=""/>
        </>
    );
}
export default Repertori;