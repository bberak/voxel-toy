#!/usr/bin/env node

const args = require("args");
const { splash, question, abolsutePath, changeExtension, readBuffer, writeText } = require("./utils");
const assert = require("assert");
const parseVoxels = require("vox-reader");
const { convertToT3D } = require("./t3d");

async function main() {	
	splash();
	
	args
		.option("input", "The path to the input .vox file")
		.option("size", "The size of each individual voxel in UE4 units");

	const flags = args.parse(process.argv);

	const input = flags.input || (await question("Where is the .vox file?"));
	const size = flags.size || (await question("What is the size of each individual voxel in UE4 units?")) || 200;

	assert(input, "input must be provided");

	const voxFile = abolsutePath(input);
	const voxBuffer = await readBuffer(voxFile);
	const voxels = parseVoxels(voxBuffer);
	const t3dText = convertToT3D(voxels, size);
	const t3dFile = changeExtension(voxFile, ".t3d");

	await writeText(t3dFile, t3dText);

	console.log(`T3D file written: ${t3dFile}`)
}

main().catch(console.error);
