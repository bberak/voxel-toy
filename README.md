# Voxel Toy

Tool for converting .vox files to other useful formats

## Installation

```
npm install -g voxel-toy
```

Don't have NodeJS or NPM? Get it here: [https://nodejs.org](https://nodejs.org)

## Usage

### Convert .vox file to .t3d

```
vox -f /path/to/file.vox
```

### Paste .t3d into Unreal Engine 4

Once the .t3d file has been generated, open the file in a text editor and copy the entire contents. Open UE4 and paste the contents into the scene editor.

## Options

`-c, --compress` Merge individual voxels into larger blocks where possible
`-f, --file` The path to the .vox file
`-s, --size` The size of each individual voxel in UE4 units

Example:

`vox -f /path/to/file.vox -s 200 -c true`

## Development

### Getting the source code

```
git clone https://github.com/bberak/voxel-toy
cd voxel-toy
npm install
node src/index.js
```

### Creating an executable

Install `pkg` globally:

```
npm install -g pkg
```

Create a MacOS executable:

```
pkg -t node8-macos-x64 -o vox .
```

Create a Windows executable:

```
pkg -t node8-win-x64 -o vox .
```