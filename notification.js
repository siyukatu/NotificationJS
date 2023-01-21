//Created by siyukatu
// site: siyukatu.com
class NotificationJS {
    getrem(){
        var span = document.createElement('div');
        span.style.position = 'fixed';
        span.style.bottom = '-9999px';
        span.style.width = '0.5rem';
        span.style.height = '0.5rem';
        document.body.appendChild(span);
        var size = span.clientWidth;
        document.body.removeChild(span);
        return size;
    }
    getTextSize(text){
        var span = document.createElement('span');
        span.style.position = 'fixed';
        span.style.bottom = '-9999px';
        span.style.fontSize = '2em';
        span.style.whiteSpace = 'nowrap';
        span.innerText = text;
        document.body.appendChild(span);
        var size = span.clientWidth;
        document.body.removeChild(span);
        return size;
    }
    getStyle(text,timeout,id,bordercolor,color,backgroundcolor){
        var size = this.getTextSize(text)+30;
        var rem = this.getrem();
        return "@keyframes NotificationAnime_"+id+"{0%{border-left:0px solid "+bordercolor+";width:0%;}50%{border-left:"+(size+rem)+"px solid "+bordercolor+";width:0px;}80%{border-left:"+(rem)+"px solid "+bordercolor+";width:"+(size)+"px;}}@keyframes HideNotificationAnime{0%{width:"+(size)+"px;border-left:"+(rem)+"px solid "+bordercolor+"}20%{width:"+(size)+"px;border-left:"+(rem)+"px solid "+bordercolor+"}70%{border-left:"+(size+rem)+"px solid "+bordercolor+";width:0%;}100%{border-left:0px solid "+bordercolor+";width:0%;}}.ShowNotification_"+id+"{display:block!important;animation:NotificationAnime_"+id+" ease 1s;width:"+(size)+"px;border-left:"+(rem)+"px solid "+bordercolor+"}@keyframes NotificationTextAnime_"+id+"{0% {transform: translate(0%, -100%);}50% {transform: translate(0%, -100%);}80% {transform: translate(0%, -100%);}100% {transform: translate(0%, 0%);}}@keyframes HideNotificationTextAnime_"+id+"{0% {transform: translate(0%, 0%);}50% {transform: translate(0%, 100%);}80% {transform: translate(0%, 100%);}100% {transform: translate(0%, 100%);}}.ShowNotification_"+id+" div{margin-left: 15px;animation: NotificationTextAnime_"+id+" ease 1s;}.HideNotification_"+id+"{display: block !important;animation: HideNotificationAnime_"+id+" ease 1s;width: 0%;border-left: 0rem solid "+bordercolor+";}.HideNotification_"+id+" div{margin-left: 15px;width: 0;animation:HideNotificationTextAnime_"+id+" ease 1s;}#Notification_"+id+"{transition: all 500ms ease 0s;position:fixed;top:10%;right:0;color:white;backdrop-filter: blur(5px) saturate(125%);background: "+backgroundcolor+" !important;font-size:2em;overflow:hidden;white-space:nowrap;}";
    }
    createElement(text,timeout,id,bordercolor,color,backgroundcolor){
        var style = document.createElement("style");
        style.innerHTML = this.getStyle(text=text,timeout=timeout,id=id,bordercolor=bordercolor,color=color,backgroundcolor=backgroundcolor);
        var content = document.createElement("div");
        content.innerText = text;
        var div = document.createElement("div");
        div.append(style);
        div.append(content);
        div.className = "ShowNotification_"+id;
        div.id = "Notification_"+id;
        document.body.append(div);
    }
    deleteElement(id){
        document.getElementById("Notification_"+id).className = "HideNotification_"+id;
        setTimeout(function(){
            document.getElementById("Notification_"+id).remove();
        }, 1000);
    }
    constructor() {
    }
    info(text="これはNotificationJSの初期テキストです。",timeout=5000,id=Date.now()) {
        this.createElement(text=text,timeout=timeout,id=id,"rgba(255,0,0,1)","#FFFFFF","rgba(255,0,0,0.5)");
        setTimeout(function(){
            new NotificationJS().deleteElement(id=id);
        }, timeout);
        return id;
    }
}
