import React from 'react';



class King extends React.Component{
    constructor(props){
        super(props);

        this.state={
            couleur:props.couleur,
            Nom:props.nom,
            x:props.x,
            y:props.y};
   
    

    

    }




    king(){


        var KingUni;
        const blanc = 'blanc';
        const noir = 'noir'

       
    
    
        const  var1 = this.state.couleur;
    
        if(var1 == blanc){
            KingUni = '\u2654';
        }if(var1 == noir){
            KingUni = '\u265A';
        }
    
    
        return (
            KingUni
        )
    
    
    
    }

    render(){
        return(
            <div>{this.king()}</div>
        )
       
    }
}





export default King;