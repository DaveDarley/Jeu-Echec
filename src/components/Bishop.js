import React from 'react';



class Bishop extends React.Component{

    constructor(props){
        super(props);

        this.state={
            couleur:props.couleur,
            Nom:props.nom,
            x:props.x,
            y:props.y};

    } 


bishop(){


    var BishopUni;
    const blanc = 'blanc';
    const noir = 'noir'


    const  var1 = this.state.couleur;

    if(var1 == blanc){
        BishopUni = '\u2657';
    }if(var1 == noir){
        BishopUni = '\u265D';
    }


    return (
        BishopUni
    )



}

render(){
    return(
    <div>{this.bishop()}</div>
    )
}


}










export default Bishop;