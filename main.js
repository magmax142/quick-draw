function setup() {
    canvas=createCanvas(280, 280);
    canvas.center();
    background("white")
    canvas.mouseReleased(classifyCanvas);
}

function clearCanvas() {
    background("white")
}
function preload() {
    classifier=ml5.imageClassifier("DoodleNet")
}
function classifyCanvas(){
    classifier.classify(canvas, getDoodle)
}
function getDoodle(a, b){
    if(a){
        console.error(a)
    }
    else{
        console.log(b);
        doodle_name=b[0].label;
        doodle_confidence=b[0].confidence;
        document.getElementById("label").innerHTML=doodle_name;
        document.getElementById("confidence").innerHTML=floor(doodle_confidence *100)+"%";
        doodle_audio=new SpeechSynthesisUtterance(doodle_name);
        window.speechSynthesis.speak(doodle_audio);
    }
}
function draw(){
    strokeWeight(13)
    stroke(0)
    if(mouseIsPressed){
        line(pmouseX, pmouseY, mouseX, mouseY)
    }
}