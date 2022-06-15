import express from 'express';

const server = express();

const holidays = [
  { month: '1', date: "1/1/2022", name: "Confraternização mundial" },
  { month: '1', date: "1/3/2022", name: "Carnaval" },
  { month: '4', date: "4/17/2022", name: "Páscoa" },
  { month: '4', date: "4/21/2022", name: "Tiradentes" },
  { month: '5', date: "5/1/2022", name: "Dia do trabalho" },
  { month: '6', date: "6/16/2022", name: "Corpus Christi" },
  { month: '9', date: "9/7/2022", name: "Independência do Brasil" },
  { month: '10', date: "10/12/2022", name: "Nossa Senhora Aparecida" },
  { month: '11', date: "11/2/2022", name: "Finados" },
  { month: '11', date: "11/15/2022", name: "Proclamação da República" },
  { month: '12', date: "12/25/2022", name: "Natal" }
]

const today = new Date();
let isHoliday = false;
let holidayName = null;

holidays.map(date => {
  if (today.toLocaleDateString === date.date) {
    isHoliday = true;
    holidayName = date.name;
  }
})

server.get('/holidays', (req, res) => {
  res.send(holidays);
})

server.get('/is-today-holiday', (req, res) => {
  if (isHoliday) res.send(`Sim, hoje é ${holidayName}`);
  else res.send("Não, hoje não é feriado");
})

  server.get('/holidays/:month', (req, res) => {
    const month = req.params.month;
    
    if (month === '2' || month === '3' || month === '7' || month === '8') {
      res.send("Não há feriados neste mês.");
    } else {
      holidays.map(holiday => {
        if(holiday.month === month) res.send(`${holiday.date} - ${holiday.name}`);
      })
    }
  })


server.listen(5050);