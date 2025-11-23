export function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: "fa-facebook-f", label: "Facebook", url: "#" },
    { icon: "fa-twitter", label: "Twitter", url: "#" },
    { icon: "fa-linkedin-in", label: "LinkedIn", url: "#" },
    { icon: "fa-instagram", label: "Instagram", url: "#" },
  ];

  return (
    <footer
      id="contact"
      className="bg-foreground text-background py-16"
      data-testid="footer-main"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="flex items-center justify-center w-10 h-10 bg-primary rounded-md">
                <i className="fas fa-solar-panel text-primary-foreground text-xl"></i>
              </div>
              <span className="text-xl font-bold">Surya Mitra Solar</span>
            </div>
            <p className="text-background/80 leading-relaxed">
              Powering a sustainable future with clean, reliable, and affordable solar energy solutions.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4" data-testid="text-footer-contact-heading">
              Contact Us
            </h3>
            <div className="space-y-3">
              <a
                href="mailto:contact@suryaamitra.com"
                className="flex items-center text-background/80 hover:text-primary transition-colors"
                data-testid="link-email"
              >
                <i className="fas fa-envelope mr-3"></i>
                contact@suryaamitra.com
              </a>
              <a
                href="tel:+91XXXXXXXXXX"
                className="flex items-center text-background/80 hover:text-primary transition-colors"
                data-testid="link-phone"
              >
                <i className="fas fa-phone mr-3"></i>
                +91 XXXXXXXXXX
              </a>
              <div className="flex items-start text-background/80">
                <i className="fas fa-location-dot mr-3 mt-1"></i>
                <span>India</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4" data-testid="text-footer-social-heading">
              Follow Us
            </h3>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.icon}
                  href={social.url}
                  aria-label={social.label}
                  className="w-10 h-10 bg-background/10 hover:bg-primary rounded-md flex items-center justify-center transition-all duration-300 hover-elevate active-elevate-2"
                  data-testid={`link-social-${social.label.toLowerCase()}`}
                >
                  <i className={`fab ${social.icon}`}></i>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 text-center">
          <p className="text-background/70 text-sm" data-testid="text-copyright">
            &copy; {currentYear} Surya Mitra Solar. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
