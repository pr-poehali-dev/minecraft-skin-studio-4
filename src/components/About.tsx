import { useEffect, useRef } from "react";
import MinecraftSkin3D from "./MinecraftSkin3D";

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".reveal").forEach((el, i) => {
              setTimeout(() => el.classList.add("visible"), i * 120);
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-24 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#4ade80]/20 to-transparent" />

      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="pixel-badge text-[#4ade80] mb-4 inline-block reveal">О НАС</div>
          <h2 className="font-pixel text-4xl lg:text-5xl text-white mb-4 reveal">
            СТУДИЯ <span className="text-[#4ade80] glow-text-green">PIXELFORGE</span>
          </h2>
        </div>

        {/* Description block */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16">
          <div className="reveal space-y-5">
            <p className="text-[#c8ffc8]/75 leading-relaxed text-base">
              <span className="text-[#4ade80] font-pixel text-sm">PixelForge</span> — студия уникальных Minecraft-скинов, основанная в{" "}
              <span className="text-white font-semibold">2026 году</span>. Мы работаем с любовью к пиксельному искусству и понимаем, как важно выглядеть круто на любом сервере.
            </p>
            <p className="text-[#c8ffc8]/65 leading-relaxed">
              Каждый скин — это ручная работа. Без шаблонов, без генераторов. Только живое пиксельное творчество, подстроенное под твой характер и стиль.
            </p>
            <p className="text-[#c8ffc8]/65 leading-relaxed">
              За время работы мы создали более <span className="text-[#4ade80]">100 уникальных скинов</span> и завоевали доверие игроков по всей России.
            </p>

            {/* Facts */}
            <div className="grid grid-cols-2 gap-4 pt-3">
              {[
                { icon: "⚡", label: "Работаем с 2026 года" },
                { icon: "🎨", label: "100+ скинов в портфолио" },
                { icon: "⏱️", label: "Срок от 1 дня" },
                { icon: "💬", label: "Ответ в течение 2 часов" },
              ].map((f) => (
                <div key={f.label} className="flex items-center gap-2 text-sm text-[#c8ffc8]/60">
                  <span className="text-base">{f.icon}</span>
                  <span>{f.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Guarantee block */}
          <div className="reveal space-y-4">
            <div className="border border-[#4ade80]/20 bg-[#0a140a] rounded-sm p-5">
              <div className="font-pixel text-[#4ade80] text-sm mb-3">НАШИ ГАРАНТИИ</div>
              <ul className="space-y-3">
                {[
                  "Уникальность каждого скина — ни один не повторится",
                  "Оплата только после согласования результата",
                  "Правки включены в стоимость (1-3 в зависимости от тарифа)",
                  "Соблюдение оговорённых сроков",
                  "Поддержка всех версий Minecraft",
                ].map((g) => (
                  <li key={g} className="flex items-start gap-3 text-sm text-[#c8ffc8]/65">
                    <span className="text-[#4ade80] mt-0.5 flex-shrink-0">✓</span>
                    {g}
                  </li>
                ))}
              </ul>
            </div>

            <div className="border border-[#4ade80]/10 bg-[#050805] rounded-sm p-4 flex items-center gap-4">
              <div className="text-2xl">🏆</div>
              <div>
                <div className="font-pixel text-white text-xs">ОСНОВАНЫ В 2026</div>
                <div className="text-[#c8ffc8]/45 text-xs mt-1">Молодая студия с большим сердцем</div>
              </div>
            </div>

            <div className="border border-[#00d9ff]/15 bg-[#050805] rounded-sm p-4 flex items-center gap-4">
              <div className="text-2xl">🌐</div>
              <div>
                <div className="font-pixel text-[#00d9ff] text-xs">НАШ СЕРВЕР</div>
                <div className="text-white text-sm font-pixel mt-0.5">CreeperDrop.ru</div>
                <div className="text-[#c8ffc8]/40 text-xs">Заходи — мы там!</div>
              </div>
            </div>
          </div>
        </div>

        {/* Team — только Виктор */}
        <div>
          <div className="text-center mb-8 reveal">
            <div className="pixel-badge text-[#4ade80] inline-block">КОМАНДА</div>
          </div>

          <div className="flex justify-center">
            <div className="reveal skin-card border-2 border-[#4ade80]/40 bg-[#0a140a] rounded-sm p-8 max-w-xs w-full text-center glow-green">
              <div className="flex justify-center mb-4">
                <MinecraftSkin3D
                  colors={{ head: "#d4a46a", body: "#4ade80", legs: "#1e3a5f", arms: "#4ade80" }}
                  size={1.3}
                  floating
                  delay={0}
                />
              </div>

              <div className="pixel-badge text-[#4ade80] mb-3 inline-block">ГЛАВНЫЙ СКИНОДЕЛ</div>
              <h3 className="font-pixel text-2xl text-white mb-1">ВИКТОР</h3>
              <div className="text-[#c8ffc8]/50 text-sm mb-4">Основатель студии</div>

              <div className="grid grid-cols-2 gap-3 text-center">
                <div className="border border-[#4ade80]/20 rounded-sm py-2 px-3">
                  <div className="font-pixel text-[#4ade80] text-lg">100+</div>
                  <div className="text-[#c8ffc8]/45 text-xs">Сделано работ</div>
                </div>
                <div className="border border-[#4ade80]/20 rounded-sm py-2 px-3">
                  <div className="font-pixel text-[#4ade80] text-lg">1 год</div>
                  <div className="text-[#c8ffc8]/45 text-xs">Делает скины</div>
                </div>
              </div>

              <p className="text-[#c8ffc8]/55 text-xs mt-4 leading-relaxed">
                Влюблён в пиксельное искусство. Каждый скин прорабатывает вручную — с душой и вниманием к деталям.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;