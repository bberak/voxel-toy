const { writeString } = require("./utils");

const convertToT3D = voxels => {
	return "OOOOPS - NOT DONE"
};

const writeVoxels = (file, voxels) => {
	const data = convertToT3D(voxels);

	return writeString(file, data);
};

module.exports = {
	convertToT3D,
	writeVoxels
}