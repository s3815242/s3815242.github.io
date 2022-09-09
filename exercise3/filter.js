
function filterCategory(filterSelection, filterBy){
    //filter selesction is category
    //filterBy is thing to match
    let itemsToFilter = Array.from(document.getElementsByClassName("RecipeCardWrapper"));
    for(let listItem of itemsToFilter){
    
        if(listItem.dataset[filterSelection] === filterBy){
            listItem.style.display = "flex";
        }else{
            listItem.style.display = "none";
        }
    }
}
/* Return a list of valuable on that class name (The class RecipeCardWrapper
    In for() Loop means run the task in for () over and over again. But get the list of the item first. If the autor 
    is one of the HM then display it. But If not, then hidden it in the webpage
    
    run(filterSelection) is the set up of the category
    run(filterBy)   is looking to filter it for author's name*/


    function filterAll(){
        //filter selection is category
        //filterBy is thing to match
        let itemsToFilter = Array.from(document.getElementsByClassName("RecipeCardWrapper"));
        for(let listItem of itemsToFilter){
            listItem.style.display = "flex";
        }
    }