const box = ({ x, y, z, scale, name }) => {
   return `
      Begin Actor Class=Brush Name=${name} Archetype=Brush'/Script/Engine.Default__Brush'
         Begin Object Class=CubeBuilder Name="CB0"
         End Object
         Begin Object Class=Polys Name="P0"
         End Object
         Begin Brush Name=M0
         End Brush
         Begin Object Class=BrushComponent Name="BC0" Archetype=BrushComponent'Default__Brush:BC0'
         End Object
         Begin Object Name="CB0"
            Vertices(0)=(X=-${scale},Y=-${scale},Z=-${scale})
            Vertices(1)=(X=-${scale},Y=-${scale},Z=${scale})
            Vertices(2)=(X=-${scale},Y=${scale},Z=-${scale})
            Vertices(3)=(X=-${scale},Y=${scale},Z=${scale})
            Vertices(4)=(X=${scale},Y=-${scale},Z=-${scale})
            Vertices(5)=(X=${scale},Y=-${scale},Z=${scale})
            Vertices(6)=(X=${scale},Y=${scale},Z=-${scale})
            Vertices(7)=(X=${scale},Y=${scale},Z=${scale})
            Polys(0)=(VertexIndices=(0,1,3,2),Direction=1)
            Polys(1)=(VertexIndices=(2,3,7,6),Direction=1)
            Polys(2)=(VertexIndices=(6,7,5,4),Direction=1)
            Polys(3)=(VertexIndices=(4,5,1,0),Direction=1)
            Polys(4)=(VertexIndices=(3,1,5,7),Direction=1)
            Polys(5)=(VertexIndices=(0,2,6,4),Direction=1)
            Layer="Cube"
         End Object
         Begin Object Name="P0"
         End Object
         Begin Object Name="BC0"
            Brush=Model'M0'
            RelativeLocation=(X=-${x},Y=${y},Z=${z})
         End Object
         BrushType=Brush_Add
         bNotForClientOrServer=True
         Begin Brush Name=M0
            Begin PolyList
               Begin Polygon
                  Origin -${scale},-${scale},-${scale}
                  Normal -1,+0,+0
                  TextureU +0,+1,+0
                  TextureV +0,+0,-1
                  Vertex -${scale},-${scale},-${scale}
                  Vertex -${scale},-${scale},+${scale}
                  Vertex -${scale},+${scale},+${scale}
                  Vertex -${scale},+${scale},-${scale}
               End Polygon
               Begin Polygon
                  Origin -${scale},+${scale},-${scale}
                  Normal +0,+1,+0
                  TextureU +1,-0,+0
                  TextureV +0,+0,-1
                  Vertex -${scale},+${scale},-${scale}
                  Vertex -${scale},+${scale},+${scale}
                  Vertex +${scale},+${scale},+${scale}
                  Vertex +${scale},+${scale},-${scale}
               End Polygon
               Begin Polygon
                  Origin +${scale},+${scale},-${scale}
                  Normal +1,+0,+0
                  TextureU +0,-1,+0
                  TextureV +0,+0,-1
                  Vertex +${scale},+${scale},-${scale}
                  Vertex +${scale},+${scale},+${scale}
                  Vertex +${scale},-${scale},+${scale}
                  Vertex +${scale},-${scale},-${scale}
               End Polygon
               Begin Polygon
                  Origin +${scale},-${scale},-${scale}
                  Normal +0,-1,+0
                  TextureU -1,-0,-0
                  TextureV +0,+0,-1
                  Vertex +${scale},-${scale},-${scale}
                  Vertex +${scale},-${scale},+${scale}
                  Vertex -${scale},-${scale},+${scale}
                  Vertex -${scale},-${scale},-${scale}
               End Polygon
               Begin Polygon
                  Origin -${scale},+${scale},+${scale}
                  Normal +0,+0,+1
                  TextureU +1,+0,+0
                  TextureV +0,+1,+0
                  Vertex -${scale},+${scale},+${scale}
                  Vertex -${scale},-${scale},+${scale}
                  Vertex +${scale},-${scale},+${scale}
                  Vertex +${scale},+${scale},+${scale}
               End Polygon
               Begin Polygon
                  Origin -${scale},-${scale},-${scale}
                  Normal +0,+0,-1
                  TextureU +1,+0,+0
                  TextureV +0,-1,+0
                  Vertex -${scale},-${scale},-${scale}
                  Vertex -${scale},+${scale},-${scale}
                  Vertex +${scale},+${scale},-${scale}
                  Vertex +${scale},-${scale},-${scale}
               End Polygon
            End PolyList
         End Brush
         Brush=Model'M0'
         BrushComponent=BC0
         BrushBuilder=CubeBuilder'CB0'
         SpawnCollisionHandlingMethod=AlwaysSpawn
         RootComponent=BC0
         ActorLabel="${name}"
      End Actor
   `;
};

const convertToT3D = (voxels, scale = 100) => {
   const positions = voxels.children.find(x => x.id == "XYZI");
   const boxes = positions.data.values.map(({ x, y, z }, idx) =>
      box({
         x: x * scale,
         y: y * scale,
         z: z * scale,
         name: `Box${idx}`,
         scale
      })
   );

   return `
      Begin Map
      Begin Level
         ${boxes.join("\n")}
      End Level
      End Map
   `;
};

module.exports = {
   convertToT3D
};
