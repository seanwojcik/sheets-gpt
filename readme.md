<br />
<div align="center">

<h3 align="center">Sheets GPT</h3>

  <p align="center">
    An Apps Script Extension that adds the `GPT3()`, `GPT35`, `CHATGPT()`, `GPT4()`, and `CLAUDE()` functions to Google Sheets.
  </p>
</div>


## Setup

1. Get API keys from OpenAI and/or Anthropic:
    * OpenAI API Keys: [https://platform.openai.com/account/api-keys](https://platform.openai.com/account/api-keys)
    * Anthropic API Keys: [https://console.anthropic.com/account/keys](https://console.anthropic.com/account/keys)
2. From a Google Sheet, select `Extensions` --> `Apps Script`

     <img width="257" alt="image" src="https://user-images.githubusercontent.com/9706111/234121880-14d6138d-5ebc-4c21-ab73-d0c66a920aa8.png">

3. Replace the contents of `code.gs` with the contents of the `code.gs` file in this repo.
4. Insert your own API keys as the values for either or both of the first two line of the file: `OPENAI_KEY` and `ANTHOPIC_KEY`
     * *Note*: Sharing your API key can compromise the security of your account, application, and data.  Set the appropriate access permissions for your script and sheet to limit who can view and edit them.
5. Click the `Save project` icon.

     <img width="104" alt="image" src="https://user-images.githubusercontent.com/9706111/234636153-b2554dd4-5be3-4744-8441-8964cb8994eb.png">

6. In your spreadsheet, you will have access to the "GPT3", "GPT35", "CHATGPT", "GPT4", and "CLAUDE" functions.


## Usage

```
=GPT3("Hello world, does this actually work?")
```
<img width="290" alt="image" src="https://user-images.githubusercontent.com/9706111/234122572-36a2ecd3-2523-486d-8552-8009f90184c0.png">

```
=CHATGPT([
  {"role": "system", "content": "You are an AI language model. Avoid preamble and just answer questions directly."},
  {"role": "user", "content": "Hey ChatGPT, can you hear me?"}
])
```
<img width="621" alt="image" src="https://user-images.githubusercontent.com/9706111/234122872-5b280aba-1cb0-4ef9-9f0f-aef89fbe2760.png">


Note that `CHATGPT()` differs from the other GPT functions (including `GPT35()`) in that the `CHATGPT()` function accepts a JSON-formatted array of system, user, and assistant messages.  All other GPT functions accept a plain text string as the prompt.

You can also adjust the `model`, `temperature`, and `max_tokens` within each OpenAI function call.  See the API documentation from [OpenAI](https://platform.openai.com/docs/api-reference/chat/create) and [Anthropic](https://console.anthropic.com/docs/api) for information about formatting requests and other available parameters.
