'use client';

import { useState } from 'react';

const categories = ['All', 'Computer Vision', 'NLP', 'Generative', 'Audio', 'Reinforcement Learning'];

const projects = [
  { title: 'ResNet-152 Image Classifier', category: 'Computer Vision', accuracy: '96.4%', layers: 152, gradient: 'from-amber-400 to-orange-500', description: 'Multi-class image classification trained on ImageNet with data augmentation and mixup.' },
  { title: 'BERT Sentiment Analyzer', category: 'NLP', accuracy: '94.2%', layers: 24, gradient: 'from-blue-400 to-indigo-500', description: 'Fine-tuned BERT model for multi-language sentiment analysis on customer reviews.' },
  { title: 'StyleGAN3 Portrait Generator', category: 'Generative', accuracy: 'FID: 4.2', layers: 48, gradient: 'from-purple-400 to-pink-500', description: 'High-resolution portrait generation with controllable style mixing and truncation.' },
  { title: 'YOLOv8 Object Detector', category: 'Computer Vision', accuracy: 'mAP: 92.1%', layers: 86, gradient: 'from-green-400 to-emerald-500', description: 'Real-time object detection for autonomous driving with 80+ object classes.' },
  { title: 'GPT-Neo Text Generator', category: 'NLP', accuracy: 'PPL: 12.3', layers: 36, gradient: 'from-amber-500 to-yellow-400', description: 'Causal language model fine-tuned for technical documentation generation.' },
  { title: 'WaveNet Speech Synthesizer', category: 'Audio', accuracy: 'MOS: 4.3', layers: 64, gradient: 'from-red-400 to-orange-400', description: 'High-fidelity text-to-speech synthesis with multi-speaker support and emotion control.' },
  { title: 'Diffusion Image Denoiser', category: 'Generative', accuracy: 'PSNR: 34.2', layers: 40, gradient: 'from-teal-400 to-cyan-500', description: 'Score-based diffusion model for image denoising and super-resolution tasks.' },
  { title: 'PPO Game Agent', category: 'Reinforcement Learning', accuracy: 'Reward: 2450', layers: 18, gradient: 'from-orange-500 to-red-500', description: 'Proximal policy optimization agent trained on Atari environments with curiosity-driven exploration.' },
  { title: 'U-Net Medical Segmenter', category: 'Computer Vision', accuracy: 'Dice: 0.94', layers: 34, gradient: 'from-pink-400 to-rose-500', description: 'Semantic segmentation for medical imaging with attention gates and deep supervision.' },
  { title: 'Whisper Audio Transcriber', category: 'Audio', accuracy: 'WER: 3.2%', layers: 32, gradient: 'from-violet-400 to-purple-500', description: 'Multilingual speech recognition with timestamp alignment and speaker diarization.' },
  { title: 'ViT Patch Classifier', category: 'Computer Vision', accuracy: '97.1%', layers: 24, gradient: 'from-amber-600 to-orange-600', description: 'Vision Transformer for fine-grained image classification with attention visualization.' },
  { title: 'DQN Robotics Controller', category: 'Reinforcement Learning', accuracy: 'Success: 89%', layers: 12, gradient: 'from-yellow-400 to-amber-500', description: 'Deep Q-Network for robotic manipulation tasks with hindsight experience replay.' },
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = activeCategory === 'All'
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <div>
      <section className="bg-gradient-to-br from-amber-900 to-orange-900 py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Model Gallery</h1>
          <p className="text-lg text-amber-200 max-w-2xl mx-auto">
            Explore models built by our community. Clone any architecture to your workspace and start training.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Filters */}
        <div className="flex flex-wrap gap-2 mb-10 justify-center">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === cat
                  ? 'bg-amber-500 text-white'
                  : 'bg-white text-gray-700 border border-amber-200 hover:border-amber-400'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filtered.map((project) => (
            <div key={project.title} className="bg-white rounded-2xl shadow-sm border border-amber-100 overflow-hidden hover:shadow-md transition-shadow group">
              <div className={`h-40 bg-gradient-to-br ${project.gradient} relative`}>
                <div className="absolute inset-0 flex items-center justify-center opacity-30">
                  <svg className="w-20 h-20 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                  </svg>
                </div>
                <div className="absolute top-3 right-3 bg-black/30 text-white text-xs px-2 py-1 rounded-full backdrop-blur-sm">
                  {project.category}
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-amber-900 mb-1">{project.title}</h3>
                <p className="text-xs text-gray-500 mb-3">{project.description}</p>
                <div className="flex items-center justify-between text-xs text-gray-600">
                  <span className="bg-amber-50 px-2 py-1 rounded font-medium text-amber-700">{project.accuracy}</span>
                  <span>{project.layers} layers</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
