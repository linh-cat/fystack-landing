import { Metadata } from 'next';
import Link from 'next/link';
import { Check, X, ArrowRight } from 'lucide-react';
import Navbar from '@/components/Navbar';

export const metadata: Metadata = {
  title: 'Fystack Self-hosted vs Others',
  description: 'See how Fystack compares to Fireblocks, Cobo, Dfns, and Safeheron. Self-hosted, cloud-native, unlimited wallets with flat pricing.',
};

export default function ComparePage() {
  const features = [
    {
      category: 'Deployment & Control',
      items: [
        {
          name: 'Self-Hosted',
          description: 'Deploy on your own infrastructure for maximum control and security',
          fystack: true,
          others: false,
        },
        {
          name: 'Cloud-Native (Docker/K8s)',
          description: 'Modern containerized architecture for easy scaling',
          fystack: true,
          others: 'Limited',
        },
        {
          name: 'Deploy in Private Network',
          description: 'Run entirely within your secure network perimeter',
          fystack: true,
          others: false,
        },
      ],
    },
    {
      category: 'Flexibility & Integration',
      items: [
        {
          name: 'Developer-Friendly',
          description: 'RESTful APIs, comprehensive SDKs, and clear documentation',
          fystack: true,
          others: 'Limited',
        },
        {
          name: 'Whitelabel',
          description: 'Fully customizable to match your brand',
          fystack: true,
          others: 'Limited',
        },
        {
          name: 'Vendor Lock-In Free',
          description: 'Own your keys, export your data, switch anytime',
          fystack: true,
          others: false,
        },
      ],
    },
    {
      category: 'Scalability & Pricing',
      items: [
        {
          name: 'Number of Wallets',
          description: 'Maximum wallets you can create',
          fystack: 'Unlimited',
          others: 'Limited',
        },
        {
          name: 'Volume/AUM Limits',
          description: 'Transaction volume or assets under management caps',
          fystack: 'Unlimited',
          others: 'Limited',
        },
        {
          name: 'Pricing Model',
          description: 'How you pay for the service',
          fystack: 'Flat',
          others: 'Based on volume & AUM',
        },
      ],
    },
  ];

  const competitors = ['Fireblocks', 'Cobo', 'Dfns', 'Safeheron'];

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-white dark:bg-slate-900">
        {/* Hero Section */}
        <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            <span className="text-slate-700 dark:text-slate-200">Fystack Self-hosted vs </span>
            <span className="text-[#155dfc]">Others</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-8">
            Fystack offers self-hosted solutions that companies can deploy on their infrastructure for maximum control and security
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 text-sm text-gray-500 dark:text-gray-400">
            <span>Comparing with:</span>
            {competitors.map((competitor, idx) => (
              <span key={competitor} className="font-medium text-gray-700 dark:text-gray-300">
                {competitor}
                {idx < competitors.length - 1 && ','}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden">
            {/* Table Header */}
            <div className="grid grid-cols-3 gap-4 p-6 bg-slate-50 dark:bg-slate-900 border-b border-gray-200 dark:border-gray-700">
              <div className="col-span-1">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Feature</h3>
              </div>
              <div className="col-span-1 text-center">
                <h3 className="text-lg font-semibold text-[#155dfc]">Fystack</h3>
              </div>
              <div className="col-span-1 text-center">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Others</h3>
              </div>
            </div>

            {/* Table Body */}
            {features.map((category, categoryIdx) => (
              <div key={category.category}>
                {/* Category Header */}
                <div className="px-6 py-4 bg-slate-100 dark:bg-slate-800 border-b border-gray-200 dark:border-gray-700">
                  <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wide">
                    {category.category}
                  </h4>
                </div>

                {/* Category Items */}
                {category.items.map((item, itemIdx) => (
                  <div
                    key={item.name}
                    className={`grid grid-cols-3 gap-4 p-6 ${
                      itemIdx < category.items.length - 1 || categoryIdx < features.length - 1
                        ? 'border-b border-gray-200 dark:border-gray-700'
                        : ''
                    }`}
                  >
                    <div className="col-span-1">
                      <div className="font-medium text-gray-900 dark:text-gray-100 mb-1">
                        {item.name}
                      </div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">
                        {item.description}
                      </div>
                    </div>
                    <div className="col-span-1 flex items-center justify-center">
                      {typeof item.fystack === 'boolean' ? (
                        item.fystack ? (
                          <Check className="w-6 h-6 text-green-600 dark:text-green-400" />
                        ) : (
                          <X className="w-6 h-6 text-red-600 dark:text-red-400" />
                        )
                      ) : (
                        <span className="font-medium text-[#155dfc]">{item.fystack}</span>
                      )}
                    </div>
                    <div className="col-span-1 flex items-center justify-center">
                      {typeof item.others === 'boolean' ? (
                        item.others ? (
                          <Check className="w-6 h-6 text-green-600 dark:text-green-400" />
                        ) : (
                          <X className="w-6 h-6 text-red-600 dark:text-red-400" />
                        )
                      ) : (
                        <span className="font-medium text-gray-600 dark:text-gray-400">{item.others}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>

          {/* Key Advantages */}
          <div className="mt-16 grid md:grid-cols-3 gap-8">
            <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6 border border-blue-100 dark:border-blue-800/50">
              <h4 className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-3">
                Maximum Control
              </h4>
              <p className="text-blue-700 dark:text-blue-300">
                Deploy Fystack on your own infrastructure. Your keys, your data, your rules.
              </p>
            </div>
            <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6 border border-blue-100 dark:border-blue-800/50">
              <h4 className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-3">
                Predictable Pricing
              </h4>
              <p className="text-blue-700 dark:text-blue-300">
                Flat pricing that doesn't increase with volume or AUM. Scale without surprise costs.
              </p>
            </div>
            <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6 border border-blue-100 dark:border-blue-800/50">
              <h4 className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-3">
                No Lock-In
              </h4>
              <p className="text-blue-700 dark:text-blue-300">
                Own your implementation. Export your data. Switch providers anytime without friction.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-16 text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
              Ready to take control of your digital asset custody?
            </h3>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="https://app.fystack.io"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#155dfc] text-white rounded-lg font-medium hover:bg-blue-600 transition-colors"
              >
                Get Started
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="https://docs.fystack.io"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white dark:bg-slate-800 text-gray-900 dark:text-gray-100 rounded-lg font-medium border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-slate-700 transition-colors"
              >
                View Documentation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  );
}
