import React from 'react';

class Queen extends React.Component{

    constructor(props){
        super(props);

        this.state={
            couleur:props.couleur,
            Nom:props.nom,
            x:props.x,
            y:props.y};

    }


queen(){


    var QueenUni;
    const blanc = 'blanc';
    const noir = 'noir'


    const  var1 = this.state.couleur;

    if(var1 == blanc){
        QueenUni = '\u2655';
    }if(var1 == noir){
        QueenUni = '\u265B';
    }


    return (
        QueenUni
    )



}

render(){
    return(

        <div>{this.queen()}</div>
    )
}

}
export default Queen;