function defaultDates(){
    let today =  new Date();
    let Day = today.getDate();
    let Month = today.getMonth()+1;
    let Year = today.getFullYear();
    if(Month.toString().length == 1){
        Month = "0"+Month;
    }
    if(Day.toString().length == 1){
        Day = "0"+Day;
    }
    currentDate = Year+"-"+Month+"-"+Day;
    document.getElementById("eventDates").value = currentDate;
    document.getElementById("eventDates2").value = currentDate;
    document.getElementById("postingDate").value = currentDate;
    document.getElementById("eventDates").min = currentDate;
    document.getElementById("eventDates2").min = currentDate;
    document.getElementById("postingDate").min = currentDate;
}

function saveForm(){
    let eventType = document.getElementById("eventType").value;
    let eventTitle = document.getElementById("eventTitle").value;
    let eventDates = document.getElementById("eventDates").value;
    let eventDates2 = document.getElementById("eventDates2").value;
    let postingDate = document.getElementById("postingDate").value;

    let today =  new Date();
    let Day = today.getDate();
    let Month = today.getMonth()+1;
    let Year = today.getFullYear();
    currentDate = Year+"-"+Month+"-"+Day;

    var date1Split = eventDates.split("-");
    var date1Month = parseInt(date1Split[1]);
    var date1Day = parseInt(date1Split[2]);
    var eventDate1String = date1Split[0]+"-"+date1Month+"-"+date1Day;

    var date2Split = eventDates2.split("-");
    var date2Month = parseInt(date2Split[1]);
    var date2Day = parseInt(date2Split[2]);
    var eventDate2String = date2Split[0]+"-"+date2Month+"-"+date2Day;

    var postDateSplit = postingDate.split("-");
    var postMonth = parseInt(postDateSplit[1]);
    var postDay = parseInt(postDateSplit[2]);
    var postingDateString = postDateSplit[0]+"-"+postMonth+"-"+postDay;

    if(eventType === "default"){
        alert("Please select Event Type.")
    }else if(eventTitle === ""){
        alert("Please enter Event Title.")
    }else if(eventDate1String == currentDate){
        alert("Please select a Start date later than today.")
    }else if(eventDate2String == currentDate){
        alert("Please select an End date later than today.")
    }else if(postingDateString == eventDate1String || postingDateString == eventDate2String){
        alert("Please select an earlier Posting Date.")
    }else{
        alert("EVENT HAS BEEN CREATED!")
    }

}