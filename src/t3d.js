const { writeText } = require("./utils");

const box = ({ x, y, z, scale, name}) => {
   return `
   Begin Actor Class=Brush Name=${name} Archetype=Brush'/Script/Engine.Default__Brush'
         Begin Object Class=CubeBuilder Name="CubeBuilder_1"
         End Object
         Begin Object Class=Polys Name="Polys_0"
         End Object
         Begin Brush Name=Model_0
         End Brush
         Begin Object Class=BrushComponent Name="BrushComponent0" Archetype=BrushComponent'Default__Brush:BrushComponent0'
         End Object
         Begin Object Name="CubeBuilder_1"
            Vertices(0)=(X=-${scale}.000000,Y=-${scale}.000000,Z=-${scale}.000000)
            Vertices(1)=(X=-${scale}.000000,Y=-${scale}.000000,Z=${scale}.000000)
            Vertices(2)=(X=-${scale}.000000,Y=${scale}.000000,Z=-${scale}.000000)
            Vertices(3)=(X=-${scale}.000000,Y=${scale}.000000,Z=${scale}.000000)
            Vertices(4)=(X=${scale}.000000,Y=-${scale}.000000,Z=-${scale}.000000)
            Vertices(5)=(X=${scale}.000000,Y=-${scale}.000000,Z=${scale}.000000)
            Vertices(6)=(X=${scale}.000000,Y=${scale}.000000,Z=-${scale}.000000)
            Vertices(7)=(X=${scale}.000000,Y=${scale}.000000,Z=${scale}.000000)
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
            RelativeLocation=(X=-${x}.000000,Y=${y}.000000,Z=${z}.000000)
         End Object
         BrushType=Brush_Add
         bNotForClientOrServer=True
         Begin Brush Name=Model_0
            Begin PolyList
               Begin Polygon
                  Origin   -00${scale}.000000,-00${scale}.000000,-00${scale}.000000
                  Normal   -00001.000000,+00000.000000,+00000.000000
                  TextureU +00000.000000,+00001.000000,+00000.000000
                  TextureV +00000.000000,+00000.000000,-00001.000000
                  Vertex   -00${scale}.000000,-00${scale}.000000,-00${scale}.000000
                  Vertex   -00${scale}.000000,-00${scale}.000000,+00${scale}.000000
                  Vertex   -00${scale}.000000,+00${scale}.000000,+00${scale}.000000
                  Vertex   -00${scale}.000000,+00${scale}.000000,-00${scale}.000000
               End Polygon
               Begin Polygon
                  Origin   -00${scale}.000000,+00${scale}.000000,-00${scale}.000000
                  Normal   +00000.000000,+00001.000000,+00000.000000
                  TextureU +00001.000000,-00000.000000,+00000.000000
                  TextureV +00000.000000,+00000.000000,-00001.000000
                  Vertex   -00${scale}.000000,+00${scale}.000000,-00${scale}.000000
                  Vertex   -00${scale}.000000,+00${scale}.000000,+00${scale}.000000
                  Vertex   +00${scale}.000000,+00${scale}.000000,+00${scale}.000000
                  Vertex   +00${scale}.000000,+00${scale}.000000,-00${scale}.000000
               End Polygon
               Begin Polygon
                  Origin   +00${scale}.000000,+00${scale}.000000,-00${scale}.000000
                  Normal   +00001.000000,+00000.000000,+00000.000000
                  TextureU +00000.000000,-00001.000000,+00000.000000
                  TextureV +00000.000000,+00000.000000,-00001.000000
                  Vertex   +00${scale}.000000,+00${scale}.000000,-00${scale}.000000
                  Vertex   +00${scale}.000000,+00${scale}.000000,+00${scale}.000000
                  Vertex   +00${scale}.000000,-00${scale}.000000,+00${scale}.000000
                  Vertex   +00${scale}.000000,-00${scale}.000000,-00${scale}.000000
               End Polygon
               Begin Polygon
                  Origin   +00${scale}.000000,-00${scale}.000000,-00${scale}.000000
                  Normal   +00000.000000,-00001.000000,+00000.000000
                  TextureU -00001.000000,-00000.000000,-00000.000000
                  TextureV +00000.000000,+00000.000000,-00001.000000
                  Vertex   +00${scale}.000000,-00${scale}.000000,-00${scale}.000000
                  Vertex   +00${scale}.000000,-00${scale}.000000,+00${scale}.000000
                  Vertex   -00${scale}.000000,-00${scale}.000000,+00${scale}.000000
                  Vertex   -00${scale}.000000,-00${scale}.000000,-00${scale}.000000
               End Polygon
               Begin Polygon
                  Origin   -00${scale}.000000,+00${scale}.000000,+00${scale}.000000
                  Normal   +00000.000000,+00000.000000,+00001.000000
                  TextureU +00001.000000,+00000.000000,+00000.000000
                  TextureV +00000.000000,+00001.000000,+00000.000000
                  Vertex   -00${scale}.000000,+00${scale}.000000,+00${scale}.000000
                  Vertex   -00${scale}.000000,-00${scale}.000000,+00${scale}.000000
                  Vertex   +00${scale}.000000,-00${scale}.000000,+00${scale}.000000
                  Vertex   +00${scale}.000000,+00${scale}.000000,+00${scale}.000000
               End Polygon
               Begin Polygon
                  Origin   -00${scale}.000000,-00${scale}.000000,-00${scale}.000000
                  Normal   +00000.000000,+00000.000000,-00001.000000
                  TextureU +00001.000000,+00000.000000,+00000.000000
                  TextureV +00000.000000,-00001.000000,+00000.000000
                  Vertex   -00${scale}.000000,-00${scale}.000000,-00${scale}.000000
                  Vertex   -00${scale}.000000,+00${scale}.000000,-00${scale}.000000
                  Vertex   +00${scale}.000000,+00${scale}.000000,-00${scale}.000000
                  Vertex   +00${scale}.000000,-00${scale}.000000,-00${scale}.000000
               End Polygon
            End PolyList
         End Brush
         Brush=Model'Model_0'
         BrushComponent=BrushComponent0
         BrushBuilder=CubeBuilder'CubeBuilder_1'
         SpawnCollisionHandlingMethod=AlwaysSpawn
         RootComponent=BrushComponent0
         ActorLabel="Box Brush99"
      End Actor
      `;
};

const convertToT3D = (voxels, scale = 100) => {
   const sizes = voxels.children.find(x => x.id == "SIZE");
   const locations = voxels.children.find(x => x.id == "XYZI");
   const colors = voxels.children.find(x => x.id == "RGBA");

   console.log(sizes);
   console.log(locations.data.values[2]);
   console.log(colors.data.values[2]);

   return "OOOOPS - NOT DONE";
};

const writeVoxels = (file, voxels) => {
   const data = convertToT3D(voxels);

   return writeString(file, data);
};

module.exports = {
   convertToT3D,
   writeVoxels
};
