document.addEventListener("click", function (e) {
    // Delete Button
    if (e.target.classList.contains("delete-me")) {
        if (confirm("Do you want really delete this item ?")) {
            axios
                .post("/delete-item", {
                    id: e.target.getAttribute("data-id")
                })
                .then()
                .catch(err => {
                    console.log(err);
                });
        }
    }
    // Edit Button
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