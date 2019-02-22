$(document).ready(function(){

  $(".tab_content").hide();
  $(".tab_content:first").show();

  $("ul.tabs li").click(function() {

    $(".tab_content").hide();
    var active_tab = $(this).attr("rel"); 
    $("#"+active_tab).fadeIn();		

    $("ul.tabs li").removeClass("active");
    $(this).addClass("active");

    $(".tab_accordion_heading").removeClass("acc_active");
    $(".tab_accordion_heading[rel^='"+active_tab+"']").addClass("acc_active");

  });

  $(".tab_accordion_heading").click(function() {      
    $(".tab_content").hide();
    var acc_active_tab = $(this).attr("rel"); 
    $("#"+acc_active_tab).fadeIn();

    $(".tab_accordion_heading").removeClass("acc_active");
    $(this).addClass("acc_active");

    $("ul.tabs li").removeClass("active");
    $("ul.tabs li[rel^='"+acc_active_tab+"']").addClass("active");
  });

  $('ul.tabs li').last().addClass("tab_last");
  
});