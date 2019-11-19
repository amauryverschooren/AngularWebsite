function calendar(){
    var day=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    var month=['January','February','March','April','May','June','July','August','September','October','November','December'];
    var d=new Date();
    setText('calendar-day', day[d.getDay()]);
    setText('calendar-date', d.getDate());
    setText('calendar-month-year', month[d.getMonth()]+' '+(1900+d.getYear()))
};

function setText(id, val){
    if(val < 10){
        val = '0' + val;    //add leading 0 if val < 10
    }
    document.getElementById(id).innerHTML = val;
};

jQuery(document).ready(function ($) {
    // hide the menu when the page load
    $("#navigation-list").hide();
    // when .menuBtn is clicked, do this
    $(".menuBtn").click(function () {
        // open the menu with slide effect
        $("#navigation-list").slideToggle(300);
    });
});
window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'UA-150154326-1');