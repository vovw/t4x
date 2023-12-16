import express from "express";
import cors from "cors";
import axios from "axios";
 
const app = express()
let corsOptions = {
	origin: 'http://localhost:3000',
}

let port = 5000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors(corsOptions));




app.post("/getmusic", (req,res)=>{
	let response=req.body;
	console.log(response);
});


app.listen(port, () => {
	console.log(`listening to port ${port}`);
});
