import './PlaceholderImage.css'

function PlaceholderImage({ label, aspect = '4 / 3', className = '' }) {
  return (
    <div
      className={`placeholder-image ${className}`}
      style={{ aspectRatio: aspect }}
    >
      <span>{label}</span>
    </div>
  )
}

export default PlaceholderImage
