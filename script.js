const input = document.getElementById("user-input");
const submitButton = document.getElementById("submit-button");
const responseContainer = document.getElementById("response-container");
const response = document.getElementById("response");

submitButton.addEventListener("click", function() {
  const userInput = input.value;
  fetch(`https://api.openai.com/v1/engines/chatgpt/jobs`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer $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`
    },
    body: JSON.stringify({
      prompt: userInput,
      max_tokens: 100,
      n: 1,
      stop: "",
      temperature: 0.5
    })
  })
    .then(response => response.json())
    .then(data => {
      const chatGptResponse = data.choices[0].text;
      response.innerHTML = chatGptResponse;
      responseContainer.style.display = "block";
    });
});
