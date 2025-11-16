"use client";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleMinimal from '@/components/navbar/NavbarStyleMinimal';
import HeroBillboardScroll from '@/components/sections/hero/HeroBillboardScroll';
import TagAbout from '@/components/sections/about/TagAbout';
import FeatureCardOne from '@/components/sections/feature/FeatureCardOne';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import PricingCardThree from '@/components/sections/pricing/PricingCardThree';
import MetricCardTwo from '@/components/sections/metrics/MetricCardTwo';
import TeamCardTwo from '@/components/sections/team/TeamCardTwo';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterBase from '@/components/sections/footer/FooterBase';
import { Crown, DollarSign, MessageSquare, Scissors, Sparkles, Star, Trophy, Users, Instagram, Facebook } from "lucide-react";

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="shift-hover"
      defaultTextAnimation="entrance-slide"
      borderRadius="rounded"
      contentWidth="large"
      sizing="large"
      background="none"
      cardStyle="glass-elevated"
      primaryButtonStyle="flat"
      secondaryButtonStyle="solid"
      showBlurBottom={true}
    >
      <div id="nav" data-section="nav">
        <NavbarStyleMinimal
          brandName="Lorenzo Noya"
          button={{
            text: "Book Appointment",
            href: "contact"
          }}
        />
      </div>
      
      <div id="hero" data-section="hero">
        <HeroBillboardScroll
          title="Master of the Italian Barbering Arts"
          description="Experience the finest traditional barbering with Lorenzo Noya, where Italian craftsmanship meets modern sophistication in every cut, shave, and styling service."
          tag="Master Barber"
          tagIcon={Scissors}
          buttons={[
            {
              text: "Book Your Appointment",
              href: "contact"
            },
            {
              text: "View Services",
              href: "pricing"
            }
          ]}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763325805725-c8uofja0.jpg"
          imageAlt="Lorenzo Noya master barber at work"
        />
      </div>
      
      <div id="about" data-section="about">
        <TagAbout
          tag="Italian Heritage"
          description="Born in Naples and trained by generations of master barbers, Lorenzo brings authentic Italian barbering traditions to every service. With over 20 years of experience, he combines time-honored techniques with modern precision to create the perfect look for every gentleman who sits in his chair."
        />
      </div>
      
      <div id="features" data-section="features">
        <FeatureCardOne
          title="Signature Services"
          description="Experience the artistry of traditional Italian barbering with our premium services"
          tag="Services"
          tagIcon={Crown}
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          features={[
            {
              title: "Classic Italian Cut",
              description: "Precision cutting techniques passed down through generations of Italian master barbers",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763325807043-3nskqg1h.jpg",
              imageAlt: "Classic men's haircut"
            },
            {
              title: "Master Beard Grooming",
              description: "Expert beard trimming, shaping, and styling for the distinguished gentleman",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763325807778-5js8f8hx.jpg",
              imageAlt: "Professional beard grooming"
            },
            {
              title: "Traditional Hot Towel Shave",
              description: "Luxurious hot towel shave with premium Italian products for the ultimate experience",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763325808540-75z7a8m1.jpg",
              imageAlt: "Hot towel shave service"
            }
          ]}
        />
      </div>
      
      <div id="products" data-section="products">
        <ProductCardOne
          title="Premium Hair Products"
          description="Professional-grade Italian hair products used and recommended by Lorenzo"
          tag="Products"
          tagIcon={Sparkles}
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          products={[
            {
              id: "1",
              name: "Italian Pomade Supreme",
              price: "€45",
              imageSrc: "/placeholders/placeholder1.webp",
              imageAlt: "Premium Italian pomade"
            },
            {
              id: "2",
              name: "Beard Oil Luxury",
              price: "€35",
              imageSrc: "/placeholders/placeholder1.webp",
              imageAlt: "Luxury beard oil"
            },
            {
              id: "3",
              name: "Styling Cream Professional",
              price: "€40",
              imageSrc: "/placeholders/placeholder1.webp",
              imageAlt: "Professional styling cream"
            }
          ]}
        />
      </div>
      
      <div id="pricing" data-section="pricing">
        <PricingCardThree
          title="Premium Services"
          description="Authentic Italian barbering at its finest"
          tag="Pricing"
          tagIcon={DollarSign}
          textboxLayout="default"
          animationType="slide-up"
          plans={[
            {
              id: "classic",
              name: "Classic Cut",
              price: "€65",
              features: [
                "Consultation & styling advice",
                "Precision cut with Italian techniques",
                "Hair wash & conditioning",
                "Styling with premium products"
              ],
              buttons: [
                {
                  text: "Book Now",
                  href: "contact"
                },
                {
                  text: "Learn More",
                  href: "about"
                }
              ]
            },
            {
              id: "signature",
              badge: "Most Popular",
              badgeIcon: Star,
              name: "Signature Experience",
              price: "€95",
              features: [
                "Everything in Classic Cut",
                "Hot towel treatment",
                "Beard trim & styling",
                "Premium scalp massage",
                "Complimentary beverage"
              ],
              buttons: [
                {
                  text: "Book Now",
                  href: "contact"
                },
                {
                  text: "Learn More",
                  href: "about"
                }
              ]
            },
            {
              id: "master",
              name: "Master's Special",
              price: "€120",
              features: [
                "Complete grooming experience",
                "Traditional hot towel shave",
                "Precision cut & beard styling",
                "Luxury scalp & face treatment",
                "Premium product package"
              ],
              buttons: [
                {
                  text: "Book Now",
                  href: "contact"
                },
                {
                  text: "Learn More",
                  href: "about"
                }
              ]
            }
          ]}
        />
      </div>
      
      <div id="metrics" data-section="metrics">
        <MetricCardTwo
          title="Excellence in Numbers"
          description="Two decades of mastering the art of Italian barbering"
          tag="Achievement"
          tagIcon={Trophy}
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          metrics={[
            {
              id: "1",
              value: "20+",
              description: "Years of Master Barbering"
            },
            {
              id: "2",
              value: "5000+",
              description: "Satisfied Gentlemen"
            },
            {
              id: "3",
              value: "100%",
              description: "Italian Authenticity"
            },
            {
              id: "4",
              value: "15",
              description: "Traditional Techniques Mastered"
            }
          ]}
        />
      </div>
      
      <div id="team" data-section="team">
        <TeamCardTwo
          title="Meet the Master"
          description="Lorenzo Noya - where passion meets precision"
          tag="Master Barber"
          tagIcon={Users}
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          members={[
            {
              id: "lorenzo",
              name: "Lorenzo Noya",
              role: "Master Barber & Owner",
              description: "Born in Naples, trained by master craftsmen, and dedicated to preserving the authentic Italian barbering tradition while creating modern masterpieces.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763325812202-9kb47ko2.jpg",
              imageAlt: "Lorenzo Noya master barber portrait",
              socialLinks: [
                {
                  icon: Instagram,
                  url: "https://instagram.com/lorenzobarbershop"
                },
                {
                  icon: Facebook,
                  url: "https://facebook.com/lorenzobarbershop"
                }
              ]
            }
          ]}
        />
      </div>
      
      <div id="testimonials" data-section="testimonials">
        <TestimonialCardOne
          title="What Our Clients Say"
          description="The voice of satisfied gentlemen who trust Lorenzo with their style"
          tag="Testimonials"
          tagIcon={MessageSquare}
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          testimonials={[
            {
              id: "1",
              name: "Marco Rossi",
              role: "CEO",
              company: "Milano Fashion Group",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763325809076-eyseipwl.jpg",
              imageAlt: "Marco Rossi testimonial"
            },
            {
              id: "2",
              name: "Giuseppe Fontana",
              role: "Restaurant Owner",
              company: "Bella Vista Ristorante",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763325810080-64ml4cko.jpg",
              imageAlt: "Giuseppe Fontana testimonial"
            },
            {
              id: "3",
              name: "Antonio Villa",
              role: "Architect",
              company: "Villa Design Studio",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763325810749-6dtblgb7.jpg",
              imageAlt: "Antonio Villa testimonial"
            },
            {
              id: "4",
              name: "Franco Benedetti",
              role: "Lawyer",
              company: "Benedetti & Associates",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763325811429-67663d4y.jpg",
              imageAlt: "Franco Benedetti testimonial"
            }
          ]}
        />
      </div>
      
      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Book Your Appointment"
          title="Experience Italian Excellence"
          description="Reserve your chair with Lorenzo Noya and discover why gentlemen across the city trust him with their signature style."
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763325812874-ygu4m702.jpg"
          imageAlt="Lorenzo Noya luxury barbershop interior"
          inputPlaceholder="Enter your email"
          buttonText="Book Now"
          termsText="By booking you confirm your appointment. We respect your time and privacy."
        />
      </div>
      
      <div id="footer" data-section="footer">
        <FooterBase
          logoText="Lorenzo Noya"
          copyrightText="© 2025 | Lorenzo Noya Master Barber"
          columns={[
            {
              title: "Services",
              items: [
                {
                  label: "Classic Cut",
                  href: "pricing"
                },
                {
                  label: "Signature Experience",
                  href: "pricing"
                },
                {
                  label: "Hot Towel Shave",
                  href: "pricing"
                },
                {
                  label: "Beard Grooming",
                  href: "pricing"
                }
              ]
            },
            {
              title: "About",
              items: [
                {
                  label: "Our Story",
                  href: "about"
                },
                {
                  label: "Italian Heritage",
                  href: "about"
                },
                {
                  label: "Master Techniques",
                  href: "about"
                },
                {
                  label: "Book Appointment",
                  href: "contact"
                }
              ]
            },
            {
              title: "Contact",
              items: [
                {
                  label: "Schedule Visit",
                  href: "contact"
                },
                {
                  label: "Location",
                  href: "contact"
                },
                {
                  label: "Hours",
                  href: "contact"
                },
                {
                  label: "Call Us",
                  href: "contact"
                }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}