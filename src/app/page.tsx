"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactFaq from '@/components/sections/contact/ContactFaq';
import FooterLogoReveal from '@/components/sections/footer/FooterLogoReveal';
import HeroBillboardCarousel from '@/components/sections/hero/HeroBillboardCarousel';
import InlineImageSplitTextAbout from '@/components/sections/about/InlineImageSplitTextAbout';
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import TestimonialCardTwelve from '@/components/sections/testimonial/TestimonialCardTwelve';
import { Mail } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="text-stagger"
        defaultTextAnimation="reveal-blur"
        borderRadius="rounded"
        contentWidth="mediumSmall"
        sizing="largeSmall"
        background="aurora"
        cardStyle="glass-elevated"
        primaryButtonStyle="primary-glow"
        secondaryButtonStyle="layered"
        headingFontWeight="semibold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleFullscreen
      navItems={[
        {
          name: "Home",          id: "hero"},
        {
          name: "About",          id: "about"},
        {
          name: "Gallery",          id: "gallery"},
        {
          name: "Testimonials",          id: "testimonials"},
        {
          name: "Contact",          id: "contact"},
      ]}
      brandName="Vitasik"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroBillboardCarousel
      background={{
        variant: "gradient-bars"}}
      title="Capturing Moments, Defining Art"
      description="Professional photography services tailored to reveal the beauty in every detail. Discover a collection of timeless visuals."
      mediaItems={[
        {
          imageSrc: "https://pixabay.com/get/g9deda4069b5b15a0febc3b62fa6075207f275f8bbce25fb1f963add34f80486547603ac91df938a9d461b110a3466afe989d3a5f10b8e5bcb077a934a0add51c_1280.jpg",          imageAlt: "Hero photography showcase"},
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <InlineImageSplitTextAbout
      useInvertedBackground={false}
      heading={[
        {
          type: "text",          content: "Our Philosophy"},
        {
          type: "image",          src: "https://pixabay.com/get/g0ef5b97e7fc6b654cfea5a0c9bfaedbd185aba12e65d26c688fc5860682ba7c925364deb204b4961b01451f58e983b072a15023d43a1377158038b0ef44b84ad_1280.jpg",          alt: "Studio work"},
        {
          type: "text",          content: "is rooted in authenticity and light."},
      ]}
    />
  </div>

  <div id="gallery" data-section="gallery">
      <ProductCardTwo
      animationType="slide-up"
      textboxLayout="split"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={false}
      products={[
        {
          id: "1",          brand: "Fine Art",          name: "Timeless Portrait",          price: "$150",          rating: 5,
          reviewCount: "128",          imageSrc: "https://pixabay.com/get/g59a8f378214892dedb1d1862dece700a4f7d86bbef01d296b7b17c4cebbc5950d5edbfeddcafdaaa264bb4a8122f96ef7f77f2babf691b6b37fe6fa21e5b707f_1280.jpg"},
        {
          id: "2",          brand: "Landscape",          name: "Morning Horizon",          price: "$200",          rating: 5,
          reviewCount: "96",          imageSrc: "https://pixabay.com/get/g39c3977cdabcf024e87142f33af1a57445194c5a6eb4687cdef5c5efd8949b8f08d8325da62afd60d402a620635bd1d53da7f7877f9bbfc1db1b822f6623999d_1280.jpg"},
        {
          id: "3",          brand: "Street",          name: "Urban Echoes",          price: "$120",          rating: 4,
          reviewCount: "45",          imageSrc: "https://pixabay.com/get/g2e4f849200e4fcd34b0d2856dc610102d524c1eaa9772a2a04d4d8439e8023790f630b148aff1411b12312bda1da908f0d4ecad7e8e3d8e665c57d97e358751c_1280.jpg"},
      ]}
      title="Selected Works"
      description="A curated glimpse into our photographic journey."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardTwelve
      useInvertedBackground={false}
      testimonials={[
        {
          id: "1",          name: "Elena R.",          imageSrc: "https://pixabay.com/get/g398b22f5d848b08ca7cd3d8004fc39f584809e58ee435f3927e6315cb8bb80f0ebdb18dd804a4afe666d79f99432b0c7e7bf3eb10851cafe85b1c206e722a087_1280.jpg"},
        {
          id: "2",          name: "Marcus S.",          imageSrc: "https://pixabay.com/get/g398b22f5d848b08ca7cd3d8004fc39f584809e58ee435f3927e6315cb8bb80f0ebdb18dd804a4afe666d79f99432b0c7e7bf3eb10851cafe85b1c206e722a087_1280.jpg"},
        {
          id: "3",          name: "Sarah J.",          imageSrc: "https://pixabay.com/get/g398b22f5d848b08ca7cd3d8004fc39f584809e58ee435f3927e6315cb8bb80f0ebdb18dd804a4afe666d79f99432b0c7e7bf3eb10851cafe85b1c206e722a087_1280.jpg"},
        {
          id: "4",          name: "David L.",          imageSrc: "https://pixabay.com/get/g398b22f5d848b08ca7cd3d8004fc39f584809e58ee435f3927e6315cb8bb80f0ebdb18dd804a4afe666d79f99432b0c7e7bf3eb10851cafe85b1c206e722a087_1280.jpg"},
      ]}
      cardTitle="Client Stories"
      cardTag="Testimonials"
      cardAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactFaq
      animationType="slide-up"
      useInvertedBackground={false}
      faqs={[
        {
          id: "q1",          title: "How do I book a session?",          content: "Contact us via the form or email to check availability."},
        {
          id: "q2",          title: "What is the turnaround time?",          content: "Typically 2 weeks for edited photos."},
        {
          id: "q3",          title: "Do you travel for shoots?",          content: "Yes, travel arrangements can be discussed for custom projects."},
      ]}
      ctaTitle="Let's Create Together"
      ctaDescription="Ready to capture your story? Reach out for bookings or inquiries."
      ctaButton={{
        text: "Get in Touch"}}
      ctaIcon={Mail}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterLogoReveal
      logoText="Vitasik"
      leftLink={{
        text: "Privacy Policy",        href: "#"}}
      rightLink={{
        text: "Instagram",        href: "#"}}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}