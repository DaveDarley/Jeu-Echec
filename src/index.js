import React from 'react';
import ReactDom from 'react-dom';



import Pion from "./components/Pion";
import King from "./components/King";
import Queen from "./components/Queen";
import Bishop from "./components/Bishop";
import Knight from "./components/Knight";
import Rook from "./components/Rook";


import "./index.css";








class Board extends React.Component{

    constructor(props){
        super(props);

        this.forceUpdateHandler = this.forceUpdateHandler.bind(this);
        this.deplacement = this.deplacement.bind(this);


    }


        firstCaseClicked=[];
        secondCaseClicked = [];
        indPieceToRemove ; 

        squares = [];
        allPiecesInPlay = [];

       
    // Comme je modifie mon tableau a chaque fois 
    // je dois re-render
    forceUpdateHandler(){
        this.forceUpdate();
    } 


    

    deplacement(e){

        if(this.secondCaseClicked.length == 0 && this.firstCaseClicked.length!=0){
            var x = e.currentTarget.dataset.id[0];
            var y = e.currentTarget.dataset.id[2];

            this.secondCaseClicked.push(x); 
            this.secondCaseClicked.push(y); 

            for(var i = 0; i<this.allPiecesInPlay.length; i++){
                if(this.allPiecesInPlay[i].props.x == this.secondCaseClicked[0] && this.allPiecesInPlay[i].props.y == this.secondCaseClicked[1]){
                    this.secondCaseClicked.push(this.allPiecesInPlay[i].props.nom)
                    this.secondCaseClicked.push(this.allPiecesInPlay[i].props.couleur)

                    //si non vide je le met a la fin de allPiecesInPlay comme ca un pop permet de l'enlever

                    var temp = this.allPiecesInPlay[this.allPiecesInPlay.length - 1];
                    this.allPiecesInPlay[this.allPiecesInPlay.length-1] = this.allPiecesInPlay[i];
                    this.allPiecesInPlay[i]=temp;

                } 
            }

       
            console.log('Je suis dans le secondclick');
            console.log(this.secondCaseClicked[0]);
            console.log(this.secondCaseClicked[1]);
            console.log(this.secondCaseClicked[2]);
            console.log(this.secondCaseClicked[3]);
            console.log(this.secondCaseClicked.length);


        var piece = this.firstCaseClicked[2];
        if(piece == 'queen'){ // Juste pour pas avoir pour queen aussi 
            if(this.firstCaseClicked[0] == this.secondCaseClicked[0] && this.firstCaseClicked[1]!=this.secondCaseClicked[1] || 
               this.firstCaseClicked[1] == this.secondCaseClicked[1] && this.firstCaseClicked[0]!=this.secondCaseClicked[0] ){
                    this.isMoveGood('rook');
               }
           this.isMoveGood('bishop');
           
           
        }else{this.isMoveGood(piece)}
        

        }else{

           if(this.firstCaseClicked.length == 0){
       
            var x = e.currentTarget.dataset.id[0];
            var y = e.currentTarget.dataset.id[2];

 

            
            this.firstCaseClicked.push(x); // on push le x du div qui a ete clique
            this.firstCaseClicked.push(y); // on push le y du div qui a ete clique

            for(var i = 0; i<this.allPiecesInPlay.length; i++){
                if(this.allPiecesInPlay[i].props.x == this.firstCaseClicked[0] && this.allPiecesInPlay[i].props.y == this.firstCaseClicked[1]){

                    this.indPieceToRemove = i; // Pour pouvoir retirer la piece de mon tab allPieceInPlay;

                    // on a le nom et la couleur 
                    this.firstCaseClicked.push(this.allPiecesInPlay[i].props.nom )
                    this.firstCaseClicked.push(this.allPiecesInPlay[i].props.couleur)
 


                }
                
            
            }     
            
        }

        if(typeof this.firstCaseClicked[2] == 'undefined'){this.firstCaseClicked = [];}// la case clique est une case vide} 
        
    
        
         console.log('Je suis dans le premier click');
         console.log(this.firstCaseClicked[0]);
         console.log(this.firstCaseClicked[1]);
         console.log(this.firstCaseClicked[2]);
         console.log(this.firstCaseClicked[3]);
         console.log(this.firstCaseClicked.length);
       
         
        }




        // Ici on definit les regles pour le deplacement de chaque Piece!!

        if(this.secondCaseClicked.length!=0){

            


            var nomPiece = this.firstCaseClicked[2]; // nom de la piece qu'on veut bouger
            

            switch(nomPiece){
                
                case 'Pion':

                /* A fixer : le pion mange en diagonale 
                   mais qd le blanc mange un noir c le blanc qui disparait */

                

               
                    if(this.secondCaseClicked.length == 2 ){ // deuxieme case clique vide 
                        // si le pion est noir il descends et blanc il monte

                         

                        if(this.firstCaseClicked[3] == 'noir'){

                           if(this.firstCaseClicked[0] == 1 && this.secondCaseClicked[0] == parseFloat(this.firstCaseClicked[0])+2 && this.secondCaseClicked[1] == this.firstCaseClicked[1]){

                                

                                this.allPiecesInPlay[this.indPieceToRemove] = <Pion couleur={this.firstCaseClicked[3]} 
                                nom={this.firstCaseClicked[2]} x={this.secondCaseClicked[0]} y={this.secondCaseClicked[1]}/>



                           }
                           if(this.secondCaseClicked[0] == parseFloat(this.firstCaseClicked[0])+1 && this.secondCaseClicked[1] == this.firstCaseClicked[1]){

                            this.allPiecesInPlay[this.indPieceToRemove] = <Pion couleur={this.firstCaseClicked[3]} 
                            nom={this.firstCaseClicked[2]} x={this.secondCaseClicked[0]} y={this.secondCaseClicked[1]}/>

                           }

                        
                        }else{ // Le pion est blanc

                            if(this.firstCaseClicked[0]==6 && this.secondCaseClicked[0] == parseFloat(this.firstCaseClicked[0])-2 &&
                                this.secondCaseClicked[1]== this.firstCaseClicked[1]){

                                    this.allPiecesInPlay[this.indPieceToRemove] = <Pion couleur={this.firstCaseClicked[3]} 
                                    nom={this.firstCaseClicked[2]} x={this.secondCaseClicked[0]} y={this.secondCaseClicked[1]}/>
  
                             }
                             if(this.secondCaseClicked[0] == parseFloat(this.firstCaseClicked[0])-1 && this.secondCaseClicked[1] == this.firstCaseClicked[1]){

                                this.allPiecesInPlay[this.indPieceToRemove] = <Pion couleur={this.firstCaseClicked[3]} 
                                nom={this.firstCaseClicked[2]} x={this.secondCaseClicked[0]} y={this.secondCaseClicked[1]}/>
                             }



                        }


                    }else{ // case non vide ; le pion va manger  
                        // Faut verifier la couleur de la piece qu il va manger 

                        if(this.firstCaseClicked[3] == 'blanc'){
                            if(this.secondCaseClicked[0] == parseFloat(this.firstCaseClicked[0])-1 && this.secondCaseClicked[1] == parseFloat(this.firstCaseClicked[1])-1){
 
                                this.allPiecesInPlay[this.indPieceToRemove] = <Pion couleur ={this.firstCaseClicked[3]} 
                                nom = {this.firstCaseClicked[2]} x = {this.secondCaseClicked[0]} y ={this.secondCaseClicked[1]}/>
                                this.allPiecesInPlay.pop();
 
                            }
                            if(this.secondCaseClicked[0] == parseFloat(this.firstCaseClicked[0])-1 && this.secondCaseClicked[1] == parseFloat(this.firstCaseClicked[1])+1){
                                this.allPiecesInPlay[this.indPieceToRemove] = <Pion couleur ={this.firstCaseClicked[3]} 
                                nom = {this.firstCaseClicked[2]} x = {this.secondCaseClicked[0]} y ={this.secondCaseClicked[1]}/>
                                this.allPiecesInPlay.pop();
 
                            }

                         
                         }else{ // Le pion est noir 
 
                            if(this.secondCaseClicked[0] == parseFloat(this.firstCaseClicked[0])+1 && this.secondCaseClicked[1] == parseFloat(this.firstCaseClicked[1])-1){
 
                                this.allPiecesInPlay[this.indPieceToRemove] = <Pion couleur ={this.firstCaseClicked[3]} 
                                nom = {this.firstCaseClicked[2]} x = {this.secondCaseClicked[0]} y ={this.secondCaseClicked[1]}/>
                                this.allPiecesInPlay.pop();

                           }
                           if(this.secondCaseClicked[0] == parseFloat(this.firstCaseClicked[0])+1 && this.secondCaseClicked[1] == parseFloat(this.firstCaseClicked[1])+1){
                                this.allPiecesInPlay[this.indPieceToRemove] = <Pion couleur ={this.firstCaseClicked[3]} 
                                nom = {this.firstCaseClicked[2]} x = {this.secondCaseClicked[0]} y ={this.secondCaseClicked[1]}/>
                                this.allPiecesInPlay.pop();
                           }

 
 
                         }




                    }

                    this.firstCaseClicked = [];
                    this.secondCaseClicked = [];
                    this.initialBoard();
                    this.forceUpdateHandler();
                    break;
                    
                case 'king':

                console.log('Je suis entre dans le king '); // Test Fonctionne 

                var deplPossible = false;


                if(this.secondCaseClicked[1]==parseFloat(this.firstCaseClicked[1])+1 || this.secondCaseClicked[1]==parseFloat(this.firstCaseClicked[1])-1){
                   if(this.secondCaseClicked[0]==this.firstCaseClicked[0]){

                       deplPossible = true;
                    }
                }

                if(this.secondCaseClicked[0] == parseFloat(this.firstCaseClicked[0])+1 || this.secondCaseClicked[0] == parseFloat(this.firstCaseClicked[0])-1){
                    if(this.secondCaseClicked[1] == this.firstCaseClicked[1]){
                        
                       deplPossible = true;
                    }
                }

                if(deplPossible){
                    if(this.secondCaseClicked.length == 2){
                        this.allPiecesInPlay[this.indPieceToRemove] = <King couleur={this.firstCaseClicked[3]} 
                        nom={this.firstCaseClicked[2]} x={this.secondCaseClicked[0]} y={this.secondCaseClicked[1]}/>
                    }else{
                        if(this.secondCaseClicked[3]===this.firstCaseClicked[3]){


                        }else{
                            this.allPiecesInPlay[this.indPieceToRemove] = <King couleur ={this.firstCaseClicked[3]} 
                            nom = {this.firstCaseClicked[2]} x = {this.secondCaseClicked[0]} y ={this.secondCaseClicked[1]}/>
                            this.allPiecesInPlay.pop();

                        }
                    }
                }
                    this.firstCaseClicked=[];
                    this.secondCaseClicked=[];
                    this.initialBoard();
                    this.forceUpdateHandler();

                    break;
                case 'queen': // Mixte bishop et rook
                var queenMove = false;

                if(this.firstCaseClicked[0] == this.secondCaseClicked[0] && this.firstCaseClicked[1]!=this.secondCaseClicked[1] ||
                    (this.firstCaseClicked[0]!=this.secondCaseClicked[0] && this.firstCaseClicked[1]==this.secondCaseClicked[1])){
                        queenMove = true;
                    }

                    for(var i =1; i<=7; i++){
                        if(this.secondCaseClicked[0] == parseFloat(this.firstCaseClicked[0])+i || this.secondCaseClicked[0] == parseFloat(this.firstCaseClicked[0])-i){
                            if(this.secondCaseClicked[1] == parseFloat(this.firstCaseClicked[1])+i || this.secondCaseClicked[1] == parseFloat(this.firstCaseClicked[1])-i){
                                queenMove = true;
                            }
                        }
                    }

                    if(queenMove){
                        if(this.secondCaseClicked.length == 2){
                            this.allPiecesInPlay[this.indPieceToRemove] = <Queen couleur={this.firstCaseClicked[3]} 
                            nom={this.firstCaseClicked[2]} x={this.secondCaseClicked[0]} y={this.secondCaseClicked[1]}/>
                        }else{
                            if(this.secondCaseClicked[3]===this.firstCaseClicked[3]){
    
    
                            }else{
                                this.allPiecesInPlay[this.indPieceToRemove] = <Queen couleur ={this.firstCaseClicked[3]} 
                                nom = {this.firstCaseClicked[2]} x = {this.secondCaseClicked[0]} y ={this.secondCaseClicked[1]}/>
                                this.allPiecesInPlay.pop();
    
                            }
                       }
                    }
    
                        this.firstCaseClicked=[];
                        this.secondCaseClicked=[];
                        this.initialBoard();
                        this.forceUpdateHandler();
  
                    break;

                case 'knight':
                    var isMovePossible = false;

                    if(this.secondCaseClicked[0] == parseFloat(this.firstCaseClicked[0])+1 || this.secondCaseClicked[0] == parseFloat(this.firstCaseClicked[0])-1){
                        if(this.secondCaseClicked[1]==parseFloat(this.firstCaseClicked[1])+2 || this.secondCaseClicked[1] == parseFloat(this.firstCaseClicked[1])-2){
                        isMovePossible = true;
                    }
                }

                    if(this.secondCaseClicked[1] == parseFloat(this.firstCaseClicked[1])+1 || this.secondCaseClicked[1] == parseFloat(this.firstCaseClicked[1])-1){
                        if(this.secondCaseClicked[0]==parseFloat(this.firstCaseClicked[0])+2 || this.secondCaseClicked[0] == parseFloat(this.firstCaseClicked[0])-2){
                          isMovePossible = true;
                    }
                }

                if(isMovePossible){
                    if(this.secondCaseClicked.length == 2){
                        this.allPiecesInPlay[this.indPieceToRemove] = <Knight couleur={this.firstCaseClicked[3]} 
                        nom={this.firstCaseClicked[2]} x={this.secondCaseClicked[0]} y={this.secondCaseClicked[1]}/>
                    }else{
                        if(this.secondCaseClicked[3]===this.firstCaseClicked[3]){


                        }else{
                            this.allPiecesInPlay[this.indPieceToRemove] = <Knight couleur ={this.firstCaseClicked[3]} 
                            nom = {this.firstCaseClicked[2]} x = {this.secondCaseClicked[0]} y ={this.secondCaseClicked[1]}/>
                            this.allPiecesInPlay.pop();

                        }
                   }
                }

                    this.firstCaseClicked=[];
                    this.secondCaseClicked=[];
                    this.initialBoard();
                    this.forceUpdateHandler();
   
   
                       
                    break;

                case 'bishop':

                    for(var i =1; i<=7; i++){
                        if(this.secondCaseClicked[0] == parseFloat(this.firstCaseClicked[0])+i || this.secondCaseClicked[0] == parseFloat(this.firstCaseClicked[0])-i){
                            if(this.secondCaseClicked[1] == parseFloat(this.firstCaseClicked[1])+i || this.secondCaseClicked[1] == parseFloat(this.firstCaseClicked[1])-i){


                                if(this.secondCaseClicked.length == 2){
                                    this.allPiecesInPlay[this.indPieceToRemove] = <Bishop couleur={this.firstCaseClicked[3]} 
                                    nom={this.firstCaseClicked[2]} x={this.secondCaseClicked[0]} y={this.secondCaseClicked[1]}/>


                                }else{
                                    if(this.secondCaseClicked[3]===this.firstCaseClicked[3]){ // si c'est une piece de la meme couleur
        
        
                                    }else{
                                        this.allPiecesInPlay[this.indPieceToRemove] = <Bishop couleur ={this.firstCaseClicked[3]} 
                                        nom = {this.firstCaseClicked[2]} x = {this.secondCaseClicked[0]} y ={this.secondCaseClicked[1]}/>
                                        this.allPiecesInPlay.pop();
        
                                    }
                            } 
                            }
                        }
                    }

                    this.firstCaseClicked=[];
                    this.secondCaseClicked=[];
                    this.initialBoard();
                    this.forceUpdateHandler();
                    break;

                case 'rook':

                    if(this.firstCaseClicked[0] == this.secondCaseClicked[0] && this.firstCaseClicked[1]!=this.secondCaseClicked[1] ||
                        (this.firstCaseClicked[0]!=this.secondCaseClicked[0] && this.firstCaseClicked[1]==this.secondCaseClicked[1])){
                        
                            if(this.secondCaseClicked.length == 2){
                            this.allPiecesInPlay[this.indPieceToRemove] = <Rook couleur={this.firstCaseClicked[3]} 
                            nom={this.firstCaseClicked[2]} x={this.secondCaseClicked[0]} y={this.secondCaseClicked[1]}/>
                        }else{
                            if(this.secondCaseClicked[3]===this.firstCaseClicked[3]){


                            }else{
                                this.allPiecesInPlay[this.indPieceToRemove] = <Rook couleur ={this.firstCaseClicked[3]} 
                                nom = {this.firstCaseClicked[2]} x = {this.secondCaseClicked[0]} y ={this.secondCaseClicked[1]}/>
                                this.allPiecesInPlay.pop();

                            }
                    } 
                    }

                    this.firstCaseClicked=[];
                    this.secondCaseClicked=[];
                    this.initialBoard();
                    this.forceUpdateHandler();
                break;
            }
        }

        
        

    }

    isMoveGood(nomPiece){

        // Comme deplacement de la reine est un mixte de bishop et rook 
        // qd je deplace la reine j'appele avec rook et bishop 

        if(nomPiece == 'pion'){
            for(var i = 0; i<this.allPiecesInPlay.length; i++){
                if((this.allPiecesInPlay[i].props.x == parseFloat(this.secondCaseClicked[0])-1 || 
                    this.allPiecesInPlay[i].props.x == parseFloat(this.secondCaseClicked[0])+1)){
                        this.firstCaseClicked=[];
                        this.secondCaseClicked=[];
                    }
            }
        }
        if(nomPiece == 'rook'){ // Si il y a une piece qui a le meme x que la ou on veut bouger la tour, on peut pas le depasser

            console.log('je suis entre ici pour reine en deuxieme'); // test

            var diff = Math.abs(this.firstCaseClicked[0] - this.secondCaseClicked[0]);

            for(var i = 0; i<this.allPiecesInPlay.length; i++){

                var actualPieceX = this.allPiecesInPlay[i].props.x;
                var actualPieceY = this.allPiecesInPlay[i].props.y;
                

                if(actualPieceY == parseFloat(this.secondCaseClicked[1]) || actualPieceX == parseFloat(this.secondCaseClicked[0])){

                    

                    

                    if(this.ifBetweenTwoValues(parseFloat(this.secondCaseClicked[0]),actualPieceX,parseFloat(this.firstCaseClicked[0]))||
                       this.ifBetweenTwoValues(parseFloat(this.secondCaseClicked[1]),actualPieceY,parseFloat(this.firstCaseClicked[1]))){ 

                        console.log('je dois pas entrer ici!!!');
                        console.log(actualPieceY);
                        console.log(actualPieceX);

                            this.firstCaseClicked=[];
                            this.secondCaseClicked=[];

                    
                        
                        }
                }
            }

            console.log(this.firstCaseClicked);
            console.log(this.secondCaseClicked);

        }
       
        if(nomPiece == 'bishop'){

            console.log('je suis entre ici pour reine en premier');

                var i = Math.abs(this.firstCaseClicked[0] - this.secondCaseClicked[0]);

                for(var j = 0; j<this.allPiecesInPlay.length; j++){

                    var actualPieceX = this.allPiecesInPlay[j].props.x;
                    var actualPieceY = this.allPiecesInPlay[j].props.y;
                    var fromCase = this.firstCaseClicked;
                    var destCase = this.secondCaseClicked;
                   
                    // 4 cas possibles:
                   if(destCase[0] == parseFloat(fromCase[0])+i && destCase[1] == parseFloat(fromCase[1]) +i){
                       for(var k = 1 ; k<i; k++){
                            if(actualPieceX == parseFloat(fromCase[0])+k && actualPieceY == parseFloat(fromCase[1])+k){
                                // si on entre dans ce if c'est qu'il y a un element entre
                                this.firstCaseClicked=[];
                                this.secondCaseClicked=[];
                            }  
                       }

                   }
                   if(destCase[0] == parseFloat(fromCase[0])+i && destCase[1] == parseFloat(fromCase[1]) -i){
                    for(var k = 1 ; k<i; k++){
                        if(actualPieceX == parseFloat(fromCase[0])+k && actualPieceY == parseFloat(fromCase[1])-k){
                            // si on entre dans ce if c'est qu'il y a un element entre
                            this.firstCaseClicked=[];
                            this.secondCaseClicked=[];
                        }  

                    }  
                   }

                if(destCase[0] == parseFloat(fromCase[0])-i && destCase[1] == parseFloat(fromCase[1]) +i){

                    for(var k = 1 ; k<i; k++){
                        if(actualPieceX == parseFloat(fromCase[0])-k && actualPieceY == parseFloat(fromCase[1])+k){
                            // si on entre dans ce if c'est qu'il y a un element entre
                            console.log('---------Test---------');
                            console.log('Je suis entre ici!!');
                            this.firstCaseClicked=[];
                            this.secondCaseClicked=[];
                        }  
                    }    
                }

                if(destCase[0] == parseFloat(fromCase[0])-i && destCase[1] == parseFloat(fromCase[1]) - i){
                    for(var k = 1 ; k<i; k++){
                        if(actualPieceX == parseFloat(fromCase[0])-k && actualPieceY == parseFloat(fromCase[1])-k){
                            // si on entre dans ce if c'est qu'il y a un element entre
                            this.firstCaseClicked=[];
                            this.secondCaseClicked=[];
                        }  
                    }    
                }



/*
                    if(this.actualPieceX == this.firstCaseClicked[0]+j || actualPieceX == this.firstCaseClicked[0]-j &&
                        actualPieceY == this.firstCaseClicked[1]+j || actualPieceY == this.firstCaseClicked[1]-j){

                            if(this.ifBetweenTwoValues(parseFloat(this.secondCaseClicked[0]),actualPieceX,parseFloat(this.firstCaseClicked[0])) ||
                            this.ifBetweenTwoValues(parseFloat(this.secondCaseClicked[1]),actualPieceY,parseFloat(this.firstCaseClicked[1]))){ 
     
                                console.log('je suis bien au fonc de mon if ');
                                console.log('actualPieceX '+actualPieceX);
                                console.log('actualPieceY'+actualPieceY);
                                console.log(' x case clique ' + this.secondCaseClicked[0]);
                                console.log(' y case clique ' + this.secondCaseClicked[1])
                                console.log('---------Fin Test---------')
     
                                 this.firstCaseClicked=[];
                                 this.secondCaseClicked=[];
     
                         
                             
                             }
                    }*/

                }
                console.log(this.firstCaseClicked);
                console.log(this.secondCaseClicked);
                
            
        }

    }

    ifBetweenTwoValues(x,y,z){
        if(y<z && y>x || y>z && y<x ){ return true}
        return false;
    }

    initialBoard(){

        
        //Qd on commence le jeu , allPiecesInPlay est vide mais des qu'on commence allPiecesInplay s'ajuste en fonction
         //des pieces presentes dans le jeu !!
         //*Apres chaque deplacement d'une case, on appel la fonction qui affiche le board en fonction des pieces presentes dans 
        // dans allPiecesInPlay
        
        if(this.allPiecesInPlay.length == 0){

            console.log('Test debug: etat initial du allPiecesInPlay');
            console.log(this.allPiecesInPlay);

        var blackPieces = []

        // on hardcoder les x et y de depart car on connait l'etat initial
        blackPieces.push(<Rook couleur='noir' nom='rook' x='0' y='0'  />);
        blackPieces.push(<Knight couleur='noir' nom='knight' x='0' y='1' />);
        blackPieces.push(<Bishop couleur='noir' nom='bishop' x='0' y='2' />);
        blackPieces.push(<Queen couleur='noir' nom='queen' x='0' y='3'/>);
        blackPieces.push(<King couleur='noir' nom='king'  x='0' y='4'/>);
        blackPieces.push(<Bishop couleur='noir' nom='bishop' x='0' y='5' />);
        blackPieces.push(<Knight couleur='noir' nom='knight' x='0' y='6'/>);
        blackPieces.push(<Rook couleur='noir' nom='rook' x='0' y='7'/>);
 
        var whitePieces = [];
        whitePieces.push(<Rook couleur='blanc' nom='rook' x='7' y='0'/>);
        whitePieces.push(<Knight couleur='blanc' nom='knight' x='7' y='1'/>);
        whitePieces.push(<Bishop couleur='blanc' nom='bishop' x='7' y='2'/>);
        whitePieces.push(<Queen couleur='blanc' nom='queen' x='7' y='3'/>);
        whitePieces.push(<King couleur='blanc' nom='king' x='7' y='4'/>);
        whitePieces.push(<Bishop couleur='blanc' nom='bishop' x='7' y='5'/>);
        whitePieces.push(<Knight couleur='blanc' nom='knight' x='7' y='6'/>);
        whitePieces.push(<Rook couleur='blanc' nom='rook' x='7' y='7'/>);
 
 
 
 
         for(let i = 0;i<8;i++){
             for(let j = 0;j<8;j++){
 
                 var tmp = j;
                 if(i%2!=0){
 
                     
                     if(j%2==0){
 
                     if(i==7){
                         this.allPiecesInPlay.push(whitePieces[tmp]); // Test 
 
                         this.squares.push(<div className="square_marron_fonce" data-id={[i,j]} onClick={this.deplacement.bind(this)}>
                         {whitePieces[tmp]}</div>)
                     }
 
                     if (i==1){
                         this.allPiecesInPlay.push(<Pion couleur='noir' nom='Pion' x={i} y={j} />); // test
 
                         this.squares.push(<div className="square_marron_fonce" data-id={[i,j]} onClick={this.deplacement.bind(this)}>
                         <Pion couleur='noir' nom='Pion' x={i} y={j} /></div>)
                       }
                     if(i!=1 && i!=7){
                         this.squares.push(<div className="square_marron_fonce" data-id={[i,j]} onClick={this.deplacement.bind(this)}></div>) 
                      }
 
                     }else{
 
                     if(i==7){
                         this.allPiecesInPlay.push(whitePieces[tmp]); // Test 
 
                         this.squares.push(<div className="square_marron_pale" data-id={[i,j]} onClick={this.deplacement.bind(this)}>
                         {whitePieces[tmp]}</div>)
                     }
 
                         if (i==1){
                             this.allPiecesInPlay.push(<Pion couleur='noir' nom='Pion' x={i} y={j} />); // Test 
 
                             this.squares.push(<div className="square_marron_pale" data-id={[i,j]} onClick={this.deplacement.bind(this)}>
                             <Pion couleur='noir' nom='Pion' x={i} y={j} /></div>)
                           }
                           if(i!=7 && i!=1){
                             this.squares.push(<div className="square_marron_pale" data-id={[i,j]} onClick={this.deplacement.bind(this)}></div>) 
                          }
                     }
                 }else{

                    if(j%2==0){
 
                     if(i==0){
                         this.allPiecesInPlay.push(blackPieces[tmp]); // test
                         
                         this.squares.push(<div className="square_marron_pale" data-id={[i,j]} onClick={this.deplacement.bind(this)}>
                         {blackPieces[tmp]}</div>)
                     }
 
                     if(i==6){
                         this.allPiecesInPlay.push(<Pion couleur='blanc' nom='Pion' x={i} y={j} />) // test
 
                         this.squares.push(<div className="square_marron_pale" data-id={[i,j]} onClick={this.deplacement.bind(this)}>
                         <Pion couleur='blanc' nom='Pion' x={i} y={j} /></div>)
                     }
                     if(i!=0 && i!=6){
                       this.squares.push(<div className="square_marron_pale" data-id={[i,j]} onClick={this.deplacement.bind(this)}></div>)
                     }
 
                   }else{
 
                     if(i==0){
                         this.allPiecesInPlay.push(blackPieces[tmp]) // test
 
                         this.squares.push(<div className="square_marron_fonce" data-id={[i,j]} onClick={this.deplacement.bind(this)}>
                         {blackPieces[tmp]}</div>)
                     }
 
                     if(i==6){
                         this.allPiecesInPlay.push(<Pion couleur='blanc' nom='Pion' x={i} y={j} />) // test 
 
                         this.squares.push(<div className="square_marron_fonce" data-id={[i,j]} onClick={this.deplacement.bind(this)}>
                         <Pion couleur='blanc' nom='Pion' x={i} y={j} /></div>)
                     }
                     if(i!=0 && i!=6){
                       this.squares.push(<div className="square_marron_fonce" data-id={[i,j]} onClick={this.deplacement.bind(this)}></div>)
                     }
 
                    }
 
                 }
             }
         }
        }else{ // refaire le board a chaque move ; pas tres algorithmique mais bon j'essaie de le refaire apres!!!

        // Verification si le jeu a ete gagne:
        var nbKing = 0;
        var winningColor  = [];
        for ( var k = 0; k<this.allPiecesInPlay.length; k++){
            if(this.allPiecesInPlay[k].props.nom == 'king'){
               nbKing++;
               winningColor.push(this.allPiecesInPlay[k].props.couleur)
            }
        }

        if(nbKing == 1){
        return <h1>Les {winningColor[0]+'s'} ont gagne la partie, Felicitations :)</h1>
        }


        this.squares = []; // Pour refaire le board, on vide squares!!!
        
        for(let i = 0;i<8;i++){
            for(let j = 0;j<8;j++){
                for(var l = 0;l<this.allPiecesInPlay.length; l++){

                if(i ==  parseFloat(this.allPiecesInPlay[l].props.x) && j ==  parseFloat(this.allPiecesInPlay[l].props.y)){

                   var x = parseFloat(this.allPiecesInPlay[l].props.x);
                   var y = parseFloat(this.allPiecesInPlay[l].props.y);
                   var k = l;


                }

                }

                    if(i%2!=0){
                        if(j%2==0){
                        if(x==i && y==j){
                            


                            this.squares.push(<div className="square_marron_fonce" data-id={[i,j]} onClick={this.deplacement.bind(this)}>{this.allPiecesInPlay[k]}</div>)}
                           else{this.squares.push(<div className="square_marron_fonce" data-id={[i,j]} onClick={this.deplacement.bind(this)}></div>)}
                    
                        }else{
                            if(x==i && y==j){this.squares.push(<div className="square_marron_pale" data-id={[i,j]} onClick={this.deplacement.bind(this)}>{this.allPiecesInPlay[k]}</div>)}
                            else{this.squares.push(<div className="square_marron_pale" data-id={[i,j]} onClick={this.deplacement.bind(this)}></div>)}
                        }
                    }else{

                    if(j%2==0){
                        if(x==i && y==j){this.squares.push(<div className="square_marron_pale" data-id={[i,j]} onClick={this.deplacement.bind(this)}>{this.allPiecesInPlay[k]}</div>)}
                           else{this.squares.push(<div className="square_marron_pale" data-id={[i,j]} onClick={this.deplacement.bind(this)}></div>)}
                            }else{
                                if(x==i && y==j){this.squares.push(<div className="square_marron_fonce" data-id={[i,j]} onClick={this.deplacement.bind(this)}>{this.allPiecesInPlay[k]}</div>)}
                                else{this.squares.push(<div className="square_marron_fonce" data-id={[i,j]} onClick={this.deplacement.bind(this)}></div>)}
                                }

                    }
                
            }
        }

        }

        // Un petit test:
        return <div className="board">{this.squares}</div>;

    }

    




    render(){


    return(
        
        this.initialBoard()
        ) ;
    }






}

export default Board;



ReactDom.render(
    <Board />,
    document.getElementById('root')
)

