import Link from 'next/link';

const tiers = [
  {
    name: 'Starter',
    price: '$0',
    period: '/month',
    description: 'Perfect for learning and experimentation.',
    features: [
      { text: '3 active models', included: true },
      { text: 'Layer Editor (basic layers)', included: true },
      { text: 'T4 GPU access', included: true },
      { text: '10 GPU hours/month', included: true },
      { text: 'Community support', included: true },
      { text: 'Hyperparameter tuner', included: false },
      { text: 'Model Registry', included: false },
      { text: 'Priority GPU scheduling', included: false },
      { text: 'Team collaboration', included: false },
      { text: 'Custom deployment', included: false },
    ],
    cta: 'Get Started Free',
    popular: false,
  },
  {
    name: 'Pro',
    price: '$79',
    period: '/month',
    description: 'For serious ML practitioners and small teams.',
    features: [
      { text: '25 active models', included: true },
      { text: 'Layer Editor (all layers)', included: true },
      { text: 'A100 GPU access', included: true },
      { text: '100 GPU hours/month', included: true },
      { text: 'Priority support', included: true },
      { text: 'Hyperparameter tuner', included: true },
      { text: 'Model Registry', included: true },
      { text: 'Priority GPU scheduling', included: false },
      { text: 'Team collaboration (3 seats)', included: true },
      { text: 'REST API deployment', included: true },
    ],
    cta: 'Start Pro Trial',
    popular: true,
  },
  {
    name: 'Enterprise',
    price: '$349',
    period: '/month',
    description: 'For organizations with production ML workloads.',
    features: [
      { text: 'Unlimited models', included: true },
      { text: 'Layer Editor + custom layers', included: true },
      { text: 'H100 GPU access', included: true },
      { text: '500 GPU hours/month', included: true },
      { text: 'Dedicated support + SLA', included: true },
      { text: 'Advanced hyperparameter tuner', included: true },
      { text: 'Model Registry + audit logs', included: true },
      { text: 'Priority GPU scheduling', included: true },
      { text: 'Unlimited team seats', included: true },
      { text: 'Custom deployment + edge export', included: true },
    ],
    cta: 'Contact Sales',
    popular: false,
  },
];

const comparison = [
  { feature: 'Active Models', starter: '3', pro: '25', enterprise: 'Unlimited' },
  { feature: 'GPU Types', starter: 'T4', pro: 'T4, A100', enterprise: 'T4, A100, H100' },
  { feature: 'GPU Hours/Month', starter: '10', pro: '100', enterprise: '500' },
  { feature: 'Layer Types', starter: 'Basic (15)', pro: 'All (50+)', enterprise: 'All + Custom' },
  { feature: 'Hyperparam Tuning', starter: '—', pro: 'Grid + Random', enterprise: 'All strategies' },
  { feature: 'Model Registry', starter: '—', pro: 'Basic', enterprise: 'Full + Audit' },
  { feature: 'Team Seats', starter: '1', pro: '3', enterprise: 'Unlimited' },
  { feature: 'Deployment', starter: '—', pro: 'REST API', enterprise: 'API + Edge + Batch' },
  { feature: 'Support', starter: 'Community', pro: 'Priority email', enterprise: 'Dedicated + SLA' },
  { feature: 'Uptime SLA', starter: '—', pro: '99.5%', enterprise: '99.9%' },
];

export default function PricingPage() {
  return (
    <div>
      <section className="bg-gradient-to-br from-amber-900 to-orange-900 py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Simple, Transparent Pricing</h1>
          <p className="text-lg text-amber-200 max-w-2xl mx-auto">
            Start free. Scale as you grow. No hidden fees on GPU usage.
          </p>
        </div>
      </section>

      {/* Tier Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`bg-white rounded-2xl shadow-sm border overflow-hidden relative ${
                tier.popular ? 'border-amber-500 ring-2 ring-amber-500' : 'border-amber-100'
              }`}
            >
              {tier.popular && (
                <div className="absolute top-0 right-0 bg-amber-500 text-white text-xs font-bold px-3 py-1 rounded-bl-xl">
                  Most Popular
                </div>
              )}
              <div className="p-6">
                <h3 className="text-xl font-bold text-amber-900">{tier.name}</h3>
                <div className="mt-4 flex items-baseline">
                  <span className="text-4xl font-bold text-gray-900">{tier.price}</span>
                  <span className="text-gray-500 ml-1">{tier.period}</span>
                </div>
                <p className="text-sm text-gray-500 mt-2">{tier.description}</p>
                <Link
                  href="/booking"
                  className={`block text-center mt-6 py-3 rounded-xl font-semibold transition-colors ${
                    tier.popular
                      ? 'bg-amber-500 hover:bg-amber-400 text-white'
                      : 'bg-amber-50 hover:bg-amber-100 text-amber-700'
                  }`}
                >
                  {tier.cta}
                </Link>
                <ul className="mt-6 space-y-3">
                  {tier.features.map((f) => (
                    <li key={f.text} className="flex items-start gap-2 text-sm">
                      {f.included ? (
                        <span className="text-amber-500 mt-0.5 font-bold">&#10003;</span>
                      ) : (
                        <span className="text-gray-300 mt-0.5">&#10005;</span>
                      )}
                      <span className={f.included ? 'text-gray-700' : 'text-gray-400'}>{f.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Comparison Table */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-amber-900 text-center mb-10">Detailed Comparison</h2>
        <div className="overflow-x-auto">
          <table className="w-full bg-white rounded-xl shadow-sm border border-amber-100">
            <thead>
              <tr className="border-b border-amber-100">
                <th className="text-left p-4 text-gray-700 font-medium">Feature</th>
                <th className="p-4 text-gray-700 font-medium text-center">Starter</th>
                <th className="p-4 text-amber-700 font-bold text-center">Pro</th>
                <th className="p-4 text-gray-700 font-medium text-center">Enterprise</th>
              </tr>
            </thead>
            <tbody>
              {comparison.map((row) => (
                <tr key={row.feature} className="border-b border-amber-50">
                  <td className="p-4 text-sm text-gray-700">{row.feature}</td>
                  <td className="p-4 text-sm text-gray-600 text-center">{row.starter}</td>
                  <td className="p-4 text-sm text-amber-700 font-medium text-center">{row.pro}</td>
                  <td className="p-4 text-sm text-gray-600 text-center">{row.enterprise}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
