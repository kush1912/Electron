const aws = require(aws-sdk);
// Please Enter your KeyId and Secret KEY here
const KEY_ID="";
const SECRET_KEY="";
const BUCKETNAME = "CSVBUCKET"

//create a bucket
const s3 = new aws.s3({
	KEY_ID,
	SECRET_KEY
});

s3.createBucket({BUCKETNAME}, (err,data)=>{
	if(err){
		console.log(err);
	}
	else{
		console.log("Bucket created Successfully at " + data.Location);
	}
})
