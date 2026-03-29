'use client';

import { useState } from 'react';
import Link from 'next/link';

const sidebarLinks = [
  { label: 'Overview', icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6' },
  { label: 'Models', icon: 'M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z' },
  { label: 'Training', icon: 'M13 10V3L4 14h7v7l9-11h-7z' },
  { label: 'GPU Nodes', icon: 'M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2' },
  { label: 'Registry', icon: 'M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4' },
  { label: 'Settings', icon: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z' },
];

const statsCards = [
  { label: 'Active Models', value: '24', change: '+3', color: 'from-amber-400 to-orange-500' },
  { label: 'Training Jobs', value: '8', change: '+2', color: 'from-green-400 to-emerald-500' },
  { label: 'GPU Hours Used', value: '1,247', change: '+156', color: 'from-blue-400 to-indigo-500' },
  { label: 'API Calls Today', value: '48.2K', change: '+5.1K', color: 'from-purple-400 to-pink-500' },
];

const recentJobs = [
  { id: 'JOB-4821', model: 'ResNet-152 v3', status: 'Training', gpu: 'A100 80GB', epoch: '67/100', loss: '0.0234', time: '2h 14m' },
  { id: 'JOB-4820', model: 'BERT-Large Finetune', status: 'Completed', gpu: 'A100 40GB', epoch: '50/50', loss: '0.0089', time: '4h 32m' },
  { id: 'JOB-4819', model: 'YOLOv8-Custom', status: 'Training', gpu: 'H100', epoch: '23/200', loss: '0.0567', time: '45m' },
  { id: 'JOB-4818', model: 'GPT-Neo 1.3B', status: 'Queued', gpu: 'H100', epoch: '0/100', loss: '—', time: '—' },
  { id: 'JOB-4817', model: 'ViT-L/16 Classifier', status: 'Completed', gpu: 'A100 40GB', epoch: '30/30', loss: '0.0156', time: '1h 58m' },
  { id: 'JOB-4816', model: 'WaveNet TTS v2', status: 'Failed', gpu: 'A100 80GB', epoch: '12/100', loss: '0.8921', time: '28m' },
  { id: 'JOB-4815', model: 'Diffusion Denoiser', status: 'Completed', gpu: 'H100', epoch: '500/500', loss: '0.0012', time: '8h 45m' },
];

const statusColors: Record<string, string> = {
  Training: 'bg-blue-100 text-blue-700',
  Completed: 'bg-green-100 text-green-700',
  Queued: 'bg-amber-100 text-amber-700',
  Failed: 'bg-red-100 text-red-700',
};

export default function DashboardPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-[calc(100vh-4rem)]">
      {/* Sidebar */}
      <aside className={`${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 fixed lg:static inset-y-0 left-0 z-40 w-64 bg-white border-r border-amber-100 transition-transform lg:block pt-16 lg:pt-0`}>
        <div className="p-4">
          <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4 px-3">Dashboard</h2>
          <nav className="space-y-1">
            {sidebarLinks.map((link, i) => (
              <button
                key={link.label}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                  i === 0 ? 'bg-amber-50 text-amber-700' : 'text-gray-600 hover:bg-amber-50 hover:text-amber-700'
                }`}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={link.icon} />
                </svg>
                {link.label}
              </button>
            ))}
          </nav>
        </div>
      </aside>

      {sidebarOpen && (
        <div className="fixed inset-0 bg-black/20 z-30 lg:hidden" onClick={() => setSidebarOpen(false)} />
      )}

      {/* Main */}
      <div className="flex-1 p-4 sm:p-6 lg:p-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <button onClick={() => setSidebarOpen(!sidebarOpen)} className="lg:hidden mr-4 p-2 rounded-lg hover:bg-amber-100">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            <h1 className="text-2xl sm:text-3xl font-bold text-amber-900">Overview</h1>
            <p className="text-gray-500 text-sm mt-1">Welcome back! Here&apos;s your training summary.</p>
          </div>
          <Link href="/booking" className="hidden sm:inline-flex bg-amber-500 hover:bg-amber-400 text-white font-semibold px-4 py-2 rounded-xl transition-colors text-sm">
            New Model
          </Link>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {statsCards.map((stat) => (
            <div key={stat.label} className="bg-white rounded-2xl p-5 shadow-sm border border-amber-100">
              <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${stat.color} mb-3`} />
              <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
              <div className="flex items-center justify-between mt-1">
                <span className="text-sm text-gray-500">{stat.label}</span>
                <span className="text-xs font-medium text-green-600">{stat.change}</span>
              </div>
            </div>
          ))}
        </div>

        {/* GPU Utilization Chart Placeholder */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-amber-100 mb-8">
          <h3 className="text-lg font-semibold text-amber-900 mb-4">GPU Utilization (24h)</h3>
          <div className="flex items-end gap-1 h-40">
            {Array.from({ length: 24 }, (_, i) => {
              const h = 20 + Math.sin(i * 0.5) * 30 + Math.random() * 30;
              return (
                <div key={i} className="flex-1 flex flex-col items-center gap-1">
                  <div
                    className="w-full bg-gradient-to-t from-amber-500 to-amber-300 rounded-t"
                    style={{ height: `${h}%` }}
                  />
                  {i % 4 === 0 && <span className="text-[10px] text-gray-400">{i}h</span>}
                </div>
              );
            })}
          </div>
        </div>

        {/* Recent Jobs */}
        <div className="bg-white rounded-2xl shadow-sm border border-amber-100 overflow-hidden">
          <div className="p-6 border-b border-amber-100">
            <h3 className="text-lg font-semibold text-amber-900">Recent Training Jobs</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-amber-50/50">
                <tr>
                  <th className="text-left p-4 text-xs font-medium text-gray-500 uppercase">Job ID</th>
                  <th className="text-left p-4 text-xs font-medium text-gray-500 uppercase">Model</th>
                  <th className="text-left p-4 text-xs font-medium text-gray-500 uppercase">Status</th>
                  <th className="text-left p-4 text-xs font-medium text-gray-500 uppercase">GPU</th>
                  <th className="text-left p-4 text-xs font-medium text-gray-500 uppercase">Epoch</th>
                  <th className="text-left p-4 text-xs font-medium text-gray-500 uppercase">Loss</th>
                  <th className="text-left p-4 text-xs font-medium text-gray-500 uppercase">Time</th>
                </tr>
              </thead>
              <tbody>
                {recentJobs.map((job) => (
                  <tr key={job.id} className="border-t border-amber-50 hover:bg-amber-50/30">
                    <td className="p-4 text-sm font-mono text-gray-600">{job.id}</td>
                    <td className="p-4 text-sm font-medium text-gray-900">{job.model}</td>
                    <td className="p-4">
                      <span className={`inline-flex px-2.5 py-0.5 rounded-full text-xs font-medium ${statusColors[job.status]}`}>
                        {job.status}
                      </span>
                    </td>
                    <td className="p-4 text-sm text-gray-600">{job.gpu}</td>
                    <td className="p-4 text-sm text-gray-600">{job.epoch}</td>
                    <td className="p-4 text-sm font-mono text-gray-600">{job.loss}</td>
                    <td className="p-4 text-sm text-gray-600">{job.time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
