const papaparse = require('papaparse');
const AWS = require('aws-sdk');

const KEY_ID="";
const SECRET_KEY="";
const BUCKETNAME = "CSVBUCKET"


/*---AWS CODE NEEDS WORK---*/
/*
var myCredentials = new AWS.CognitoIdentityCredentials({IdentityPoolId:'IDENTITY_POOL_ID'});
var myConfig = new AWS.Config({
  credentials: myCredentials, region: 'us-west-2'
});

myConfig = new AWS.Config();
myConfig.update({region: 'us-east-1'});

AWS.config.getCredentials(function(err) {
	if (err) console.log(err.stack);
	// credentials not loaded
	else {
	  console.log("Access key:", AWS.config.credentials.accessKeyId);
	}
  });
*/

document.getElementById('uploadInput').addEventListener('change', function uploadedFiles(){
	const uploadedfiles = this.files
	let tsize = 0, fileNames=[];
	for(let item=0;item<uploadedfiles.length;item++){
		fileNames.push(uploadedfiles[item].name);
		tsize+=uploadedfiles[item].size;
	}
	document.getElementById("fileNum").innerHTML = uploadedfiles.length;
	document.getElementById("fileSize").innerHTML = unitConverter(tsize);
});

//function to convert units of file size
function unitConverter(nBytes){
	let sOutput = nBytes + " bytes";
	const aMultiples = ["KiB", "MiB", "GiB", "TiB", "PiB", "EiB", "ZiB", "YiB"];
	for (nMultiple = 0, nApprox = nBytes / 1024; nApprox > 1; nApprox /= 1024, nMultiple++) {
		sOutput = nApprox.toFixed(2) + " " + aMultiples[nMultiple] + " (" + nBytes + " bytes)";
	}
	return sOutput;
}

document.getElementById("process").addEventListener('click',processFiles);

//function to process the files
function processFiles() {
	let output = document.getElementById("uploadInput").files
	let resultFile =[];
	for(const item in output){
		let fileName = output[item].name, counter=0;
		papaparse.parse(output[item],{
			download:true,
			header:true,
			comments: "#",
			skipEmptyLines:true,
			step: function(row) {
				if(counter%5===0){
					row.data.fileName=fileName;
					resultFile.push(row.data);
					counter=0;
				}
				counter++;
			},
			complete:function(){
				downloadCSV(resultFile);
				console.log('All Done!');
				resultFile=[];
			}
		})
	}
}

//download the resulted file
function downloadCSV(resultFile)
{
    const csv = papaparse.unparse(resultFile);
    let csvData = new Blob([csv], {type: 'text/csv;charset=utf-8;'});
	let csvURL =  null;

    if (navigator.msSaveBlob)
    {
        csvURL = navigator.msSaveBlob(csvData, 'download.csv');
    }
    else
    {
        csvURL = window.URL.createObjectURL(csvData,'download.csv');
    }
    let tempLink = document.createElement('a');
    tempLink.href = csvURL;
    tempLink.setAttribute('download', 'download.csv');
    tempLink.click();
}

//upload file to S3 - needs work
function uplaodToS3(fileName){
	const params ={
		BUCKETNAME,
		Key:"resultFile.csv",
		contentType:".csv"
	}
}