var prefilled = window.location.href + "?usp=pp_url";
document.querySelectorAll('form > div:nth-child(1) > div input:not([value=""])').forEach(elem => prefilled += "&" + elem.name + "=" + encodeURI(elem.value));
alert(prefilled);
