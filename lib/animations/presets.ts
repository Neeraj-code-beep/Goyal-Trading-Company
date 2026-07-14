export const cardHover = {
  whileHover: { y: -4, boxShadow: '0 4px 8px rgba(0, 0, 0, 0.15)' },
  transition: { duration: 0.3, ease: 'easeOut' },
}

export const buttonHover = {
  whileHover: { scale: 1.02 },
  whileTap: { scale: 0.98 },
  transition: { duration: 0.2, ease: 'easeOut' },
}

export const imageZoom = {
  whileHover: { scale: 1.05 },
  transition: { duration: 0.3, ease: 'easeOut' },
}

export const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
  transition: { duration: 0.3, ease: 'easeOut' },
}
