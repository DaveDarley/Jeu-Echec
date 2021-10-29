import React from 'react';

class Knight extends React.Component{

      constructor(props){
          super(props);

          this.state={
            couleur:props.couleur,
            Nom:props.nom,
            x:props.x,
            y:props.y};
      }




      knight(){


        var KnightUni;
        const blanc = 'blanc';
        const noir = 'noir'
    
    
        const  var1 = this.state.couleur;
    
        if(var1 == blanc){
            KnightUni = '\u2658';
        }if(var1 == noir){
            KnightUni = '\u265E';
        }
    
    
        return (
            KnightUni
        )
    
    
    
    }

render(){
    return(
    <div>{this.knight()}</div>
    )
}




}













export default Knight;