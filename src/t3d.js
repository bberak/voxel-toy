const box = ({ x, y, z, vertexOffset, name }) => {
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
            Vertices(0)=(X=-${vertexOffset},Y=-${vertexOffset},Z=-${vertexOffset})
            Vertices(1)=(X=-${vertexOffset},Y=-${vertexOffset},Z=${vertexOffset})
            Vertices(2)=(X=-${vertexOffset},Y=${vertexOffset},Z=-${vertexOffset})
            Vertices(3)=(X=-${vertexOffset},Y=${vertexOffset},Z=${vertexOffset})
            Vertices(4)=(X=${vertexOffset},Y=-${vertexOffset},Z=-${vertexOffset})
            Vertices(5)=(X=${vertexOffset},Y=-${vertexOffset},Z=${vertexOffset})
            Vertices(6)=(X=${vertexOffset},Y=${vertexOffset},Z=-${vertexOffset})
            Vertices(7)=(X=${vertexOffset},Y=${vertexOffset},Z=${vertexOffset})
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
                  Origin -${vertexOffset},-${vertexOffset},-${vertexOffset}
                  Normal -1,+0,+0
                  TextureU +0,+1,+0
                  TextureV +0,+0,-1
                  Vertex -${vertexOffset},-${vertexOffset},-${vertexOffset}
                  Vertex -${vertexOffset},-${vertexOffset},+${vertexOffset}
                  Vertex -${vertexOffset},+${vertexOffset},+${vertexOffset}
                  Vertex -${vertexOffset},+${vertexOffset},-${vertexOffset}
               End Polygon
               Begin Polygon
                  Origin -${vertexOffset},+${vertexOffset},-${vertexOffset}
                  Normal +0,+1,+0
                  TextureU +1,-0,+0
                  TextureV +0,+0,-1
                  Vertex -${vertexOffset},+${vertexOffset},-${vertexOffset}
                  Vertex -${vertexOffset},+${vertexOffset},+${vertexOffset}
                  Vertex +${vertexOffset},+${vertexOffset},+${vertexOffset}
                  Vertex +${vertexOffset},+${vertexOffset},-${vertexOffset}
               End Polygon
               Begin Polygon
                  Origin +${vertexOffset},+${vertexOffset},-${vertexOffset}
                  Normal +1,+0,+0
                  TextureU +0,-1,+0
                  TextureV +0,+0,-1
                  Vertex +${vertexOffset},+${vertexOffset},-${vertexOffset}
                  Vertex +${vertexOffset},+${vertexOffset},+${vertexOffset}
                  Vertex +${vertexOffset},-${vertexOffset},+${vertexOffset}
                  Vertex +${vertexOffset},-${vertexOffset},-${vertexOffset}
               End Polygon
               Begin Polygon
                  Origin +${vertexOffset},-${vertexOffset},-${vertexOffset}
                  Normal +0,-1,+0
                  TextureU -1,-0,-0
                  TextureV +0,+0,-1
                  Vertex +${vertexOffset},-${vertexOffset},-${vertexOffset}
                  Vertex +${vertexOffset},-${vertexOffset},+${vertexOffset}
                  Vertex -${vertexOffset},-${vertexOffset},+${vertexOffset}
                  Vertex -${vertexOffset},-${vertexOffset},-${vertexOffset}
               End Polygon
               Begin Polygon
                  Origin -${vertexOffset},+${vertexOffset},+${vertexOffset}
                  Normal +0,+0,+1
                  TextureU +1,+0,+0
                  TextureV +0,+1,+0
                  Vertex -${vertexOffset},+${vertexOffset},+${vertexOffset}
                  Vertex -${vertexOffset},-${vertexOffset},+${vertexOffset}
                  Vertex +${vertexOffset},-${vertexOffset},+${vertexOffset}
                  Vertex +${vertexOffset},+${vertexOffset},+${vertexOffset}
               End Polygon
               Begin Polygon
                  Origin -${vertexOffset},-${vertexOffset},-${vertexOffset}
                  Normal +0,+0,-1
                  TextureU +1,+0,+0
                  TextureV +0,-1,+0
                  Vertex -${vertexOffset},-${vertexOffset},-${vertexOffset}
                  Vertex -${vertexOffset},+${vertexOffset},-${vertexOffset}
                  Vertex +${vertexOffset},+${vertexOffset},-${vertexOffset}
                  Vertex +${vertexOffset},-${vertexOffset},-${vertexOffset}
               End Polygon
            End PolyList
         End Brush
         Brush=Model'Model_0'
         BrushComponent=BrushComponent0
         BrushBuilder=CubeBuilder'CubeBuilder_0'
         SpawnCollisionHandlingMethod=AlwaysSpawn
         RootComponent=BrushComponent0
         ActorLabel="${name}"
      End Actor
   `;
};

const convertToT3D = (voxels, size = 200) => {
   const vertexOffset = size * 0.5;
   const positions = voxels.children.find(x => x.id == "XYZI");
   const boxes = positions.data.values.map(({ x, y, z }, idx) =>
      box({
         x: x * size,
         y: y * size,
         z: z * size,
         name: `Box${idx}`,
         vertexOffset
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
