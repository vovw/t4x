import express from "express";
import cors from "cors";
import axios from "axios";
 
import Replicate from "replicate";


const replicate = new Replicate({
  auth: "r8_B3ODgP3mFoua9VwT2rTwFfFlLG7C4Y722ROuU",
});


const app = express()
let corsOptions = {
	origin: 'http://localhost:3000',
}

let port = 5000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors(corsOptions));





app.post("/getmusic", async (req,res)=>{
	let response=req.body;
	// console.log(response);
	let user_prompt = response.data 
	for(let i in response.sug){
		user_prompt += ", " + response.sug[i];
	}
	const output = await replicate.run(
	"meta/musicgen:b05b1dff1d8c6dc63d14b0cdb42135378dcb87f6373b0d3d341ede46e59e2b38",
	{
	  input: {
	 	    top_k: 250,
	 	    top_p: 0,
	 	    prompt: user_prompt,
	 	    duration: 8,
	 	    temperature: 1,
	 	    continuation: false,
	 	    model_version: "large",
	 	    output_format: "mp3",
	 	    continuation_start: 0,
	 	    multi_band_diffusion: false,
	 	    normalization_strategy: "peak",
	 	    classifier_free_guidance: 3
	 	  }
	 	}
	);
	console.log(output);
	
	// Return the output to the frontend
	res.send(output);
});

app.post("/testing", async (req,res)=>{
	res.send('https://replicate.delivery/pbxt/xDRgTsEaNsaoAliWMKUsNilSdlPkhwHkrIUf07IvGQT6pfCSA/out.mp3')
})


app.listen(port, () => {
	console.log(`listening to port ${port}`);
});
