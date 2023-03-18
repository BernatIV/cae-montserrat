import './Assajos.css';
import {Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";

function createData(name, calories, fat, carbs) {
    return {name, calories, fat, carbs};
}

const rows = [
    createData('dissabte, 25 de març de 2023', 'Assaig 1', 'de 10:00 a 14:00 hores ', 'Parròquia de la Bonanova'),
    createData('dissabte, 15 d’abril de 2023', 'Assaig 2', 'de 10:00 a 14:00 hores ', 'Parròquia de la Bonanova'),
    createData('dissabte, 27 de maig de 2023', 'Assaig 3', 'de 10:00 a 14:00 hores ', 'Parròquia de la Bonanova'),
    createData('dissabte, 17 de juny de 2023', 'Assaig General', 'de 10:00 a 14:00 hores ', 'Parròquia de la Bonanova'),
];

const Assajos = (props) => {

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
                        <div className="chip-outlined">
                            <Box sx={{padding: '4px'}}>
                                <strong>18 de juny del 2023</strong><br/>
                                Basílica de Montserrat aprox. 12:00 hores
                            </Box>
                        </div>
                        <h2>Assajos comuns</h2>
                        <TableContainer component={Paper}>
                            <Table sx={{minWidth: 350}} aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Data</TableCell>
                                        <TableCell align="right">Tipus</TableCell>
                                        <TableCell align="right">Horari</TableCell>
                                        <TableCell align="right">Lloc</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {rows.map((row) => (
                                        <TableRow
                                            key={row.name}
                                            sx={{'&:last-child td, &:last-child th': {border: 0}}}
                                        >
                                            <TableCell component="th" scope="row">
                                                {row.name}
                                            </TableCell>
                                            <TableCell align="right">{row.calories}</TableCell>
                                            <TableCell align="right">{row.fat}</TableCell>
                                            <TableCell align="right">{row.carbs}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                        <p>Dirigiran els assajos els antics directors, Joaquim Garrigosa, Joaquim Miranda, Jordi Boltes
                            i Lluis Perarnau, junt amb el director actual en Guifré Canadell.</p>
                        <h2>Assajos voluntaris</h2>
                        <p>Els membres actuals de la Coral, tenim assaig cada dimarts (no festiu) de 20:00 a 22:00 hores
                            a la parròqia de la Bonanova.</p>
                        <p>A partir del 21 de Març començarem a treballar el repertori del Concert del 75è
                            Aniversari.</p>
                        <p>Si voleu assistir, estarem molt contents d'acollir-vos i assajar junts, només heu que
                            comunicar-ho a la persona que us contactarà.</p>
                    </div>
                </Paper>
            </Box>
        </div>
    );
}
export default Assajos;