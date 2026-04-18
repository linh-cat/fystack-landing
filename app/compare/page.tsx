import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Github, Shield, Lock, Cloud, Globe, Server, AlertTriangle } from 'lucide-react';
import Navbar from '@/components/Navbar';
import { WhyChooseUsTable } from '@/app/new-homepage/components/WhyChooseUsTable';

export const metadata: Metadata = {
  title: 'Fystack Self-hosted vs Others',
  description: 'See how Fystack compares to Fireblocks, Cobo, Dfns, and Safeheron. Self-hosted, cloud-native, unlimited wallets with flat pricing.',
};

export default function ComparePage() {
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
            <span className="text-[#3b82f6]">Others</span>
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

      {/* Fystack Self-Hosted Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50 to-white dark:from-blue-950/20 dark:to-slate-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            Fystack Self-Hosted
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-8">
            Control your uptime, your data, your keys. Deploy on your infrastructure with complete sovereignty.
          </p>
          <Link
            href="https://github.com/fystack/fystack-selfhost-scripts"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg font-medium hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors shadow-lg"
          >
            <Github className="w-5 h-5" />
            Deploy pilot with one single command
          </Link>

          {/* Deployment Visualization */}
          <div className="mt-16 max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Fystack - Private Network */}
              <div className="relative">
                <div className="absolute inset-0 bg-green-100 dark:bg-green-900/20 rounded-2xl blur-xl opacity-50"></div>
                <div className="relative bg-white dark:bg-slate-800 rounded-2xl p-8 border-4 border-green-500 dark:border-green-600 shadow-xl">
                  <div className="flex items-center justify-center mb-4">
                    <Shield className="w-12 h-12 text-green-600 dark:text-green-400" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 text-center mb-4">
                    Fystack Self-Hosted
                  </h3>

                  {/* Private Network Box */}
                  <div className="relative border-4 border-dashed border-green-500 dark:border-green-600 rounded-xl p-6 bg-green-50 dark:bg-green-950/30">
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 px-3 py-1 bg-green-500 dark:bg-green-600 text-white text-sm font-semibold rounded-full flex items-center gap-1">
                      <Lock className="w-3 h-3" />
                      Private Network
                    </div>

                    {/* Internal Components */}
                    <div className="space-y-3 mt-2">
                      <div className="flex items-center gap-3 bg-white dark:bg-slate-700 rounded-lg p-3 border border-green-300 dark:border-green-700">
                        <Server className="w-5 h-5 text-green-600 dark:text-green-400" />
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Your Infrastructure</span>
                      </div>
                      <div className="flex items-center gap-3 bg-white dark:bg-slate-700 rounded-lg p-3 border border-green-300 dark:border-green-700">
                        <Lock className="w-5 h-5 text-green-600 dark:text-green-400" />
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Your Keys</span>
                      </div>
                      <div className="flex items-center gap-3 bg-white dark:bg-slate-700 rounded-lg p-3 border border-green-300 dark:border-green-700">
                        <Shield className="w-5 h-5 text-green-600 dark:text-green-400" />
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Your Control</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-center text-sm text-green-700 dark:text-green-400 font-semibold mt-4">
                    ✓ Isolated from Internet
                  </p>
                </div>
              </div>

              {/* Others - Exposed to Internet */}
              <div className="relative">
                <div className="absolute inset-0 bg-orange-100 dark:bg-orange-900/20 rounded-2xl blur-xl opacity-50"></div>
                <div className="relative bg-white dark:bg-slate-800 rounded-2xl p-8 border-4 border-orange-500 dark:border-orange-600 shadow-xl">
                  <div className="flex items-center justify-center mb-4">
                    <AlertTriangle className="w-12 h-12 text-orange-600 dark:text-orange-400" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 text-center mb-4">
                    Others (Cloud-based)
                  </h3>

                  {/* Internet Exposed */}
                  <div className="relative border-4 border-dashed border-orange-500 dark:border-orange-600 rounded-xl p-6 bg-orange-50 dark:bg-orange-950/30">
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 px-3 py-1 bg-orange-500 dark:bg-orange-600 text-white text-sm font-semibold rounded-full flex items-center gap-1">
                      <Globe className="w-3 h-3" />
                      Public Internet
                    </div>

                    {/* External Components */}
                    <div className="space-y-3 mt-2">
                      <div className="flex items-center gap-3 bg-white dark:bg-slate-700 rounded-lg p-3 border border-orange-300 dark:border-orange-700">
                        <Cloud className="w-5 h-5 text-orange-600 dark:text-orange-400" />
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Vendor Infrastructure</span>
                      </div>
                      <div className="flex items-center gap-3 bg-white dark:bg-slate-700 rounded-lg p-3 border border-orange-300 dark:border-orange-700">
                        <Globe className="w-5 h-5 text-orange-600 dark:text-orange-400" />
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Shared Keys</span>
                      </div>
                      <div className="flex items-center gap-3 bg-white dark:bg-slate-700 rounded-lg p-3 border border-orange-300 dark:border-orange-700">
                        <AlertTriangle className="w-5 h-5 text-orange-600 dark:text-orange-400" />
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Limited Control</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-center text-sm text-orange-700 dark:text-orange-400 font-semibold mt-4">
                    ⚠ Exposed Attack Surface
                  </p>
                </div>
              </div>
            </div>

            {/* Security Principles */}
            <div className="mt-16 max-w-5xl mx-auto">
              <div className="bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-800 dark:to-blue-950/30 rounded-2xl p-8 border border-slate-200 dark:border-slate-700 shadow-lg">
                <div className="text-center mb-6">
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-100 mb-3">
                    Multi-Layer Security Protections
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Prevent insider hacks and external attacks with comprehensive security measures
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mb-6">
                  <div className="bg-white dark:bg-slate-700 rounded-lg p-3 border border-blue-200 dark:border-blue-800 text-center">
                    <p className="text-sm font-medium text-gray-700 dark:text-gray-300">Encryption at Rest</p>
                  </div>
                  <div className="bg-white dark:bg-slate-700 rounded-lg p-3 border border-blue-200 dark:border-blue-800 text-center">
                    <p className="text-sm font-medium text-gray-700 dark:text-gray-300">Data Tampering Detection</p>
                  </div>
                  <div className="bg-white dark:bg-slate-700 rounded-lg p-3 border border-blue-200 dark:border-blue-800 text-center">
                    <p className="text-sm font-medium text-gray-700 dark:text-gray-300">In-Memory Runtime Encryption</p>
                  </div>
                  <div className="bg-white dark:bg-slate-700 rounded-lg p-3 border border-blue-200 dark:border-blue-800 text-center">
                    <p className="text-sm font-medium text-gray-700 dark:text-gray-300">Secret Store & KMS Integration</p>
                  </div>
                  <div className="bg-white dark:bg-slate-700 rounded-lg p-3 border border-blue-200 dark:border-blue-800 text-center">
                    <p className="text-sm font-medium text-gray-700 dark:text-gray-300">MPC Wallet Security</p>
                  </div>
                  <div className="bg-white dark:bg-slate-700 rounded-lg p-3 border border-blue-200 dark:border-blue-800 text-center">
                    <p className="text-sm font-medium text-gray-700 dark:text-gray-300">Supply Chain Security</p>
                  </div>
                  <div className="bg-white dark:bg-slate-700 rounded-lg p-3 border border-blue-200 dark:border-blue-800 text-center">
                    <p className="text-sm font-medium text-gray-700 dark:text-gray-300">Container Security & Build Provenance</p>
                  </div>
                  <div className="bg-white dark:bg-slate-700 rounded-lg p-3 border border-blue-200 dark:border-blue-800 text-center">
                    <p className="text-sm font-medium text-gray-700 dark:text-gray-300">Deployment Best Practices</p>
                  </div>
                </div>

                <div className="text-center">
                  <Link
                    href="https://docs.fystack.io/security/encryption-at-rest"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-[#3b82f6] text-white rounded-lg font-medium hover:bg-blue-600 transition-colors shadow-md"
                  >
                    <Shield className="w-5 h-5" />
                    View Security Documentation
                  </Link>
                </div>
              </div>
            </div>

            {/* Deployment Options */}
            <div className="mt-16 max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                  Deploy Anywhere
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Flexible deployment options for your infrastructure
                </p>
              </div>

              {/* Deploy With */}
              <div className="mb-12">
                <h4 className="text-xl font-semibold text-gray-900 dark:text-gray-100 text-center mb-8">
                  Deploy with
                </h4>
                <div className="flex flex-wrap items-center justify-center gap-12">
                  <div className="w-20 h-20 flex items-center justify-center transition-transform hover:scale-110 cursor-pointer">
                    <Image
                      src="/logo/docker.webp"
                      alt="Docker"
                      width={80}
                      height={80}
                      className="object-contain w-full h-full"
                    />
                  </div>
                  <div className="w-20 h-20 flex items-center justify-center transition-transform hover:scale-110 cursor-pointer">
                    <Image
                      src="/logo/kubernetes.webp"
                      alt="Kubernetes"
                      width={80}
                      height={80}
                      className="object-contain w-full h-full"
                    />
                  </div>
                </div>
              </div>

              {/* Deploy On */}
              <div className="pt-12 border-t border-gray-200 dark:border-gray-700">
                <h4 className="text-xl font-semibold text-gray-900 dark:text-gray-100 text-center mb-8">
                  Deploy On-Prem or Your Favorite Cloud
                </h4>
                <div className="flex flex-wrap items-center justify-center gap-12">
                  <div className="w-32 h-32 flex items-center justify-center transition-transform hover:scale-110 cursor-pointer">
                    <Image
                      src="/logo/aws.webp"
                      alt="AWS"
                      width={120}
                      height={120}
                      className="object-contain w-full h-full"
                    />
                  </div>
                  <div className="w-32 h-32 flex items-center justify-center transition-transform hover:scale-110 cursor-pointer">
                    <Image
                      src="/logo/googlecloud.webp"
                      alt="Google Cloud"
                      width={120}
                      height={120}
                      className="object-contain w-full h-full"
                    />
                  </div>
                  <div className="w-32 h-32 flex items-center justify-center transition-transform hover:scale-110 cursor-pointer">
                    <Image
                      src="/logo/Microsoft_Azure_Logo.webp"
                      alt="Azure"
                      width={120}
                      height={120}
                      className="object-contain w-full h-full"
                    />
                  </div>
                  <div className="w-32 h-32 flex items-center justify-center transition-transform hover:scale-110 cursor-pointer">
                    <Image
                      src="/logo/hetzner-logo.svg"
                      alt="Hetzner"
                      width={120}
                      height={120}
                      className="object-contain w-full h-full"
                    />
                  </div>
                  <div className="w-32 h-32 flex items-center justify-center transition-transform hover:scale-110 cursor-pointer">
                    <Image
                      src="/logo/yandex.webp"
                      alt="Yandex Cloud"
                      width={120}
                      height={120}
                      className="object-contain w-full h-full"
                    />
                  </div>
                  <div className="w-32 h-32 flex items-center justify-center transition-transform hover:scale-110 cursor-pointer">
                    <Image
                      src="/logo/alibaba_cloud.png"
                      alt="Alibaba Cloud"
                      width={120}
                      height={120}
                      className="object-contain w-full h-full"
                    />
                  </div>
                  <div className="w-32 h-32 flex items-center justify-center transition-transform hover:scale-110 cursor-pointer">
                    <Image
                      src="/logo/Tencent_Cloud_Logo.webp"
                      alt="Tencent Cloud"
                      width={120}
                      height={120}
                      className="object-contain w-full h-full"
                    />
                  </div>
                  <div className="w-32 h-32 flex items-center justify-center transition-transform hover:scale-110 cursor-pointer">
                    <Image
                      src="/logo/digitalocean.svg"
                      alt="DigitalOcean"
                      width={120}
                      height={120}
                      className="object-contain w-full h-full"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="border border-slate-200 rounded-2xl overflow-hidden bg-white">
            <WhyChooseUsTable />
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
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#3b82f6] text-white rounded-lg font-medium hover:bg-blue-600 transition-colors"
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
