
let xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    let data = JSON.parse(this.responseText);

console.log(data.values.length)
    let i;
    for (i = 0; i < data.values.length; i++) {
      let date = data.values[i][0];
      let position = data.values[i][1];
      let firstname = data.values[i][2];
      let lastname = data.values[i][3];
      let trial = data.values[i][4];
      let status = data.values[i][5];
      let number = data.values[i][8];
      let forum = data.values[i][10];
      if  (status == undefined)
      {
        status = "Pending"
      }
      if  (status == "")
      {
        status = "Pending"
      }
      if (trial =="FALSE"){
        trial = "Non Trial"
      }
      if (trial ==""){
        trial = "Non Trial"
      }
      if (trial == undefined){
        trial = "Non Trial"
      }
      if (trial =="TRUE"){
        trial = "On Trial"
      }
      let tempv ="";
      if(status == "Hired")
      {
         tempv = "<span class=\"badge badge-success\">"
      }
      if(status == "Interview Rejected")
      {
        tempv = "<span class=\"badge badge-secondary\">"
      }
      if(status == "Written Application Rejected")
      {
        tempv = "<span class=\"badge badge-secondary\">"
      }
      if(status == "Written Application Accepted")
      {
        tempv = "<span class=\"badge badge-warning\">"
      }
      if(status == "Interview Conducted")
      {
        tempv = "<span class=\"badge badge-warning\">"
      }
      if(status == "Interview Scheduled")
      {
        tempv = "<span class=\"badge badge-warning\">"
      }
      if(status == "Pending")
      {
        tempv = "<span class=\"badge badge-warning\">"
      }
      if(status == "Written Application Reviewed")
      {
        tempv = "<span class=\"badge badge-warning\">"
      }
      document.getElementById("table").innerHTML +=
      "<tr>" +
        "<td>" +
          date +
        "</td>" +
        "<td>" +
          position +
        "</td>" +
        "<td>" +
          firstname +
          "</td>" +
        "<td>" +
          lastname +
          "</td>" +
        "<td>" +
          trial +
          "</td>" +
        "<td>" +
        tempv + status +"</span>" +
        "</td>" +
        "<td>" +
        number +
        "</td>" +
        "<td>" +
        forum +
        "</td>" +
        "</tr>";
    }
  }
};

xmlhttp.open(
  "GET",
  "https://sheets.googleapis.com/v4/spreadsheets/1BBf2GeYL9dYld5zxVLWhd2-4-5shUu4VmTrcPwRtdm4/values/E58:O?key=AIzaSyCEMpMgfsDLIXeynaOofQp9PeVMTloBpFk",
  true
);
xmlhttp.send();

function apps(){
    window.location.href = "https://docs.google.com/spreadsheets/d/1BBf2GeYL9dYld5zxVLWhd2-4-5shUu4VmTrcPwRtdm4/edit?usp=sharing";
}
function apps_ops(){
  window.location.href = "https://docs.google.com/spreadsheets/d/17_N_gIwJo5FpjMhWx8iOLXSiiVw8qjg5mLnrkCUGeaw/edit#gid=0";
}











let tempv2 = "";
let xmlhttp2 = new XMLHttpRequest();
xmlhttp2.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    let data = JSON.parse(this.responseText);

    let i;
    for (i = 0; i < data.values.length; i++) {
      let date2 = data.values[i][0];
      let position2 = data.values[i][1];
      let firstname2 = data.values[i][2];
      let lastname2 = data.values[i][3];
      let number2 = data.values[i][4];
      let status2 = data.values[i][7];
      let inducted2 = data.values[i][8];
      let staffid2 = data.values[i][9];
      let manager2 = data.values[i][11];

      if(staffid2 == undefined)
      {
        staffid2 = "N/A"
      }
      if(manager2 == undefined)
      {
        manager2 = "N/A"
      }
            if(inducted2 == undefined || inducted2 == "")
      {
        inducted2 = "No"
      }
      if(status2 == undefined)
      {
        status2 = "Pending"
      }
      if(status2 == "Application Rejected")
      {
        tempv2 = "<span class=\"badge badge-secondary\">"
      }
      if(status2 == "Pending")
      {
        tempv2 = "<span class=\"badge badge-warning\">"
      }
      if(status2 == "Hired")
      {
        tempv2 = "<span class=\"badge badge-success\">"
      }

      document.getElementById("table-ops").innerHTML +=
      "<tr>" +
        "<td>" +
        date2 +
        "</td>" +
        "<td>" +
        position2 +
        "</td>" +
        "<td>" +
        firstname2 +
          "</td>" +
        "<td>" +
        lastname2 +
          "</td>" +
        "<td>" +
        number2 +
          "</td>" +
        "<td>" +
        tempv2 + status2 +"</span>" +
        "</td>" +
        "<td>" +
        inducted2 +
        "</td>" +
        "<td>" +
        manager2 +
        "</td>" +
        "<td>" +
        staffid2 +
        "</td>" +
        "</tr>";
    }
  }
};

xmlhttp2.open(
  "GET",
  "https://sheets.googleapis.com/v4/spreadsheets/17_N_gIwJo5FpjMhWx8iOLXSiiVw8qjg5mLnrkCUGeaw/values/E6:P?key=AIzaSyCEMpMgfsDLIXeynaOofQp9PeVMTloBpFk",
  true
);
xmlhttp2.send();
