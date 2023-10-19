const OPENAI_KEY = "";
const ANTHROPIC_KEY = "";

/**
  * A custom function for using Anthropic's Claude model in Google Sheets
  * @param {string} prompt The text you want Claude to complete
  * @param {string} model The Anthropic model to use (claude-v1.3 is the default)
  * @param {number} max_tokens The maximum number of tokens to sample (1024 is the default)
  * @return {string} The generated text
  * @customfunction
*/
function CLAUDE(prompt, model="claude-v1.3", max_tokens=1024) {
  var endpoint = "https://api.anthropic.com/v1/complete";
  var payload = {
    "model":model,
    "max_tokens_to_sample":max_tokens,
    "stop_sequences":["\n\nHuman:"],
    "prompt":"\n\nHuman: " + prompt + "\n\nAssistant: ",
    "stream":false
  };
  var options = {
    method: "post",
    contentType: "application/json",
    payload: JSON.stringify(payload),
    headers: {"x-api-key": ANTHROPIC_KEY, "anthropic-version": "2023-06-01"}
  };
  var response = UrlFetchApp.fetch(endpoint, options);
  var json = response.getContentText();
  var data = JSON.parse(json);
  return data.completion.trim();
}

/**
  * A custom function for using GPT-3 in Google Sheets
  * @param {string} prompt The text you want GPT-3 to complete
  * @param {string} model The GPT-3 model to use (text-davinci-003 is the default)
  * @param {number} temperature The sampling temperature to use (0.4 is the default)
  * @param {number} max_tokens The maximum number of tokens to return (200 is the default)
  * @return {string} The generated text
  * @customfunction
*/
function GPT3(prompt, model="text-davinci-003", temperature=0.0, max_tokens=200) {
  var endpoint = "https://api.openai.com/v1/completions";
  var payload = {
    model: model,
    prompt: prompt,
    max_tokens: max_tokens,
    temperature: temperature
  };
  var options = {
    method: "post",
    contentType: "application/json",
    payload: JSON.stringify(payload),
    headers: {"Authorization": "Bearer " + OPENAI_KEY}
  };
  var response = UrlFetchApp.fetch(endpoint, options);
  var json = response.getContentText();
  var data = JSON.parse(json);
  return data.choices[0].text.trim();
}

/**
  * A custom function for using ChatGPT in Google Sheets
  * @param {string} jsonMessages The JSON string of messages to use, including system, assistant, and user messages
  * @param {string} model The ChatGPT model to use (gpt-3.5 turbo is the default)
  * @param {number} temperature The sampling temperature to use (0.0 is the default)
  * @param {number} max_tokens The maximum number of tokens to return (200 is the default)
  * @return {string} The generated text
  * @customfunction
*/
function CHATGPT(jsonMessages, model="gpt-3.5-turbo", temperature=0.0, max_tokens=200) {
  var endpoint = "https://api.openai.com/v1/chat/completions";
  var payload = {
    model: model,
    messages: JSON.parse(jsonMessages),
    max_tokens: max_tokens,
    temperature: temperature
  };
  var options = {
    method: "post",
    contentType: "application/json",
    payload: JSON.stringify(payload),
    headers: {"Authorization": "Bearer " + OPENAI_KEY}
  };
  var response = UrlFetchApp.fetch(endpoint, options);
  var json = response.getContentText();
  var data = JSON.parse(json);
  return data.choices[0].message.content.trim();
}

/**
  * A custom function for using GPT4 in Google Sheets
  * @param {string} message The string representing the user's message to GPT4
  * @param {string} model The GPT4 model to use (gpt-4 is the default)
  * @param {number} temperature The sampling temperature to use (0.0 is the default)
  * @param {number} max_tokens The maximum number of tokens to return (200 is the default)
  * @return {string} The generated text
  * @customfunction
*/
function GPT4(message, model="gpt-4", temperature=0.0, max_tokens=200) {
  var endpoint = "https://api.openai.com/v1/chat/completions";
  var messages = [
    {"role": "system", "content": "You are a helpful assistant."},
    {"role": "user", "content": message}
  ]
  var payload = {
    model: model,
    messages: messages,
    max_tokens: max_tokens,
    temperature: temperature
  };
  var options = {
    method: "post",
    contentType: "application/json",
    payload: JSON.stringify(payload),
    headers: {"Authorization": "Bearer " + OPENAI_KEY}
  };
  var response = UrlFetchApp.fetch(endpoint, options);
  var json = response.getContentText();
  var data = JSON.parse(json);
  return data.choices[0].message.content.trim();
}

/**
  * A custom function for using GPT3.5 in Google Sheets
  * @param {string} message The string representing the user's message to GPT3.5
  * @param {string} model The GPT4 model to use (gpt-4 is the default)
  * @param {number} temperature The sampling temperature to use (0.0 is the default)
  * @param {number} max_tokens The maximum number of tokens to return (200 is the default)
  * @return {string} The generated text
  * @customfunction
 */
function GPT35(message, model="gpt-3.5-turbo", temperature=0.0, max_tokens=200) {
  var endpoint = "https://api.openai.com/v1/chat/completions";
  var messages = [
    {"role": "system", "content": "You are a helpful assistant."},
    {"role": "user", "content": message}
  ]
  var payload = {
    model: model,
    messages: messages,
    max_tokens: max_tokens,
    temperature: temperature
  };
  var options = {
    method: "post",
    contentType: "application/json",
    payload: JSON.stringify(payload),
    headers: {"Authorization": "Bearer " + OPENAI_KEY}
  };
  var response = UrlFetchApp.fetch(endpoint, options);
  var json = response.getContentText();
  var data = JSON.parse(json);
  return data.choices[0].message.content.trim();
}
