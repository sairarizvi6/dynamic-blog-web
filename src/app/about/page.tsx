import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';


export default function AboutPage() {
  return (
    <div>
      <Navbar />
      <div className="relative">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat h-full w-full"
          style={{
            backgroundImage: "url('/background-image.jpg')"
          }}
        />
        <div className="relative z-10 max-w-6xl mx-auto p-8">
          {/* About Section */}
          <section className="text-center mb-12">
            <h1 className="text-5xl font-bold text-blue-700 mb-6">
              About Saira Rizvi Blog
            </h1>
            <p className="text-xl text-white leading-relaxed mx-auto max-w-3xl">
              Welcome to Saira Rizvi AI Blog. A hub for insightful
              stories, groundbreaking AI innovations, and inspiring
              narratives of women shaping the future of technology. Our
              mission is to educate, empower, and celebrate the pivotal
              role of women in advancing AI and driving meaningful change
              in the tech industry.
            </p>
          </section>

          <section className="flex flex-col md:flex-row gap-12 items-center mb-16">
            <div className="md:w-1/2">
              <Image
                src="/about-us.jpg"
                alt="About Us"
                width={400}
                height={300}
                className="w-full h-96 object-cover rounded-lg shadow-xl transform shadow-slate-400 transition-all duration-300"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-4xl font-bold text-red-300 mb-4">
                Our Mission
              </h2>
              <p className="text-lg text-white mb-6">
                At Saira Rizvi AI Blog & Our goal is to bridge the gap
                between innovation and inspiration. From AI breakthroughs to
                the empowering role of women in technology. we showcase
                stories that matter, spark curiosity, and ignite a passion
                for shaping the future of AI.
              </p>
              <h2 className="text-3xl font-bold text-red-300 mb-4">
                Why Choose This Blog?
              </h2>
              <p className="text-lg text-white">
                This blog focuses on highlighting the essential contributions
                of women in shaping the future of AI. By showcasing
                underrepresented voices and groundbreaking advancements. we
                aim to inspire and empower readers to engage with the
                evolving AI landscape. Our goal is to demonstrate the
                transformative impact of diversity in driving innovation and
                defining the future of technology.
              </p>
            </div>
          </section>

          <section className="py-16">
            <h2 className="text-5xl font-extrabold text-red-50 text-center mb-6">
              Become a Part of the Journey with Saira Rizvi AI Blog
            </h2>
            <p className="text-lg text-white text-center mb-8 mx-auto max-w-2xl">
              We are honored to have you join us on this journey of
              discovery and innovation with a special emphasis on the
              transformative role of women in shaping the future of AI. Stay
              curious, keep exploring, and partner with us as we delve into
              the profound impact of women driving progress in technology. Your
              exploration of AI begins here.
            </p>
            <div className="flex justify-center">
              <button className="bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg shadow-md hover:bg-blue-700 hover:text-white transition-all duration-300 transform hover:scale-105">
                View Our Latest Blog Post
              </button>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
}
