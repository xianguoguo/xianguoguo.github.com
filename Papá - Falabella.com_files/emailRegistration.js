function getFormData(c){var a={};try{$("#"+c).find("input,select,textarea").each(function(){if(this.name){if($(this).attr("type")=="radio"){if($(this).prop("checked")){a[this.name]=$(this).val()}}else{if($(this).attr("type")=="checkbox"){if($(this).prop("checked")){a[this.name]=$(this).val()}}else{a[this.name]=$(this).val()}}}})}catch(b){alert("err"+b)}return a}function postForm(b){var a={type:"POST",url:context+"/includes/optInEmailInfo.jsp",data:getFormData(b),success:function(c){$("#respuestaMail").html(c);$("#contenedorMail").slideUp("slow");$("#respuestaMail").slideDown("slow")},error:function(c,e,d){}};$.ajax(a)}function saveEmail(a){postForm(a)}function notSendEmail(){var a=footer_optin_email_tips;$("#respuestaMail").html(a);$("#contenedorMail").slideUp("slow");$("#respuestaMail").slideDown("slow")}function formSubmitIntercept(){return false}$(document).ready(function(){$("#textoMail").keydown(function(a){if(a.keyCode==13){saveEmail("optInEmail");return false}})});