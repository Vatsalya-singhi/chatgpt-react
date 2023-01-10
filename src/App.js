/* eslint-disable no-undef */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useRef } from 'react';
import { Configuration, OpenAIApi } from 'openai'
import './App.css';

var tsvscode;

const Bot = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#fff" className="bi bi-robot" viewBox="0 0 16 16">
        <path d="M6 12.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5ZM3 8.062C3 6.76 4.235 5.765 5.53 5.886a26.58 26.58 0 0 0 4.94 0C11.765 5.765 13 6.76 13 8.062v1.157a.933.933 0 0 1-.765.935c-.845.147-2.34.346-4.235.346-1.895 0-3.39-.2-4.235-.346A.933.933 0 0 1 3 9.219V8.062Zm4.542-.827a.25.25 0 0 0-.217.068l-.92.9a24.767 24.767 0 0 1-1.871-.183.25.25 0 0 0-.068.495c.55.076 1.232.149 2.02.193a.25.25 0 0 0 .189-.071l.754-.736.847 1.71a.25.25 0 0 0 .404.062l.932-.97a25.286 25.286 0 0 0 1.922-.188.25.25 0 0 0-.068-.495c-.538.074-1.207.145-1.98.189a.25.25 0 0 0-.166.076l-.754.785-.842-1.7a.25.25 0 0 0-.182-.135Z" />
        <path d="M8.5 1.866a1 1 0 1 0-1 0V3h-2A4.5 4.5 0 0 0 1 7.5V8a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1v1a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-1a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1v-.5A4.5 4.5 0 0 0 10.5 3h-2V1.866ZM14 7.5V13a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7.5A3.5 3.5 0 0 1 5.5 4h5A3.5 3.5 0 0 1 14 7.5Z" />
    </svg>
)

const User = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#fff" className="bi bi-person" viewBox="0 0 16 16">
        <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z" />
    </svg>
)

const Send = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="#ffffff" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" stroke-linejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
    </svg>
)

const Save = () => (
    <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M13.353 1.146l1.5 1.5L15 3v11.5l-.5.5h-13l-.5-.5v-13l.5-.5H13l.353.146zM2 2v12h12V3.208L12.793 2H11v4H4V2H2zm6 0v3h2V2H8z" />
    </svg>
)

const Close = () => (
    <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M8 8.707l3.646 3.647.708-.707L8.707 8l3.647-3.646-.707-.708L8 7.293 4.354 3.646l-.707.708L7.293 8l-3.646 3.646.707.708L8 8.707z" />
    </svg>
)

export default function App() {

    const chatContainer = document.querySelector('#chat_container');
    const apiKeyInput = useRef(null)

    // REACT VARIABLES
    const [text, setText] = useState("");
    const [loader, setLoader] = useState(false);
    const [messageList, setMessageList] = useState([]);
    const [loadingText, setLoadingText] = useState("");

    const [accessToken, setAccessToken] = useState("");
    const [fetchCall, setFetchCall] = useState(true);


    const [editFlag, setEditFlag] = useState(false);
    // const [model, setModel] = useState("text-davinci-003");
    // const [modelList, setModelList] = useState(["text-davinci-003"]);
    // const handleModelChange = (e) => {
    //     setModel(e.target.value);
    // }

    // OPEN AI CONFIG
    const configuration = new Configuration({
        apiKey: accessToken,
        // apiKey: process.env.OPENAI_API_KEY,
    });
    const openai = new OpenAIApi(configuration);

    // HELPER FUNCTIONS
    const ChatStripe = ({ isAI, uniqueId, value }) => {
        return (
            <div className={`wrapper ${isAI ? 'ai' : null}`}>
                <div className="chat">
                    <div className="profile">
                        <button>
                            {isAI ? <Bot /> : <User />}
                        </button>
                    </div>
                    <div className="message" id={uniqueId}> {value} </div>
                </div>
            </div>
        )
    }

    const BotReplyLoading = () => {
        return (
            <div className={`wrapper ai`}>
                <div className="chat">
                    <div className="profile">
                        <button>
                            <Bot />
                        </button>
                    </div>
                    <div className="message">{loadingText}</div>
                </div>
            </div>
        )
    }

    const handleKeyDown = (e) => {
        if (e.keyCode === 13) {
            handleSubmit(e)
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (loader) return;

        if (!accessToken) {
            dispactCommand("Error", "Invalid API Key!");
            return;
        }

        // set userInput
        const userText = String(text);
        const userMessage = {
            isAI: false,
            uniqueId: crypto.randomUUID(),
            value: userText,
        }
        setMessageList((messageList) => [...messageList, userMessage])

        setText("");

        // set botInput
        const botID = crypto.randomUUID();
        const botMessage = {
            isAI: true,
            uniqueId: botID,
            value: "",
        }
        setMessageList((messageList) => [...messageList, botMessage])

        setLoader(true);

        const interval = setInterval(() => {
            setLoadingText((loadingText) => {
                loadingText += '.';
                if (loadingText === '....') {
                    loadingText = '';
                }
                return loadingText;
            })
        }, 300);

        // API CALL
        fetchChatGPTResponse(userText)
            .then(response => response.json())
            .then((response) => {
                if (fetchCall) {

                    if (response.error) {
                        throw new Error(response?.error?.message ?? "Error occured!");
                    }

                    if (response.choices) {
                        setMessageList((list) => {
                            const newList = list.map(obj => {
                                if (obj.uniqueId === botID) {
                                    obj = { ...obj, value: response.choices[0].text.trim() }
                                }
                                return obj;
                            })
                            return newList;
                        })
                    }
                } else {
                    if (response.status === 200) {
                        setMessageList((list) => {
                            const newList = list.map(obj => {
                                if (obj.uniqueId === botID) {
                                    obj = { ...obj, value: response.data.choices[0].text.trim() }
                                }
                                return obj;
                            })
                            return newList;
                        })
                    } else {
                        throw new Error(response?.error?.message ?? "Error occured!");
                    }
                }
            })
            .catch((err) => {
                dispactCommand("Error", err);
            })
            .finally(() => {
                setLoader(false);
                clearInterval(interval);
                setLoadingText("");
            })

    }

    const fetchChatGPTResponse = (prompt) => {

        const body = {
            model: "text-davinci-003",
            prompt: `${prompt}`,
            temperature: 0, // Higher values means the model will take more risks.
            max_tokens: 3000, // The maximum number of tokens to generate in the completion. Most models have a context length of 2048 tokens (except for the newest models, which support 4096).
            top_p: 1, // alternative to sampling with temperature, called nucleus sampling
            frequency_penalty: 0.5, // Number between -2.0 and 2.0. Positive values penalize new tokens based on their existing frequency in the text so far, decreasing the model's likelihood to repeat the same line verbatim.
            presence_penalty: 0,
        };

        if (fetchCall) {
            return fetch("https://api.openai.com/v1/completions", {
                headers: {
                    "Authorization": 'Bearer ' + accessToken,
                    "Content-Type": "application/json",
                },
                method: 'POST',
                body: JSON.stringify(body),
            });
            // .then(response => response.json());
        } else {
            return openai.createCompletion(body);
        }
    }


    const saveToken = () => {
        dispactCommand("saveToken", accessToken);
    }

    const deleteToken = () => {
        dispactCommand("deleteToken", null);
    }

    const dispactCommand = (command, value) => {
        if (tsvscode) {
            tsvscode.postMessage({ command, value });
        }
        if (window.tsvscode) {
            window.tsvscode.postMessage({ command, value });
        }
    }

    useEffect(() => {
        if (chatContainer) {
            setTimeout(() => {
                chatContainer.scrollTop = chatContainer.scrollHeight;
            });
        }
    }, [messageList])

    useEffect(() => {

        dispactCommand("requestToken", null);

        window.addEventListener("message", (event) => {
            const obj = event.data ?? {};
            switch (obj.type) {
                case "setToken": {
                    const value = !!obj.value ? obj.value : "";
                    setAccessToken(value);
                    break;
                }
                default:
                    break;
            }
        })
    }, [])


    return (
        <>
            <div id="app">

                <div className="header">
                    <div className="w-60">
                        <h2 className='header-text'>VSChatGPT</h2>
                    </div>

                    <div className="w-40 params">

                        {/* API KEY CONTROL */}
                        <div className='header-row'>
                            <input
                                value={accessToken}
                                ref={apiKeyInput}
                                onChange={(e) => setAccessToken(e.target.value)}
                                onKeyDown={(e) => {
                                    if (e.keyCode === 13) {
                                        saveToken();
                                        setEditFlag(false);
                                    }
                                }}
                                placeholder="Enter your API Key"
                                disabled={!editFlag} />

                            {/* SAVE API KEY BUTTON */}
                            {editFlag && (<button
                                onClick={() => {
                                    saveToken();
                                    setEditFlag(false);
                                }}>
                                <Send />
                            </button>)}

                            {/* DELETE API KEY BUTTON */}
                            {!editFlag && (<button
                                onClick={() => {
                                    deleteToken();
                                    setEditFlag(true);
                                    setAccessToken("");
                                    apiKeyInput.current.focus();
                                }}>
                                <Close />
                            </button>)}
                        </div>

                        {/* SELECT MODEL CONTROL */}
                        {/* <div>
                            <select className='select-model' disabled={!accessToken || editFlag || modelList.length === 0}
                                placeholder='Select Model'
                                value={model}
                                onChange={handleModelChange}>
                                {modelList.map((obj) => (
                                    <option value={obj}>{obj}</option>
                                ))}
                            </select>
                        </div> */}


                    </div>
                </div>

                <div id="chat_container">
                    {
                        messageList.map((obj, index) => {

                            if (index === messageList.length - 1 && obj.isAI && loader) {
                                return (<BotReplyLoading key={index}></BotReplyLoading>)
                            }
                            return (<ChatStripe {...obj} key={index}></ChatStripe>)
                        })
                    }
                </div>

                <form onSubmit={handleSubmit}>
                    <div className='row'>
                        <div className='double-column'>
                            <textarea style={{ resize: "none" }} value={text} onChange={e => setText(e.target.value)} onKeyDown={handleKeyDown} name="prompt" rows="1" cols="1" placeholder="Ask codex..."></textarea>
                        </div>
                        <div className='column'>
                            <button type="submit">
                                <Send />
                            </button>
                        </div>
                    </div>
                </form>

            </div>
        </>
    );

}

// add header with option to insert api keys and dropdowns to select different api params;
// submit only if api key exists else show error
