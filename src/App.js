/* eslint-disable no-undef */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useRef } from 'react';
import './App.css';

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
    <svg xmlns="http://www.w3.org/2000/svg" fill="#fff" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
    </svg>
)

const Save = () => (
    <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="#fff">
        <path fillRule="evenodd" clipRule="evenodd" d="M13.353 1.146l1.5 1.5L15 3v11.5l-.5.5h-13l-.5-.5v-13l.5-.5H13l.353.146zM2 2v12h12V3.208L12.793 2H11v4H4V2H2zm6 0v3h2V2H8z" />
    </svg>
)

const Edit = () => (
    <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="#fff">
        <path d="M13.23 1h-1.46L3.52 9.25l-.16.22L1 13.59 2.41 15l4.12-2.36.22-.16L15 4.23V2.77L13.23 1zM2.41 13.59l1.51-3 1.45 1.45-2.96 1.55zm3.83-2.06L4.47 9.76l8-8 1.77 1.77-8 8z" />
    </svg>
)

const Close = () => (
    <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="#fff">
        <path fillRule="evenodd" clipRule="evenodd" d="M8 8.707l3.646 3.647.708-.707L8.707 8l3.647-3.646-.707-.708L8 7.293 4.354 3.646l-.707.708L7.293 8l-3.646 3.646.707.708L8 8.707z" />
    </svg>
)

const Delete = () => (
    <svg version="1.1" width="16" height="16" viewBox="0 0 482.428 482.429" fill="#fff">
        <g>
            <path d="M381.163,57.799h-75.094C302.323,25.316,274.686,0,241.214,0c-33.471,0-61.104,25.315-64.85,57.799h-75.098
			c-30.39,0-55.111,24.728-55.111,55.117v2.828c0,23.223,14.46,43.1,34.83,51.199v260.369c0,30.39,24.724,55.117,55.112,55.117
			h210.236c30.389,0,55.111-24.729,55.111-55.117V166.944c20.369-8.1,34.83-27.977,34.83-51.199v-2.828
			C436.274,82.527,411.551,57.799,381.163,57.799z M241.214,26.139c19.037,0,34.927,13.645,38.443,31.66h-76.879
			C206.293,39.783,222.184,26.139,241.214,26.139z M375.305,427.312c0,15.978-13,28.979-28.973,28.979H136.096
			c-15.973,0-28.973-13.002-28.973-28.979V170.861h268.182V427.312z M410.135,115.744c0,15.978-13,28.979-28.973,28.979H101.266
			c-15.973,0-28.973-13.001-28.973-28.979v-2.828c0-15.978,13-28.979,28.973-28.979h279.897c15.973,0,28.973,13.001,28.973,28.979
			V115.744z"/>
            <path d="M171.144,422.863c7.218,0,13.069-5.853,13.069-13.068V262.641c0-7.216-5.852-13.07-13.069-13.07
			c-7.217,0-13.069,5.854-13.069,13.07v147.154C158.074,417.012,163.926,422.863,171.144,422.863z"/>
            <path d="M241.214,422.863c7.218,0,13.07-5.853,13.07-13.068V262.641c0-7.216-5.854-13.07-13.07-13.07
			c-7.217,0-13.069,5.854-13.069,13.07v147.154C228.145,417.012,233.996,422.863,241.214,422.863z"/>
            <path d="M311.284,422.863c7.217,0,13.068-5.853,13.068-13.068V262.641c0-7.216-5.852-13.07-13.068-13.07
			c-7.219,0-13.07,5.854-13.07,13.07v147.154C298.213,417.012,304.067,422.863,311.284,422.863z"/>
        </g>
    </svg>
)

export default function App() {

    const chatContainer = document.querySelector('#chat_container');
    const inputRef = useRef();

    // REACT VARIABLES
    const [text, setText] = useState("");
    const [loader, setLoader] = useState(false);
    const [messageList, setMessageList] = useState([]);
    const [loadingText, setLoadingText] = useState("");

    const [accessToken, setAccessToken] = useState("");


    const [editFlag, setEditFlag] = useState(false);

    // CHAT COMPONENT 
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

    // BOT REPLY LOADING RENDER
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

    // ON SUBMIT
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (loader) return;

        if (!accessToken) {
            dispactCommand("Error", "Please enter API Key!");
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
                if (response.error) {
                    dispactCommand("Error", response.error.message || "Please try again!");
                    updateBotReply(response.error.message || "Please try again!", botID);
                }
                if (response.choices) {
                    updateBotReply(response.choices[0].text.trim(), botID);
                }
            })
            .catch((err) => {
                dispactCommand("Error", err.message || "Please try again!");
                updateBotReply(response.error.message || "Please try again!", botID);
            })
            .finally(() => {
                setLoader(false);
                clearInterval(interval);
                setLoadingText("");
            })

    }

    const updateBotReply = (prompt, botID) => {
        setMessageList((list) => {
            const newList = list.map(obj => {
                if (obj.uniqueId === botID) {
                    obj = { ...obj, value: prompt }
                }
                return obj;
            })
            return newList;
        })
    }

    // API CALL
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

        return fetch("https://api.openai.com/v1/completions", {
            headers: {
                "Authorization": 'Bearer ' + accessToken,
                "Content-Type": "application/json",
            },
            method: 'POST',
            body: JSON.stringify(body),
        });
    }


    // DISPATCH EVENTS TO EXTENSION
    const dispactCommand = (command, value) => {
        if (window.tsvscode) {
            window.tsvscode.postMessage({ command, value });
        }
    }


    // SCROLL ON MESSAGE LIST UPDATE
    useEffect(() => {
        if (chatContainer) {
            setTimeout(() => {
                chatContainer.scrollTop = chatContainer.scrollHeight;
            });
        }
    }, [messageList])

    // ON INIT - 1.REQUEST TOKEN 2. ADD EVENT LISTENER
    useEffect(() => {

        // TOKEN REQUEST ON INIT
        dispactCommand("requestToken", null);
        // EVENT LISTENER
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


    // RENDERER
    return (
        <div id="app">

            <div className="header">

                <div className="w-60">
                    <h2 className='header-text'>VSChatGPT</h2>
                </div>

                <div className="w-40 params">

                    {/* API KEY CONTROL */}
                    <div className='header-row'>

                        {/* API INPUT */}
                        <input
                            className='api-input'
                            value={accessToken}
                            ref={inputRef}
                            onChange={(e) => setAccessToken(e.target.value)}
                            onKeyDown={(e) => {
                                if (e.keyCode === 13) {
                                    dispactCommand("saveToken", accessToken);
                                    setEditFlag(false);
                                }
                            }}
                            placeholder="Enter your secret API Key"
                            disabled={!editFlag} />

                        {/* SAVE BTN */}
                        {editFlag && (<button
                            onClick={() => {
                                dispactCommand("saveToken", accessToken);
                                setEditFlag(false);
                            }}>
                            <Save />
                        </button>)}

                        {/* EDIT BTN */}
                        {!editFlag && (<button
                            onClick={() => {
                                setEditFlag(true);
                                inputRef.current.focus();
                            }}>
                            <Edit />
                        </button>)}

                        {/* DELETE BUTTON */}
                        {!editFlag && (<button
                            onClick={() => {
                                dispactCommand("deleteToken", null);
                                setEditFlag(true);
                                inputRef.current.focus();
                            }}>
                            <Delete />
                        </button>)}
                    </div>

                </div>

            </div>

            {/* CHAT CONTAINER */}
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


            {/* USER INPUT FORM */}
            <form onSubmit={handleSubmit}>
                <div className='row'>
                    <div className='double-column'>
                        <textarea
                            style={{ resize: "none" }}
                            value={text}
                            onChange={e => setText(e.target.value)}
                            onKeyDown={(e) => {
                                if (e.keyCode === 13) {
                                    handleSubmit(e)
                                }
                            }}
                            name="prompt"
                            rows="1"
                            cols="1"
                            placeholder="Ask codex...">
                        </textarea>
                    </div>
                    <div className='column'>
                        <button type="submit">
                            <Send />
                        </button>
                    </div>
                </div>
            </form>

        </div>
    );

}

