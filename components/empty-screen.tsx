import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

const exampleMessages = [
  {
    heading: 'Nvidia 为什么快速增长？',
    message: 'Nvidia 为什么快速增长？'
  },
  {
    heading: 'Apple Vision Pro 值得购买吗？',
    message: 'Apple Vision Pro 值得购买吗？'
  },
  {
    heading: 'Vercel AI SDK 如何工作？',
    message: 'Vercel AI SDK 如何工作？'
  },
  {
    heading: '特斯拉 vs 比亚迪',
    message: '特斯拉 vs 比亚迪'
  }
]
export function EmptyScreen({
  submitMessage,
  className
}: {
  submitMessage: (message: string) => void
  className?: string
}) {
  return (
    <div className={`mx-auto w-full transition-all ${className}`}>
      <div className="bg-background p-2">
        <div className="mt-4 flex flex-col items-start space-y-2 mb-4">
          {exampleMessages.map((message, index) => (
            <Button
              key={index}
              variant="link"
              className="h-auto p-0 text-base"
              name={message.message}
              onClick={async () => {
                submitMessage(message.message)
              }}
            >
              <ArrowRight size={16} className="mr-2 text-muted-foreground" />
              {message.heading}
            </Button>
          ))}
        </div>
      </div>
    </div>
  )
}
