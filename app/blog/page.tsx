import Link from 'next/link';

const categories = ['All', 'Tutorials', 'Product Updates', 'Research', 'Case Studies', 'Engineering'];

const posts = [
  {
    title: 'Building a Vision Transformer from Scratch with NeuralForge',
    excerpt: 'Learn how to design and train a ViT model using our visual layer editor. We walk through patch embedding, multi-head attention, and classification head configuration — all without writing code.',
    category: 'Tutorials',
    date: 'Mar 25, 2026',
    readTime: '8 min read',
    gradient: 'from-amber-400 to-orange-500',
  },
  {
    title: 'Introducing H100 GPU Support and 3x Faster Training',
    excerpt: 'NeuralForge now supports NVIDIA H100 Tensor Core GPUs with up to 3x faster training for large language models. Plus, new spot instance pricing saves you up to 70% on compute costs.',
    category: 'Product Updates',
    date: 'Mar 18, 2026',
    readTime: '4 min read',
    gradient: 'from-amber-500 to-yellow-400',
  },
  {
    title: 'How Bayesian Hyperparameter Optimization Beats Grid Search',
    excerpt: 'Our research team benchmarked Bayesian optimization against grid and random search across 50 architectures. The results show 40% fewer trials needed to find optimal configurations.',
    category: 'Research',
    date: 'Mar 10, 2026',
    readTime: '12 min read',
    gradient: 'from-orange-400 to-red-400',
  },
  {
    title: 'How MedVision Cut Model Development Time by 80%',
    excerpt: 'MedVision, a healthcare AI startup, used NeuralForge to build and deploy 15 medical imaging models in 3 months — work that previously took their team over a year.',
    category: 'Case Studies',
    date: 'Mar 3, 2026',
    readTime: '6 min read',
    gradient: 'from-yellow-400 to-amber-500',
  },
  {
    title: 'Scaling GPU Scheduling: How We Handle 10,000 Concurrent Jobs',
    excerpt: 'A deep dive into our GPU scheduler architecture, including Kubernetes-native scheduling, bin-packing algorithms, and preemption policies for fair multi-tenant resource allocation.',
    category: 'Engineering',
    date: 'Feb 24, 2026',
    readTime: '15 min read',
    gradient: 'from-amber-600 to-orange-600',
  },
  {
    title: 'Fine-Tuning LLMs with LoRA in NeuralForge',
    excerpt: 'Our new LoRA adapter support lets you fine-tune large language models with minimal GPU memory. This tutorial shows how to adapt Llama 3 for your custom domain.',
    category: 'Tutorials',
    date: 'Feb 17, 2026',
    readTime: '10 min read',
    gradient: 'from-orange-500 to-amber-400',
  },
  {
    title: 'Model Registry 2.0: Lineage Tracking and A/B Deployment',
    excerpt: 'The new Model Registry supports full lineage graphs, automatic metadata capture from training runs, and native A/B deployment testing with statistical significance reporting.',
    category: 'Product Updates',
    date: 'Feb 10, 2026',
    readTime: '5 min read',
    gradient: 'from-amber-400 to-yellow-500',
  },
  {
    title: 'Attention Pattern Visualization: Understanding What Your Model Sees',
    excerpt: 'Our new attention visualization tools let you inspect and debug transformer attention patterns in real-time during training. Catch distribution collapse early.',
    category: 'Research',
    date: 'Feb 3, 2026',
    readTime: '9 min read',
    gradient: 'from-red-400 to-orange-400',
  },
  {
    title: 'RetailAI Deploys Real-Time Recommendation Engine with NeuralForge',
    excerpt: 'RetailAI built a production recommendation system serving 50M daily predictions using NeuralForge\'s training pipeline and one-click ONNX deployment.',
    category: 'Case Studies',
    date: 'Jan 27, 2026',
    readTime: '7 min read',
    gradient: 'from-amber-500 to-orange-400',
  },
];

export default function Blog() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-amber-900 via-amber-800 to-orange-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">NeuralForge Blog</h1>
          <p className="text-lg text-amber-100 max-w-2xl mx-auto">
            Tutorials, research insights, product updates, and engineering deep dives from the NeuralForge team.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="border-b border-amber-100 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-2 py-4 overflow-x-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                  cat === 'All'
                    ? 'bg-amber-500 text-white'
                    : 'bg-amber-50 text-amber-700 hover:bg-amber-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article key={post.title} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-amber-100 hover:shadow-md transition-shadow">
              <div className={`h-48 bg-gradient-to-br ${post.gradient}`} />
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-medium bg-amber-100 text-amber-700 px-2.5 py-1 rounded-full">
                    {post.category}
                  </span>
                  <span className="text-xs text-gray-500">{post.readTime}</span>
                </div>
                <h3 className="text-lg font-semibold text-amber-900 mb-2 line-clamp-2">{post.title}</h3>
                <p className="text-sm text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500">{post.date}</span>
                  <span className="text-sm font-medium text-amber-600 hover:text-amber-700 cursor-pointer">
                    Read more →
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-gradient-to-r from-amber-500 to-orange-500 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Stay in the Loop</h2>
          <p className="text-amber-100 mb-8">Get the latest tutorials, research, and product updates delivered to your inbox.</p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 px-4 py-3 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-300"
            />
            <button className="px-6 py-3 bg-amber-900 hover:bg-amber-800 text-white font-semibold rounded-xl transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
