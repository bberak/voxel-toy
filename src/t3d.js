const _ = require("lodash");

const box = ({ x, y, z, offsets, name }) => {
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
            Vertices(0)=(X=-${offsets[0]},Y=-${offsets[1]},Z=-${offsets[2]})
            Vertices(1)=(X=-${offsets[0]},Y=-${offsets[1]},Z=${offsets[2]})
            Vertices(2)=(X=-${offsets[0]},Y=${offsets[1]},Z=-${offsets[2]})
            Vertices(3)=(X=-${offsets[0]},Y=${offsets[1]},Z=${offsets[2]})
            Vertices(4)=(X=${offsets[0]},Y=-${offsets[1]},Z=-${offsets[2]})
            Vertices(5)=(X=${offsets[0]},Y=-${offsets[1]},Z=${offsets[2]})
            Vertices(6)=(X=${offsets[0]},Y=${offsets[1]},Z=-${offsets[2]})
            Vertices(7)=(X=${offsets[0]},Y=${offsets[1]},Z=${offsets[2]})
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
                  Origin -${offsets[0]},-${offsets[1]},-${offsets[2]}
                  Normal -1,+0,+0
                  TextureU +0,+1,+0
                  TextureV +0,+0,-1
                  Vertex -${offsets[0]},-${offsets[1]},-${offsets[2]}
                  Vertex -${offsets[0]},-${offsets[1]},+${offsets[2]}
                  Vertex -${offsets[0]},+${offsets[1]},+${offsets[2]}
                  Vertex -${offsets[0]},+${offsets[1]},-${offsets[2]}
               End Polygon
               Begin Polygon
                  Origin -${offsets[0]},+${offsets[1]},-${offsets[2]}
                  Normal +0,+1,+0
                  TextureU +1,-0,+0
                  TextureV +0,+0,-1
                  Vertex -${offsets[0]},+${offsets[1]},-${offsets[2]}
                  Vertex -${offsets[0]},+${offsets[1]},+${offsets[2]}
                  Vertex +${offsets[0]},+${offsets[1]},+${offsets[2]}
                  Vertex +${offsets[0]},+${offsets[1]},-${offsets[2]}
               End Polygon
               Begin Polygon
                  Origin +${offsets[0]},+${offsets[1]},-${offsets[2]}
                  Normal +1,+0,+0
                  TextureU +0,-1,+0
                  TextureV +0,+0,-1
                  Vertex +${offsets[0]},+${offsets[1]},-${offsets[2]}
                  Vertex +${offsets[0]},+${offsets[1]},+${offsets[2]}
                  Vertex +${offsets[0]},-${offsets[1]},+${offsets[2]}
                  Vertex +${offsets[0]},-${offsets[1]},-${offsets[2]}
               End Polygon
               Begin Polygon
                  Origin +${offsets[0]},-${offsets[1]},-${offsets[2]}
                  Normal +0,-1,+0
                  TextureU -1,-0,-0
                  TextureV +0,+0,-1
                  Vertex +${offsets[0]},-${offsets[1]},-${offsets[2]}
                  Vertex +${offsets[0]},-${offsets[1]},+${offsets[2]}
                  Vertex -${offsets[0]},-${offsets[1]},+${offsets[2]}
                  Vertex -${offsets[0]},-${offsets[1]},-${offsets[2]}
               End Polygon
               Begin Polygon
                  Origin -${offsets[0]},+${offsets[1]},+${offsets[2]}
                  Normal +0,+0,+1
                  TextureU +1,+0,+0
                  TextureV +0,+1,+0
                  Vertex -${offsets[0]},+${offsets[1]},+${offsets[2]}
                  Vertex -${offsets[0]},-${offsets[1]},+${offsets[2]}
                  Vertex +${offsets[0]},-${offsets[1]},+${offsets[2]}
                  Vertex +${offsets[0]},+${offsets[1]},+${offsets[2]}
               End Polygon
               Begin Polygon
                  Origin -${offsets[0]},-${offsets[1]},-${offsets[2]}
                  Normal +0,+0,-1
                  TextureU +1,+0,+0
                  TextureV +0,-1,+0
                  Vertex -${offsets[0]},-${offsets[1]},-${offsets[2]}
                  Vertex -${offsets[0]},+${offsets[1]},-${offsets[2]}
                  Vertex +${offsets[0]},+${offsets[1]},-${offsets[2]}
                  Vertex +${offsets[0]},-${offsets[1]},-${offsets[2]}
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
      [`side${axis}`]: voxels[lastIdx][axis] - voxels[0][axis] + 1
   });
};

const optimize = (voxels, axis, canMerge = (a, b) => true) => {
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
      mergeable.forEach(arr => results.push(merge(mergeable, axis)));
   });

   return results;
};

const convertToT3D = (voxelData, size = 200) => {
   let voxels = voxelData.children.find(x => x.id == "XYZI").data.values;

   voxels = optimize(voxels, "z");
   voxels = optimize(voxels, "y", (a, b) => a.sideZ == b.sideZ);
   voxels = optimize(
      voxels,
      "z",
      (a, b) => a.sideZ == b.sideZ && a.sideY == b.sizeY
   );

   const boxes = voxels.map((vox, idx) =>
      box({
         x: vox.x * size,
         y: vox.y * size,
         z: vox.z * size,
         offsets: [vox.sideX * 0.5, vox.sideY * 0.5, vox.sideZ * 0.5],
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
