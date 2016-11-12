window.onload = function () {

	emulateTyping("p", "Hello! My name is John!")
	.then(() => {
		return emulateTyping("p", "This website is currently under development!");
	})
	.then(() => {
		return emulateTyping("p", "See you soon!");
	});
	


	function emulateTyping(el, words) {
		var $el = document.createElement(el);
		var body = document.querySelector('body');
		body.append($el);

		return new Promise((resolve, reject) => {
			typeLetter($el, words, 0, resolve);
		});
		
	}

	function typeLetter(el, words, index, resolve) {
		var timeoutId = setTimeout(function () {
			if(words.length === index) {
				return resolve(clearTimeout(timeoutId));
			}

			el.append(words[index]);

			return typeLetter(el, words, index + 1, resolve);
		}, 25);
	}
};