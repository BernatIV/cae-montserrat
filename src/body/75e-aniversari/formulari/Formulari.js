import {Button, Stack} from "@mui/material";
import {formUrl} from "../../../utils/Constants";

const Formulari = () => {

    const openForm = () => {
        window.open(formUrl, '_blank');
    }

    return (
        <div style={{marginLeft: '5%'}}>
            <p className="text-description">Cliqueu el botó per obrir el formulari o, copieu i enganxeu el següent enllaç
                en una pestanya nova</p>
            <Stack spacing={2} direction="row">
                <Button onClick={openForm} variant="contained" color="secondary">Formulari</Button>
            </Stack>
            <br/>
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