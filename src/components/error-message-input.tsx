interface ErrorMessageInputProps {
  error: string
}

export function ErrorMessageInput({ error }: ErrorMessageInputProps) {
  return (
    <p className="font-Inter text-xs text-red-600 before:content-['⚠']">
      {' '}
      {error}
    </p>
  )
}
