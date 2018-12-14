const data = {
    postLego (legoToSave) {
        fetch("http://localhost:8088/legos", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(legoToSave)
        });
    },
    getColor() {
        return fetch("http://localhost:8088/colors")
        .then(colors => colors.json())
    }
};
    // deleteLego (legoId) {
    //     fetch(`http://localhost:8088/legos/${legoId}`, {
    //     method: "DELETE",
    //     headers: {
    //         "Content-Type": "application/json"
    //     },
    //     });
    // above is used to delete a lego, with the id as an arguement






