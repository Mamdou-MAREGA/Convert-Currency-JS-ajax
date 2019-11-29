function print(){

	var from = document.getElementById('from').value;
	var to = document.getElementById('to').value;
	console.log(from); console.log(to);

	var ajaxhttp = new XMLHttpRequest();
	var url ="http://data.fixer.io/api/latest?access_key=acf9728c0dd521987463443f51f30c45&symbols="
	+from+","+to;
	//console.log(url);
    ajaxhttp.open("GET", url, true);
    ajaxhttp.send();

    ajaxhttp.onreadystatechange = function() {
	    if (ajaxhttp.readyState == 4 && ajaxhttp.status == 200) {
	        //console.log(ajaxhttp);
	        //ici on récupere les données en forme de json
	        var result = JSON.parse(ajaxhttp.responseText);
	       // console.log(result);
	        var cbase = result.rates[to]/result.rates[from];
	        console.log(cbase);
	        var fromAmount = document.getElementById('fromAmount').value;
	        document.getElementById('toAmount').value = (fromAmount*cbase).toFixed(2);

	    }
	}
}


