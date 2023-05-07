import './contacte.css';

const Contacte = () => {
    return (
        <section className="contacte-container">
            <p className="text-description-contacte">Si vols posar-te en contacte amb nosaltres envia’ns un correu electrònic.</p>
            <a href="mailto:info@caemontserrat.cat" className="text-description-contacte">info@caemontserrat.cat</a>
            {/*<a href="mailto:example@example.com?subject=Hello%20from%20my%20website&body=I%20just%20wanted%20to%20say%20hello.">Send Email</a>*/}
        </section>
    )
}
export default Contacte;