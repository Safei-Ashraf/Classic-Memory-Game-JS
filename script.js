 let ImagesArray = ['Game/1.jpg','Game/2.jpg','Game/3.jpg','Game/4.jpg','Game/5.jpg','Game/6.jpg','Game/7.jpg','Game/8.jpg','Game/1.jpg','Game/2.jpg','Game/3.jpg','Game/4.jpg','Game/5.jpg','Game/6.jpg','Game/7.jpg','Game/8.jpg'];

let started = false;
let firstIndex  = -1, secondIndex = -1, matches = 0;


 function hideAll(){
    for (let i = 0; i < ImagesArray.length; i++) 
    {
         document.images[i].src = "Game/0.jpg";    
     }
 }

 let btn = document.getElementById('btnStart');
 btn.onclick = function(){
     //GAME Start 
     started = true;
     //Show Images from Array 
     for (let i = 0; i < ImagesArray.length; i++) {
         document.images[i].src = ImagesArray[i];    
     }
     //Hide Images After 3 Seconds
     setTimeout('hideAll();',3000)
 }
    let startDate = new Date();
    

    function hideTwo()
    {
        document.images[firstIndex].src = "Game/0.jpg";
        document.images[secondIndex].src = "Game/0.jpg";
        firstIndex = secondIndex = -1;

    }
//FLIP Image on Click Event
function flip(index)
{   if(started)
    {   if(document.images[index].src.indexOf ("Game/0.jpg") != -1)
    {
        
        //CHANGE Picture
        if (firstIndex == -1) //First Click
        {
        document.images[index].src = ImagesArray[index];
        firstIndex = index;
        }
        else
        {  //Second Click
            document.images[index].src = ImagesArray[index];
            secondIndex = index;
            //COMPARE
                if(document.images[firstIndex].src == document.images[secondIndex].src)
                { //Equal
                    firstIndex = secondIndex = -1;
                    matches++;
                    //Game Ended
                    if(matches == 8)
                    {
                     endDate = new Date();
                     let diff = endDate - startDate;
                     alert('Congratulations! You finished it in' + diff/1000 + 'Seconds');
                    }
                }
                else
                { //HIDE 2 Images
                 setTimeout('hideTwo();', 500);
                }
         }
    }else{
        alert('You clicked This Image Before!');
    }
        }
    
    else
        {
         alert('Please Press Start to Start (;-_-)');
        }
    
}


