const fetchPromise=(selectValue)=>{
    // console.log(selectValue);
fetch("https://phi-lab-server.vercel.app/api/v1/lab/issues")
.then(res=>res.json())
.then((data)=>{
    if(selectValue){
        if(selectValue == "all"){
            displayData(data.data)
            return

        }
        const filterData = data.data.filter(product=>product.status == selectValue)
        console.log(filterData);
        console.log(selectValue);
        displayData(filterData)
        return 
    }

    displayData(data.data)
})
    
    
  
};
fetchPromise();
const allBtn=document.getElementById("btn-container")
const productContainer = document.getElementById("card-container");
allBtn.addEventListener("click",(btn)=>{
     btn.preventDefault()
    //  console.log("select change");
   const selectValue = btn.target.textContent
   fetchPromise(selectValue)
})
function displayData(data){
    // console.log(data);
    productContainer.innerHTML=""
    data.forEach((allData) => {
    //   console.log(allData);
      const card = document.createElement("div");
      card.innerHTML = `
            <div id="card-container" class="grid sm:grid-cols-2 md:grid-cols-3 gap-3 ">
                <div class="p-2 drop-shadow-2xl bg-white border-t-4 w-70 ${allData.priority == "low" ? "border-[#a90095]" : "border-[#00a96eFF]"} rounded-xl">
                    <div class="flex justify-between py-4">
                        <img src="../assets/Open-Status.png" alt="">
                        <p class="badge badge-soft ${allData.priority == "medium" ? "badge-warning" : allData.priority == "high"?"badge-secondary" :"badge"} ">${allData.priority}</p>
                    </div>
                    <h1 class="font-semibold">${allData.title} </h1>
                    <p class="text-[#64748bFF] line-clamp-2 py-2">${allData.description} </p>
                    <div class="flex my-2 gap-1">
                        <p class="badge badge-soft ${allData.labels[0] == "bug" ? "badge-secondary":allData.labels=="documentation"? "badge-secondary"  :  "badge-success"} }"> ${allData.labels[0]}</p>
                        <p class="badge badge-soft ${allData.labels[1] == "help wanted" ? "badge-warning": allData.labels[1]=="good first issue"?"badge-info" : "hidden"} "><i class="fa-solid fa-life-ring"></i>${allData.labels[1]}</p>
                    </div>
                    <hr class="my-2">
                    <p>${allData.author} </p>
                    <p class="my-2"> ${allData.updatedAt}</p>
                </div>

            </div>
            `;
      productContainer.appendChild(card);
    });
}
