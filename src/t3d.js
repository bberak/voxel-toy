const _ = require("lodash");

const box = ({ x, y, z, offsetX, offsetY, offsetZ, name }) => {
   return `
      Begin Actor Class=Brush Name=${name} Archetype=Brush'/Script/Engine.Default__Brush'
         Begin Object Class=CubeBuilder Name="CubeBuilder_0"
         End Object
         Begin Object Class=Polys Name="Polys_0"
         End Object
         Begin Brush Name=Model_0
         End Brush
         Begin Object Class=BrushComponent Name="BrushComponent0" Archetype=BrushComponent'Default__Brush:BrushComponent0'
         End Object
         Begin Object Name="CubeBuilder_0"
            Vertices(0)=(X=-${offsetX},Y=-${offsetY},Z=-${offsetZ})
            Vertices(1)=(X=-${offsetX},Y=-${offsetY},Z=${offsetZ})
            Vertices(2)=(X=-${offsetX},Y=${offsetY},Z=-${offsetZ})
            Vertices(3)=(X=-${offsetX},Y=${offsetY},Z=${offsetZ})
            Vertices(4)=(X=${offsetX},Y=-${offsetY},Z=-${offsetZ})
            Vertices(5)=(X=${offsetX},Y=-${offsetY},Z=${offsetZ})
            Vertices(6)=(X=${offsetX},Y=${offsetY},Z=-${offsetZ})
            Vertices(7)=(X=${offsetX},Y=${offsetY},Z=${offsetZ})
            Polys(0)=(VertexIndices=(0,1,3,2),Direction=1)
            Polys(1)=(VertexIndices=(2,3,7,6),Direction=1)
            Polys(2)=(VertexIndices=(6,7,5,4),Direction=1)
            Polys(3)=(VertexIndices=(4,5,1,0),Direction=1)
            Polys(4)=(VertexIndices=(3,1,5,7),Direction=1)
            Polys(5)=(VertexIndices=(0,2,6,4),Direction=1)
            Layer="Cube"
         End Object
         Begin Object Name="Polys_0"
         End Object
         Begin Object Name="BrushComponent0"
            Brush=Model'Model_0'
            RelativeLocation=(X=-${x},Y=${y},Z=${z})
         End Object
         BrushType=Brush_Add
         bNotForClientOrServer=True
         Begin Brush Name=Model_0
            Begin PolyList
               Begin Polygon
                  Origin -${offsetX},-${offsetY},-${offsetZ}
                  Normal -1,+0,+0
                  TextureU +0,+1,+0
                  TextureV +0,+0,-1
                  Vertex -${offsetX},-${offsetY},-${offsetZ}
                  Vertex -${offsetX},-${offsetY},+${offsetZ}
                  Vertex -${offsetX},+${offsetY},+${offsetZ}
                  Vertex -${offsetX},+${offsetY},-${offsetZ}
               End Polygon
               Begin Polygon
                  Origin -${offsetX},+${offsetY},-${offsetZ}
                  Normal +0,+1,+0
                  TextureU +1,-0,+0
                  TextureV +0,+0,-1
                  Vertex -${offsetX},+${offsetY},-${offsetZ}
                  Vertex -${offsetX},+${offsetY},+${offsetZ}
                  Vertex +${offsetX},+${offsetY},+${offsetZ}
                  Vertex +${offsetX},+${offsetY},-${offsetZ}
               End Polygon
               Begin Polygon
                  Origin +${offsetX},+${offsetY},-${offsetZ}
                  Normal +1,+0,+0
                  TextureU +0,-1,+0
                  TextureV +0,+0,-1
                  Vertex +${offsetX},+${offsetY},-${offsetZ}
                  Vertex +${offsetX},+${offsetY},+${offsetZ}
                  Vertex +${offsetX},-${offsetY},+${offsetZ}
                  Vertex +${offsetX},-${offsetY},-${offsetZ}
               End Polygon
               Begin Polygon
                  Origin +${offsetX},-${offsetY},-${offsetZ}
                  Normal +0,-1,+0
                  TextureU -1,-0,-0
                  TextureV +0,+0,-1
                  Vertex +${offsetX},-${offsetY},-${offsetZ}
                  Vertex +${offsetX},-${offsetY},+${offsetZ}
                  Vertex -${offsetX},-${offsetY},+${offsetZ}
                  Vertex -${offsetX},-${offsetY},-${offsetZ}
               End Polygon
               Begin Polygon
                  Origin -${offsetX},+${offsetY},+${offsetZ}
                  Normal +0,+0,+1
                  TextureU +1,+0,+0
                  TextureV +0,+1,+0
                  Vertex -${offsetX},+${offsetY},+${offsetZ}
                  Vertex -${offsetX},-${offsetY},+${offsetZ}
                  Vertex +${offsetX},-${offsetY},+${offsetZ}
                  Vertex +${offsetX},+${offsetY},+${offsetZ}
               End Polygon
               Begin Polygon
                  Origin -${offsetX},-${offsetY},-${offsetZ}
                  Normal +0,+0,-1
                  TextureU +1,+0,+0
                  TextureV +0,-1,+0
                  Vertex -${offsetX},-${offsetY},-${offsetZ}
                  Vertex -${offsetX},+${offsetY},-${offsetZ}
                  Vertex +${offsetX},+${offsetY},-${offsetZ}
                  Vertex +${offsetX},-${offsetY},-${offsetZ}
               End Polygon
            End PolyList
         End Brush
         Brush=Model'Model_0'
         BrushComponent=BrushComponent0
         BrushBuilder=CubeBuilder'CubeBuilder_0'
         SpawnCollisionHandlingMethod=AlwaysSpawn
         RootComponent=BrushComponent0
         ActorLabel="${name}"
         FolderPath="VoxelToyGeometry"
      End Actor
   `;
};

const merge = (voxels, axis) => {
   const lastIdx = voxels.length - 1;
   const last = voxels[lastIdx];

   return Object.assign(last, {
      x: (voxels[0].x + voxels[lastIdx].x) * 0.5,
      y: (voxels[0].y + voxels[lastIdx].y) * 0.5,
      z: (voxels[0].z + voxels[lastIdx].z) * 0.5,
      [`side${axis.toUpperCase()}`]: voxels[lastIdx][axis] - voxels[0][axis] + 1
   });
};

const compress = (voxels, axis, canMerge = (a, b) => true) => {
   const groups = _.groupBy(voxels, vox =>
      ["x", "y", "z"]
         .filter(k => k != axis)
         .map(k => vox[k])
         .join("-")
   );
   const results = [];

   Object.keys(groups).forEach(key => {
      const sorted = _.sortBy(groups[key], vox => vox[axis]);
      const mergeable = _.reduce(
         sorted,
         (acc, current) => {
            const arr = acc[acc.length - 1];
            const previous = arr[arr.length - 1];

            if (!previous) arr.push(current);
            else if (
               current[axis] - previous[axis] == 1 &&
               canMerge(previous, current)
            )
               arr.push(current);
            else acc.push([current]);
            return acc;
         },
         [[]]
      );

      mergeable.forEach(arr => results.push(merge(arr, axis)));
   });

   return results;
};

const convertToT3D = (voxelData, size = 200, compressionFlag = true) => {
   let voxels = voxelData.children.find(x => x.id == "XYZI").data.values;

   voxels = voxels.map(vox => Object.assign(vox, { sideX: 1, sideY: 1, sideZ: 1}));

   if (compressionFlag) {
      voxels = compress(voxels, "z");
      voxels = compress(voxels, "y", (a, b) => a.sideZ == b.sideZ);
      voxels = compress(voxels, "x", (a, b) => a.sideZ == b.sideZ && a.sideY == b.sideY);
   }
   
   const boxes = voxels.map((vox, idx) =>
      box({
         x: vox.x * size,
         y: vox.y * size,
         z: vox.z * size,
         offsetX: vox.sideX * size * 0.5,
         offsetY: vox.sideY * size * 0.5,
         offsetZ: vox.sideZ * size * 0.5,
         name: `Box${idx}`
      })
   );

   return `
      Begin Map
      Begin Level
      ${boxes.join("\n")}
      End Level
      End Map
   `.trim();
};

module.exports = {
   convertToT3D
};
