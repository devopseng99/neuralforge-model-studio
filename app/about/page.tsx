import Link from 'next/link';

const team = [
  { name: 'Dr. Sarah Chen', role: 'CEO & Co-founder', bio: 'Former ML lead at Google Brain. PhD in Neural Architecture Search from Stanford.', gradient: 'from-amber-400 to-orange-500' },
  { name: 'Marcus Rivera', role: 'CTO & Co-founder', bio: '15 years in distributed systems. Previously built GPU infrastructure at NVIDIA.', gradient: 'from-amber-500 to-yellow-400' },
  { name: 'Dr. Aisha Patel', role: 'VP of Research', bio: 'Published 40+ papers on automated ML. Led AutoML team at DeepMind.', gradient: 'from-orange-400 to-red-400' },
  { name: 'James Nakamura', role: 'VP of Engineering', bio: 'Scaled ML platforms at Uber and Airbnb. Expert in Kubernetes GPU orchestration.', gradient: 'from-yellow-400 to-amber-500' },
];

const values = [
  { title: 'Democratize AI', description: 'We believe everyone should be able to build ML models, regardless of coding ability. Visual tools lower the barrier without sacrificing power.', icon: '🧠' },
  { title: 'Performance First', description: 'Every millisecond matters in training. We optimize GPU utilization, data pipelines, and model serving to deliver the fastest possible workflows.', icon: '⚡' },
  { title: 'Open Standards', description: 'We support ONNX, PyTorch, TensorFlow, and every major framework. Your models are never locked into our platform.', icon: '🔓' },
  { title: 'Security & Compliance', description: 'SOC 2 Type II certified. HIPAA compliant. Your data and models are encrypted at rest and in transit with zero-trust architecture.', icon: '🛡️' },
];

const milestones = [
  { year: '2021', event: 'Founded in San Francisco. Seed round of $4M led by Sequoia.' },
  { year: '2022', event: 'Launched Layer Editor and Training Monitor. 1,000 users in first month.' },
  { year: '2023', event: 'Series A: $25M. Added GPU Scheduler and Model Registry. 10K users.' },
  { year: '2024', event: 'H100 support. Enterprise tier launch. SOC 2 and HIPAA certified.' },
  { year: '2025', event: '50K+ users. Series B: $80M. Opened EU data center in Frankfurt.' },
];

export default function About() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-amber-900 via-amber-800 to-orange-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">About NeuralForge</h1>
          <p className="text-lg text-amber-100 max-w-3xl mx-auto">
            We&apos;re on a mission to make deep learning accessible to everyone. Our visual model builder
            empowers researchers, engineers, and teams to build state-of-the-art neural networks without writing code.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-amber-900 mb-6">Our Story</h2>
            <div className="space-y-4 text-gray-600">
              <p>
                NeuralForge was born from frustration. Our founders spent years watching brilliant researchers
                struggle with boilerplate code, GPU configuration, and deployment pipelines instead of focusing
                on what mattered — the models themselves.
              </p>
              <p>
                In 2021, we set out to build the tool we wished we had: a visual, end-to-end platform that
                handles the entire ML workflow from architecture design to production deployment. No code required,
                but with full code access for those who want it.
              </p>
              <p>
                Today, NeuralForge powers over 50,000 ML practitioners across startups, research labs, and
                Fortune 500 companies, training millions of models on our managed GPU infrastructure.
              </p>
            </div>
          </div>
          <div className="bg-gradient-to-br from-amber-400 via-orange-400 to-amber-600 rounded-2xl h-80 flex items-center justify-center">
            <div className="text-center text-white">
              <div className="text-6xl font-bold mb-2">50K+</div>
              <div className="text-xl">ML Practitioners Trust NeuralForge</div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-amber-900 text-center mb-12">Our Values</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div key={value.title} className="text-center">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-lg font-semibold text-amber-900 mb-2">{value.title}</h3>
                <p className="text-sm text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-3xl font-bold text-amber-900 text-center mb-12">Our Journey</h2>
        <div className="max-w-2xl mx-auto space-y-8">
          {milestones.map((m) => (
            <div key={m.year} className="flex gap-6">
              <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-white font-bold text-sm">
                {m.year}
              </div>
              <div className="pt-3">
                <p className="text-gray-700">{m.event}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Team */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-amber-900 text-center mb-4">Leadership Team</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Our team combines deep expertise in machine learning, distributed systems, and developer tools.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member) => (
              <div key={member.name} className="text-center">
                <div className={`w-32 h-32 rounded-full bg-gradient-to-br ${member.gradient} mx-auto mb-4`} />
                <h3 className="font-semibold text-amber-900">{member.name}</h3>
                <p className="text-sm text-amber-600 mb-2">{member.role}</p>
                <p className="text-sm text-gray-600">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-3xl font-bold text-amber-900 text-center mb-12">Certifications & Compliance</h2>
        <div className="grid sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
          {['SOC 2 Type II', 'HIPAA Compliant', 'GDPR Ready'].map((cert) => (
            <div key={cert} className="bg-white rounded-xl border border-amber-200 p-6 text-center shadow-sm">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 mx-auto mb-4 flex items-center justify-center text-white text-2xl">
                ✓
              </div>
              <h3 className="font-semibold text-amber-900">{cert}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-amber-500 to-orange-500 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Join the NeuralForge Community</h2>
          <p className="text-amber-100 mb-8">Be part of the future of no-code machine learning.</p>
          <Link
            href="/booking"
            className="inline-flex items-center justify-center px-8 py-4 bg-white hover:bg-amber-50 text-amber-900 font-bold rounded-xl text-lg transition-colors shadow-lg"
          >
            Get Started Free
          </Link>
        </div>
      </section>
    </div>
  );
}
