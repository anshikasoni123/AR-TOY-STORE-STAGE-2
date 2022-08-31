AFRAME.registerComponent("marker-handler",{
    init: async function(){
        this.el.addEventListener("markerFound",()=>{
            console.log("marker found");
            this.handleMarkerFound();
        })
        this.el.addEventListener("markerLost",()=>{
            console.log("marker lost")
            this.handleMarkerLost();
        })
    },
    handleMarkerFound:function(){
        var buttonDiv = document.getElementById("button-div");
        buttonDiv.style.display = "flex";

        var summery_button = document.getElementById("order-summary-button");
        var order_button = document.getElementById("order-now-button");

        summery_button.addEventListener("click",()=>{
            swal({
               icon:"info",
               title:"Order Summery",
               text:"Toy Name :- Robot\nQuantity :- 1N \n Price :- $699\nType :- Working Robot\nMaterial :- Metal & Plastic\nBattery :- Chargable \n Origin :- Made In India",
               button:"Got it!"
            })
        })

        order_button.addEventListener("click",()=>{
            swal({
               icon:"https://i.imgur.com/4NZ6uLY.jpg",
               title:"Confirmation",
               text:"Are you sure, you want to order this item ?",
               buttons:true
            })
            .then((confirm)=>{
                if(confirm){
                    swal({
                        icon:"success",
                        title:"Order placed😍😍", 
                        text:"You will soon recieve your order👜👜",
                        button:"Ahh Yess!"
                    })
                }
                else{
                    swal({
                        icon:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN0ICo7jOU0SxqH76t81LF5pdsC-UIOTX90Q&usqp=CAU",
                        title:"No Worry🙁🙁",
                        text:"Please look at other best items👗👠👚👓🎩"
                    })
                }
            })

        })
    },
    handleMarkerLost:function(){
        var buttonDiv = document.getElementById("button-div");
        buttonDiv.style.display = "none";
    }
})