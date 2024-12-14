let btn = document.querySelector("#bt");

let url = "https://dog.ceo/api/breeds/image/random";


btn.addEventListener("click",async()=>{
    let link = await getImg();
    let img = document.querySelector("#result");
    img.setAttribute("src",link);
    console.log(link); 
});

async function getImg() {
    try{
        let res = await axios.get(url);
        return res.data.message ;
    }catch(e){
        console.log("Error occured",e);
        return "No image found";
    }
}
