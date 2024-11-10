import ReactMarkdown from 'react-markdown'

interface ChatMessageProps {
  role: 'user' | 'assistant'
  content: string
}

export function ChatMessage({ role, content }: ChatMessageProps) {
  return (
    <div className={`p-4 ${role === 'assistant' ? 'bg-gray-50' : 'bg-white'}`}>
      <div className="max-w-2xl mx-auto">
        <div className="font-semibold mb-2 text-sm text-gray-600">
          {role === 'assistant' ? 'Assistant' : 'You'}
        </div>
        <div className="prose prose-sm max-w-none">
          <ReactMarkdown>{content}</ReactMarkdown>
        </div>
      </div>
    </div>
  )
} 