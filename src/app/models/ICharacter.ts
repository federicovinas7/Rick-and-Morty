export interface ICharacter{

    results : Character[];
}

export interface Character{
    id? : number;
    name : string;
    status : string;
    species : string;
    type : string;
    gender : string;
    origin : {
        name : string
    },
    location : {
        name : string
    };
    image : string;  // 300px x 300px 
    epsiode : [];
}


