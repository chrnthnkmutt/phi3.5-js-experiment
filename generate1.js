import ollama from "ollama";
const response = await ollama.generate({
    model: 'phi3.5',
    prompt: 'What is two plus five?'
})
console.log(response);
// console.log(output.response)
