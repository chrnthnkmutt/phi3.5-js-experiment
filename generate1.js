import ollama from "ollama";
const output = await ollama.generate({
    model: 'gemma2:2b',
    prompt: 'What is two plus five?'
})
console.log(output.response)