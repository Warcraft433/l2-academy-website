import { motion, useReducedMotion } from 'framer-motion'

export default function Reveal({ children, className = '', delay = 0 }) {
  const reduce = useReducedMotion()

  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 'some' }}
      transition={{ duration: reduce ? 0 : 0.4, delay }}
    >
      {children}
    </motion.div>
  )
}
