const domBuilder = {
     appendForm () {
            let inputForm = `
        <article>
            <fieldset>
                <label for="lego__creator">Creator:</label>
                <input id="lego__creator" name="lego__creator" type="text" autofocus />
            </fieldset>
            <fieldset>
                <label for="lego__name">Name:</label>
                <input id="lego__name" name="lego__name" type="text" autofocus />
            </fieldset>
            <fieldset>
                <label for="lego__shape">Shape:</label>
                <input id="lego__shape" name="lego__shape" type="text" autofocus />
            </fieldset>
            <fieldset>
                <label for="lego__color">Color:</label>
                <select id="lego__color"></select>
            </fieldset>
        </article>
        `;

        let btn = document.createElement("button")
        btn.classList.add("lego__save")
        var t = document.createTextNode("Save Lego Creation")
        btn.appendChild(t);
        btn.addEventListener("click", eventListeners.handleFormSubmission);
        let displayContainer = document.querySelector("#display-container");
        displayContainer.innerHTML = inputForm;
        displayContainer.appendChild(btn);
     },

     findColor() {
        data.getColor()
        .then (colorObj =>{
            let HTMLcollection = "";
            colorObj.forEach (color => {
                HTMLcollection += `<option value = ${color.id}>${color.name}</option>`
            })
            let colorDropdown = document.querySelector("#lego__color");
            colorDropdown.innerHTML = HTMLcollection;
        })
     }





        //alternatively you could create all of the elements above using createElement and when you're creating the button add the event listener to the button when you create the element
        // let newButton = document.createElement("button");
        // newButton.addEventListener("click", eventListeners.handleFormSubmissions);
        // displayContainer.appendChild(newButton);
    };







