import ollama from "ollama";
const output = await ollama.generate({
    model: 'phi3.5',
    prompt: 'What is two plus five?'
})
console.log(output.response)