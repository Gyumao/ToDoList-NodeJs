document.addEventListener("click", function (e) {
    if (e.target.classList.contains("edit-me")) {
        let userInput = prompt("veuillez entrer votre nouvelle tâche...");
        axios
            .post("/update-item", {
                itemUpdated: userInput,
                id: e.target.getAttribute("data-id")
            })
            .then()
            .cathc(err => {
                console.log(err);
            });
    }
});