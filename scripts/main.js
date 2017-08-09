document.getElementById('JS').style.display='none';
document.getElementById('showme').style.display='block';

document.getElementById('click').onclick= function(){
document.getElementById('showme').style.display='none';
document.getElementById('JS').style.display='block';
}

function searchGoogle() {
     term=document.getElementById("form-search");
     window.open("https://google.com/#q="+term.value);
    
}

function popup() {
    alert('Try this website!');
}