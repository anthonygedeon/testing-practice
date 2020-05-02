
const caesar = function(string, shift) {
	const encrypt = string.replace(/\w/g, letter => {
		let letterToShift = ((((shift > 0 ? letter.toUpperCase().charCodeAt() - 65 : letter.toUpperCase().charCodeAt() + 65) + shift) % 26) + 65)
		return String.fromCharCode(letterToShift);
	});
	return encrypt.replace(/(?<=\w)[\w]/g, letter => letter.toLowerCase())
}


module.exports = caesar;