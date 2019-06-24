const { writeString } = require("./utils");

const convertToT3D = voxels => {
	const sizes = voxels.children.find(x => x.id == "SIZE");
	const locations = voxels.children.find(x => x.id == "XYZI");
	const colors = voxels.children.find(x => x.id == "RGBA");

	console.log(sizes);
	console.log(locations.data.values[2]);
	console.log(colors.data.values[2]);

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