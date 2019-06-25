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
		.option("scale", "The scale of each individual voxel when converted to a UE4 box geometry");

	const flags = args.parse(process.argv);

	const input = flags.input || (await question("Where is the .vox file?"));
	const scale = flags.scale || (await question("What is the scale of each individual voxel in UE4 units?")) || 100;

	assert(input, "input must be provided");

	const voxFile = abolsutePath(input);
	const voxBuffer = await readBuffer(voxFile);
	const voxels = parseVoxels(voxBuffer);
	const t3dText = convertToT3D(voxels, scale);
	const t3dFile = changeExtension(voxFile, ".t3d");

	await writeText(t3dFile, t3dText);
}

main().catch(console.error);
