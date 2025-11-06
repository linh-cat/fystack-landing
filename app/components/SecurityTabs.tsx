"use client";

import { useState } from "react";
import { Shield, Database, Key, Lock, CheckCircle, AlertTriangle } from "lucide-react";
import Image from "next/image";

export default function SecurityTabs() {
  const [activeTab, setActiveTab] = useState("dek-kek");

  const tabs = [
    { id: "dek-kek", label: "Encryption at Rest", icon: Lock },
    { id: "database", label: "Verifiable Database", icon: Database },
    { id: "kms", label: "Cloud KMS Support", icon: Key },
  ];

  return (
    <div className="space-y-8">
      {/* Header Section */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 dark:text-gray-400">
          <div className="w-8 h-px bg-gray-300 dark:bg-gray-600"></div>
          SECURITY BUILT BY EXPERTS
          <div className="w-8 h-px bg-gray-300 dark:bg-gray-600"></div>
        </div>
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900 dark:text-gray-100">
          No more insecure wallet infrastructure
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          Fystack is designed by cryptography and security experts in the field.
          Built with industry-standard security practices from the ground up.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap gap-2 justify-center">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-lg font-medium transition-all duration-200 ${
                activeTab === tab.id
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "bg-muted hover:bg-muted/80 text-muted-foreground"
              }`}
            >
              <Icon className="h-4 w-4" />
              <span className="text-sm">{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* Tab Content */}
      <div className="relative min-h-[400px] rounded-xl border bg-background/50 backdrop-blur-sm p-6">
        {/* Encryption at Rest for Sensitive Data */}
        {activeTab === "dek-kek" && (
          <div className="space-y-6 animate-fade-in">
            <div className="space-y-3">
              <h3 className="text-2xl font-bold text-foreground">Encryption at Rest for Sensitive Data</h3>
              <p className="text-muted-foreground">
                Industry-standard{" "}
                <a
                  href="https://fystack.io/blog/dek-kek-the-industry-standard-to-protect-highly-sensitive-data-part-1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline font-medium"
                >
                  DEK/KEK hybrid encryption model
                </a>{" "}
                balancing security, performance, and operational simplicity.
              </p>
            </div>

            {/* Visualization */}
            <div className="relative h-[320px] rounded-lg border bg-muted/30 overflow-hidden">
              <div className="absolute inset-0 flex flex-col items-center justify-center py-4">
                <div className="flex flex-col items-center gap-2 w-full max-w-lg px-4">
                  {/* KEK (Cloud KMS) at top */}
                  <div className="w-full">
                    <div className="px-4 py-3 rounded-lg bg-gradient-to-br from-blue-500/20 to-indigo-500/20 border-2 border-blue-500/50">
                      <div className="flex items-center gap-2">
                        <Shield className="h-5 w-5 text-blue-500 flex-shrink-0" />
                        <div>
                          <div className="text-xs font-bold text-foreground">KEK (Key Encryption Key)</div>
                          <div className="text-[10px] text-muted-foreground">AWS KMS / Azure Key Vault</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Arrow and Label */}
                  <div className="flex flex-col items-center -my-1">
                    <div className="text-base text-primary">↓</div>
                    <div className="text-[10px] text-primary font-medium">Encrypts</div>
                  </div>

                  {/* DEK in middle */}
                  <div className="w-full">
                    <div className="px-4 py-3 rounded-lg bg-gradient-to-br from-emerald-500/20 to-green-500/20 border-2 border-emerald-500/50">
                      <div className="flex items-center gap-2">
                        <Key className="h-5 w-5 text-emerald-500 flex-shrink-0" />
                        <div>
                          <div className="text-xs font-bold text-foreground">DEK (Data Encryption Key)</div>
                          <div className="text-[10px] text-muted-foreground">AES-256-GCM</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Arrow and Label */}
                  <div className="flex flex-col items-center -my-1">
                    <div className="text-base text-primary">↓</div>
                    <div className="text-[10px] text-primary font-medium">Encrypts</div>
                  </div>

                  {/* Encrypted Data at bottom */}
                  <div className="w-full">
                    <div className="px-4 py-3 rounded-lg bg-gradient-to-br from-purple-500/20 to-pink-500/20 border-2 border-purple-500/50">
                      <div className="flex items-center gap-2">
                        <Database className="h-5 w-5 text-purple-500 flex-shrink-0" />
                        <div className="flex-1">
                          <div className="text-xs font-bold text-foreground">Encrypted Data</div>
                          <div className="text-[10px] text-muted-foreground">Private keys, wallet data, sensitive info</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Key Benefits */}
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-start gap-3 p-4 rounded-lg bg-muted/50">
                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                <div>
                  <div className="text-sm font-semibold">High Performance</div>
                  <div className="text-xs text-muted-foreground">Fast symmetric encryption with AES-256-GCM</div>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-lg bg-muted/50">
                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                <div>
                  <div className="text-sm font-semibold">Layered Security</div>
                  <div className="text-xs text-muted-foreground">DEK encrypted at rest, protected in memory</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Verifiable Database */}
        {activeTab === "database" && (
          <div className="space-y-6 animate-fade-in">
            <div className="space-y-3">
              <h3 className="text-2xl font-bold text-foreground">Verifiable Database with Tampering Detection</h3>
              <p className="text-muted-foreground">
                Cryptographic integrity verification detects and prevents database tampering by malicious insiders, ensuring even privileged users cannot modify critical data undetected.
              </p>
            </div>

            {/* Visualization */}
            <div className="relative h-[400px] rounded-lg border bg-muted/30 overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center p-8">
                <div className="relative w-full max-w-[90%]">
                  {/* Database Record */}
                  <div className="absolute top-4 left-8">
                    <div className="p-4 rounded-lg bg-gradient-to-br from-blue-500/20 to-blue-600/20 border-2 border-blue-500/50 w-64">
                      <div className="flex items-center gap-2 mb-2">
                        <Database className="h-5 w-5 text-blue-500" />
                        <span className="text-sm font-bold">Database Record</span>
                      </div>
                      <div className="space-y-1 text-xs text-muted-foreground font-mono">
                        <div>wallet_id: abc123</div>
                        <div>threshold: 2-of-3</div>
                        <div>owner: workspace_1</div>
                      </div>
                    </div>
                    <div className="absolute -right-16 top-1/2 -translate-y-1/2 w-16 h-0.5 bg-primary/30"></div>
                  </div>

                  {/* Hash Computation */}
                  <div className="absolute top-4 right-8">
                    <div className="p-4 rounded-lg bg-gradient-to-br from-purple-500/20 to-purple-600/20 border-2 border-purple-500/50 w-64">
                      <div className="flex items-center gap-2 mb-2">
                        <Key className="h-5 w-5 text-purple-500" />
                        <span className="text-sm font-bold">SHA-256 Hash</span>
                      </div>
                      <div className="text-xs text-muted-foreground font-mono break-all">
                        a3b2c1d4e5f6...
                      </div>
                      <div className="mt-2 text-xs text-purple-400">↓ Ed25519 Signature</div>
                    </div>
                  </div>

                  {/* Signature Storage */}
                  <div className="absolute bottom-4 right-8">
                    <div className="p-4 rounded-lg bg-gradient-to-br from-emerald-500/20 to-emerald-600/20 border-2 border-emerald-500/50 w-64">
                      <div className="flex items-center gap-2 mb-2">
                        <Shield className="h-5 w-5 text-emerald-500" />
                        <span className="text-sm font-bold">Integrity Record</span>
                      </div>
                      <div className="text-xs text-muted-foreground font-mono break-all">
                        signature: 9f8e7d...
                      </div>
                      <div className="mt-1 text-xs text-muted-foreground">version: 1</div>
                    </div>
                  </div>

                  {/* Tampering Detection */}
                  <div className="absolute bottom-4 left-8">
                    <div className="p-4 rounded-lg bg-gradient-to-br from-red-500/20 to-red-600/20 border-2 border-red-500/50 w-64">
                      <div className="flex items-center gap-2 mb-2">
                        <AlertTriangle className="h-5 w-5 text-red-500 animate-pulse" />
                        <span className="text-sm font-bold">Tampering Alert</span>
                      </div>
                      <div className="text-xs text-muted-foreground">
                        ❌ Hash mismatch detected
                      </div>
                      <div className="text-xs text-muted-foreground">
                        ❌ Signature verification failed
                      </div>
                      <div className="text-xs text-red-400 mt-2">🚨 Immediate alert sent</div>
                    </div>
                  </div>

                  {/* Connection lines */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-0.5 h-32 bg-primary/20"></div>
                </div>
              </div>
            </div>

            {/* Protection Features */}
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-start gap-3 p-4 rounded-lg bg-muted/50">
                <Shield className="h-5 w-5 text-emerald-500 mt-0.5" />
                <div>
                  <div className="text-sm font-semibold">Insider Threat Protection</div>
                  <div className="text-xs text-muted-foreground">Even DBAs can't tamper undetected</div>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-lg bg-muted/50">
                <Shield className="h-5 w-5 text-emerald-500 mt-0.5" />
                <div>
                  <div className="text-sm font-semibold">Cryptographic Record Signing</div>
                  <div className="text-xs text-muted-foreground">Each database record is signed, any unauthorized change is detected</div>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-lg bg-muted/50">
                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                <div>
                  <div className="text-sm font-semibold">Automated Integrity Checks</div>
                  <div className="text-xs text-muted-foreground">Continuous verification of critical records</div>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-lg bg-muted/50">
                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                <div>
                  <div className="text-sm font-semibold">Real-time Verification</div>
                  <div className="text-xs text-muted-foreground">Automated checks & instant alerts</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Cloud KMS Support */}
        {activeTab === "kms" && (
          <div className="space-y-6 animate-fade-in">
            <div className="space-y-3">
              <h3 className="text-2xl font-bold text-foreground">Cloud KMS Support</h3>
              <p className="text-muted-foreground">
                Ensure critical keys never leave hardware or cloud infrastructure. AWS KMS integrated, with Azure Key Vault and HashiCorp Vault coming soon.
              </p>
            </div>

            {/* Visualization */}
            <div className="relative h-[320px] rounded-lg border bg-muted/30 overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center p-6">
                <div className="grid grid-cols-3 gap-6 w-full max-w-4xl">
                  {/* AWS KMS */}
                  <div className="space-y-3">
                    <div className="relative p-6 rounded-xl bg-background border-2 border-border h-52 flex flex-col items-center justify-center">
                      <div className="mb-3">
                        <Image
                          src="https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg"
                          alt="AWS"
                          width={48}
                          height={48}
                          className="object-contain"
                        />
                      </div>
                      <div className="text-center">
                        <div className="text-sm font-bold mb-1">AWS KMS</div>
                        <div className="text-xs text-muted-foreground">Cloud HSM</div>
                      </div>
                      <div className="absolute bottom-3 left-1/2 -translate-x-1/2">
                        <div className="px-3 py-1 rounded bg-green-500/20 text-green-600 dark:text-green-400 text-xs font-medium">
                          ✓ Integrated
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Azure Key Vault */}
                  <div className="space-y-3">
                    <div className="relative p-6 rounded-xl bg-background border-2 border-border h-52 flex flex-col items-center justify-center opacity-60">
                      <div className="mb-3">
                        <Image
                          src="https://upload.wikimedia.org/wikipedia/commons/a/a8/Microsoft_Azure_Logo.svg"
                          alt="Azure"
                          width={60}
                          height={60}
                          className="object-contain"
                        />
                      </div>
                      <div className="text-center">
                        <div className="text-sm font-bold mb-1">Azure Key Vault</div>
                        <div className="text-xs text-muted-foreground">Managed HSM</div>
                      </div>
                      <div className="absolute bottom-3 left-1/2 -translate-x-1/2">
                        <div className="px-3 py-1 rounded bg-amber-500/20 text-amber-600 dark:text-amber-400 text-xs font-medium">
                          Coming Soon
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* HashiCorp Vault */}
                  <div className="space-y-3">
                    <div className="relative p-6 rounded-xl bg-background border-2 border-border h-52 flex flex-col items-center justify-center opacity-60">
                      <div className="mb-3">
                        <Image
                          src="https://cdn.worldvectorlogo.com/logos/vault-enterprise.svg"
                          alt="HashiCorp Vault"
                          width={48}
                          height={48}
                          className="object-contain"
                        />
                      </div>
                      <div className="text-center">
                        <div className="text-sm font-bold mb-1">HashiCorp Vault</div>
                        <div className="text-xs text-muted-foreground">Self-hosted</div>
                        <div className="text-xs text-muted-foreground">Transit Secrets</div>
                      </div>
                      <div className="absolute bottom-3 left-1/2 -translate-x-1/2">
                        <div className="px-3 py-1 rounded bg-amber-500/20 text-amber-600 dark:text-amber-400 text-xs font-medium">
                          Coming Soon
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Key Features */}
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-start gap-3 p-4 rounded-lg bg-muted/50">
                <Shield className="h-5 w-5 text-blue-500 mt-0.5" />
                <div>
                  <div className="text-sm font-semibold">Hardware Security Modules</div>
                  <div className="text-xs text-muted-foreground">FIPS 140-2 Level 3 certified HSMs</div>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-lg bg-muted/50">
                <Key className="h-5 w-5 text-emerald-500 mt-0.5" />
                <div>
                  <div className="text-sm font-semibold">Key Never Leaves HSM</div>
                  <div className="text-xs text-muted-foreground">Cryptographic operations in hardware</div>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-lg bg-muted/50">
                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                <div>
                  <div className="text-sm font-semibold">Flexible Deployment</div>
                  <div className="text-xs text-muted-foreground">Cloud-based or on-premises options</div>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-lg bg-muted/50">
                <Lock className="h-5 w-5 text-purple-500 mt-0.5" />
                <div>
                  <div className="text-sm font-semibold">Audit & Compliance</div>
                  <div className="text-xs text-muted-foreground">Complete key usage logging & monitoring</div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
