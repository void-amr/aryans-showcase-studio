/**
 * Index Page - Main Portfolio Landing Page
 * 
 * Features:
 * - Hero section with photo and introduction
 * - About section with personal description
 * - Interests section with YouTube video embeds
 * - Navigation to Connect page
 * - Fully responsive layout with smooth animations
 */

import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import YouTubeEmbed from "@/components/YouTubeEmbed";
import aryanPhoto from "@/assets/aryan-photo.png";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 right-0 p-6 z-50">
        <Link to="/connect">
          <Button 
            variant="outline" 
            className="rounded-full px-6 hover-lift"
          >
            Connect with me
          </Button>
        </Link>
      </nav>

      {/* Main Content Container */}
      <main className="container mx-auto px-6 py-12 max-w-6xl">
        
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center w-full animate-fade-in">
            
            {/* Left Column - Introduction */}
            <div className="space-y-6">
              <div>
                <h1 className="text-5xl md:text-6xl font-bold mb-2">
                  Hey, I'm{" "}
                  <span className="font-script text-6xl md:text-7xl">
                    Aryan
                  </span>
                </h1>
              </div>
            </div>

            {/* Right Column - Photo */}
            <div className="flex justify-center md:justify-end">
              <div className="relative w-full max-w-sm">
                <img
                  src={aryanPhoto}
                  alt="Aryan's portrait"
                  className="w-full h-auto rounded-2xl shadow-2xl hover-lift"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Get to Know Me Section */}
        <section className="py-20 animate-fade-in">
          <div className="max-w-3xl">
            <h2 className="text-4xl font-bold mb-8">Get to know me</h2>
            <div className="space-y-4 text-lg leading-relaxed text-foreground/90">
              <p>
                I create websites that work. As co-founder of Grid Agency, I turn ideas into digital 
                experiences that connect. Whether it's a sleek landing page that converts or collaborating 
                on something that connects.
              </p>
            </div>
          </div>
        </section>

        {/* Interests and Hobbies Section */}
        <section className="py-20 animate-fade-in">
          <h2 className="text-4xl font-bold mb-8">Interests and hobbies</h2>
          
          <div className="space-y-6 mb-12">
            <p className="text-lg leading-relaxed text-foreground/90 max-w-3xl">
              You'll find me reading about psychology, experimenting with self-improvement frameworks, 
              or having conversations about mental health (it matters, and we should talk about it more).
            </p>
            <p className="text-lg leading-relaxed text-foreground/90 max-w-3xl">
              I document my journey through content—the wins, the struggles, the lessons. I'm curious 
              about public relations and how ideas spread, and slightly obsessed with manifestation and 
              universal energy.
            </p>
            <p className="text-lg leading-relaxed text-foreground/90 max-w-3xl">
              Right now? Learning web design and frontend development, one component at a time. 
              And sharing it all along the way.
            </p>
          </div>

          {/* YouTube Videos Grid */}
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <YouTubeEmbed 
              url="https://youtu.be/qHK7_4EXAr0?si=hnKMb561vKJaF9d7"
              title="Aryan's video about interests and hobbies"
            />
            <YouTubeEmbed 
              url="https://youtu.be/bW0MXLszNEs?si=hcT3WE0ehU4IEC0w"
              title="Aryan's second video"
            />
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 text-center animate-fade-in">
          <h2 className="text-3xl font-bold mb-6">Let's create something together</h2>
          <Link to="/connect">
            <Button 
              size="lg" 
              className="rounded-full px-8 hover-lift text-lg"
            >
              Get in touch
            </Button>
          </Link>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border py-8">
        <div className="container mx-auto px-6 text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Aryan. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
