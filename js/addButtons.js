AFRAME.registerComponent("createbuttons", {
    init:function(){
        //order button
        var button1 = document.createElement("button")
        button1.innerHTML = "ORDER NOW"
        button1.setAttribute("id", "order-button")
        button1.setAttribute("class", "btn btn-danger ml-3 mr-3")

        //bill button
        var button2 = document.createElement("button")
        button2.innerHTML="ORDER SUMMARY"
        button2.setAttribute("id", "order-summary-button")
        button2.setAttribute("class", "btn btn-danger ml-3")

        //append
        var buttonDiv = document.getElementById("button-div")
        buttonDiv.appendChild(button1)
        buttonDiv.appendChild(button2)
    }
})