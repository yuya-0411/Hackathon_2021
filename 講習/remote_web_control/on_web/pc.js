// Remote Example4 - controller
import { RelayServer } from "https://chirimen.org/remote-connection/js/beta/RelayServer.js";

window.OnLED = OnLED;
window.OffLED = OffLED;
window.BlinkLED = BlinkLED;

var channel;
onload = async function () {
  // webSocketリレーの初期化
  var relay = RelayServer("achex", "chirimenSocket");
  channel = await relay.subscribe("chirimenLED-yuya-S");
  messageDiv.innerText = "achex web socketリレーサービスに接続しました";
  channel.onmessage = getMessage;
};

function getMessage(msg) {
  // メッセージを受信したときに起動する関数
  messageDiv.innerText = msg.data;
}

function OnLED() {
  // LED ON
  channel.send("LED ON");
}
function OffLED() {
  // LED OFF
  channel.send("LED OFF");
}
function BlinkLED() {
  // LED BLINK
  channel.send("LED BLINK");
}
