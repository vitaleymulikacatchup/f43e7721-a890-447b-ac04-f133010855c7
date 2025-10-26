"use client"

import { ThemeProvider } from "@/providers/ThemeProvider";
import { Award, Heart, Sparkles } from "lucide-react";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import TestimonialCardThree from '@/components/sections/testimonial/TestimonialCardThree';
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FooterBase from '@/components/sections/footer/FooterBase';

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="slide-background"
      defaultTextAnimation="reveal-blur"
      borderRadius="sharp"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay
          navItems={[
            { name: "Home", id: "hero" },
            { name: "Our Cakes", id: "products" },
            { name: "About", id: "about" },
            { name: "Testimonials", id: "testimonials" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="Sweet Dreams Bakery"
          button={{
            text: "Order Now",
            href: "contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboard
          title="Heavenly Chocolate Cakes"
          description="Handcrafted with love using the finest ingredients. Every bite is a moment of pure bliss."
          tag="Fresh Daily"
          tagIcon={Sparkles}
          buttons={[
            {
              text: "Order Now",
              href: "contact"
            },
            {
              text: "View Menu",
              href: "products"
            }
          ]}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32pj8e1GcgiOEWWC6aYveoEdoWX/uploaded-1761497886394-sehbfba8.jpg"
          imageAlt="Delicious chocolate cake slice"
        />
      </div>

      <div id="products" data-section="products">
        <ProductCardTwo
          title="Our Signature Cakes"
          description="Each cake is lovingly made with premium ingredients and attention to detail"
          tag="Bestsellers"
          tagIcon={Award}
          products={[
            {
              id: "1",
              brand: "Sweet Dreams",
              name: "Rich Chocolate Fudge Cake",
              price: "$35.00",
              rating: 5,
              reviewCount: "142",
              imageSrc: "https://images.pexels.com/photos/25409678/pexels-photo-25409678.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Rich chocolate fudge cake"
            },
            {
              id: "2",
              brand: "Sweet Dreams",
              name: "Classic Red Velvet Cake",
              price: "$32.00",
              rating: 5,
              reviewCount: "98",
              imageSrc: "https://images.pexels.com/photos/2861842/pexels-photo-2861842.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Red velvet cake with cream cheese frosting"
            },
            {
              id: "3",
              brand: "Sweet Dreams",
              name: "Vanilla Bean Sponge Cake",
              price: "$28.00",
              rating: 4,
              reviewCount: "76",
              imageSrc: "https://images.pexels.com/photos/9439452/pexels-photo-9439452.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Vanilla sponge cake with fresh berries"
            }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardThree
          title="What Our Customers Say"
          description="Real reviews from cake lovers who have experienced our delicious creations"
          tag="Reviews"
          tagIcon={Heart}
          testimonials={[
            {
              id: "1",
              name: "Sarah",
              handle: "@sarahbakes",
              testimonial: "The chocolate cake was absolutely divine! Perfect for our anniversary celebration. Will definitely order again!",
              imageSrc: "https://images.pexels.com/photos/34433235/pexels-photo-34433235.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of Sarah"
            },
            {
              id: "2",
              name: "Mike",
              handle: "@mikeeats",
              testimonial: "Best red velvet cake in town! The cream cheese frosting was perfection. My family loved it.",
              imageSrc: "https://images.pexels.com/photos/7447131/pexels-photo-7447131.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of Mike"
            },
            {
              id: "3",
              name: "Lisa",
              handle: "@lisasweets",
              testimonial: "Ordered for my daughter's birthday and everyone was asking where we got this amazing cake. Thank you!",
              imageSrc: "https://images.pexels.com/photos/3801426/pexels-photo-3801426.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of Lisa"
            },
            {
              id: "4",
              name: "James",
              handle: "@jamescakes",
              testimonial: "The vanilla sponge cake was light, fluffy and incredibly flavorful. Exceeded all my expectations!",
              imageSrc: "https://images.pexels.com/photos/7447126/pexels-photo-7447126.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of James"
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplitForm
          title="Order Your Perfect Cake"
          description="Tell us about your dream cake and we'll make it a reality. Custom orders welcome!"
          inputs={[
            {
              name: "name",
              type: "text",
              placeholder: "Your Name",
              required: true
            },
            {
              name: "phone",
              type: "tel",
              placeholder: "Phone Number",
              required: true
            },
            {
              name: "email",
              type: "email",
              placeholder: "Email Address",
              required: true
            },
            {
              name: "occasion",
              type: "text",
              placeholder: "Special Occasion",
              required: false
            }
          ]}
          textarea={{
            name: "details",
            placeholder: "Describe your cake preferences (size, flavor, decorations, special requests...)",
            rows: 5,
            required: true
          }}
          buttonText="Place Order"
          imageSrc="https://images.pexels.com/photos/3983671/pexels-photo-3983671.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Professional bakery kitchen with chocolate cakes"
          mediaPosition="right"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBase
          columns={[
            {
              title: "Quick Links",
              items: [
                {
                  label: "Our Cakes",
                  href: "products"
                },
                {
                  label: "Custom Orders",
                  href: "contact"
                },
                {
                  label: "About Us",
                  href: "about"
                }
              ]
            },
            {
              title: "Contact",
              items: [
                {
                  label: "Order Now",
                  href: "contact"
                },
                {
                  label: "(555) 123-CAKE",
                  href: "tel:5551232253"
                },
                {
                  label: "Visit Our Shop",
                  href: "https://maps.google.com"
                }
              ]
            }
          ]}
          copyrightText="© 2025 Sweet Dreams Bakery"
        />
      </div>
    </ThemeProvider>
  );
}