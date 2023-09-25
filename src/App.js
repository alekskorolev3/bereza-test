import './App.css';
import {useEffect, useState} from "react";
const W3CWebSocket = require('websocket').w3cwebsocket;

const client = new W3CWebSocket('ws://192.168.2.120:8000/ws/socket-server/');

// "2023-09-25T10:59:37.208326Z"
function App() {
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        client.onopen = () => {
            console.log('WebSocket Client Connected');
        };

        client.onmessage = (event) => {

            if ('data' in JSON.parse(event.data)) {
                setMessages((prevMessages) => [...prevMessages, JSON.parse(event.data)]);
            }

        };
        client.onerror = function() {
            console.log('Connection Error');
        };
    }, []);


    return (
        <div className="container">
            <div className="row">
                <span className="title">Датчик:</span>
                <span className="value">{
                    [...messages].pop()?.data?.name ? [...messages].pop()?.data?.name : "Подключение к серверу..."
                }</span>
            </div>

            <div className="row">
                <span className="title">Показания:</span>
                <span className="value">{[...messages].pop()?.data?.value ? [...messages].pop()?.data?.value : "Нет данных"}</span>
            </div>

            <div className="row">
                <span className="title">Время:</span>
                <span className="value">{[...messages].pop()?.data?.time ? new Date([...messages].pop()?.data?.time).toLocaleString() : "Нет данных"}</span>
            </div>
        </div>
    )
}

export default App;
