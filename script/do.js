/*js点击事件*/

var shouyebeijing = document.getElementById("shouyebeijing");
var tuku = document.getElementById("tuku");
var xiaojuchang = document.getElementById("xiaojuchang");
var dongman = document.getElementById("dongman");

var shouyebt = document.getElementById("shouyebt");
var tukubt = document.getElementById("tukubt");
var xiaojuchangbt = document.getElementById("xiaojuchangbt");
var guankandongmanbt = document.getElementById("guankandongmanbt");

shouyebt.onclick = function(){
    shouyebeijing.style.display='block';
    tuku.style.display='none';
    xiaojuchang.style.display='none';
    dongman.style.display='none';
    login.style.display='none';
}
tukubt.onclick = function(){
    shouyebeijing.style.display='none';
    tuku.style.display='block';
    xiaojuchang.style.display='none';
    dongman.style.display='none';
    login.style.display='none';
}
xiaojuchangbt.onclick = function(){
    shouyebeijing.style.display='none';
    tuku.style.display='none';
    xiaojuchang.style.display='block';
    dongman.style.display='none';
    login.style.display='none';
}
guankandongmanbt.onclick = function(){
    shouyebeijing.style.display='none';
    tuku.style.display='none';
    xiaojuchang.style.display='none';
    dongman.style.display='block';
    login.style.display='none';
}


/*js缩略图效果*/
var smallpic = document.getElementById("smallpic");
var imgList = smallpic.getElementsByTagName("img");
var bigpic = document.getElementById("bigpic");
imgList[0].setAttribute("index", 1);
imgList[0].setAttribute("class", "pb");
bigpic.setAttribute("src", imgList[0].getAttribute("src"));
for(var i = 0; i < imgList.length; i++) {
    imgList[i].onclick = function() {
        for(var i = 0; i < imgList.length; i++) {
            if(imgList[i].hasAttribute("class")) {
                imgList[i].removeAttribute("class");
            }
        }
        this.setAttribute("class", "pb");
        bigpic.setAttribute("src", this.getAttribute("src"));
        this.setAttribute("index", 1);
    }
}

/*js回到顶部*/
var topbt = document.getElementById("topbt");

topbt.onclick = function(){
	scrollTo(0,0);
}
/*js效果用户注册*/
var zhuce = document.getElementById("zhuce");
var usertext = document.getElementById("usertext");
var passwordtext = document.getElementById("passwordtext");
var warn1 = document.getElementById("warn1");
var warn2 = document.getElementById("warn2");
var sub = document.getElementById("sub");
var suc1 = document.getElementById("suc1");
var suc2 = document.getElementById("suc2");
var suc3 = document.getElementById("suc3");
usertext.onfocus = function(){
    warn1.innerHTML = "支持中文数字";
}
usertext.onblur = function (){
    warn1.innerHTML = "";
    if (usertext.value ==""){
        warn1.innerHTML = "用户名不能为空";
    }
}
passwordtext.onfocus = function (){
    warn2.innerHTML = "建议使用两种字符组合";
}
passwordtext.onblur = function (){
    warn2.innerHTML = "";
    if (passwordtext.value == ""){
        warn2.innerHTML ="密码不能为空";
    }
}
sub.onclick = function(){
    suc1.innerHTML = "注册完成！";
    suc2.innerHTML = "用户名："+usertext.value;
    suc3.innerHTML = "密码："+passwordtext.value;
    setTimeout(function(){
        shouyebeijing.style.display = 'block';
        tuku.style.display = 'none';
        xiaojuchang.style.display = 'none';
        dongman.style.display = 'none';
        login.style.display = 'none';
    },3000);
}
zhuce.onclick = function(){
    login.style.display = 'block';
    shouyebeijing.style.display = "none";
    tuku.style.display = 'none';
    xiaojuchang.style.display = 'none';
    dongman.style.display = 'none';
    login.style.height = '1080px';
}




