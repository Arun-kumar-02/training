function changeTheme(){
    const container = document.getElementById("container");
    const button = document.getElementById("toggleBtn")

    if(container.classList.contains("dark-mode"))
    {
        container.classList.remove("dark-mode");
        container.classList.add("light-mode");
        button.innerText = "Dark Mode";
    }

    else{
        container.classList.remove("light-mode")
        container.classList.add("dark-mode");
        button.innerText = "Light Mode";
    }
}
