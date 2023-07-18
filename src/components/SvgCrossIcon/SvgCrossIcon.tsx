import { FC } from 'react'

interface SvgCrossIconProps {
  width: string
  height: string
  className?: string
  onClick?: () => void
}

export const SvgCrossIcon: FC<SvgCrossIconProps> = ({ width, height, className, onClick }: SvgCrossIconProps) => (
  <svg
    width={`${width}px`}
    height={`${height}px`}
    className={className}
    onClick={onClick}
    viewBox='0 0 1024 1024'
    version='1.1'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path d='M523.662 510.979l345.262-346.825c6.308-6.336 6.284-16.586-0.052-22.895-6.337-6.307-16.586-6.286-22.895 0.052l-345.158 346.721-345.159-346.722c-6.308-6.336-16.558-6.36-22.895-0.052s-6.36 16.558-0.052 22.895l345.263 346.826-345.263 346.824c-6.307 6.336-6.285 16.586 0.052 22.895 3.158 3.143 7.291 4.716 11.422 4.716 4.156 0 8.31-1.59 11.473-4.768l345.159-346.721 345.159 346.721c3.164 3.177 7.319 4.768 11.473 4.768 4.131 0 8.263-1.571 11.422-4.716 6.336-6.308 6.36-16.558 0.052-22.895l-345.263-346.824z' />
  </svg>
)
