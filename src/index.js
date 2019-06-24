const args = require("args");
const { question, abolsutePath, changeExtension, readBuffer } = require("./utils");
const assert = require("assert");
const parseVoxels = require("vox-reader");

async function main() {
	args
		.option("input", "The path to the input .vox file")
		.option("scale", "The scale of each individual voxel when converted to a UE4 box geometry (default 100)")

	const flags = args.parse(process.argv);

	const input = flags.input || (await question("Where is the .vox file?"));
	const scale = flags.scale || (await question("What is the scale of each individual voxel in UE4 units?")) || 100;

	assert(input, "input must be provided");

	const voxFile = abolsutePath(input);
	const t3dFile = changeExtension(voxFile, ".t3d");

	console.log({
		voxFile,
		t3dFile,
		scale
	})

	const voxBuffer = readBuffer(voxFile);
	const voxels = parseVoxels(voxBuffer);
}

main().catch(console.error);
