'use client';

import { useState } from 'react';
import Link from 'next/link';

const faqSections = [
  {
    title: 'Getting Started',
    questions: [
      {
        q: 'What is NeuralForge Model Studio?',
        a: 'NeuralForge is a no-code platform for building, training, and deploying neural networks. You design model architectures visually with our drag-and-drop layer editor, tune hyperparameters with automated search, and train on managed cloud GPUs — all from your browser without writing any code.',
      },
      {
        q: 'Do I need machine learning experience to use NeuralForge?',
        a: 'No! NeuralForge is designed for all skill levels. Beginners can start with our pre-built architecture templates (image classifiers, text models, etc.), while experienced ML engineers can build custom architectures from scratch. Our visual interface makes complex concepts intuitive.',
      },
      {
        q: 'How do I get started?',
        a: 'Sign up for a free account, choose an architecture template or start from scratch, configure your dataset, and click "Train." Our Layer Editor guides you through the process with real-time validation and shape inference. Most users train their first model within 15 minutes.',
      },
    ],
  },
  {
    title: 'Training & GPUs',
    questions: [
      {
        q: 'What GPU types are available?',
        a: 'We offer NVIDIA A100 (40GB and 80GB), H100, L40S, and T4 GPUs. Our GPU Scheduler automatically selects the optimal instance type based on your model size and budget. Spot instances are available at up to 70% discount for fault-tolerant training jobs.',
      },
      {
        q: 'How long does training typically take?',
        a: 'Training time depends on your model size, dataset, and GPU selection. A standard image classifier on CIFAR-10 trains in under 5 minutes on an A100. Large language model fine-tuning with LoRA typically takes 1-4 hours. Our Training Monitor shows real-time progress and estimated completion time.',
      },
      {
        q: 'Can I use my own data?',
        a: 'Yes. Upload datasets in CSV, JSON, Parquet, or image folder formats. We support datasets up to 1TB. Data is encrypted at rest and in transit, and you can configure data residency for EU or US regions. We also integrate with S3, GCS, and Azure Blob Storage.',
      },
    ],
  },
  {
    title: 'Model Architecture',
    questions: [
      {
        q: 'What types of models can I build?',
        a: 'NeuralForge supports CNNs, RNNs, LSTMs, Transformers, GANs, autoencoders, diffusion models, and custom hybrid architectures. We have 50+ pre-built layer types including attention, convolution, normalization, pooling, and activation layers.',
      },
      {
        q: 'Can I export my models?',
        a: 'Yes. Export trained models to PyTorch, TensorFlow/Keras, ONNX, TensorRT, CoreML, or TFLite formats. You can also deploy directly as a REST API endpoint, batch inference pipeline, or edge-optimized package from our Model Registry.',
      },
    ],
  },
  {
    title: 'Pricing & Billing',
    questions: [
      {
        q: 'Is there a free tier?',
        a: 'Yes! The Starter plan is free and includes the Layer Editor, 10 GPU hours per month on T4 instances, basic hyperparameter tuning, and community support. No credit card required to get started.',
      },
      {
        q: 'How does GPU billing work?',
        a: 'GPU usage is billed per second of compute time. Prices vary by GPU type: T4 from $0.50/hr, A100 from $2.50/hr, H100 from $4.00/hr. Spot instances offer 50-70% savings. The Pro plan includes 100 GPU hours, and Enterprise plans include custom allocations.',
      },
      {
        q: 'Can I cancel anytime?',
        a: 'Yes. All plans are month-to-month with no long-term contracts. Cancel anytime from your dashboard. Annual plans offer a 20% discount and can be cancelled with a prorated refund for unused months.',
      },
    ],
  },
  {
    title: 'Security & Compliance',
    questions: [
      {
        q: 'Is my data secure?',
        a: 'Absolutely. NeuralForge is SOC 2 Type II certified and HIPAA compliant. All data is encrypted with AES-256 at rest and TLS 1.3 in transit. We use zero-trust architecture with role-based access control, audit logging, and optional single sign-on (SSO) via SAML 2.0.',
      },
      {
        q: 'Do you support data residency requirements?',
        a: 'Yes. Enterprise customers can choose data residency in US (Virginia), EU (Frankfurt), or Asia-Pacific (Tokyo) regions. Training jobs, model artifacts, and datasets stay within the selected region. We are GDPR compliant with full data processing agreements available.',
      },
    ],
  },
  {
    title: 'Support & Collaboration',
    questions: [
      {
        q: 'What support options are available?',
        a: 'Starter: community forums and docs. Pro: email support with 24-hour response time. Enterprise: dedicated Slack channel, phone support, assigned customer success manager, and 1-hour SLA for critical issues.',
      },
      {
        q: 'Can my team collaborate on models?',
        a: 'Yes. Pro and Enterprise plans include team workspaces with shared model registries, experiment tracking, and role-based permissions. Team members can collaborate on architectures, share training configurations, and review each other\'s experiments.',
      },
    ],
  },
];

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-amber-100 rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-5 text-left bg-white hover:bg-amber-50 transition-colors"
      >
        <span className="font-medium text-amber-900 pr-4">{question}</span>
        <svg
          className={`w-5 h-5 text-amber-500 flex-shrink-0 transition-transform ${open ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {open && (
        <div className="px-5 pb-5 bg-white">
          <p className="text-gray-600 text-sm leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  );
}

export default function FAQ() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-amber-900 via-amber-800 to-orange-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">Frequently Asked Questions</h1>
          <p className="text-lg text-amber-100 max-w-2xl mx-auto">
            Everything you need to know about NeuralForge Model Studio. Can&apos;t find what you&apos;re looking for?{' '}
            <Link href="/contact" className="underline hover:text-white">Contact us</Link>.
          </p>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-12">
          {faqSections.map((section) => (
            <div key={section.title}>
              <h2 className="text-2xl font-bold text-amber-900 mb-6">{section.title}</h2>
              <div className="space-y-3">
                {section.questions.map((item) => (
                  <FAQItem key={item.q} question={item.q} answer={item.a} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-amber-500 to-orange-500 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Still Have Questions?</h2>
          <p className="text-amber-100 mb-8">Our team is here to help you get started with NeuralForge.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white hover:bg-amber-50 text-amber-900 font-bold rounded-xl text-lg transition-colors shadow-lg"
            >
              Contact Support
            </Link>
            <Link
              href="/booking"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white hover:bg-white/10 font-semibold rounded-xl text-lg transition-colors"
            >
              Start Free Trial
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
