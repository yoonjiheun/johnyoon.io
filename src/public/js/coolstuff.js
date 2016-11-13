window.onload = function () {
	var rng = makeid();

	emulateTyping(rng);
};

function makeid()
{
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for( var i=0; i < 820; i++ )
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}

function emulateTyping(words) {

	return new Promise((resolve, reject) => {
		typeLetter(words, 0, resolve);
	});
	
}

function typeLetter(words, index, resolve) {
	var timeoutId = setTimeout(function () {
		if(words.length === index) {
			return resolve(clearTimeout(timeoutId));
		}
		var x = document.getElementById('code');

		x.append(words[index]);

		return typeLetter(words, index + 1, resolve);
	}, 1);
}