
let item = document.getElementById("item1");

item.addEventListener("dragstart",function(e){
    e.dataTransfer.setData("itemId",this.id);
})

document.querySelectorAll(".area").forEach(area=>{
    area.addEventListener("dragover",function(e){
        e.preventDefault();
    })
})
document.querySelectorAll(".area").forEach(area=>{
    area.addEventListener("drop",function(e){
        let data = e.dataTransfer.getData("itemId");
        this.appendChild(document.getElementById(data));
    })
})
