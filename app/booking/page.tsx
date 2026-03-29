'use client';

import { useState } from 'react';

const layerTypes = ['Convolutional', 'Dense/Linear', 'LSTM/GRU', 'Transformer', 'Attention', 'Normalization', 'Pooling', 'Dropout'];
const gpuOptions = [
  { name: 'NVIDIA T4', price: 0.35, vram: '16 GB' },
  { name: 'NVIDIA A100 40GB', price: 2.10, vram: '40 GB' },
  { name: 'NVIDIA A100 80GB', price: 3.50, vram: '80 GB' },
  { name: 'NVIDIA H100', price: 4.80, vram: '80 GB' },
];

export default function BookingPage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectName: '',
    layers: [] as string[],
    gpu: 'NVIDIA A100 40GB',
    epochs: 100,
    batchSize: 32,
    learningRate: '0.001',
    dataset: 'custom',
  });

  const selectedGpu = gpuOptions.find((g) => g.name === formData.gpu) || gpuOptions[1];
  const estimatedCost = (selectedGpu.price * formData.epochs * 0.05).toFixed(2);

  const toggleLayer = (layer: string) => {
    setFormData((prev) => ({
      ...prev,
      layers: prev.layers.includes(layer)
        ? prev.layers.filter((l) => l !== layer)
        : [...prev.layers, layer],
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(4);
  };

  return (
    <div>
      <section className="bg-gradient-to-br from-amber-900 to-orange-900 py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Build Your Model</h1>
          <p className="text-lg text-amber-200 max-w-2xl mx-auto">
            Configure your neural network architecture, select GPU resources, and launch training.
          </p>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Steps indicator */}
        <div className="flex items-center justify-center gap-2 mb-10">
          {[1, 2, 3].map((s) => (
            <div key={s} className="flex items-center gap-2">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                step >= s ? 'bg-amber-500 text-white' : 'bg-amber-100 text-amber-400'
              }`}>
                {s}
              </div>
              {s < 3 && <div className={`w-16 h-0.5 ${step > s ? 'bg-amber-500' : 'bg-amber-200'}`} />}
            </div>
          ))}
        </div>

        <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-sm border border-amber-100 p-6 sm:p-8">
          {step === 1 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-amber-900">Project Details</h2>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-amber-200 focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-amber-200 focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Project Name</label>
                <input
                  type="text"
                  value={formData.projectName}
                  onChange={(e) => setFormData({ ...formData, projectName: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-amber-200 focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none"
                  placeholder="My Image Classifier"
                />
              </div>
              <button
                type="button"
                onClick={() => setStep(2)}
                className="w-full bg-amber-500 hover:bg-amber-400 text-white font-bold py-3 rounded-xl transition-colors"
              >
                Next: Architecture
              </button>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-amber-900">Architecture</h2>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">Select Layer Types</label>
                <div className="grid grid-cols-2 gap-2">
                  {layerTypes.map((layer) => (
                    <button
                      key={layer}
                      type="button"
                      onClick={() => toggleLayer(layer)}
                      className={`px-4 py-3 rounded-xl text-sm font-medium border transition-colors ${
                        formData.layers.includes(layer)
                          ? 'bg-amber-500 text-white border-amber-500'
                          : 'bg-white text-gray-700 border-amber-200 hover:border-amber-400'
                      }`}
                    >
                      {layer}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Dataset</label>
                <select
                  value={formData.dataset}
                  onChange={(e) => setFormData({ ...formData, dataset: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-amber-200 focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none"
                >
                  <option value="custom">Upload Custom Dataset</option>
                  <option value="imagenet">ImageNet</option>
                  <option value="cifar10">CIFAR-10</option>
                  <option value="coco">MS COCO</option>
                  <option value="wikitext">WikiText-103</option>
                </select>
              </div>
              <div className="flex gap-3">
                <button type="button" onClick={() => setStep(1)} className="flex-1 border border-amber-300 text-amber-700 font-bold py-3 rounded-xl hover:bg-amber-50 transition-colors">
                  Back
                </button>
                <button type="button" onClick={() => setStep(3)} className="flex-1 bg-amber-500 hover:bg-amber-400 text-white font-bold py-3 rounded-xl transition-colors">
                  Next: Training Config
                </button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-amber-900">Training Configuration</h2>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">GPU Instance</label>
                <select
                  value={formData.gpu}
                  onChange={(e) => setFormData({ ...formData, gpu: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-amber-200 focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none"
                >
                  {gpuOptions.map((g) => (
                    <option key={g.name} value={g.name}>{g.name} ({g.vram}) — ${g.price}/hr</option>
                  ))}
                </select>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Epochs</label>
                  <input
                    type="number"
                    value={formData.epochs}
                    onChange={(e) => setFormData({ ...formData, epochs: parseInt(e.target.value) || 0 })}
                    className="w-full px-4 py-3 rounded-xl border border-amber-200 focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Batch Size</label>
                  <input
                    type="number"
                    value={formData.batchSize}
                    onChange={(e) => setFormData({ ...formData, batchSize: parseInt(e.target.value) || 0 })}
                    className="w-full px-4 py-3 rounded-xl border border-amber-200 focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Learning Rate</label>
                <input
                  type="text"
                  value={formData.learningRate}
                  onChange={(e) => setFormData({ ...formData, learningRate: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-amber-200 focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none"
                />
              </div>

              {/* Price Estimate */}
              <div className="bg-amber-50 rounded-xl p-4 border border-amber-200">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Estimated Training Cost</span>
                  <span className="text-2xl font-bold text-amber-700">${estimatedCost}</span>
                </div>
                <p className="text-xs text-gray-500 mt-1">Based on {formData.epochs} epochs on {selectedGpu.name}</p>
              </div>

              <div className="flex gap-3">
                <button type="button" onClick={() => setStep(2)} className="flex-1 border border-amber-300 text-amber-700 font-bold py-3 rounded-xl hover:bg-amber-50 transition-colors">
                  Back
                </button>
                <button type="submit" className="flex-1 bg-amber-500 hover:bg-amber-400 text-white font-bold py-3 rounded-xl transition-colors">
                  Launch Training
                </button>
              </div>
            </div>
          )}

          {step === 4 && (
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-amber-900 mb-2">Training Queued!</h2>
              <p className="text-gray-600 mb-6">Your model is being initialized. You&apos;ll receive an email when training begins.</p>
              <button
                type="button"
                onClick={() => { setStep(1); setFormData({ name: '', email: '', projectName: '', layers: [], gpu: 'NVIDIA A100 40GB', epochs: 100, batchSize: 32, learningRate: '0.001', dataset: 'custom' }); }}
                className="bg-amber-500 hover:bg-amber-400 text-white font-bold px-6 py-3 rounded-xl transition-colors"
              >
                Start Another Build
              </button>
            </div>
          )}
        </form>
      </section>
    </div>
  );
}
