// console.dir(process)
console.dir(process.argv)
function getNames(){
	// console.dir(process.argv.slice(2));
	return process.argv.slice(2);
}

module.exports.getNames = getNames