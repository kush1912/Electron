// const electron = require('electron');
// const path = require('path');
// import * as electron from 'electron'
// const electron = require("electron")
// Importing dialog module using remote
// const dialog = electron.remote.dialog;
// 
// var uploadFile = document.getElementById('upload');

// document.getElementById('fileUpload').addEventListener('change',(e)=>{
// 	console.log(e.target.value);
// });


let fileList;

function processfiles(){
	
	for(const item in fileList){

		console.log(fileList[item].name);
	}
}


function updateSize() {
	let nBytes = 0,
		oFiles = this.files,
		nFiles = oFiles.length;
	// processfiles(oFiles);
	fileList=this.files;
	for (let nFileId = 0; nFileId < nFiles; nFileId++) {
	  nBytes += oFiles[nFileId].size;
	//   console.log(oFiles);
	}
	let sOutput = nBytes + " bytes";
	// optional code for multiples approximation
	const aMultiples = ["KiB", "MiB", "GiB", "TiB", "PiB", "EiB", "ZiB", "YiB"];
	for (nMultiple = 0, nApprox = nBytes / 1024; nApprox > 1; nApprox /= 1024, nMultiple++) {
	  sOutput = nApprox.toFixed(3) + " " + aMultiples[nMultiple] + " (" + nBytes + " bytes)";
	}
	// end of optional code
	document.getElementById("fileNum").innerHTML = nFiles;
	document.getElementById("fileSize").innerHTML = sOutput;
  }

  document.getElementById("uploadInput").addEventListener("change", updateSize, false);


  document.getElementById("process").addEventListener("click",processfiles);


// document.getElementById('input').addEventListener("change", handleFiles, false);
// function handleFiles() {
//   const fileList = this.files[0]; /* now you can work with the file list */
//   console.log(`File names are ${ this.files[0]}`);
// }

// Defining a Global file path Variable to store
// user-selected file
// global.filepath = undefined;

// uploadFile.addEventListener('click', () => {
	// console.log('Upload Clicked!');
// If the platform is 'win32' or 'Linux'
	// if (process.platform !== 'darwin') {
	// 	// Resolves to a Promise<Object>
	// 	dialog.showOpenDialog({
	// 		title: 'Select the File to be uploaded',
	// 		defaultPath: path.join(__dirname, '../assets/'),
	// 		buttonLabel: 'Upload',
	// 		// Restricting the user to only Text Files.
	// 		filters: [
	// 			{
	// 				name: 'CSV Files',
	// 				extensions: ['csv']
	// 			}, ],
	// 		// Specifying the File Selector Property
	// 		properties: ['openFile', 'multiSelections']
	// 	}).then(file => {
	// 		// Stating whether dialog operation was
	// 		// cancelled or not.
	// 		console.log(file.canceled);
	// 		if (!file.canceled) {
	// 		// Updating the GLOBAL filepath variable
	// 		// to user-selected file.
	// 		global.filepath = file.filePaths[0].toString();
	// 		console.log(global.filepath);
	// 		}
	// 	}).catch(err => {
	// 		console.log(err)
	// 	});
	// }
	// else {
	// 	// If the platform is 'darwin' (macOS)
	// 	dialog.showOpenDialog({
	// 		title: 'Select the File to be uploaded',
	// 		defaultPath: path.join(__dirname, '../assets/'),
	// 		buttonLabel: 'Upload',
	// 		filters: [
	// 			{
	// 				name: 'CSV Files',
	// 				extensions: ['csv']
	// 			}, ],
	// 		// Specifying the File Selector and Directory
	// 		// Selector Property In macOS
	// 		properties: ['openFile', 'openDirectory','multiSelections']
	// 	}).then(file => {
	// 		console.log(file.canceled);
	// 		if (!file.canceled) {
	// 		global.filepath = file.filePaths[0].toString();
	// 		console.log(global.filepath);
	// 		}
	// 	}).catch(err => {
	// 		console.log(err)
	// 	});
	// }
// });
