<br />
<div align="center">

<h3 align="center">Sheets GPT</h3>

  <p align="center">
    An Apps Script Extension that adds the CHATGPT() and GPT3() functions to Google Sheets.
  </p>
</div>


## Setup

1. Get an OpenAI API Key at [https://platform.openai.com/account/api-keys](https://platform.openai.com/account/api-keys)
2. From a Google Sheet, select `Extensions` --> `Apps Script`

     <img width="257" alt="image" src="https://user-images.githubusercontent.com/9706111/234121880-14d6138d-5ebc-4c21-ab73-d0c66a920aa8.png">

3. Replace the contents of `code.gs` with the contents of the `code.gs` file in this repo.
4. Insert your own OpenAI API key in the first line of the file:  `const SECRET_KEY = "";`
     * *Note*: Sharing your API key can compromise the security of your account, application, and data.  Set the appropriate access permissions for your script and sheet to limit who can view and edit them.
5. Click the `Save project` icon.

     <img width="104" alt="image" src="https://user-images.githubusercontent.com/9706111/234636153-b2554dd4-5be3-4744-8441-8964cb8994eb.png">

6. In your spreadsheet, you will have access to the "CHATGPT" and "GPT3" functions.


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


You can also adjust the `model`, `temperature`, and `max_tokens` within each function call.

See the [OpenAI API documentation](https://platform.openai.com/docs/api-reference/chat/create) for information about formatting requests and other available parameters.
