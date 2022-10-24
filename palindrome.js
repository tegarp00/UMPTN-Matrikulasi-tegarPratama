function run(input) {
	let valInput = input.split('/').join('').replace(/\s/g, '').replace(/,/g, "")

	for(let i=0; i<valInput.length; i++) {
		let iAwal = i
		let iAkhir = valInput.length-i-1

		if(valInput.charAt(iAwal) !== valInput.charAt(iAkhir)) {
			return "kata yg dimasukkan bukan palindrome"
		}
		
	}

	return "kata ini palindrome"
}

console.log(run("kodok"))
