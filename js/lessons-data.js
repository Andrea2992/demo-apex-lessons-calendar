const lessons = [
    {
        date: '2024-10-04',
        lesson: 'PROGRAMMARE CON JAVASCRIPT',
        teacher: 'Trento Paolo',
        starting: '09:00',
        ending: '12:00'
    },
    {
        date: '2024-10-07',
        lesson: 'ORACLE APEX PROGRAMMING',
        teacher: 'Vega Sergio',
        starting: '09:30',
        ending: '13:30'
    },
    {
        date: '2024-10-08',
        lesson: 'PROGRAMMARE CON JAVASCRIPT',
        teacher: 'Trento Paolo',
        starting: '10:00',
        ending: '13:00'
    },
    {
        date: '2024-10-08',
        lesson: 'INTERFACCE WEB HTML E CSS',
        teacher: 'Fontanot Daniele',
        starting: '14:00',
        ending: '18:00'
    },
    {
        date: '2024-10-09',
        lesson: 'ORACLE APEX PROGRAMMING',
        teacher: 'Vega Sergio',
        starting: '09:30',
        ending: '13:30'
    },
    {
        date: '2024-10-10',
        lesson: 'INTERFACCE WEB HTML E CSS',
        teacher: 'Fontanot Daniele',
        starting: '14:00',
        ending: '18:00'
    },
    {
        date: '2024-10-11',
        lesson: 'WEB SERVICES E API',
        teacher: 'Vega Sergio',
        starting: '09:00',
        ending: '13:00'
    },
    {
        date: '2024-10-14',
        lesson: 'ORACLE APEX PROGRAMMING',
        teacher: 'Vega Sergio',
        starting: '09:30',
        ending: '13:30'
    },
    {
        date: '2024-10-15',
        lesson: 'INTERFACCE WEB HTML E CSS',
        teacher: 'Fontanot Daniele',
        starting: '14:00',
        ending: '17:00'
    },
    {
        date: '2024-10-16',
        lesson: 'ORACLE APEX PROGRAMMING',
        teacher: 'Vega Sergio',
        starting: '09:00',
        ending: '13:00'
    },
    {
        date: '2024-10-17',
        lesson: 'WEB SERVICES E API',
        teacher: 'Vega Sergio',
        starting: '09:00',
        ending: '13:00'
    },
    {
        date: '2024-10-18',
        lesson: 'WEB SERVICES E API',
        teacher: 'Vega Sergio',
        starting: '09:00',
        ending: '13:00'
    },
    {
        date: '2024-10-18',
        lesson: 'PROGRAMMAZIONE PL/SQL',
        teacher: 'Sonetto Paola',
        starting: '14:00',
        ending: '18:00'
    },
    {
        date: '2024-10-21',
        lesson: 'PROGRAMMAZIONE PL/SQL',
        teacher: 'Sonetto Paola',
        starting: '09:00',
        ending: '13:00'
    },
    {
        date: '2024-10-22',
        lesson: 'ORACLE APEX PROGRAMMING',
        teacher: 'Vega Sergio',
        starting: '09:30',
        ending: '13:30'
    },
    {
        date: '2024-10-22',
        lesson: 'INTERFACCE WEB HTML E CSS',
        teacher: 'Fontanot Daniele',
        starting: '14:00',
        ending: '17:00'
    },
    {
        date: '2024-10-23',
        lesson: 'ORACLE APEX PROGRAMMING',
        teacher: 'Vega Sergio',
        starting: '09:00',
        ending: '13:00'
    },
    {
        date: '2024-10-25',
        lesson: 'WEB SERVICES E API',
        teacher: 'Vega Sergio',
        starting: '09:00',
        ending: '13:00'
    },
    {
        date: '2024-10-28',
        lesson: 'ORACLE APEX PROGRAMMING',
        teacher: 'Vega Sergio',
        starting: '09:30',
        ending: '13:30'
    },
    {
        date: '2024-10-29',
        lesson: 'ORACLE APEX PROGRAMMING',
        teacher: 'Vega Sergio',
        starting: '09:00',
        ending: '13:00'
    },
    {
        date: '2024-10-30',
        lesson: 'WEB SERVICES E API',
        teacher: 'Vega Sergio',
        starting: '09:00',
        ending: '13:00'
    },
    {
        date: '2024-10-31',
        lesson: 'PROGRAMMAZIONE PL/SQL',
        teacher: 'Sonetto Paola',
        starting: '14:00',
        ending: '18:00'
    },
    {
        date: '2024-11-04',
        lesson: 'ORACLE APEX PROGRAMMING',
        teacher: 'Vega Sergio',
        starting: '09:30',
        ending: '13:30'
    },
    {
        date: '2024-11-06',
        lesson: 'ORACLE APEX PROGRAMMING',
        teacher: 'Vega Sergio',
        starting: '09:00',
        ending: '13:00'
    },
    {
        date: '2024-11-07',
        lesson: 'PROGRAMMAZIONE PL/SQL',
        teacher: 'Sonetto Paola',
        starting: '14:00',
        ending: '18:00'
    },
    {
        date: '2024-11-08',
        lesson: 'PROGRAMMAZIONE PL/SQL',
        teacher: 'Sonetto Paola',
        starting: '14:00',
        ending: '18:00'
    },
    {
        date: '2024-11-11',
        lesson: 'ORACLE APEX PROGRAMMING',
        teacher: 'Vega Sergio',
        starting: '09:30',
        ending: '13:30'
    },
    {
        date: '2024-11-15',
        lesson: 'ORACLE APEX PROGRAMMING',
        teacher: 'Vega Sergio',
        starting: '09:00',
        ending: '13:00'
    },
    {
        date: '2024-11-18',
        lesson: 'ORACLE APEX PROGRAMMING',
        teacher: 'Vega Sergio',
        starting: '09:30',
        ending: '13:30'
    },
    {
        date: '2024-11-20',
        lesson: 'ORACLE APEX PROGRAMMING',
        teacher: 'Vega Sergio',
        starting: '14:00',
        ending: '18:00'
    },
    {
        date: '2024-11-21',
        lesson: 'ORACLE APEX PROGRAMMING',
        teacher: 'Vega Sergio',
        starting: '09:00',
        ending: '13:00'
    },
    {
        date: '2024-11-22',
        lesson: 'ORACLE APEX PROGRAMMING',
        teacher: 'Vega Sergio',
        starting: '09:00',
        ending: '13:00'
    },
    {
        date: '2024-11-25',
        lesson: 'ORACLE APEX PROGRAMMING',
        teacher: 'Vega Sergio',
        starting: '09:30',
        ending: '13:30'
    },
    {
        date: '2024-11-26',
        lesson: 'ORACLE APEX PROGRAMMING',
        teacher: 'Vega Sergio',
        starting: '09:00',
        ending: '13:00'
    },
    {
        date: '2024-11-27',
        lesson: 'ORACLE APEX PROGRAMMING',
        teacher: 'Vega Sergio',
        starting: '09:00',
        ending: '13:00'
    },
    {
        date: '2024-11-28',
        lesson: 'ORACLE APEX PROGRAMMING',
        teacher: 'Vega Sergio',
        starting: '09:00',
        ending: '13:00'
    },
    {
        date: '2024-12-02',
        lesson: 'ORACLE APEX PROGRAMMING',
        teacher: 'Vega Sergio',
        starting: '09:00',
        ending: '13:00'
    },
    {
        date: '2024-12-03',
        lesson: 'ORACLE APEX PROGRAMMING',
        teacher: 'Vega Sergio',
        starting: '09:00',
        ending: '13:00'
    },
    {
        date: '2024-12-04',
        lesson: 'ORACLE APEX PROGRAMMING',
        teacher: 'Vega Sergio',
        starting: '09:00',
        ending: '13:00'
    },
    {
        date: '2024-12-05',
        lesson: 'ORACLE APEX PROGRAMMING',
        teacher: 'Vega Sergio',
        starting: '09:00',
        ending: '13:00'
    },
    {
        date: '2024-12-09',
        lesson: 'ORACLE APEX PROGRAMMING',
        teacher: 'Vega Sergio',
        starting: '09:00',
        ending: '13:00'
    },
    {
        date: '2024-12-10',
        lesson: 'ORACLE APEX PROGRAMMING',
        teacher: 'Vega Sergio',
        starting: '09:00',
        ending: '13:00'
    },
    {
        date: '2024-12-11',
        lesson: 'ORACLE APEX PROGRAMMING',
        teacher: 'Vega Sergio',
        starting: '09:00',
        ending: '13:00'
    }
]