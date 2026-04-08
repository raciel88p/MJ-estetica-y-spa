import { motion } from "framer-motion";
import { Check, CheckCheck } from "lucide-react";
import type { ChatMessage } from "@/data/testimonials";

interface Props {
  messages: ChatMessage[];
  title?: string;
}

function MessageBubble({ msg, index }: { msg: ChatMessage; index: number }) {
  const isClient = msg.sender === "client";
  return (
    <motion.div
      initial={{ opacity: 0, x: isClient ? 20 : -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.12, duration: 0.4 }}
      className={`flex flex-col gap-0.5 ${isClient ? "items-end" : "items-start"}`}
    >
      {!isClient && (
        <span className="text-[11px] font-semibold text-primary/70 ml-2">{msg.clientLabel}</span>
      )}
      <div
        className={`max-w-[82%] rounded-2xl px-4 py-2.5 shadow-sm ${
          isClient
            ? "bg-[#dcf8c6] text-stone-800 rounded-br-sm"
            : "bg-white text-stone-800 rounded-bl-sm border border-stone-100"
        }`}
      >
        <p className="text-sm leading-snug">{msg.text}</p>
        <div className={`flex items-center gap-1 mt-1 ${isClient ? "justify-end" : "justify-start"}`}>
          <span className="text-[10px] text-stone-400">{msg.time}</span>
          {isClient && <CheckCheck className="w-3 h-3 text-[#4fc3f7]" />}
        </div>
      </div>
      {isClient && (
        <span className="text-[11px] text-stone-400 mr-2">{msg.clientLabel}</span>
      )}
    </motion.div>
  );
}

export function ChatProof({ messages, title = "Lo que dicen en WhatsApp" }: Props) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-stone-100 overflow-hidden">
      {/* WhatsApp header */}
      <div className="bg-[#075e54] px-4 py-3 flex items-center gap-3">
        <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center">
          <span className="text-white text-sm font-bold">MJ</span>
        </div>
        <div>
          <p className="text-white text-sm font-semibold">MJ Estética & Spa</p>
          <p className="text-white/70 text-xs">{title}</p>
        </div>
        <div className="ml-auto flex gap-1">
          <Check className="w-4 h-4 text-white/50" />
        </div>
      </div>

      {/* Chat background */}
      <div
        className="p-4 flex flex-col gap-3 min-h-[280px]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23e5e5e5' fill-opacity='0.3'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
          backgroundColor: "#ece5dd",
        }}
      >
        {/* Date pill */}
        <div className="flex justify-center">
          <span className="text-[11px] bg-white/80 text-stone-500 rounded-full px-3 py-0.5 shadow-sm">
            Testimonios reales de clientas
          </span>
        </div>

        {messages.map((msg, i) => (
          <MessageBubble key={msg.id} msg={msg} index={i} />
        ))}
      </div>

      {/* Footer */}
      <div className="bg-[#f0f0f0] px-4 py-2 flex items-center gap-2">
        <div className="flex-1 bg-white rounded-full px-4 py-2 text-xs text-stone-400 border border-stone-200">
          Escribe un mensaje...
        </div>
        <div className="w-8 h-8 rounded-full bg-[#075e54] flex items-center justify-center">
          <span className="text-white text-xs">➤</span>
        </div>
      </div>
    </div>
  );
}
