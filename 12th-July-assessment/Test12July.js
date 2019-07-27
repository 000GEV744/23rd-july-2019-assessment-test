
//function to save the trainers 
function saveTrainer(){
    console.log("SAVED")
    // create Employee Service Object
    const emp = new TrainerService();
    emp.setup(
        document.getElementById('tId').value,
        document.getElementById('tName').value,
        document.getElementById('tEmail').value,
        document.getElementById('tSubjects').value
        );
    // SAVE trainer
    emp._add();

    //clearing all the fields after saving the trainer details 
    document.getElementById('tId').value=""
    document.getElementById('tName').value=""
    document.getElementById('tEmail').value=""
    document.getElementById('tSubjects').value=""
}

//saving trainer details 
class TrainerService {

    setup(tId,tName,tEmail,tSubjects){
            this.tId = tId
            this.tName = tName
            this.tEmail = tEmail
            this.tSubjects = tSubjects
    }

    //saving the trainer details in the local storage.
    _add(){
        localStorage.setItem(this.tId,JSON.stringify({
            tId :  parseInt(this.tId),
            tName: this.tName,
            tEmail: this.tEmail,
            tsubject: this.tSubjects
        }));

    }
}



//showing the trainer which is free at the given criterieon
function fetchTrainer(){
   var subject=''
    subject=document.getElementById('tChooseSubjects').value
    var row=[];
    row= Object.keys(localStorage);     
    let TrainerArray = []
        if(localStorage.length > 0 ){
            Object.keys(localStorage)
            .forEach((key)=>{
                Items=JSON.parse(localStorage.getItem(key))
                if(Items.tsubject==subject){
                   TrainerArray.push(JSON.parse(localStorage.getItem(key)).tName);
                }
            }) 
}
console.log(TrainerArray);
document.getElementById('tChooseSubjects').value=""
document.getElementById("output").innerHTML = TrainerArray;
}
 