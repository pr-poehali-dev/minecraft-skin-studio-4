import { useState } from "react";
import Icon from "@/components/ui/icon";

interface ChatWidgetProps {
  onOrderClick: () => void;
}

const ChatWidget = ({ onOrderClick }: ChatWidgetProps) => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: "bot" as const, text: "Привет! 👋 Я Виктор — главный скинодел PixelForge. Чем могу помочь?" },
  ]);
  const [input, setInput] = useState("");
  const [step, setStep] = useState(0);

  const quickReplies = [
    { label: "Хочу заказать скин", action: "order" },
    { label: "Сколько стоит?", action: "price" },
    { label: "Как долго ждать?", action: "time" },
  ];

  const handleQuick = (action: string) => {
    let botReply = "";
    if (action === "order") {
      setMessages((p) => [
        ...p,
        { from: "user", text: "Хочу заказать скин" },
        { from: "bot", text: "Отлично! Нажми кнопку ниже и заполни форму — я получу заявку и напишу тебе лично 🎨" },
      ]);
      setStep(1);
      return;
    } else if (action === "price") {
      botReply = "Простой скин — 50 ₽\nКастомный — 100 ₽\nРебрендинг — 60 ₽\nКомплект 3+ скинов — от 150 ₽";
    } else if (action === "time") {
      botReply = "Простой: 1 день\nКастомный: 2 дня\nРебрендинг: 1 день\nКомплект: 3-5 дней\n\nСрочный заказ — дороже, но быстрее!";
    }
    setMessages((p) => [
      ...p,
      { from: "user", text: quickReplies.find((q) => q.action === action)?.label || "" },
      { from: "bot", text: botReply },
    ]);
  };

  const sendMessage = () => {
    if (!input.trim()) return;
    setMessages((p) => [
      ...p,
      { from: "user", text: input },
      { from: "bot", text: "Понял тебя! Лучше всего оформи заявку — так я получу все детали и быстро отвечу. Или пиши в TG: @Xezze228" },
    ]);
    setInput("");
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3">
      {/* Chat window */}
      {open && (
        <div className="w-80 bg-[#050805] border border-[#4ade80]/30 rounded-sm shadow-2xl glow-green flex flex-col overflow-hidden animate-slide-up">
          {/* Header */}
          <div className="flex items-center gap-3 px-4 py-3 bg-[#0a140a] border-b border-[#4ade80]/20">
            <div className="relative">
              <div className="w-9 h-9 rounded-sm overflow-hidden bg-[#4ade80]/10 flex items-center justify-center">
                <span className="font-pixel text-[#4ade80] text-sm">V</span>
              </div>
              <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-[#4ade80] border-2 border-[#050805]" />
            </div>
            <div>
              <div className="font-pixel text-white text-xs">Виктор</div>
              <div className="text-[#4ade80] text-xs">● онлайн · PixelForge</div>
            </div>
            <button onClick={() => setOpen(false)} className="ml-auto text-[#c8ffc8]/30 hover:text-[#4ade80] transition-colors">
              <Icon name="X" size={16} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 max-h-64">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.from === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className="max-w-[80%] px-3 py-2 rounded-sm text-xs leading-relaxed whitespace-pre-line"
                  style={{
                    background: m.from === "user" ? "#4ade8015" : "#0a140a",
                    border: `1px solid ${m.from === "user" ? "#4ade8035" : "#4ade8015"}`,
                    color: m.from === "user" ? "#4ade80" : "#c8ffc8",
                  }}
                >
                  {m.text}
                </div>
              </div>
            ))}
          </div>

          {/* Quick replies */}
          {step === 0 && (
            <div className="px-3 pb-2 flex flex-wrap gap-1.5">
              {quickReplies.map((q) => (
                <button
                  key={q.action}
                  onClick={() => handleQuick(q.action)}
                  className="px-3 py-1.5 text-xs border border-[#4ade80]/30 text-[#4ade80]/80 rounded-sm hover:border-[#4ade80] hover:text-[#4ade80] transition-colors"
                >
                  {q.label}
                </button>
              ))}
            </div>
          )}

          {step === 1 && (
            <div className="px-3 pb-3">
              <button
                onClick={() => { onOrderClick(); setOpen(false); }}
                className="w-full pixel-btn pixel-border bg-[#4ade80] text-[#050805] py-2.5 font-pixel text-xs tracking-widest rounded-sm hover:bg-[#22c55e] transition-colors"
              >
                ОФОРМИТЬ ЗАКАЗ
              </button>
            </div>
          )}

          {/* Input */}
          <div className="flex gap-2 p-3 border-t border-[#4ade80]/15">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              placeholder="Написать..."
              className="flex-1 bg-[#0a0f0a] border border-[#4ade80]/20 text-[#c8ffc8] px-3 py-2 rounded-sm text-xs focus:outline-none focus:border-[#4ade80] transition-colors font-mono"
            />
            <button
              onClick={sendMessage}
              className="pixel-btn bg-[#4ade80] text-[#050805] p-2 rounded-sm hover:bg-[#22c55e] transition-colors"
            >
              <Icon name="Send" size={14} />
            </button>
          </div>
        </div>
      )}

      {/* Toggle button */}
      <button
        onClick={() => setOpen(!open)}
        className={`w-14 h-14 rounded-sm flex items-center justify-center transition-all duration-300 font-pixel text-lg ${
          open
            ? "bg-[#0a140a] border-2 border-[#4ade80]/50 text-[#4ade80]"
            : "bg-[#4ade80] border-2 border-[#4ade80] text-[#050805] animate-pulse-green shadow-lg"
        }`}
        style={{ boxShadow: open ? undefined : "0 0 25px rgba(74,222,128,0.4)" }}
        title="Написать скиноделу"
      >
        {open ? <Icon name="X" size={22} /> : <Icon name="MessageCircle" size={22} />}
      </button>

      {/* Unread badge */}
      {!open && (
        <div className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-[#ef4444] flex items-center justify-center">
          <span className="text-white text-xs font-bold">1</span>
        </div>
      )}
    </div>
  );
};

export default ChatWidget;
