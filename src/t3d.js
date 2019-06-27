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

const pack = (chain, size) => {
   const last = chain.length - 1;
   const x = (chain[0].x + chain[last].x) * 0.5 * size;
   const y = (chain[0].y + chain[last].y) * 0.5 * size;
   const z = (chain[0].z + chain[last].z) * 0.5 * size;
   const sides = [chain[last].x - chain[0].x, chain[last].y - chain[0].y, chain[last].z - chain[0].z].map(n => (n + 1) * size);
   const offsets = sides.map(n => n * 0.5);
   
   return {
      x,
      y,
      z,
      sides,
      offsets
   };
}

const optimize = (voxels, size) => {
   const positions = voxels.children.find(x => x.id == "XYZI").data.values;
   const chain = [];
   const result = [];

   for (let i = 0; i < positions.length; i ++) {
      const current = positions[i];
      const previous = chain[chain.length -1];

      //-- Start of a new chain
      if (!previous) {
         chain.push(current);
         continue;
      }

      //-- Continue existing chain
      if (current.x == previous.x && current.y == previous.y) {
         chain.push(current);
         continue;
      }

      //-- Pack current chain
      result.push(pack(chain, size));
      chain.length = 0;
      chain.push(current);
   }

   if (chain.length)
      result.push(pack(chain, size));

   return result;
}

const convertToT3D = (voxels, size = 200) => {
   const optimizedVoxels = optimize(voxels, size);
   const boxes = optimizedVoxels.map((payload, idx) => box(Object.assign(payload, { name: `Box${idx}` })));

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
