function search_name() { 
    let input = document.getElementById('searchbar').value 
    input=input.toLowerCase(); 
    let x = document.getElementsByClassName('name'); 
    let plusOneNameButton = document.getElementById("plusOneForm");
    let nonPlusOneNameButton = document.getElementById("nonPlusOneForm");
    let foundNames = 0;
    let foundIndex = 0;
      
    for (i = 0; i < x.length; i++) {  
        x[i].style.visibility="hidden";
        if (x[i].innerHTML.toLowerCase().includes(input)) { 
            foundNames++;
            foundIndex = i;                 
        } 
    }
    if (foundNames == 1)
    {
        // Make the button text say the name
        let buttonName = "Name";
        // For those that get plus ones
        if(x[foundIndex].innerHTML.toLowerCase().includes("*"))
        {
            buttonName = x[foundIndex].innerHTML.substring(0, x[foundIndex].innerHTML.length - 1);
            // Load plus one form
            plusOneNameButton.style.visibility = "visible";
            nonPlusOneNameButton.style.visibility = "hidden";
            plusOneNameButton.textContent = buttonName;
        }
        else
        {
            buttonName = x[foundIndex].innerHTML;
            // Load non-plus one form
            nonPlusOneNameButton.style.visibility = "visible";
            plusOneNameButton.style.visibility = "hidden";
            nonPlusOneNameButton.textContent = buttonName;
        }
    }
    else
    {
        plusOneNameButton.style.visibility="hidden";
        nonPlusOneNameButton.style.visibility="hidden";
    }
} 