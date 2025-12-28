interface TagPillsProps {
  tags: string[]
  className?: string
}

export default function TagPills({ tags, className = '' }: TagPillsProps) {
  return (
    <div className={`flex flex-wrap gap-2 ${className}`}>
      {tags.map((tag, index) => (
        <span
          key={index}
          className="small-caps px-3 py-1 bg-ink/5 text-ink/70 border border-ink/10 rounded-sm text-xs"
        >
          {tag}
        </span>
      ))}
    </div>
  )
}

