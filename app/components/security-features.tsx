import { ArrowRight, Bell, CheckCircle, Database, Key, Lock, Shield, Users, X } from "lucide-react";
import Image from "next/image";

export function SecurityFeatures() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
      {/* IP Whitelist */}
      <div className="group relative p-8 rounded-2xl border border-primary/10 hover:border-primary/30 bg-background/50 backdrop-blur-sm transition-all duration-300 hover:shadow-lg">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl transition-opacity group-hover:opacity-100 opacity-0"></div>
        <div className="relative">
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
              <Shield className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold">IP Whitelist</h3>
          </div>
          <p className="text-muted-foreground">
            Restrict access to your wallets and APIs to specific IP addresses, ensuring only authorized systems can interact with your assets.
          </p>
          {/* Interactive Visualization */}
          <div className="mt-6 p-4 rounded-lg bg-muted/50 overflow-hidden">
            <div className="flex items-center gap-2 animate-slide-left">
              <div className="w-2 h-2 rounded-full bg-green-500"></div>
              <code className="text-sm">192.168.1.1</code>
              <CheckCircle className="h-4 w-4 text-green-500" />
            </div>
            <div className="flex items-center gap-2 mt-2 animate-slide-left" style={{ animationDelay: "0.2s" }}>
              <div className="w-2 h-2 rounded-full bg-red-500"></div>
              <code className="text-sm">Unknown IP</code>
              <X className="h-4 w-4 text-red-500" />
            </div>
          </div>
        </div>
      </div>

      {/* Multi Approvals */}
      <div className="group relative p-8 rounded-2xl border border-primary/10 hover:border-primary/30 bg-background/50 backdrop-blur-sm transition-all duration-300 hover:shadow-lg">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl transition-opacity group-hover:opacity-100 opacity-0"></div>
        <div className="relative">
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
              <Users className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold">Multi Approvals with Quorum</h3>
          </div>
          <p className="text-muted-foreground">
            Set flexible approval requirements based on your security needs. Configure custom quorum rules for different transaction types and amounts.
          </p>
          {/* Interactive Visualization */}
          <div className="mt-6 grid grid-cols-3 gap-2">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className={`p-3 rounded-lg ${i <= 2 ? "bg-primary/20" : "bg-muted"} transition-colors duration-300 animate-fade-in`}
                style={{ animationDelay: `${i * 0.2}s` }}
              >
                <Users className={`h-5 w-5 ${i <= 2 ? "text-primary" : "text-muted-foreground"}`} />
              </div>
            ))}
            <div className="col-span-3 text-center text-sm text-muted-foreground mt-2">
              Customizable Approval Threshold
            </div>
          </div>
        </div>
      </div>

      {/* Transaction Policy */}
      <div className="group relative p-8 rounded-2xl border border-primary/10 hover:border-primary/30 bg-background/50 backdrop-blur-sm transition-all duration-300 hover:shadow-lg">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl transition-opacity group-hover:opacity-100 opacity-0"></div>
        <div className="relative">
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
              <Lock className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold">Transaction Policy</h3>
          </div>
          <p className="text-muted-foreground">
            Define and enforce transaction policies including spending limits, allowed destinations, and time-based restrictions.
          </p>
          {/* Interactive Visualization */}
          <div className="mt-6 space-y-2">
            <div className="flex items-center justify-between p-2 rounded bg-muted/50 animate-fade-in">
              <span className="text-sm">Daily Limit</span>
              <span className="text-sm font-mono">5 ETH</span>
            </div>
            <div className="flex items-center justify-between p-2 rounded bg-muted/50 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <span className="text-sm">Allowed Chains</span>
              <span className="text-sm font-mono">ETH, BSC</span>
            </div>
          </div>
        </div>
      </div>

      {/* End-to-End Key Encryption */}
      <div className="group relative p-8 rounded-2xl border border-primary/10 hover:border-primary/30 bg-background/50 backdrop-blur-sm transition-all duration-300 hover:shadow-lg">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl transition-opacity group-hover:opacity-100 opacity-0"></div>
        <div className="relative">
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
              <Key className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold">End-to-End Key Encryption</h3>
          </div>
          <p className="text-muted-foreground">
            Keys are encrypted end-to-end using our secure protocols, ensuring that even we cannot touch your keys.
          </p>
          {/* Interactive Visualization */}
          <div className="mt-6 relative h-16">
            <div className="absolute inset-0 flex items-center justify-between">
              <div className="p-3 rounded-lg bg-primary/10 animate-pulse">
                <Lock className="h-5 w-5 text-primary" />
              </div>
              <div className="flex-1 mx-4 border-t-2 border-dashed border-primary/30"></div>
              <div className="p-3 rounded-lg bg-primary/10 animate-pulse">
                <Key className="h-5 w-5 text-primary" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Audit Log */}
      <div className="group relative p-8 rounded-2xl border border-primary/10 hover:border-primary/30 bg-background/50 backdrop-blur-sm transition-all duration-300 hover:shadow-lg">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl transition-opacity group-hover:opacity-100 opacity-0"></div>
        <div className="relative">
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
              <Database className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold">Audit Log</h3>
          </div>
          <p className="text-muted-foreground">
            Track all wallet operations and access attempts with immutable activity history for compliance and security monitoring.
          </p>
          {/* Interactive Visualization */}
          <div className="mt-6 space-y-2">
            <div className="flex items-center justify-between p-2 rounded bg-muted/50 animate-fade-in">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500"></div>
                <span className="text-sm">Wallet Creation</span>
              </div>
              <span className="text-xs text-muted-foreground">2m ago</span>
            </div>
            <div className="flex items-center justify-between p-2 rounded bg-muted/50 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                <span className="text-sm">Transaction Signed</span>
              </div>
              <span className="text-xs text-muted-foreground">5m ago</span>
            </div>
          </div>
        </div>
      </div>

      {/* Real-Time Alerting */}
      <div className="group relative p-8 rounded-2xl border border-primary/10 hover:border-primary/30 bg-background/50 backdrop-blur-sm transition-all duration-300 hover:shadow-lg">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl transition-opacity group-hover:opacity-100 opacity-0"></div>
        <div className="relative">
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
              <Bell className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold">Real-Time Alerting</h3>
          </div>
          <p className="text-muted-foreground">
            Receive instant notifications for high-risk events through multiple channels including email, Slack, Telegram, and webhooks.
          </p>
          {/* Interactive Visualization */}
          <div className="mt-6 space-y-3">
            <div className="p-3 rounded-lg bg-red-50/50 dark:bg-red-950/10 border border-red-100/50 dark:border-red-900/20">
              <div className="flex items-center gap-2">
                <Bell className="h-4 w-4 text-red-500" />
                <span className="text-sm font-medium text-red-600 dark:text-red-400">Large Transfer Alert</span>
              </div>
              <p className="text-xs text-red-600/80 dark:text-red-400/80 mt-1">
                Transaction exceeds daily limit of 5 ETH
              </p>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Slack_icon_2019.svg"
                alt="Slack"
                width={16}
                height={16}
                className="opacity-70"
              />
              <span>Slack</span>
              <ArrowRight className="h-3 w-3" />
              <span>Security Channel</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/8/82/Telegram_logo.svg"
                alt="Telegram"
                width={16}
                height={16}
                className="opacity-70"
              />
              <span>Telegram</span>
              <ArrowRight className="h-3 w-3" />
              <span>Security Bot</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 