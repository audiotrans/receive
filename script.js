let rawData=[];

let mic,vol,strtTimeout,strtInterval,prsdValue,prsd,charLen;


function setup() {
			createCanvas(200,200);
				userStartAudio()
				mic = new p5.AudioIn();
				mic.start()	


}

function draw() {

	charLen = parseInt(document.getElementById("charLength").value);

  background(0)
		vol =	mic.getLevel();
		
ellipse(100,100,vol*200,vol*200)
text(vol,10,10)
	
		
		if(rawData.length == 7 * charLen){
				clearInterval(strtInterval)	

				

				}
		
}

function pres() {
			 strtTimeout = setTimeout(strt,500)
			 
			 //console.log(charLen)
}

function strt() {
				clearTimeout(strtTimeout)
				strtInterval = setInterval(read,1000)

}

function read() {
				prsdValue = prSE(vol);
				
				rawData.push(prsdValue)
				binParse(rawData)

				console.log(vol)
				console.log(rawData)
}



function prSE(volumeVal){
 prsd = parseInt(volumeVal*10);
if (prsd > 0){
						return prsd/prsd
		}else{
						return 0
		}			
}


function binParse(raw_Data) {
	let charLenBin = 7;

//let rawData = [1, 1, 0, 0, 1, 0, 0, 1, 1, 0, 0, 0, 0, 1];

let temp = "";
let kn = Number.isInteger(raw_Data.length / 7)


if (kn == true ) {

	document.getElementById("field").value ="";

	for (let i = 0; i < raw_Data.length; i++) {
		
		temp = temp + raw_Data[i].toString();

	
	
		if (Number.isInteger(temp.length/7) == true ) {
			//textBin.push(parseInt(temp))
			
			let pse = String.fromCharCode(parseInt(temp, 2))
				document.getElementById("field").value +=  pse;
				console.log(pse)
				console.log(temp)
	
			temp = "";
		} 
	
		}	

}

}
