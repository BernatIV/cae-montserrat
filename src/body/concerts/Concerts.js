import styles from './concerts.module.scss';
import {Divider, List, ListItem, ListItemText} from "@mui/material";
import {concertDates} from "../../mock/concertDates";
import {getMonthName} from "../../utils/dateUtils";

const Concerts = () => {
    return (
        <section className={styles.concertsContainer}>
            <p className={styles.text}>Propers esdeveniments</p>

            <List className={styles.list}>
                <ListItem className={styles.listItem}>
                    <section className={styles.calendar}>
                        <p className={styles.day}>18</p>
                        <p className={styles.month}>Juny</p>
                        <p className={styles.year}>2023</p>
                    </section>
                    <ListItemText primary="75è aniversari"
                                  secondary="Basílica de Montserrat - Montserrat"
                    />
                </ListItem>
            </List>

            <p className={styles.text}>Esdeveniments passats</p>

            {/*entre cada any, que hi hagi una separació negre. Com si dos una altra llista pel següent any amb els cantos arrodonits*/}
            {/*crec que això ho puc aconseguir per un filter de l'any*/}

            <List className={styles.list}>
                {concertDates
                    .sort((a, b) => b.date - a.date)
                    .map((concert, index) => (
                        <div key={index}>
                            <ListItem className={styles.listItem}>
                                <section className={styles.calendar}>
                                    <p className={styles.day}>{concert.date.getDate()}</p>
                                    <p className={styles.month}>{getMonthName(concert.date.getMonth() + 1)}</p>
                                    <p className={styles.year}>{concert.date.getFullYear()}</p>
                                </section>
                                <ListItemText primary={concert.title}
                                              secondary={concert.place + ' - ' + concert.town}>
                                    {/*secondaryTypographyProps={{color: 'red'}}>*/}
                                </ListItemText>
                            </ListItem>
                            <span className={styles.divider} />
                        </div>
                    ))}
            </List>
        </section>
    );
}
export default Concerts;


/*
    Fer un tipus de llista així
    https://www.songkick.com/es/artists/10275481-david-kushner
 */