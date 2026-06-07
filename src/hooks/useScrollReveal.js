import { useEffect } from 'react';

// Adds the `in` class to `.reveal` / `.stagger` elements as they scroll into
// view (hero elements are handled separately inside the Hero component so they
// can stagger on load).
export default function useScrollReveal() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in');
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.14 }
    );
    document
      .querySelectorAll('.reveal:not(.hero-r), .stagger')
      .forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}
