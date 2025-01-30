import AddPlayerForm from "./AddPlayerForm";

//Tar emot den skapade turneringen från App-jsx
function AddPlayer({tornament, returnPlayer}){

    //Vektor för att hålla i element för att lägga
    //till en spelare med
    let Elemets =[];
    
    //Funktion som kollar vilken kanpp i formuläret
    //Tryckts på för att sedan ta bort den
    function handleVisibility(i){
        const div = document.querySelectorAll(".addPlayer");
        div[i].style.display = "none"; 
    }

    //Loop för att bygga ett "kort" för varje 
    //delatagare som ska läggas till
    for(let i = 0; i < tornament; i++){
        
        //Puschar det till vektorn Elements 
        Elemets.push(
            <div className="addPlayer border p-2 m-1 rounded-3">
                <h3 className="mt-2 ms-2">
                    Player {i + 1}
                </h3>
                {/*Kallar på komponenten som visar ett 
                formulär för att lägga till delatagare med namn*/}
                <AddPlayerForm handleVisibility={handleVisibility} buttonID={i} returnPlayer={returnPlayer}/>
            </div>
        )
    }

   

    return(
        <>
            {/*Skriver ut elementen i vektorn*/}
            {Elemets}
        </>
    )
}

export default AddPlayer;