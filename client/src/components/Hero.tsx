import { Button } from "@/components/ui/button";

export function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      data-testid="section-hero"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://www.suryaamitra.com/assets/images/solar_image.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/60 to-black/70"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
          data-testid="text-hero-headline"
        >
          Powering a Sustainable Future
        </h1>

        <h2
          className="text-xl sm:text-2xl md:text-3xl font-semibold text-white/95 mb-8"
          data-testid="text-hero-subheading"
        >
          Reliable & Affordable Solar Energy Solutions
        </h2>

        <p
          className="text-base sm:text-lg md:text-xl text-white/90 max-w-3xl mx-auto mb-12 leading-relaxed"
          data-testid="text-hero-description"
        >
          Switch to solar and reduce your electricity bills while helping the environment. We provide
          high-quality solar panels and professional installation services for homes and businesses.
        </p>

        <Button
          size="lg"
          className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold text-lg px-8 py-6 h-auto rounded-md shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 backdrop-blur-sm"
          onClick={scrollToContact}
          data-testid="button-get-quote"
        >
          <i className="fas fa-file-invoice mr-2"></i>
          Get Free Quote
        </Button>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <i className="fas fa-chevron-down text-white/60 text-2xl"></i>
      </div>
    </section>
  );
}
