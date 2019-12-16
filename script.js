let d = new Date();
document.body.innerHTML = "<h1>Today's date is " + d + "</h1>"
var CHARACTER_SETS = [
			[true, "Numbers", "0123456789"],
			[true, "Lowercase", "abcdefghijklmnopqrstuvwxyz"],
			[false, "Uppercase", "ABCDEFGHIJKLMNOPQRSTUVWXYZ"],
			[false, "ASCII symbols", "!\"#$%" + String.fromCharCode(38) + "'()*+,-./:;" + String.fromCharCode(60) + "=>?@[\\]^_`{|}~"],
			[false, "Space", " "],
		];
			
		var passwordElem   = document.getElementById("password"   );
		var statisticsElem = document.getElementById("statistics" );
		var copyElem       = document.getElementById("copy-button")
		var cryptoObject    = null;
		var currentPassword = null;
		
		
		
		/*-- Initialization --*/
		
		function initCharsets() {
			function createElem(tagName, attribs) {
				var result = document.createElement(tagName);
				if (attribs !== undefined) {
					for (var key in attribs)
						result[key] = attribs[key];
				}
				return result;
			}
			
			var container = document.querySelector("#charset tbody");
			var endElem = document.querySelector("#charset tbody > tr:last-child");
			CHARACTER_SETS.forEach(function(entry, i) {
				var tr = createElem("tr");
				var td = tr.appendChild(createElem("td"));
				var input = td.appendChild(createElem("input", {
					type: "checkbox",
					checked: entry[0],
					id: "charset-" + i}));
				var td = tr.appendChild(createElem("td"));
				var label = td.appendChild(createElem("label", {
					htmlFor: "charset-" + i,
					textContent: " " + entry[1] + " "}));
				var small = label.appendChild(createElem("small", {
					textContent: "(" + entry[2] + ")"}));
				container.insertBefore(tr, endElem);
			});
		}
		
		
		function initCrypto() {
			var elem = document.getElementById("crypto-getrandomvalues-entropy");
			elem.textContent = "\u2717";  // X mark
			
			if ("crypto" in window)
				cryptoObject = crypto;
			else if ("msCrypto" in window)
				cryptoObject = msCrypto;
			else
				return;
			
			if (!("getRandomValues" in cryptoObject) || !("Uint32Array" in window) || typeof Uint32Array != "function")
				cryptoObject = null;
			else
				elem.textContent = "\u2713";
		}
		
		