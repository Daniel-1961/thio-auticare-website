class SiteHeader extends HTMLElement {
  connectedCallback() {
    const isAm = document.documentElement.lang === 'am';
    const basePath = isAm ? '../' : '';
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';

    const getAria = (page) => currentPage === page ? 'aria-current="page"' : '';
    const getLangAria = (lang) => (isAm && lang === 'am') || (!isAm && lang === 'en') ? 'aria-current="true"' : '';

    this.innerHTML = `
      <header class="site-header">
        <div class="nav-bar">
          <a class="site-mark" href="index.html">
            <svg class="site-mark__glyph" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <circle cx="20" cy="20" r="18.5" stroke="#C68A2E" stroke-width="1.6"/>
              <path d="M13 24c1.8-6 4.6-9 7-9s5.2 3 7 9" stroke="#F6EFE3" stroke-width="1.8" stroke-linecap="round" fill="none"/>
              <circle cx="14.5" cy="16.5" r="1.7" fill="#E7C87A"/>
              <circle cx="25.5" cy="16.5" r="1.7" fill="#E7C87A"/>
            </svg>
            <span class="site-mark__text">${isAm ? 'ኢትዮ-ኦቲ ኬር' : 'Ethio-Auti care'}</span>
          </a>
          <button class="nav-toggle" aria-expanded="false" aria-label="${isAm ? 'ማውጫ' : 'Menu'}">&#9776;</button>
          <ul class="nav-links">
            <li><a href="index.html" ${getAria('index.html')}>${isAm ? 'መነሻ' : 'Home'}</a></li>
            <li><a href="about.html" ${getAria('about.html')}>${isAm ? 'ስለ እኛ' : 'About'}</a></li>
            <li><a href="for-family.html" ${getAria('for-family.html')}>${isAm ? 'ለቤተሰቦች' : 'For Family'}</a></li>
            <li><a href="understanding-autism.html" ${getAria('understanding-autism.html')}>${isAm ? 'ኦቲዝምን መረዳት' : 'Understanding Autism'}</a></li>
            <li><a href="care-centers.html" ${getAria('care-centers.html')}>${isAm ? 'የእንክብካቤ ማዕከላት' : 'Care Centers'}</a></li>
          </ul>
          <div class="lang-switch" role="group" aria-label="Language / ቋንቋ">
            <a href="${isAm ? '../' : ''}${currentPage}" ${getLangAria('en')}>EN</a>
            <a href="${isAm ? '' : 'am/'}${currentPage}" ${getLangAria('am')}>አማ</a>
          </div>
        </div>
      </header>
    `;

    // Rebind the toggle functionality since it was replaced dynamically
    const toggle = this.querySelector('.nav-toggle');
    const navBar = this.querySelector('.nav-bar');
    if (toggle && navBar) {
      toggle.addEventListener('click', () => {
        const isOpen = navBar.classList.toggle('is-open');
        toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      });
    }
  }
}

class SiteFooter extends HTMLElement {
  connectedCallback() {
    const isAm = document.documentElement.lang === 'am';
    
    const enFooter = `
      <footer class="site-footer">
        <div class="site-footer__inner">
          <div>
            <h3>Ethio-Auti care</h3>
            <p>A bilingual space for families, educators, and health workers supporting people with autism and Down syndrome in Ethiopia. Built by Ephrem Dawit.</p>
          </div>
          <div>
            <h3>Pages</h3>
            <ul style="list-style:none;padding:0;margin:0;">
            <li><a href="index.html">Home</a></li>
            <li><a href="about.html">About</a></li>
            <li><a href="for-family.html">For Family</a></li>
            <li><a href="understanding-autism.html">Understanding Autism</a></li>
            <li><a href="care-centers.html">Care Centers</a></li>
            </ul>
          </div>
          <div>
            <h3>Contact</h3>
            <p><a href="https://t.me/Ephiremism">t.me/Ephiremism</a></p>
            <p><a href="tel:+251926805726">+251 926805726</a></p>
          </div>
        </div>
        <div class="site-footer__bottom container">
          <p style="margin:0;max-width:none;">&copy; 2026 Ethio-Auti care. Built for families across Ethiopia.</p>
        </div>
      </footer>
    `;

    const amFooter = `
      <footer class="site-footer">
        <div class="site-footer__inner">
          <div>
            <h3>ኢትዮ-ኦቲ ኬር</h3>
            <p>በኢትዮጵያ ውስጥ ኦቲዝም እና ዳውን ሲንድሮም ላለባቸው ግለሰቦች ለሚደግፉ ቤተሰቦች፣ አስተማሪዎች እና የጤና ባለሙያዎች የተዘጋጀ ባለሁለት ቋንቋ መድረክ። በኤፍሬም ዳዊት የተገነባ።</p>
          </div>
          <div>
            <h3>ገጾች</h3>
            <ul style="list-style:none;padding:0;margin:0;">
            <li><a href="index.html">መነሻ</a></li>
            <li><a href="about.html">ስለ እኛ</a></li>
            <li><a href="for-family.html">ለቤተሰቦች</a></li>
            <li><a href="understanding-autism.html">ኦቲዝምን መረዳት</a></li>
            <li><a href="care-centers.html">የእንክብካቤ ማዕከላት</a></li>
            </ul>
          </div>
          <div>
            <h3>አድራሻ</h3>
            <p><a href="https://t.me/Ephiremism">t.me/Ephiremism</a></p>
            <p><a href="tel:+251926805726">+251 926805726</a></p>
          </div>
        </div>
        <div class="site-footer__bottom container">
          <p style="margin:0;max-width:none;">&copy; 2026 ኢትዮ-ኦቲ ኬር። በመላው ኢትዮጵያ ለሚገኙ ቤተሰቦች የተዘጋጀ።</p>
        </div>
      </footer>
    `;

    this.innerHTML = isAm ? amFooter : enFooter;
  }
}

customElements.define('site-header', SiteHeader);
customElements.define('site-footer', SiteFooter);
