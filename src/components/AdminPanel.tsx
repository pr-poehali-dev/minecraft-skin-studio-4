import { useState } from "react";
import Icon from "@/components/ui/icon";

interface Message {
  id: number;
  nick: string;
  product: string;
  text: string;
  time: string;
  unread: boolean;
}

interface AdminPanelProps {
  onClose: () => void;
}

const MOCK_MESSAGES: Message[] = [
  { id: 1, nick: "DarkWolf_MC", product: "Кастомный скин", text: "Привет! Хочу заказать тёмный скин с капюшоном...", time: "14:32", unread: true },
  { id: 2, nick: "PixelQueen", product: "Простой скин", text: "Можно сделать скин в стиле аниме?", time: "13:10", unread: true },
  { id: 3, nick: "CraftMaster99", product: "Ребрендинг", text: "Отличная работа, спасибо!", time: "11:55", unread: false },
];

const AdminPanel = ({ onClose }: AdminPanelProps) => {
  const [password, setPassword] = useState("");
  const [authed, setAuthed] = useState(false);
  const [error, setError] = useState(false);
  const [activeChat, setActiveChat] = useState<Message | null>(null);
  const [messages, setMessages] = useState<{ [key: number]: { from: "admin" | "user"; text: string }[] }>({
    1: [{ from: "user", text: "Привет! Хочу заказать тёмный скин с капюшоном и красными глазами" }],
    2: [{ from: "user", text: "Можно сделать скин в стиле аниме? Девочка с розовыми волосами" }],
    3: [{ from: "user", text: "Получил скин, всё отлично!" }, { from: "admin", text: "Рад стараться! Обращайся ещё 🎨" }],
  });
  const [reply, setReply] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === "ab030403042012") {
      setAuthed(true);
      setError(false);
    } else {
      setError(true);
    }
  };

  const sendReply = () => {
    if (!reply.trim() || !activeChat) return;
    setMessages((prev) => ({
      ...prev,
      [activeChat.id]: [...(prev[activeChat.id] || []), { from: "admin", text: reply }],
    }));
    setReply("");
  };

  return (
    <div className="fixed inset-0 z-[60] bg-[#0a0f0a]/95 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="w-full max-w-3xl bg-[#050805] border border-[#4ade80]/30 rounded-sm shadow-2xl glow-green overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#4ade80]/20 bg-[#0a140a]">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-[#4ade80] animate-pulse" />
            <span className="font-pixel text-[#4ade80] text-sm tracking-widest">
              {authed ? "ПАНЕЛЬ СКИНОДЕЛА" : "ВХОД В ПАНЕЛЬ"}
            </span>
          </div>
          <button onClick={onClose} className="text-[#c8ffc8]/40 hover:text-[#4ade80] transition-colors">
            <Icon name="X" size={18} />
          </button>
        </div>

        {!authed ? (
          /* Login */
          <form onSubmit={handleLogin} className="p-8 flex flex-col items-center gap-5">
            <div className="text-4xl mb-2">🔒</div>
            <div className="text-center">
              <div className="font-pixel text-white text-lg mb-1">ПАНЕЛЬ АДМИНИСТРАТОРА</div>
              <div className="text-[#c8ffc8]/40 text-sm">Введи пароль для входа</div>
            </div>
            <div className="w-full max-w-xs">
              <label className="block text-[#4ade80] font-pixel text-xs tracking-widest mb-2">НИК</label>
              <input
                value="xezze228"
                readOnly
                className="w-full bg-[#0a0f0a] border border-[#4ade80]/20 text-[#c8ffc8]/50 px-4 py-3 rounded-sm font-mono text-sm mb-3"
              />
              <label className="block text-[#4ade80] font-pixel text-xs tracking-widest mb-2">ПАРОЛЬ</label>
              <input
                type="password"
                value={password}
                onChange={(e) => { setPassword(e.target.value); setError(false); }}
                placeholder="••••••••"
                className={`w-full bg-[#0a0f0a] border px-4 py-3 rounded-sm font-mono text-sm focus:outline-none transition-colors text-[#c8ffc8] ${
                  error ? "border-red-500/60 focus:border-red-500" : "border-[#4ade80]/25 focus:border-[#4ade80]"
                }`}
              />
              {error && <p className="text-red-400 text-xs mt-1.5 font-mono">Неверный пароль</p>}
            </div>
            <button
              type="submit"
              className="pixel-btn pixel-border bg-[#4ade80] text-[#050805] px-8 py-3 font-pixel text-xs tracking-widest rounded-sm hover:bg-[#22c55e] transition-colors"
            >
              ВОЙТИ
            </button>
          </form>
        ) : activeChat ? (
          /* Chat view */
          <div className="flex flex-col h-[500px]">
            <div className="flex items-center gap-3 px-4 py-3 border-b border-[#4ade80]/15 bg-[#0a140a]">
              <button onClick={() => setActiveChat(null)} className="text-[#c8ffc8]/50 hover:text-[#4ade80] transition-colors">
                <Icon name="ArrowLeft" size={16} />
              </button>
              <div>
                <div className="font-pixel text-white text-sm">{activeChat.nick}</div>
                <div className="text-[#4ade80]/60 text-xs">{activeChat.product}</div>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {(messages[activeChat.id] || []).map((m, i) => (
                <div key={i} className={`flex ${m.from === "admin" ? "justify-end" : "justify-start"}`}>
                  <div
                    className="max-w-[75%] px-4 py-2.5 rounded-sm text-sm"
                    style={{
                      background: m.from === "admin" ? "#4ade8020" : "#0a140a",
                      border: `1px solid ${m.from === "admin" ? "#4ade8040" : "#4ade8015"}`,
                      color: m.from === "admin" ? "#4ade80" : "#c8ffc8",
                    }}
                  >
                    {m.text}
                  </div>
                </div>
              ))}
            </div>

            <div className="flex gap-3 p-4 border-t border-[#4ade80]/15">
              <input
                value={reply}
                onChange={(e) => setReply(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && sendReply()}
                placeholder="Написать ответ..."
                className="flex-1 bg-[#0a0f0a] border border-[#4ade80]/25 text-[#c8ffc8] px-4 py-2.5 rounded-sm focus:outline-none focus:border-[#4ade80] transition-colors font-mono text-sm"
              />
              <button
                onClick={sendReply}
                className="pixel-btn pixel-border bg-[#4ade80] text-[#050805] px-4 py-2.5 rounded-sm hover:bg-[#22c55e] transition-colors"
              >
                <Icon name="Send" size={16} />
              </button>
            </div>
          </div>
        ) : (
          /* Chat list */
          <div className="p-5">
            <div className="font-pixel text-[#c8ffc8]/40 text-xs tracking-widest mb-4">ЗАЯВКИ И ЧАТЫ</div>
            <div className="space-y-3">
              {MOCK_MESSAGES.map((msg) => (
                <button
                  key={msg.id}
                  onClick={() => setActiveChat(msg)}
                  className="w-full flex items-center gap-4 border border-[#4ade80]/15 bg-[#0a140a] hover:border-[#4ade80]/40 rounded-sm p-4 transition-colors text-left"
                >
                  <div className="w-10 h-10 rounded-sm bg-[#4ade80]/10 flex items-center justify-center flex-shrink-0">
                    <span className="font-pixel text-[#4ade80] text-xs">{msg.nick[0]}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-0.5">
                      <span className="font-pixel text-white text-xs">{msg.nick}</span>
                      {msg.unread && (
                        <span className="w-2 h-2 rounded-full bg-[#4ade80] flex-shrink-0" />
                      )}
                      <span className="ml-auto text-[#c8ffc8]/30 text-xs font-mono">{msg.time}</span>
                    </div>
                    <div className="text-[#4ade80]/60 text-xs mb-0.5">{msg.product}</div>
                    <div className="text-[#c8ffc8]/45 text-xs truncate">{msg.text}</div>
                  </div>
                  <Icon name="ChevronRight" size={14} className="text-[#4ade80]/30 flex-shrink-0" />
                </button>
              ))}
            </div>
            {MOCK_MESSAGES.filter(m => m.unread).length > 0 && (
              <div className="mt-4 text-center">
                <span className="pixel-badge text-[#4ade80] text-xs">
                  {MOCK_MESSAGES.filter(m => m.unread).length} новых заявки
                </span>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminPanel;
