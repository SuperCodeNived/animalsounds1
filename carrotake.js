https://teachablemachine.withgoogle.com/models/QqdqxeGdf/





function startClassification()
{
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundclassifier('https://teachablemachine.withgoogle.com/models/V81-TFy9l/', modelReady);

}

function modelReady(){
    classifier.classify(gotResults);
}