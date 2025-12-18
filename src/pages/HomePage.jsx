import { useState } from "react";
import { Link } from "react-router-dom";


export default function HomePage() {

    const viaggi = [
        {
            id: 1,
            destinazione: "Parigi",
            dataInizio: "2026-03-10",
            dataFine: "2026-03-15",
            viaggiatori: [
                {
                    id: 1,
                    nome: "Mario",
                    cognome: "Rossi",
                    telefono: "3331234567",
                    email: "mario.rossi@email.it",
                    codiceFiscale: "RSSMRA80A01H501U",
                },
                {
                    id: 3,
                    nome: "Anna",
                    cognome: "Verdi",
                    telefono: "3353456789",
                    email: "anna.verdi@email.it",
                    codiceFiscale: "VRDNNA90C23G273K",
                },
            ],
        },
        {
            id: 2,
            destinazione: "Londra",
            dataInizio: "2026-04-01",
            dataFine: "2026-04-05",
            viaggiatori: [
                {
                    id: 2,
                    nome: "Luigi",
                    cognome: "Bianchi",
                    telefono: "3342345678",
                    email: "luigi.bianchi@email.it",
                    codiceFiscale: "BNCLGU85B12F205Z",
                },
            ],
        },
        {
            id: 3,
            destinazione: "Barcellona",
            dataInizio: "2025-12-11",
            dataFine: "2025-12-27",
            viaggiatori: [
                {
                    id: 4,
                    nome: "Giulia",
                    cognome: "Neri",
                    telefono: "3364567890",
                    email: "giulia.neri@email.it",
                    codiceFiscale: "NERGLI95D34L219P",
                },
                {
                    id: 6,
                    nome: "Sara",
                    cognome: "Galli",
                    telefono: "3386789012",
                    email: "sara.galli@email.it",
                    codiceFiscale: "GLLSRA92F56D612Q",
                },
                {
                    id: 8,
                    nome: "Elena",
                    cognome: "Romano",
                    telefono: "3208901234",
                    email: "elena.romano@email.it",
                    codiceFiscale: "RMNLNE91H78I726A",
                },
            ],
        },
        {
            id: 4,
            destinazione: "New York",
            dataInizio: "2025-12-10",
            dataFine: "2025-12-21",
            viaggiatori: [
                {
                    id: 5,
                    nome: "Paolo",
                    cognome: "Conti",
                    telefono: "3375678901",
                    email: "paolo.conti@email.it",
                    codiceFiscale: "CNTPLA88E45M082R",
                },
                {
                    id: 7,
                    nome: "Marco",
                    cognome: "De Luca",
                    telefono: "3397890123",
                    email: "marco.deluca@email.it",
                    codiceFiscale: "DLCMRC87G67E472S",
                },
            ],
        },
        {
            id: 5,
            destinazione: "Tokyo",
            dataInizio: "2025-12-11",
            dataFine: "2025-12-28",
            viaggiatori: [
                {
                    id: 9,
                    nome: "Davide",
                    cognome: "Ferrari",
                    telefono: "3219012345",
                    email: "davide.ferrari@email.it",
                    codiceFiscale: "FRRDVD84I89A944B",
                },
            ],
        },
        {
            id: 6,
            destinazione: "Roma",
            dataInizio: "2025-12-18",
            dataFine: "2025-12-20",
            viaggiatori: [
                {
                    id: 10,
                    nome: "Francesca",
                    cognome: "Esposito",
                    telefono: "3220123456",
                    email: "francesca.esposito@email.it",
                    codiceFiscale: "SPSFNC93L90F839C",
                },
                {
                    id: 11,
                    nome: "Andrea",
                    cognome: "Ricci",
                    telefono: "3231234567",
                    email: "andrea.ricci@email.it",
                    codiceFiscale: "RCCNDR86M01H224D",
                },
                {
                    id: 12,
                    nome: "Valentina",
                    cognome: "Marini",
                    telefono: "3242345678",
                    email: "valentina.marini@email.it",
                    codiceFiscale: "MRNVTN97N12C351E",
                },
            ],
        },
        {
            id: 7,
            destinazione: "Amsterdam",
            dataInizio: "2025-12-15",
            dataFine: "2025-12-21",
            viaggiatori: [
                {
                    id: 13,
                    nome: "Stefano",
                    cognome: "Costa",
                    telefono: "3253456789",
                    email: "stefano.costa@email.it",
                    codiceFiscale: "CSTSFN82P23L736F",
                },
                {
                    id: 14,
                    nome: "Chiara",
                    cognome: "Rinaldi",
                    telefono: "3264567890",
                    email: "chiara.rinaldi@email.it",
                    codiceFiscale: "RNLCHR94Q34R788G",
                },
            ],
        },
        {
            id: 8,
            destinazione: "Catania",
            dataInizio: "2025-12-17",
            dataFine: "2025-12-18",
            viaggiatori: [
                {
                    id: 15,
                    nome: "Alessandro",
                    cognome: "Moretti",
                    telefono: "3275678901",
                    email: "alessandro.moretti@email.it",
                    codiceFiscale: "MRTLSS89R45S935H",
                },
            ],
        },
    ];

    const paramsId = 1

    const filter = viaggi.filter(items => (
        items.id == paramsId


    ))
    const [trip, setTrip] = useState(filter)



    function handleTrash(i) {
        const removeTrip = trip.filter((element, index) => index !== i)
        console.log(trip);


        setTrip(removeTrip)
    }

    return (
        <div className="container">
            <div className="row p-3">
                <div className="col-lg-8 col-sm-12">
                    <div className="d-flex justify-content-between mb-3">
                        <h2 className="fs-3">Rubrica Viaggiatori</h2>
                        <Link className="btn btn-primary">Aggiungi Viaggiatore</Link>
                    </div>
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th scope="col">Nome</th>
                                <th scope="col" className="d-none d-md-table-cell">Cognome</th>
                                <th scope="col">Azioni</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                trip[0].viaggiatori.map((viaggiatore, i) => (
                                    <>
                                        {console.log(i)
                                        }
                                        <tr key={viaggiatore.codiceFiscale}>
                                            <td>{viaggiatore.nome}</td>
                                            <td className="d-none d-md-table-cell">{viaggiatore.cognome}</td>
                                            <td className="log">
                                                <Link>
                                                    <button type="button" className="eye btn btn-outline-primary">
                                                        <i className="bi bi-eye-fill"></i>
                                                    </button>
                                                </Link>
                                                <button className="btn btn-outline-danger mx-2" onClick={() => handleTrash(i)}>
                                                    <i className="bi bi-trash-fill"></i>
                                                </button>
                                            </td>
                                        </tr></>
                                ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}