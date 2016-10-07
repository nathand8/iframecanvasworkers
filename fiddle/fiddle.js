function drawCanvas() {
    var canvas=document.getElementById("canvas");
    var ctx=canvas.getContext("2d");
    var interval = null;

    var image=document.createElement("img");
    image.setAttribute('crossOrigin','anonymous')
    image.src="https://i.imgur.com/DVdnE.jpg";
    image.onload=function(){
        ctx.drawImage(image,0,0);
        //ctx.getImageData(0,0,2550,3300);
        window.parent.frameCallback(canvas.toDataURL('png'));
    }
};


function init() {
    drawCanvas();
}
