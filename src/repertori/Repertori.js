import './Repertori.css';
import {Box, Paper, Table, TableBody, TableCell, TableContainer, TableRow} from "@mui/material";

function createData(obra, autor) {
    return {obra, autor};
}

const primerBlocRows = [
    createData('Salve Montserratina', 'Anònim i Cant Gregorià (Director: Joaquim Garrigosa)'),
    createData('Emperadriu de la ciutat joiosa', 'Llibre Vermell de Montserrat, adap. G. Odiló Planàs (Director: Guifré Canadell)'),
    createData('Veni veni Emanuel', 'Anònim, arranjament P. Ireneu Segarra, adap. Pol Requesens (Director: Guifré Canadell)'),
    createData('Aestimatus Sum', 'Tomas Lluis de Vitoria (Director: Guifré Canadell)'),
    createData('Ubi Caritas', 'Ola Gjeilo (Director: Guifré Canadell)'),
    createData('Ave Maria', 'Vicente Goicoechea (Director: Lluis Perarnau)'),
    createData('Nigra Sum', 'Pau Casals (Director: Jordi Boltes)'),
];

const segonBlocRows = [
    createData('Cançó del Pelegrí', 'Antoni Nicalau (Director: Guifré Canadell)'),
    createData('Marinada', 'Antoni Pérez Moya (Director: Guifré Canadell)'),
    createData('El Rossinyol', 'Felix Mendelssohn (Director: Guifré Canadell)'),
    createData('Himne excursionista', 'Joan Just (Director: Guifré Canadell)'),
    createData('Jovenivola', 'Lluis Millet (Director: Joaquim Miranda)'),
    createData('L\'Emigrant', 'Amadeu Vives Roig (Director: Joaquim Garrigosa)'),
    createData('Sota la vostra protecció', 'Ireneo Segarra (Director: Guifré Canadell)'),
];

const Repertori = (props) => {

    return (
        <div className="page-margin">
            <Box
                sx={{
                    display: 'flex', flexWrap: 'wrap', '& > :not(style)': {
                        m: 1,
                    },
                }}
            >
                <Paper elevation={2}>
                    <div className="page-content-margin">
                        <h1>Concert celebració 75è aniversari</h1>
                        <h2>Repertori</h2>
                        <h3>Primer bloc (Música Sacra)</h3>
                        <TableContainer component={Paper}>
                            <Table sx={{minWidth: 350}} aria-label="simple table">
                                <TableBody>
                                    {primerBlocRows.map((row) => (
                                        <TableRow
                                            key={row.obra}
                                            sx={{'&:last-child td, &:last-child th': {border: 0}}}
                                        >
                                            <TableCell component="th" scope="row">
                                                {row.obra}
                                            </TableCell>
                                            <TableCell>{row.autor}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                        <h3>Segon bloc (Música segles XIX i XX)</h3>
                        <TableContainer component={Paper}>
                            <Table sx={{minWidth: 350}} aria-label="simple table">
                                <TableBody>
                                    {segonBlocRows.map((row) => (
                                        <TableRow
                                            key={row.obra}
                                            sx={{'&:last-child td, &:last-child th': {border: 0}}}
                                        >
                                            <TableCell component="th" scope="row">
                                                {row.obra}
                                            </TableCell>
                                            <TableCell>{row.autor}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </div>
                </Paper>
            </Box>
        </div>
    );
}
export default Repertori;