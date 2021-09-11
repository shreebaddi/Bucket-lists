var bucketList=[];

var listitem=document.getElementById("list-container");

function addValues(){
let value=document.getElementById("input-field").value;
bucketList.push(value);
showList();
}
function reset(){
bucketList=[];
showList();
}
function showList()
{
listitem.innerHTML="";
for (let i = 0; i < bucketList.length; i++)
{
let li=document.createElement("li");
li.innerHTML=bucketList[i]+
`<span>
<img src=" https://i1.faceprep.in/tick-mark.png" class="checked" onclick="remove(`+i+`)">
</span>`;
li.className="list";
listitem.appendChild(li);
}
}
function remove(i){
bucketList.splice(i,1);
showList();
}