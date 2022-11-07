var prefilled = window.location.href + "?usp=pp_url";
document.querySelectorAll('form > div:nth-child(1) > div input:not([value=""])').forEach(elem => prefilled += "&" + elem.name + "=" + encodeURI(elem.value));
var DataURL = "%3Chtml%3E%3Cmeta%20http-equiv%3D%22refresh%22%20content%3D%220%3BURL%3D%27" + encodeURI(prefilled) + "%27%22%20%2F%3E%3C%2Fhtml%3E";
var anchor = document.createElement("a");
anchor.href = "data:text/plain;charset=utf-8," + DataURL;
anchor.download = document.querySelector("title").innerHTML + ".html";
anchor.click();
