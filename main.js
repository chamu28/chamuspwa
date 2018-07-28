//function Loadjson(file,callback) {
  //var xhr = new XMLHttpRequest();
//  xhr.overrideMimeType("application/json");
//  xhr.open("GET",file,true);
//  xhr.onreadystatechange = function() {
//    if(xhr.readyState === 4 && xhr.status == "200"){
  //  callback(xhr.responseText);
//  }
//xhr.send(null);
//}
//Loadjson("data.json",function(text)
//{
//  var data = JSON.parse(text);
//  console.log(data);
//  careerinfo(data.career);
//  education(data.education);
//  skills(data.skills);
//  achievements(data.achievements);
//})
function loadjson(file) {
  return new Promise((resolve,reject)=>{
    return fetch(file).then(response=>{
      if(response.ok){
      resolve(response.json());
    }
  else{
    reject(new Error('error'));
  }

})
})

}
var newfile = loadjson("data.json");
newfile.then(data=>{
  console.log(data);
  basics(data.details);
   careerinfo(data.career);
   education(data.education);
   skills(data.skills);
   achievements(data.achievements);

})

var childone=document.querySelector(".child1")
function basics(det) {
  var image = document.createElement("img")
  var name = document.createElement("name")
  var phone=document.createElement("h4")
  image.src = det.image;
  name.textContent=det.name;
  phone.textContent = det.phoneno;
  childone.appendChild(image);
  childone.appendChild(name);
  childone.appendChild(phone);

  var email = document.createElement("a");
  email.href="mailto:chamupuvvada1113@gmail.com";
  email.textContent = det.email;
  childone.appendChild(email);

  var add = document.createElement("h2");
  add.textContent = "Address:";
  childone.appendChild(add);

  var hr = document.createElement("hr");
  childone.appendChild(hr);

  var p= document.createElement("p")
  p.textContent = det.Address;
  childone.appendChild(p);
}
var childtwo = document.querySelector(".child2");
function careerinfo(info) {
  var heading = document.createElement("h2");
  heading.textContent = "Career Objective";
  childtwo.appendChild(heading);

  var hr = document.createElement("hr");
  childtwo.appendChild(hr);

  var c = document.createElement("h2");
  c.textContent = info.info;
  childtwo.appendChild(c);
}
function education(edu) {
  var hd = document.createElement("h2");
  hd.textContent = "Educational Qualification";
  childtwo.appendChild(hd);

  var hr = document.createElement("hr");
  childtwo.appendChild(hr);

  var table1 = document.createElement("table");
  table1.border = "1";
  childtwo.appendChild(table1);

  tabledata="";
  for(i=0;i<edu.length;i++){
  tabledata+="<tr><td>"+edu[i].qualification+"</td><td>"+edu[i].institute+"</td><td>"+edu[i].year+"</td><td>"+edu[i].percentage+"</td></tr>";
  }
table1.innerHTML=tabledata;
}
function skills(skillinfo) {
  var hd=document.createElement("h2");
  hd.textContent="Technical Skills";
  childtwo.appendChild(hd);

  var hr = document.createElement("hr");
  childtwo.appendChild(hr);

  for(i=0;i<skillinfo.length;i++){
    var title=document.createElement("h4");
    title.textContent=skillinfo[i].title;
    childtwo.appendChild(title);

    var eduul = document.createElement("ul");
    var eduli = document.createElement("li");
    eduli.textContent=skillinfo[i].info;
    eduul.appendChild(eduli);
    childtwo.appendChild(eduul);
  }


}
function achievements(ac) {


  var title=document.createElement("h2");
  title.textContent="Achievements";
  childtwo.appendChild(title);

  var hr = document.createElement("hr");
  childtwo.appendChild(hr);

    var eduul = document.createElement("ul");
    var eduli = document.createElement("li");
    eduli.textContent=ac.info;
    eduul.appendChild(eduli);
    childtwo.appendChild(eduli);
    childtwo.appendChild(eduul);
}
function openpage(){
  window.open("resume.html","_self",true)
}
