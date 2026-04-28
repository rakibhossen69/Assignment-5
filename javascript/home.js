const fetchPromise= async()=>{
    try {
        const res= await fetch("https://phi-lab-server.vercel.app/api/v1/lab/issues")
        const data = await res.json()
        console.log(data);  
        // console.log(allBtn);
        data.data.forEach(allData => {
            console.log(allData);
                
        });
    } catch (error) {
        console.log(error);       
    }
}
fetchPromise()
// const allBtn=document.getElementById("btn-container")