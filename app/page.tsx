import Link from 'next/link';

const stats = [
  { value: '50K+', label: 'Models Trained' },
  { value: '12K+', label: 'Active Users' },
  { value: '99.9%', label: 'Uptime SLA' },
  { value: '200+', label: 'GPU Nodes' },
];

const features = [
  {
    title: 'Visual Layer Editor',
    description: 'Drag-and-drop neural network layers with real-time architecture visualization. Build CNNs, RNNs, Transformers, and custom architectures without writing a single line of code.',
    gradient: 'from-amber-400 to-orange-500',
  },
  {
    title: 'Hyperparameter Tuner',
    description: 'Intelligent hyperparameter optimization with Bayesian search, grid search, and random search. Visualize parameter landscapes and find optimal configurations automatically.',
    gradient: 'from-amber-500 to-yellow-400',
  },
  {
    title: 'Training Monitor',
    description: 'Real-time training dashboards with loss curves, accuracy metrics, GPU utilization, and early stopping. Monitor multiple experiments simultaneously.',
    gradient: 'from-orange-400 to-red-400',
  },
  {
    title: 'Model Registry',
    description: 'Version-controlled model repository with automatic metadata tracking, comparison tools, and one-click deployment to production endpoints.',
    gradient: 'from-yellow-400 to-amber-500',
  },
  {
    title: 'GPU Scheduler',
    description: 'Intelligent cloud GPU allocation across NVIDIA A100, H100, and L40S instances. Automatic spot instance optimization to reduce costs by up to 70%.',
    gradient: 'from-amber-600 to-orange-600',
  },
  {
    title: 'One-Click Deploy',
    description: 'Export trained models to ONNX, TensorRT, or CoreML. Deploy as REST APIs, batch inference pipelines, or edge-optimized packages instantly.',
    gradient: 'from-orange-500 to-amber-400',
  },
];

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-900 via-amber-800 to-orange-900" />
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-72 h-72 bg-amber-400 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-400 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 lg:py-40 text-center">
          <div className="inline-block px-4 py-1.5 rounded-full bg-amber-500/20 text-amber-300 text-sm font-medium mb-6 border border-amber-500/30">
            Now with H100 GPU support
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Build Neural Networks
            <span className="block text-amber-400">Without Code</span>
          </h1>
          <p className="text-lg sm:text-xl text-amber-100 max-w-3xl mx-auto mb-10">
            NeuralForge Model Studio lets you design, train, and deploy deep learning models visually.
            Drag-and-drop layers, tune hyperparameters, and launch training on cloud GPUs — all from your browser.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/booking"
              className="inline-flex items-center justify-center px-8 py-4 bg-amber-500 hover:bg-amber-400 text-amber-900 font-bold rounded-xl text-lg transition-colors shadow-lg shadow-amber-500/25"
            >
              Start Building Free
            </Link>
            <Link
              href="/gallery"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-amber-400 text-amber-300 hover:bg-amber-400/10 font-semibold rounded-xl text-lg transition-colors"
            >
              View Gallery
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-white border-b border-amber-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-amber-600">{stat.value}</div>
                <div className="text-sm text-gray-600 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-amber-900 mb-4">Everything You Need to Build ML Models</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From architecture design to production deployment, NeuralForge handles the entire ML workflow.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div key={feature.title} className="bg-white rounded-2xl p-6 shadow-sm border border-amber-100 hover:shadow-md transition-shadow">
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.gradient} mb-4`} />
              <h3 className="text-xl font-semibold text-amber-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-amber-500 to-orange-500 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Ready to Build Your First Model?</h2>
          <p className="text-lg text-amber-100 mb-8">
            Join thousands of ML engineers and researchers building state-of-the-art models with NeuralForge.
          </p>
          <Link
            href="/booking"
            className="inline-flex items-center justify-center px-8 py-4 bg-white hover:bg-amber-50 text-amber-900 font-bold rounded-xl text-lg transition-colors shadow-lg"
          >
            Get Started — It&apos;s Free
          </Link>
        </div>
      </section>
    </div>
  );
}
