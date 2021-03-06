const readline = require("readline");
const path = require("path");
const fs = require("fs");
const msg = `
██╗   ██╗ ██████╗ ██╗  ██╗███████╗██╗  ████████╗ ██████╗ ██╗   ██╗
██║   ██║██╔═══██╗╚██╗██╔╝██╔════╝██║  ╚══██╔══╝██╔═══██╗╚██╗ ██╔╝
██║   ██║██║   ██║ ╚███╔╝ █████╗  ██║     ██║   ██║   ██║ ╚████╔╝ 
╚██╗ ██╔╝██║   ██║ ██╔██╗ ██╔══╝  ██║     ██║   ██║   ██║  ╚██╔╝  
 ╚████╔╝ ╚██████╔╝██╔╝ ██╗███████╗███████╗██║   ╚██████╔╝   ██║   
  ╚═══╝   ╚═════╝ ╚═╝  ╚═╝╚══════╝╚══════╝╚═╝    ╚═════╝    ╚═╝   
`;

const splash = () => {
	console.log(msg);
};

const question = str => {
	const rl = readline.createInterface({
		input: process.stdin,
		output: process.stdout
	});

	return new Promise(resolve => {
		rl.question(str.trim() + " ", resolve);
	}).then(answer => {
		rl.close();
		return answer;
	});
};

const abolsutePath = file => {
	return path.isAbsolute(file) ? file : path.join(process.cwd(), file);
};

const fileName = file => {
	const ext = path.extname(file);

	return path.basename(file, ext);
};

const changeExtension = (file, newExt) => {
	const originalExt = path.extname(file);

	return originalExt ? file.replace(originalExt, newExt) : file + newExt;
};

const readBuffer = file => {
	return new Promise((resolve, reject) => {
		fs.readFile(file, (error, buffer) => {
			if (error) reject(error);
			else resolve(buffer);
		});
	});
};

const writeText = (file, str) => {
	return new Promise((resolve, reject) => {
		fs.writeFile(file, str, err => {
			if (err) reject(err);
			else resolve();
		});
	});
};

const matches = (arr = [], val = "") => {
	return arr.indexOf(val.trim().toLowerCase()) > -1;
};

module.exports = {
	splash,
	question,
	abolsutePath,
	fileName,
	changeExtension,
	readBuffer,
	writeText,
	matches
};
