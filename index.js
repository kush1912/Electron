// const electron = require('electron');
// const { dialog } = require('electron').app
// const path = require('path');
// import * as electron from 'electron'
// const electron = require("electron")
// Importing dialog module using remote
// const dialog = electron.remote.dialog;

var uploadFile = document.getElementById('upload');

document.getElementById('fileUpload').addEventListener('change',(e)=>{
	console.log(e.target.value);
});

// Defining a Global file path Variable to store
// user-selected file
// global.filepath = undefined;

uploadFile.addEventListener('click', () => {
	console.log('Upload Clicked!');
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
});
