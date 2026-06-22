import { useEffect, useRef, useState } from 'react'
import { MessageCircle, X, Send, Bot } from 'lucide-react'
import { buildSiteContext } from '../data/siteContext'
import './ChatBot.css'

const GROQ_MODEL = import.meta.env.VITE_GROQ_MODEL || 'llama-3.3-70b-versatile'
const GROQ_API_KEY = import.meta.env.VITE_GROQ_API_KEY

const initialMessage = {
  role: 'assistant',
  content:
    'Halo! Saya asisten AIRDE Academy. Tanyakan apa saja seputar program ChatGPT for Project Managers — module, materi, durasi, sampai cara daftar.',
}

async function askGroq(history) {
  const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${GROQ_API_KEY}`,
    },
    body: JSON.stringify({
      model: GROQ_MODEL,
      messages: [{ role: 'system', content: buildSiteContext() }, ...history],
      temperature: 0.4,
      max_tokens: 600,
    }),
  })

  if (!response.ok) {
    const text = await response.text()
    throw new Error(`Groq API error ${response.status}: ${text}`)
  }

  const data = await response.json()
  return data.choices?.[0]?.message?.content?.trim() || 'Maaf, saya tidak mendapatkan jawaban. Coba lagi ya.'
}

function ChatBot() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState([initialMessage])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const scrollRef = useRef(null)

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
  }, [messages, open, loading])

  async function handleSend(e) {
    e.preventDefault()
    const text = input.trim()
    if (!text || loading) return

    const nextMessages = [...messages, { role: 'user', content: text }]
    setMessages(nextMessages)
    setInput('')

    if (!GROQ_API_KEY) {
      setMessages([
        ...nextMessages,
        {
          role: 'assistant',
          content:
            'API key Groq belum diset. Tambahkan VITE_GROQ_API_KEY di file .env lalu restart dev server.',
        },
      ])
      return
    }

    setLoading(true)
    try {
      const reply = await askGroq(nextMessages)
      setMessages([...nextMessages, { role: 'assistant', content: reply }])
    } catch (err) {
      setMessages([
        ...nextMessages,
        { role: 'assistant', content: `Maaf, terjadi kendala menghubungi asisten. (${err.message})` },
      ])
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="chatbot">
      {open && (
        <div className="chatbot-panel">
          <div className="chatbot-header">
            <div className="chatbot-header-info">
              <span className="chatbot-avatar">
                <Bot size={18} />
              </span>
              <div>
                <div className="chatbot-title">AIRDE Assistant</div>
                <div className="chatbot-subtitle">Tanya apa saja seputar program ini</div>
              </div>
            </div>
            <button type="button" className="chatbot-close" onClick={() => setOpen(false)} aria-label="Tutup chat">
              <X size={18} />
            </button>
          </div>

          <div className="chatbot-messages" ref={scrollRef}>
            {messages.map((msg, idx) => (
              <div className={`chatbot-bubble chatbot-bubble-${msg.role}`} key={idx}>
                {msg.content}
              </div>
            ))}
            {loading && (
              <div className="chatbot-bubble chatbot-bubble-assistant chatbot-typing">
                <span />
                <span />
                <span />
              </div>
            )}
          </div>

          <form className="chatbot-input-row" onSubmit={handleSend}>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Tulis pertanyaan..."
              disabled={loading}
            />
            <button type="submit" disabled={loading || !input.trim()} aria-label="Kirim">
              <Send size={16} />
            </button>
          </form>
        </div>
      )}

      <button
        type="button"
        className="chatbot-fab"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? 'Tutup chat' : 'Buka chat'}
      >
        {open ? <X size={24} /> :   <Bot size={18} />}
      </button>
    </div>
  )
}

export default ChatBot
