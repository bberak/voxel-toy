# Voxel Toy

Tool for converting .vox files to other useful formats

## Installation

```
npm install -g voxel-toy
```

## Usage

### Convert .vox file to .t3d

```
vox -i /path/to/file.vox
```

### Paste .t3d into Unreal Engine 4

Once the .t3d file has been generated, open the file in a text editor and copy the entire contents. Open UE4 and paste the contents into the scene editor.

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
pkg -t node8-macos-x64 src/index.js
```

Create a Windows executable:

```
pkg -t node8-win-x64 src/index.js
```