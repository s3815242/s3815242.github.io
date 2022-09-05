let isDarkMode = false;

function switchModes(){
    if(isDarkMode === false){
        document.documentElement.style.setProperty("--col-01", "#1B4965");
        document.documentElement.style.setProperty("--col-02", "#CAE9FF");
        document.getElementById("modeButton").innerHTML = "Light Mode";
        isDarkMode = true;
    }else{
        document.documentElement.style.setProperty("--col-01", "#CAE9FF");
        document.documentElement.style.setProperty("--col-02", "#1B4965");
        document.getElementById("modeButton").innerHTML = "Dark Mode";
        isDarkMode = false;
    }
    
 /*SwithMode function
 Boolean is a type of variable in computer language. Stores truth values, true and false, or true and false. 
 Use boolean or bool statements to declare variable types to variables. If the dark mode that --col-01 is the colour 1B4965 and --col-02 is CAE9FF are false.
 Then swap the colour*/
}