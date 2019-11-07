document.addEventListener("click", function (e) {
    if (e.target.classList.contains("edit-me")) {
        let userInput = prompt("veuillez entrer votre nouvelle tâche...");
        axios
            .post("/update-item", {
                itemUpdated: userInput
            })
            .then()
            .cathc(err => {
                console.log(err);
            });
    }
});