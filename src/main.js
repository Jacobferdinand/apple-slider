import { gsap } from 'gsap'

// Get all the CTA buttons and modals
document.querySelectorAll('.section_slider').forEach((section) => {
  const ctaButtons = section.querySelectorAll('.slider_item')
  const modals = section.querySelectorAll('.slider_popup-modal')
  const closeButtons = section.querySelectorAll('.slider_close-icon-wrapper')
  const backgrounds = section.querySelectorAll('.slider_popup-background')

  // Function to open the corresponding modal using GSAP
  ctaButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
      const modal = modals[index]
      modal.style.display = 'flex' // Make the modal block level first

      // Animate the modal's background and content into view
      gsap.fromTo(
        modal,
        { opacity: 0, pointerEvents: 'none', backdropFilter: 'blur(0px)' },
        {
          opacity: 1,
          pointerEvents: 'auto',
          backdropFilter: 'blur(10px)',
          duration: 0.5,
          ease: 'power2.out',
        }
      )
      gsap.fromTo(
        modal.querySelector('.slider_popup-content'),
        { scale: 0.8, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.5, ease: 'power2.out' }
      )
    })
  })

  // Function to close the modal using GSAP
  const closeModal = (index) => {
    const modal = modals[index]

    // Animate the modal's background and content out of view
    gsap.to(modal.querySelector('.slider_popup-content'), {
      scale: 0.8,
      opacity: 0,
      duration: 0.3,
      ease: 'power2.in',
      onComplete: () => {
        // Once animation is complete, set display to none
        modal.style.display = 'none'
      },
    })
    gsap.to(modal, {
      opacity: 0,
      duration: 0.3,
      pointerEvents: 'none',
      backdropFilter: 'blur(0px)', // Animate the blur back to 0 when closing
    })
  }

  // Add close functionality to close buttons and background click
  closeButtons.forEach((button, index) => {
    button.addEventListener('click', () => closeModal(index))
  })

  backgrounds.forEach((background, index) => {
    background.addEventListener('click', () => closeModal(index))
  })
})
