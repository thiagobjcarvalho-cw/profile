// src/composables/useAnimations.js
import { ref, onMounted, onUnmounted } from 'vue'

export function useScrollAnimations() {
  const observedElements = ref(new Set())
  
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  }
  
  let observer = null
  
  const initializeObserver = () => {
    observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-visible')
          
          // Stagger animations for children
          const children = entry.target.querySelectorAll('.animate-stagger')
          children.forEach((child, index) => {
            setTimeout(() => {
              child.classList.add('animate-visible')
            }, index * 100)
          })
          
          // Unobserve element after animation
          observer.unobserve(entry.target)
        }
      })
    }, observerOptions)
  }
  
  const observeElement = (element) => {
    if (observer && element && !observedElements.value.has(element)) {
      observer.observe(element)
      observedElements.value.add(element)
    }
  }
  
  const observeElements = (selector) => {
    const elements = document.querySelectorAll(selector)
    elements.forEach(element => observeElement(element))
  }
  
  onMounted(() => {
    initializeObserver()
    
    // Auto-observe common animation classes
    setTimeout(() => {
      observeElements('.animate-on-scroll')
      observeElements('.animate-fade-in')
      observeElements('.animate-slide-up')
      observeElements('.animate-slide-left')
      observeElements('.animate-slide-right')
    }, 100)
  })
  
  onUnmounted(() => {
    if (observer) {
      observer.disconnect()
    }
  })
  
  return {
    observeElement,
    observeElements
  }
}

export function useScrollProgress() {
  const scrollProgress = ref(0)
  
  const updateScrollProgress = () => {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight
    const scrolled = (winScroll / height) * 100
    scrollProgress.value = Math.min(scrolled, 100)
  }
  
  onMounted(() => {
    window.addEventListener('scroll', updateScrollProgress)
    updateScrollProgress()
  })
  
  onUnmounted(() => {
    window.removeEventListener('scroll', updateScrollProgress)
  })
  
  return {
    scrollProgress
  }
}

export function useParallax() {
  const parallaxElements = ref([])
  
  const addParallaxElement = (element, speed = 0.5) => {
    parallaxElements.value.push({ element, speed })
  }
  
  const updateParallax = () => {
    const scrolled = window.pageYOffset
    
    parallaxElements.value.forEach(({ element, speed }) => {
      if (element) {
        const yPos = -(scrolled * speed)
        element.style.transform = `translateY(${yPos}px)`
      }
    })
  }
  
  onMounted(() => {
    window.addEventListener('scroll', updateParallax)
  })
  
  onUnmounted(() => {
    window.removeEventListener('scroll', updateParallax)
  })
  
  return {
    addParallaxElement
  }
}

export function useTypewriter(texts, options = {}) {
  const displayText = ref('')
  const currentIndex = ref(0)
  const isDeleting = ref(false)
  const isTyping = ref(false)
  
  const {
    typeSpeed = 100,
    deleteSpeed = 50,
    pauseTime = 2000,
    loop = true
  } = options
  
  const type = () => {
    if (!texts || texts.length === 0) return
    
    const currentText = texts[currentIndex.value]
    isTyping.value = true
    
    if (!isDeleting.value && displayText.value.length < currentText.length) {
      displayText.value = currentText.substring(0, displayText.value.length + 1)
      setTimeout(type, typeSpeed)
    } else if (isDeleting.value && displayText.value.length > 0) {
      displayText.value = currentText.substring(0, displayText.value.length - 1)
      setTimeout(type, deleteSpeed)
    } else if (!isDeleting.value && displayText.value === currentText) {
      setTimeout(() => {
        isDeleting.value = true
        type()
      }, pauseTime)
    } else if (isDeleting.value && displayText.value === '') {
      isDeleting.value = false
      currentIndex.value = loop ? (currentIndex.value + 1) % texts.length : currentIndex.value + 1
      
      if (currentIndex.value < texts.length || loop) {
        setTimeout(type, 200)
      } else {
        isTyping.value = false
      }
    }
  }
  
  const startTypewriter = () => {
    if (texts && texts.length > 0) {
      type()
    }
  }
  
  const stopTypewriter = () => {
    isTyping.value = false
  }
  
  return {
    displayText,
    isTyping,
    startTypewriter,
    stopTypewriter
  }
}

export function useMouseFollower() {
  const mouseX = ref(0)
  const mouseY = ref(0)
  const isMouseMoving = ref(false)
  
  let timeout = null
  
  const updateMousePosition = (event) => {
    mouseX.value = event.clientX
    mouseY.value = event.clientY
    isMouseMoving.value = true
    
    clearTimeout(timeout)
    timeout = setTimeout(() => {
      isMouseMoving.value = false
    }, 100)
  }
  
  onMounted(() => {
    document.addEventListener('mousemove', updateMousePosition)
  })
  
  onUnmounted(() => {
    document.removeEventListener('mousemove', updateMousePosition)
    clearTimeout(timeout)
  })
  
  return {
    mouseX,
    mouseY,
    isMouseMoving
  }
}

export function useCountUp(target, options = {}) {
  const currentValue = ref(0)
  const {
    duration = 2000,
    startValue = 0,
    easing = 'easeOutQuart'
  } = options
  
  const easingFunctions = {
    linear: t => t,
    easeOutQuart: t => 1 - (--t) * t * t * t,
    easeOutQuint: t => 1 + (--t) * t * t * t * t
  }
  
  const animate = () => {
    const startTime = Date.now()
    const endTime = startTime + duration
    const targetValue = typeof target === 'function' ? target() : target
    
    const step = () => {
      const now = Date.now()
      const progress = Math.min((now - startTime) / duration, 1)
      const easedProgress = easingFunctions[easing](progress)
      
      currentValue.value = Math.round(startValue + (targetValue - startValue) * easedProgress)
      
      if (progress < 1) {
        requestAnimationFrame(step)
      }
    }
    
    requestAnimationFrame(step)
  }
  
  return {
    currentValue,
    animate
  }
}

// CSS Animation Classes (to be added to global styles)
export const animationClasses = `
  /* Base animation classes */
  .animate-on-scroll,
  .animate-fade-in,
  .animate-slide-up,
  .animate-slide-left,
  .animate-slide-right {
    opacity: 0;
    transition: all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  }
  
  .animate-slide-up {
    transform: translateY(30px);
  }
  
  .animate-slide-left {
    transform: translateX(-30px);
  }
  
  .animate-slide-right {
    transform: translateX(30px);
  }
  
  /* Visible state */
  .animate-visible {
    opacity: 1;
    transform: translate(0, 0);
  }
  
  /* Stagger animations */
  .animate-stagger {
    opacity: 0;
    transform: translateY(20px);
    transition: all 0.4s ease-out;
  }
  
  .animate-stagger.animate-visible {
    opacity: 1;
    transform: translateY(0);
  }
  
  /* Bounce animation */
  .animate-bounce {
    animation: bounce 2s infinite;
  }
  
  @keyframes bounce {
    0%, 20%, 53%, 80%, 100% {
      animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
      transform: translate3d(0,0,0);
    }
    40%, 43% {
      animation-timing-function: cubic-bezier(0.755, 0.050, 0.855, 0.060);
      transform: translate3d(0, -30px, 0);
    }
    70% {
      animation-timing-function: cubic-bezier(0.755, 0.050, 0.855, 0.060);
      transform: translate3d(0, -15px, 0);
    }
    90% {
      transform: translate3d(0,-4px,0);
    }
  }
  
  /* Float animation */
  .animate-float {
    animation: float 6s ease-in-out infinite;
  }
  
  @keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-20px); }
  }
  
  /* Pulse animation */
  .animate-pulse {
    animation: pulse 2s infinite;
  }
  
  @keyframes pulse {
    0%, 100% { opacity: 1; transform: scale(1); }
    50% { opacity: 0.7; transform: scale(1.05); }
  }
  
  /* Rotate animation */
  .animate-rotate {
    animation: rotate 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  }
  
  @keyframes rotate {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
  
  /* Scale on hover */
  .hover-scale {
    transition: transform 0.3s ease;
  }
  
  .hover-scale:hover {
    transform: scale(1.05);
  }
  
  /* Glow effect */
  .glow-effect {
    transition: box-shadow 0.3s ease;
  }
  
  .glow-effect:hover {
    box-shadow: 0 0 20px rgba(59, 130, 246, 0.5);
  }
`