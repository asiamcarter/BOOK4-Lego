const eventListeners = {
    handleFormSubmission () {
        // get input values from form
        //.value is specifc to input forms
        const creator = document.querySelector("#lego__creator").value;
        const name = document.querySelector("#lego__name").value;
        const shape = document.querySelector("#lego__shape").value;
        const color = document.querySelector("#lego__color").textContent;


        //create an object to represent a lego
        const legoObject = {
            creatorName: creator,
            legoName: name,
            legoColor: color,
            legoShape: shape
        };
        // Post to API and pass legoToSave
        data.postLego(legoObject);

    }
};