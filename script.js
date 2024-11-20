function wordCount() {
    let cont_data=document.getElementById("cont_data").value;
    let count=document.getElementById("count");
    console.log(cont_data)
    let a=cont_data.length;
    count.innerHTML=a +" "+ "Words";
}
wordCount();