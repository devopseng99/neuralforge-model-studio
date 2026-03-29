import Link from 'next/link';

const services = [
  {
    name: 'Layer Editor Studio',
    description: 'Visual drag-and-drop neural network builder with 50+ pre-built layer types. Design CNNs, RNNs, Transformers, GANs, and hybrid architectures. Real-time shape inference and compatibility validation.',
    features: ['50+ layer types', 'Real-time shape validation', 'Architecture templates', 'Custom layer support', 'Export to PyTorch/TensorFlow'],
    price: 'Included',
    gradient: 'from-amber-400 to-orange-500',
  },
  {
    name: 'Hyperparameter Tuner',
    description: 'Automated hyperparameter optimization with Bayesian, grid, random, and evolutionary search strategies. Parallel trial execution with early stopping and pruning for efficient resource usage.',
    features: ['4 search strategies', 'Parallel trials', 'Early stopping', 'Parameter importance ranking', 'Visualization dashboard'],
    price: 'From $49/mo',
    gradient: 'from-amber-500 to-yellow-400',
  },
  {
    name: 'Training Monitor',
    description: 'Real-time experiment tracking with live loss curves, metric comparison, GPU utilization monitoring, and automated anomaly detection. Compare runs side-by-side.',
    features: ['Live metrics streaming', 'Multi-run comparison', 'GPU monitoring', 'Anomaly alerts', 'Custom metric support'],
    price: 'From $29/mo',
    gradient: 'from-orange-400 to-red-400',
  },
  {
    name: 'Model Registry',
    description: 'Enterprise-grade model versioning with automatic metadata capture, lineage tracking, A/B test integration, and compliance audit trails. Never lose track of your best models.',
    features: ['Semantic versioning', 'Lineage tracking', 'A/B deployment', 'Audit trails', 'Team collaboration'],
    price: 'From $79/mo',
    gradient: 'from-yellow-400 to-amber-500',
  },
  {
    name: 'GPU Scheduler',
    description: 'Intelligent cloud GPU orchestration across NVIDIA A100, H100, and L40S instances. Spot instance optimization, priority queuing, and cost-aware scheduling reduce training costs by up to 70%.',
    features: ['Multi-cloud support', 'Spot optimization', 'Priority queues', 'Cost analytics', 'Auto-scaling'],
    price: 'Pay-per-use',
    gradient: 'from-amber-600 to-orange-600',
  },
  {
    name: 'Deployment Pipeline',
    description: 'One-click model deployment to REST APIs, batch pipelines, or edge devices. Automatic conversion to ONNX, TensorRT, and CoreML with performance benchmarking.',
    features: ['REST API endpoints', 'Batch inference', 'Edge export', 'Auto-scaling', 'A/B testing'],
    price: 'From $99/mo',
    gradient: 'from-orange-500 to-amber-400',
  },
];

const comparison = [
  { feature: 'Visual Layer Editor', neuralforge: true, competitorA: false, competitorB: true },
  { feature: 'Hyperparameter Tuning', neuralforge: true, competitorA: true, competitorB: false },
  { feature: 'Real-time Training Monitor', neuralforge: true, competitorA: true, competitorB: true },
  { feature: 'Model Version Registry', neuralforge: true, competitorA: false, competitorB: true },
  { feature: 'GPU Scheduling', neuralforge: true, competitorA: false, competitorB: false },
  { feature: 'One-Click Deploy', neuralforge: true, competitorA: true, competitorB: false },
  { feature: 'No-Code Interface', neuralforge: true, competitorA: false, competitorB: false },
  { feature: 'Custom Layer Support', neuralforge: true, competitorA: true, competitorB: false },
];

export default function ServicesPage() {
  return (
    <div>
      <section className="bg-gradient-to-br from-amber-900 to-orange-900 py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Our Services</h1>
          <p className="text-lg text-amber-200 max-w-2xl mx-auto">
            A complete ML platform — from architecture design to production deployment.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.name} className="bg-white rounded-2xl shadow-sm border border-amber-100 overflow-hidden hover:shadow-md transition-shadow">
              <div className={`h-3 bg-gradient-to-r ${service.gradient}`} />
              <div className="p-6">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.gradient} mb-4`} />
                <h3 className="text-xl font-semibold text-amber-900 mb-2">{service.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-gray-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500 flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-amber-700">{service.price}</span>
                  <Link href="/booking" className="text-sm font-medium text-amber-600 hover:text-amber-500">
                    Get Started &rarr;
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Comparison Table */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-amber-900 text-center mb-10">How We Compare</h2>
        <div className="overflow-x-auto">
          <table className="w-full bg-white rounded-xl shadow-sm border border-amber-100">
            <thead>
              <tr className="border-b border-amber-100">
                <th className="text-left p-4 text-gray-700 font-medium">Feature</th>
                <th className="p-4 text-amber-700 font-bold">NeuralForge</th>
                <th className="p-4 text-gray-500 font-medium">Platform A</th>
                <th className="p-4 text-gray-500 font-medium">Platform B</th>
              </tr>
            </thead>
            <tbody>
              {comparison.map((row) => (
                <tr key={row.feature} className="border-b border-amber-50">
                  <td className="p-4 text-sm text-gray-700">{row.feature}</td>
                  <td className="p-4 text-center">{row.neuralforge ? <span className="text-amber-500 font-bold text-lg">&#10003;</span> : <span className="text-gray-300">&#10005;</span>}</td>
                  <td className="p-4 text-center">{row.competitorA ? <span className="text-green-500">&#10003;</span> : <span className="text-gray-300">&#10005;</span>}</td>
                  <td className="p-4 text-center">{row.competitorB ? <span className="text-green-500">&#10003;</span> : <span className="text-gray-300">&#10005;</span>}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
