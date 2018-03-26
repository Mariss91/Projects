var Url="http://api.wunderground.com/api/e9ba6e1b4a8cfc5a/forecast10day/q/RS/Kragujevac.json";

function SwitchCity(){
    var city=document.getElementById('city').value;
    Url="http://api.wunderground.com/api/e9ba6e1b4a8cfc5a/forecast10day/q/RS/"+city+".json";
    PrikazVremena();
}

function PrikazVremena() {
    var TimeList=getServiceData(Url).forecast.simpleforecast.forecastday;  // drugi servis zato nema value, ima reponse i forecast
    var dan=document.getElementById("calendar").value;
        for(var i in TimeList) {
            if (TimeList[i].date.pretty.includes(dan)) {
                document.getElementById("danasnjiDan").innerHTML="Temperatura : " + TimeList[i].high.celsius + "C";
                document.getElementById("myImg").src=TimeList[i].icon_url;
            }
        }
    }

 function getServiceData(url, username, password) {
            try {
                var result;
                var xmlhttp = new XMLHttpRequest();
                xmlhttp.onreadystatechange = function () {
                    if (xmlhttp.readyState == 4) {
                        if (xmlhttp.status == 200) {
                            result = JSON.parse(xmlhttp.response);
                        }
                        else {
                            return false;
                        }
                    }
                }
                xmlhttp.open("GET", url, false, username, password);
                xmlhttp.send();
                return result;
            }
            catch (err) {
                return err;
            }
        }

        
        $(document).ready(function(){
            $("#calendar").datepicker({
               minDate: new Date(), 
               maxDate: "+9D",
               dateFormat:'MM dd, yy'
            });
        });

