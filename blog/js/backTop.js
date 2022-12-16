// 当网页向下滑动 400px 出现"返回顶部" 按钮
window.onscroll = function() {scrollFunction()};
 
function scrollFunction() {console.log(121);
    if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
        document.getElementById("BtnTop").style.display = "block";
    } else {
        document.getElementById("BtnTop").style.display = "none";
    }
}
 
// 点击按钮，返回顶部
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}