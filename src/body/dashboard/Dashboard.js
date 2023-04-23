import './Dashboard.css';
import concert from '../../Concert 100 anys neixament P. Ireneu3.jpg';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const Dashboard = () => {
    return (
        <div className="dashboard-height">
            <div className="position-relative">
                <img className="image-background" src={concert} alt="Concert 100 anys naixement P. Irineu"/>
            </div>

            <div className="position-absolute gradient div-size-dashboard">
                <h1 className="choir-title title-large-screen">Coral d'Antics Escolans de Montserrat</h1>
                <p className="text-description">La Coral d'Antics Escolans de Montserrat celebrem enguany el 75è aniversari. Per aquest motiu farem
                    un concert a la Basílica de Montserrat el pròxim 18 de juny després de la missa Conventual.
                </p>
                <p className="text-description">
                    Podeu consultar tant el repertori com el pla d'assajos clicant les opcions que teniu a dalt, i
                    si us hi voleu apuntar cliqueu el formulari per inscriure's.
                </p>
            </div>
        </div>
    );
}
export default Dashboard;