const axios = require("axios");

exports.BLManager = class BLManager {
	analyzeTextIntent = async (data) => {
		console.log(data);
		const { text } = data;
		const openai_url = "https://api.openai.com/v1/completions";

		const basePrompt = `
		You are an expert at phishing and social engineering detection. Use insight to describe this message "${text}" and describe if it looks like a legitimate OR phishing/social engineering message. Don't forget to explain your thesis why, like you would to a ten year old.
		List down the result in points and start each of the bullet points with an appropriate emoji that displays well in a browser extension.
		`;
		const prompt = `${basePrompt}\n`;

		// Call completions endpoint
		try {
			const completionResponse = await axios.post(
				openai_url,
				{
					model: "text-davinci-003",
					prompt: prompt,
					max_tokens: 3000,
					temperature: 0.7,
				},
				{
					headers: {
						"Content-Type": "application/json",
						Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
					},
				}
			);

			if (completionResponse.error) {
				throw new Error("OpenAI Quota Exceeded\n\n" + completion.error.message);
			}

			// Select the top choice and send back the result
			const baseCompletion = completionResponse.data.choices.pop();
			const output = baseCompletion.text.trim();
			console.log(output);

			// Let's see what we get!
			if (output) {
				const summary_result = output;
				return summary_result;
			}
		} catch (error) {
			throw new Error(error.message);
		}
	};
};
