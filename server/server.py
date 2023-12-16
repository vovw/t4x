from flask import Flask
import replicate

app = Flask(__name__)

temperature=1

@app.route("/get-music")
def get_music(prompt,duration):
    output = replicate.run(
        "meta/musicgen:7be0f12c54a8d033a0fbd14418c9af98962da9a86f5ff7811f9b3423a1f0b7d7",
        input={
            "top_k": 250,
            "top_p": 0,
            "prompt": prompt,
            "duration": duration,
            "temperature": temperature,
            "continuation": False,
            "model_version": "large",
            "output_format": "mp3",
            "continuation_start": 0,
            "multi_band_diffusion": False,
            "normalization_strategy": "peak",
            "classifier_free_guidance": 3,
        },
    )

# Process the data here
if __name__ == "__main__":
    app.run()
