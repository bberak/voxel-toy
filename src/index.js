#!/usr/bin/env node

const args = require("args");
const { splash, question, abolsutePath, changeExtension, readBuffer, writeText, matches } = require("./utils");
const assert = require("assert");
const parseVoxels = require("vox-reader");
const { convertToT3D } = require("./t3d");

async function main() {	
	splash();
	
	args
		.option("file", "The path to the .vox file")
		.option("size", "The size of each individual voxel in UE4 units")
		.option("compress", "Merge individual voxels into larger blocks where possible");

	const flags = args.parse(process.argv);

	const file = flags.file || (await question("Where is the .vox file?"));
	const size = flags.size || (await question("What is the size of each individual voxel in UE4 units? [200]")) || 200;
	const compress = flags.compress || matches(["y", "yes", "t", "true", ""], await question("Should individual voxels be merged into larger blocks? [Y/n]"));

	assert(file, "file must be provided");

	const voxFile = abolsutePath(file);
	const voxBuffer = await readBuffer(voxFile);
	const voxelData = parseVoxels(voxBuffer);
	const t3dText = convertToT3D(voxelData, size, compress);
	const t3dFile = changeExtension(voxFile, ".t3d");

	await writeText(t3dFile, t3dText);

	console.log("...");
	console.log(`Output: ${t3dFile}`);
}

main().catch(console.error);
