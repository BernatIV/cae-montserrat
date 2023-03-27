
const Formulari = () => {

    return (
        <div style={{marginLeft: '5%'}}>
            <p className="text-description">Cliqueu el següent enllaç per anar al formulari o, copieu i enganxeu-lo
                en una pestanya nova</p>

            <a href='https://docs.google.com/forms/d/e/1FAIpQLSdpPIgZteiIjSit1B5jRcfALzFNqRcYxiKL2x84tAYi5-yjbg/viewform'
               target='_blank'
               style={{color: 'white', overflow: 'auto', wordWrap: 'break-word'}}
               rel="noreferrer"
            >
                https://docs.google.com/forms/d/e/1FAIpQLSdpPIgZteiIjSit1B5jRcfALzFNqRcYxiKL2x84tAYi5-yjbg/viewform
            </a>
        </div>
    );
}
export default Formulari;