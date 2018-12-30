export class Patologia {
    constructor(
        public nombre:                         string,
        public fotos:                          string[],
        public descripcion:                    string,
        public area:                           string,  
        public general:                        string,   
        public referencias:                    string,
        public videos:                         string[],
        public tags:                           string[],
        public audios:                         string[],
        public _id?:                           string,
    ) {}
}
