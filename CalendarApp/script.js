const date = new Date();

var dates = 
[{"user_id":1596113258,"vacation_end":"2020-08-03","vacation_start":"2020-08-01"},
{"user_id":1596113258,"vacation_end":"2020-08-08","vacation_start":"2020-08-06"},
{"user_id":1596113258,"vacation_end":"2020-08-07","vacation_start":"2020-08-01"},
{"user_id":1596113258,"vacation_end":"2020-08-05","vacation_start":"2020-08-01"},
{"user_id":1596113258,"vacation_end":"2020-08-04","vacation_start":"2020-08-01"}];

dates.forEach(function(obj) {
    var tr = document.createElement("TR");
    var td_user = tr.appendChild(document.createElement("TD"));
    var td_start = tr.appendChild(document.createElement("TD"));
    var td_end = tr.appendChild(document.createElement("TD"));
    td_user.innerHTML = 'User id : ' + obj.user_id + "</br>";
    td_start.innerHTML = 'Vacation start : ' + obj.vacation_start;
    td_end.innerHTML = 'Vacation end : ' + obj.vacation_end;
    document.getElementById("demo").appendChild(tr);
    //document.getElementById('demo').innerHTML += "</br>" + 'User id : ' + obj.user_id + "</br>"+' Vacation start : ' + obj.vacation_start +  "</br>"+' Vacation end : ' + obj.vacation_end + "</br>";
  })

function getStartEnd(dates){
    dates.array.forEach(element => {
        
    });
}

const renderCalendar = () => {
    date.setDate(1);
    const monthDays = document.querySelector('.days');
    const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
    const firstDayIndex = date.getDay();
    const lastDayIndex = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDay();
    const prevLastDay = new Date(date.getFullYear(), date.getMonth(), 0).getDate();
    const nextDays = 7 - lastDayIndex - 1;
    var pocetak; 
    var kraj;

    console.log(firstDayIndex);
    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];

    document.querySelector('.date h1').innerHTML = months[date.getMonth()] + " " + date.getFullYear(); //displays current month
    document.querySelector('.date p').innerHTML = `Current date: ${new Date().toDateString()}`; //displays current day

    let days = "";
    for (let x = firstDayIndex; x > 0; x--) {
        days += `<div class="prev-date">${prevLastDay - x + 1}</div>`;
    }

    for (let i = 1; i <= lastDay; i++) {
        if (i === new Date().getDate() && date.getMonth() === new Date().getMonth()) {
            days += `<div class="today">${i}</div>`;
        }
        else {
            pocetak = new Date(dates[0].vacation_start);
            kraj = new Date(dates[0].vacation_end);
            
            if(i >= pocetak.getDate() && i <= kraj.getDate()){
                days += `<div class="fromto">${i}</div>`;
            }else{
                days += `<div>${i}</div>`;
            }
            
        }
    }


    for (let j = 1; j <= nextDays; j++) {
        days += `<div class="next-date">${j}</div>`;
        monthDays.innerHTML = days;
    }
    
}

document.querySelector('.prev').addEventListener('click', () => {
    date.setMonth(date.getMonth() - 1);
    renderCalendar();
});

document.querySelector('.next').addEventListener('click', () => {
    date.setMonth(date.getMonth() + 1);
    renderCalendar();
});


renderCalendar();
