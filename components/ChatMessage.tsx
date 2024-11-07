import { User, Bot } from 'lucide-react'

interface ChatMessageProps {
  role: 'user' | 'assistant'
  content: string
}

export function ChatMessage({ role, content }: ChatMessageProps) {
  return (
    <div className={`flex items-start gap-4 p-4 ${role === 'assistant' ? 'bg-gray-50' : ''}`}>
      <div className="w-8 h-8 rounded-full flex items-center justify-center bg-gray-100">
        {role === 'user' ? <User className="w-5 h-5" /> : <Bot className="w-5 h-5" />}
      </div>
      <div className="flex-1 space-y-2">
        <p className="font-medium">{role === 'user' ? 'You' : 'Assistant'}</p>
        <p className="text-gray-700">{content}</p>
      </div>
    </div>
  )
} 