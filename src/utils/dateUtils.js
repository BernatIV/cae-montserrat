export const getMonthName = (monthNumber) => {

    switch (monthNumber) {
        case 1:
            return 'Gener';
        case 2:
            return 'Febrer';
        case 3:
            return 'Març';
        case 4:
            return 'Abril';
        case 5:
            return 'Maig';
        case 6:
            return 'Juny';
        case 7:
            return 'Juliol';
        case 8:
            return 'Agost';
        case 9:
            return 'Setembre';
        case 10:
            return 'Octubre';
        case 11:
            return 'Novembre';
        case 12:
            return 'Desembre';
        default:
            return 'No es coneix';
    }
}