let totalData=[]
async function fetchData ()
{
   const det = await fetch("https://api.sampleapis.com/codingresources/codingResources")
    const json_data = await det.json();
    totalData = json_data;
    displayData(json_data)
}
fetchData()
const mainDiv= document.getElementById('main')
function displayData (data)
{
    mainDiv.textContent=""
    data.forEach(function (k)
    {
        const div = document.createElement("div")//<div>
        div.classList.add('source')
        const des = document.createElement("p")//<p>
        des.textContent = k.description;//<p>dsgjsghjdgs</p>
        const levels = document.createElement('p');
        levels.textContent="levels: "+k.levels.map(function(l){return l})
        const anchor = document.createElement("a") //<a>
        anchor.href = k.url//<a href="dvhd">
        anchor.classList.add('btn')
anchor.classList.add("btn-primary")

        anchor.textContent = "click me"
        anchor.target="_blank"
        div.append(des, anchor,levels)
        //insert paragraph and anchor in div
        mainDiv.appendChild(div)
        
    })
  
}
function filterData ($event)
{
    alert(event.target.textContent);
    const newData = totalData.filter(function (k)
    {
        return event.target.textContent.toLowerCase()==k.levels[0]
    })
    displayData(newData)
}