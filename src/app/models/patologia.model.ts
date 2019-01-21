export class Patologia {
    constructor(
        public nombre:                         string,
        public fotos:                          string[],
        public descripcion:                    string,
        public area:                           string,  
        public general:                        string,   
        public referencias:                    string,
        public videos:                         {titulo: string,video:string, descripcion:string } [],
        public tags:                           string[],
        public audios:                         string[],
        public visitas:                        Date[],
        public fecha_publicacion:              Date,
        public _id?:                           string
        
        
    ) {}
}
