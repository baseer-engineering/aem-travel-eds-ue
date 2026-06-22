export default function decorate(block) {
  const rows = [...block.children];

  // Row 0 = headline (from model field "headline")
  if (rows[0]) {
    rows[0].className = 'hero-headline';
  }

  // Row 1 = subheadline (from model field "subheadline")
  if (rows[1]) {
    rows[1].className = 'hero-subheadline';
  }

  // Add a CTA button
  const cta = document.createElement('div');
  cta.className = 'hero-cta';
  cta.innerHTML = '<a href="/destinations" class="btn-primary">Explore Destinations</a>';
  block.appendChild(cta);
}
