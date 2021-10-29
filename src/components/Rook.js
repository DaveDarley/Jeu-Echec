import React from 'react';

class Rook extends React.Component{



    constructor(props){
        super(props);

        this.state={
          couleur:props.couleur,
          Nom:props.nom,
          x:props.x,
          y:props.y};
    }


    rook(){


        var RookUni;
        const blanc = 'blanc';
        const noir = 'noir'
    
    
        const  var1 = this.state.couleur;
    
        if(var1 == blanc){
            RookUni = '\u2656';
        }if(var1 == noir){
            RookUni = '\u265C';
        }
    
    
        return (
            RookUni
        )
    
    
    
    }




render(){
    return(
    <div>{this.rook()}</div>
    )
}

}












export default Rook;