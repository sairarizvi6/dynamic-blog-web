import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function HomePage() {
  const posts = [
    {
      slug: 'women-in-tech',
      title: 'Women in AI-Tech-World',
      description: 'Inspiring stories of women in the tech world.',
      image: '/women-in-tech.jpg',
    },
    {
      slug: 'diversity-in-tech',
      title: 'Diversity in Tech-AI',
      description: 'Exploring the impact of diversity in tech industry.',
      image: '/diversity-in-tech.jpg',
    },
    {
      slug: 'women-in-ai',
      title: 'Women in AI-Field',
      description: 'How women are leading advancements in AI.',
      image: '/women-in-ai.jpg',
    },
    {
      slug: 'tech-for-good',
      title: 'AI-Tech for Good',
      description: 'Using technology for humanitarian causes.',
      image: '/tech-for-good.jpg',
    },
    {
      slug: 'female-founders-in-tech',
      title: 'Female Founders in Tech-AI',
      description: 'Women founders driving innovation.',
      image: '/female-founders.jpg',
    },
    {
      slug: 'tech-trends-2024',
      title: 'AI-Tech Trends 2024',
      description: 'Emerging technologies shaping the future.',
      image: '/tech-trends-2024.jpg',
    },
  ];

  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <div
        className="relative bg-cover bg-center h-screen flex items-center justify-center"
        style={{ backgroundImage: "url('/background-image.jpg')" }}
      >
        <div className="bg-black bg-opacity-60 text-pink-50 py-12 px-6 text-center">
          <h1 className="text-4xl font-extrabold mb-6">
            Welcome to Saira Rizvi AI-Blog
          </h1>
          <p className="text-base font-sans mb-6 leading-relaxed max-w-2xl mx-auto">
          Embark on an inspiring journey through the world of AI technology, 
          where innovation, diversity, and leadership converge. Discover groundbreaking advancements,
          powerful stories of women redefining the landscape of AI,and transformative trends shaping 
          tomorrow. Immerse yourself in a curated exploration that celebrates the essential contributions
          of women in driving a smarter,more inclusive, and technologically advanced future.
          </p>
          <button className="bg-blue-500 px-6 py-3 rounded-md text-white font-bold hover:bg-blue-600 transition">
          Explore More
          </button>
        </div>
      </div>

      {/*Blogs Section */}
      <div
        id="posts"
        className="py-16 px-6"
        style={{
          backgroundImage: "url('/background-image.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="text-center mb-12">
          <h2 className="text-5xl font-extrabold text-white">Women Shaping the Future of AI-Tech</h2>
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {posts.map((post) => (
            <Link href={`/posts/${post.slug}`} key={post.slug}>
              <div className="group rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition bg-slate-100 bg-opacity-90">
                <div className="h-56 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-2xl font-bold text-gray-800 group-hover:text-blue-500 transition mb-3">
                    {post.title}
                  </h3>
                  <p className="text-gray-700 font-medium">{post.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}