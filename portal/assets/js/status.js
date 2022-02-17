var affectedstatus = false;
let xmlhttp3 = new XMLHttpRequest();
xmlhttp3.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    let data = JSON.parse(this.responseText);
    let i;

    for (i = 0; i < data.values.length; i++) {
      let fault = data.values[i][1];
      let affected = data.values[i][0];

      if(fault == undefined){
        fault = ""
      }

      if(affected == "FALSE"){
        document.getElementById("pill"+i).innerHTML +=
        "<span class=\"badge bg-success rounded-pill\">"+
          "Operational" +
          fault+
        "</span>";
      }
      else{
        affectedstatus = true;
        document.getElementById("pill"+i).innerHTML +=
        "<span class=\"badge bg-danger rounded-pill\">"+
        "<i>"+
          "Affected: " +
          "</i>"+
          fault+
        "</span>";

    }
}
if(affectedstatus == true){
  document.getElementById("notifier").innerHTML +=
"<div class=\"alert alert-warning d-flex align-items-center\" role=\"alert\">" +
"<svg class=\"bi flex-shrink-0 me-2\" width=\"24\" height=\"24\" role=\"img\" aria-label=\"Warning:\"><use xlink:href=\"#exclamation-triangle-fill\"/></svg>"+
"<div>"+
  "Grid fault(s) detected, systems running at lower capacity."+
"</div>"+
"</div>";
} else{
  document.getElementById("notifier").innerHTML +=
  "<div class=\"alert alert-success d-flex align-items-center\" role=\"alert\">"+
  "<svg class=\"bi flex-shrink-0 me-2\" width=\"24\" height=\"24\" role=\"img\" aria-label=\"Success:\"><use xlink:href=\"#check-circle-fill\"/></svg>"+
  "<div>"+
    "No grid faults detected, all systems operational."
  "</div>"+
"</div>";
}
};
}
xmlhttp3.open(
  "GET",
  "https://sheets.googleapis.com/v4/spreadsheets/1lDo98-wEk2WbY6we4hW9UkPAD0mDgVqzyAoA5yDCp0E/values/Sheet3!A1:B10?key=AIzaSyCEMpMgfsDLIXeynaOofQp9PeVMTloBpFk",
  true
);
xmlhttp3.send();

