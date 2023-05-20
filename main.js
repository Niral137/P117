function setup() {
    canvas = createCanvas(200,200);
    canvas.center();
    background("white");
    canvas.mouseReleased(classifyCanvas);
    synth= window.speechSynthesis;
}

function preload(){
    classifier = ml5.imageClassifier('DoodleNet');
}
function clearCanvas(k){
    background("white");
}