const args = require("args");

const question = str => {
	const rl = readline.createInterface({
		input: process.stdin,
		output: process.stdout
	});

	return new Promise(resolve => {
		rl.question(str, resolve);
	}).then(answer => {
		rl.close();
		return answer;
	});
};

async function main() {
	args.option("input", "The path to the input .vox file");

	const flags = args.parse(process.argv);

	console.log(flags);
}

main().catch(console.error);
