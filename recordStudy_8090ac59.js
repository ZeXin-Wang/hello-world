/*! ablejs - v0.2.0 - Friday, June 4th, 2021, 6:32:19 PM
* http://www.ablesky.com
* Copyright (c) 2021 frontend@ablesky.com; Licensed  */
define(["module","jquery","common/base64","lib/jquery/jquery.dialog"],function(o,e){function n(){var o=currPlayCoursecontentId;if(console.log(">>>>>currPlayCoursecontentId="+o+"  finishIds[currPlayCoursecontentId]="+l[o]),"undefined"==typeof l[o]&&(l[o]=!1),l[o])return console.log(">>>finish! courseContentId="+o),s(),a=0,localStorage.setItem(u,Base64.encode("0")),void 0;var n=Math.floor(a/60);n=1>n?1:n,console.log(">>>>>>>studyMins="+n);var t={};t=1==n?{id:o,circleId:jsp_circleId,finish:d,ct:e.now()}:{id:o,circleId:jsp_circleId,finish:d,studyMins:n,ct:e.now()},e.ajax({url:"studyLog.do",data:t,dataType:"json",type:"post",success:function(t){t.success?(t.progress>=100?(l[o]=!0,e("#J_studyProgress_"+o).html("100%")):(l[o]=!1,e("#J_studyProgress_"+o).html(t.progress+"%")),d||(a-=60*n,a=0>a?0:a)):"double"==t.message&&(window.playerPause(),a=0,localStorage.setItem(u,Base64.encode("0")),c("同时只支持一门课程学习且计时！"))}})}function t(){d=!1,i&&s(),i=window.setInterval(function(){a++,console.log(">>count="+a);var o=a%60;localStorage.setItem(u,Base64.encode(a.toString())),a>=60&&0==o&&(console.log(">>>record count="+a),n())},100)}function c(o){var n=e.dialog({boxid:"showMessage_boxid",title:"提示",headStyle:{backgroundColor:"#c0130d"},bodyStyle:{backgroundColor:"#F7F7F7"},footStyle:{backgroundColor:"#F7F7F7"},content:"<center>"+o+"</center>",modal:!0,width:370,buttons:[{text:"知道了",css:{backgroundColor:"#c0130d"},click:function(){n.close(),-1!=navigator.userAgent.indexOf("Firefox")||-1!=navigator.userAgent.indexOf("Chrome")?(window.location.href="about:blank",window.close()):(window.opener=null,window.open("","_self"),window.close())}}]});e(".dialog-close").hide()}function r(){console.log(">>>videoPlayEnd<<<<<"),s(),d=!0,n()}function s(){clearInterval(i)}o.config();var l=[],d=!1,i=null,a=0,u="COUNT_"+accountId+"_"+courseId_jsp+"_"+jsp_circleId,g=function(){try{a=Base64.decode(localStorage.getItem(u)),a=parseInt(a)}catch(o){console.log("get count error!"),a=0}console.log(">>>>init count="+a),a||(a=0)};return{init:g,courseRecord:t,clearRecordTimer:s,videoPlayEnd:r}});