import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-amber-900 text-amber-100 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 font-bold text-xl text-white mb-4">
              <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-sm">
                NF
              </span>
              NeuralForge
            </div>
            <p className="text-sm text-amber-200">
              No-code neural network architecture builder with visual layer editing, hyperparameter tuning, and one-click cloud GPU training.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-3">Product</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/services" className="hover:text-amber-400 transition-colors">Services</Link></li>
              <li><Link href="/pricing" className="hover:text-amber-400 transition-colors">Pricing</Link></li>
              <li><Link href="/gallery" className="hover:text-amber-400 transition-colors">Gallery</Link></li>
              <li><Link href="/dashboard" className="hover:text-amber-400 transition-colors">Dashboard</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-3">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="hover:text-amber-400 transition-colors">About</Link></li>
              <li><Link href="/blog" className="hover:text-amber-400 transition-colors">Blog</Link></li>
              <li><Link href="/faq" className="hover:text-amber-400 transition-colors">FAQ</Link></li>
              <li><Link href="/contact" className="hover:text-amber-400 transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-3">Get Started</h3>
            <p className="text-sm text-amber-200 mb-4">Start building neural networks visually in minutes.</p>
            <Link
              href="/booking"
              className="inline-block bg-amber-500 hover:bg-amber-400 text-amber-900 font-semibold px-4 py-2 rounded-lg transition-colors text-sm"
            >
              Try Free
            </Link>
          </div>
        </div>

        <div className="border-t border-amber-800 mt-8 pt-8 text-center text-sm text-amber-300">
          &copy; {new Date().getFullYear()} NeuralForge Model Studio. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
