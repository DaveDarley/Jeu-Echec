import React from "react";



class Pion extends React.Component{
    constructor(props){
        super(props);

       
        this.state={


        couleur:props.couleur,
        Nom:props.nom,
        x:props.x,
        y:props.y
    
 


    
    };

    
    }

/*
Je veux appeler movePion partir de Board mais
j'ai du mal avec ca !!!!
*/




     pion(){


        var pionUni;
        const blanc = 'blanc';
        const noir = 'noir'


        const  var1 = this.state.couleur;

        if(var1 == blanc){
            pionUni = '\u2659'; 
        }if(var1 == noir){
            pionUni = '\u265F';
        }


        return (
            pionUni
        )



    }


    

   chooseFunction(){
     



        if(typeof this.state.Pieces != 'undefined'){




            var tab = this.movePion(this.state.Pieces,this.state.firstCase,
                this.state.secondCase,this.state.posPieceToRemove);
            return tab;
              
        }else{

         return <div>{this.pion()}</div>  
    }

}





    render(){


        return(

          
          <div>{this.pion()}</div>

          




        )

    }












}






    


    
   


       





    







export default Pion;