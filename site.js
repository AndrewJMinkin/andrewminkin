const links = [...document.querySelectorAll('nav a')]
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue
      for (const link of links) {
        if (link.hash === `#${entry.target.id}`) link.setAttribute('aria-current', 'location')
        else link.removeAttribute('aria-current')
      }
    }
  }, { rootMargin: '-30% 0px -60% 0px' })
  for (const link of links) {
    const section = document.querySelector(link.hash)
    if (section) observer.observe(section)
  }
}
