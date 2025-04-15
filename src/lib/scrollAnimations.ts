
// Intersection Observer configuration
export const createScrollObserver = (
  callback: IntersectionObserverCallback,
  options: IntersectionObserverInit = { threshold: 0.2, rootMargin: '0px 0px -10% 0px' }
) => {
  return new IntersectionObserver(callback, options);
};

// Animation classes for different effects
export const scrollAnimations = {
  fadeIn: 'opacity-0 transition-opacity duration-1000 ease-out',
  fadeInActive: 'opacity-100',
  
  slideUp: 'opacity-0 translate-y-10 transition-all duration-700 ease-out',
  slideUpActive: 'opacity-100 translate-y-0',
  
  slideRight: 'opacity-0 -translate-x-10 transition-all duration-700 ease-out',
  slideRightActive: 'opacity-100 translate-x-0',
  
  slideLeft: 'opacity-0 translate-x-10 transition-all duration-700 ease-out',
  slideLeftActive: 'opacity-100 translate-x-0',
  
  zoomIn: 'opacity-0 scale-95 transition-all duration-700 ease-out',
  zoomInActive: 'opacity-100 scale-100',
  
  rotate3D: 'opacity-0 rotateX(-10deg) perspective-1000 transition-all duration-700 ease-out transform-gpu',
  rotate3DActive: 'opacity-100 rotateX(0)',
  
  flipIn: 'opacity-0 rotateY(-10deg) perspective-1000 transition-all duration-700 ease-out transform-gpu',
  flipInActive: 'opacity-100 rotateY(0)',
};

export const setupScrollAnimation = () => {
  // Get all elements with data-scroll attribute
  const scrollElements = document.querySelectorAll('[data-scroll]');
  
  const observer = createScrollObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const element = entry.target;
        const animation = element.getAttribute('data-scroll');
        const delay = element.getAttribute('data-scroll-delay');
        
        if (animation && scrollAnimations[`${animation}Active` as keyof typeof scrollAnimations]) {
          // Apply delay if specified
          if (delay) {
            setTimeout(() => {
              element.classList.add(scrollAnimations[`${animation}Active` as keyof typeof scrollAnimations]);
            }, parseInt(delay));
          } else {
            // Add the active class for the animation
            element.classList.add(scrollAnimations[`${animation}Active` as keyof typeof scrollAnimations]);
          }
        }
        
        // Once the animation is applied, we can unobserve the element
        observer.unobserve(element);
      }
    });
  });
  
  // Observe all scroll elements
  scrollElements.forEach(el => {
    // Add the initial animation class
    const animation = el.getAttribute('data-scroll');
    if (animation && scrollAnimations[animation as keyof typeof scrollAnimations]) {
      el.classList.add(scrollAnimations[animation as keyof typeof scrollAnimations]);
    }
    
    observer.observe(el);
  });
  
  return observer;
};

// Parallax effect for backgrounds and elements
export const setupParallaxEffects = () => {
  const parallaxElements = document.querySelectorAll('[data-parallax]');
  
  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    
    parallaxElements.forEach(el => {
      const element = el as HTMLElement;
      const speed = parseFloat(element.getAttribute('data-parallax') || '0.1');
      const yPos = -(scrollPosition * speed);
      
      element.style.transform = `translate3d(0, ${yPos}px, 0)`;
    });
  };
  
  window.addEventListener('scroll', handleScroll);
  handleScroll(); // Initialize positions
  
  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
};

// Setup floating animations for elements
export const setupFloatingElements = () => {
  const floatingElements = document.querySelectorAll('[data-float]');
  
  floatingElements.forEach(el => {
    const element = el as HTMLElement;
    const intensity = element.getAttribute('data-float') || 'medium';
    
    let animationClass = 'animate-float';
    if (intensity === 'light') animationClass = 'animate-float-light';
    if (intensity === 'heavy') animationClass = 'animate-float-heavy';
    
    element.classList.add(animationClass);
  });
};
