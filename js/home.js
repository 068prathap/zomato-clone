var nb1="nb1";
function menu_bar(mb)
{
    mb.classList.toggle("close");
    document.getElementById("nav_bar").classList.toggle("nav_bar");
    var nb_1=document.getElementById("nb_1").className;
    document.getElementById("nb_1").className=nb1;
    nb1=nb_1;
    document.getElementById("bf_2").classList.toggle("bf2");
}
function radio1()
{
    document.getElementsByClassName("gta_in_1")[0].style.display="flex";
    document.getElementsByClassName("gta_in_2")[0].style.display="none";
}
function radio2()
{
    document.getElementsByClassName("gta_in_1")[0].style.display="none";
    document.getElementsByClassName("gta_in_2")[0].style.display="flex";
    document.getElementsByClassName("gta_in_1_vl1")[0].className="gta_in_1_vl3";
}
function email1()
{
    console.log("hi");
    if(document.getElementsByClassName("gta_in_1_vl1")[0]==undefined)
    {
        document.getElementsByClassName("gta_in_1_vl3")[0].className="gta_in_1_vl2";
    }
    else
    {
        document.getElementsByClassName("gta_in_1_vl1")[0].classList.toggle("gta_in_1_vl2");
    }
}
function email2()
{
    if(document.getElementsByClassName("gta_in_1_vl1")[0]==undefined)
    {
        document.getElementsByClassName("gta_in_1_vl3")[0].className="gta_in_1_vl2";
    }
    else
    {
        document.getElementsByClassName("gta_in_1_vl1")[0].classList.toggle("gta_in_1_vl2");
    }
    document.getElementsByClassName("gta_in_1_vl1")[0].classList.toggle("gta_in_1_vl2");
}
function close_app()
{
    document.getElementsByClassName("open_app")[0].style.display="none";
}
function drop_down()
{
    document.getElementsByClassName('search_location')[0].classList.toggle('search_location-1');
    document.getElementsByClassName('drop_down')[0].classList.toggle('drop_down-1');
}
function explore_list(index)
{
    document.getElementsByClassName('explore_list')[index].classList.toggle('explore_list-1');
    document.getElementsByClassName('open_explore_list')[index].classList.toggle('open_explore_list-1');
}
function explore_list1()
{
    document.getElementsByClassName('explore_list1')[0].classList.toggle('explore_list1-1');
    document.getElementsByClassName('open_explore_list')[2].classList.toggle('open_explore_list-1');
}

let details = navigator.userAgent;
console.log(details);
let mobile = /android|iphone/i;
let ipad=/ipad/i;
let isMobileDevice = mobile.test(details);
let ipadDevice=ipad.test(details);
if(isMobileDevice)
{
    document.getElementsByClassName("nav_ba")[0].style.display="none";
    document.getElementsByClassName("bf_1")[0].style.display="inline-flex";   
    document.getElementsByClassName("zomato_white")[0].style.width="142px";
    document.getElementsByClassName("zomato_white")[0].style.height="30px";  
    document.getElementsByClassName("bf_3")[0].style.display="flex";
    document.getElementsByClassName("banner_secound")[0].classList.toggle("bs");
    document.getElementsByClassName("banner_secound")[0].style.padding="90px 0px 0px 0px";
    document.getElementsByClassName("banner_third")[0].classList.toggle("bt");
    document.getElementById("bf_2").style.display="none";
    document.getElementsByClassName("banner_fourth")[0].style.display="block";
    document.getElementsByClassName("bfo_2_1")[0].style.display="none";
    document.getElementsByClassName("bfo_2")[0].style.padding="4px";
    document.getElementsByClassName("bfo_2")[0].classList.toggle("bfo_2-2");
    document.getElementsByClassName("bfo_1_in")[0].style.flex="1";
    document.getElementsByClassName("bfo_1")[0].style.flex="1";
    document.getElementsByClassName("bfo_1-1")[0].style.padding="0px 12px 0px 12px";
    document.getElementsByClassName("bfo_1-1")[0].style.display="flex";
    document.getElementsByClassName("bfo_1")[0].classList.toggle("bfo");
    document.getElementsByClassName("bfo_3-3")[0].style.display="flex";
    document.getElementsByClassName("bfo_3")[0].style.display="flex";
    document.getElementsByClassName("dish")[0].style.display="flex";
    document.getElementsByClassName("bfo_3")[0].style.width="100%";
    document.getElementsByClassName("bfo_3")[0].classList.toggle("bfo");
    document.getElementsByClassName("bfo_3-3")[0].style.padding="0px 12px 0px 12px";
    document.getElementsByClassName("bfo_3")[0].style.padding="12.5px 0px 13.5px 0px";
    /*-----------------------------------------------------------------------------*/
    // document.getElementsByClassName("main_1")[0].classList.toggle("main_2");
    document.getElementsByClassName("gta_in_btm")[0].innerHTML="Share";
    document.getElementsByClassName("ci_img")[0].style.height="177px";
    document.getElementsByClassName("ci_img")[1].style.height="177px";
    document.getElementsByClassName("ci_img")[2].style.height="177px";
    document.getElementsByClassName("ci_img")[3].style.height="177px";
    document.getElementsByClassName("social_links")[0].innerHTML="Social links";
}
if(ipadDevice)
{
    console.log('hi');
    document.getElementsByClassName("banner_secound")[0].classList.toggle("bsi");
    document.getElementsByClassName("banner_third")[0].classList.toggle("bt_p");
    document.getElementsByClassName("banner_fourth")[0].classList.toggle("bfi");
    document.getElementsByClassName("ftr")[0].style.padding="0px 20px 0px 20px";
}
else
{
    document.getElementsByClassName("banner_secound")[0].className="banner_secound";
}