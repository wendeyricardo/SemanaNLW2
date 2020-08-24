const Database = require('sqlite-async')

const Database = require('./db')

Database.then((db) =>{
    //inserir dados

    proffy = {
        name:'Wendey Ricardo',
        avatar: 'https://avatars3.githubusercontent.com/u/19255651?s=460&u=ff2e2c668141dd7f52f1472a41c0ad555b8f7f2c&v=4',
        whatsapp: '912837012',
        bio: 'programador full stack jr'
    }
    
    classValue = {        
        subject: "Química",
        cost: "30"
    }

    classSchedule = [
        {
            weekday: 1,
            time_from: 720,
            time_to: 1220
        },
        {
            weekday: 0,
            time_from: 520,
            time_to: 1220
        },
    ]

    //consultar os dados inseridos
})