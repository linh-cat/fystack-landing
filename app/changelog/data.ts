export type ChangelogCategory =
  | "Platform"
  | "Security"
  | "Networks"
  | "Infrastructure"
  | "Developer"
  | "Compliance";

export type ChangelogHighlight = {
  title: string;
  description: string;
};

export type ChangelogEntry = {
  version: string;
  date: string;
  isoDate: string;
  title: string;
  summary: string;
  categories: ChangelogCategory[];
  highlights: ChangelogHighlight[];
  components?: string[];
  docsUrl: string;
};

export const changelog: ChangelogEntry[] = [
  {
    version: "v0.1.12",
    date: "March 31, 2026",
    isoDate: "2026-03-31",
    title: "Passkey 2FA, workspace lifecycle & human-readable asset IDs",
    summary:
      "Phishing-resistant authentication, administrator control over workspace lifecycles, and friendlier APIs for integrators.",
    categories: ["Security", "Platform", "Developer"],
    highlights: [
      {
        title: "Passkey-based 2FA",
        description:
          "Register multiple passkeys per account — platform biometrics or hardware security keys — coexisting with TOTP so users can migrate gradually.",
      },
      {
        title: "Workspace rename & delete",
        description:
          "Administrators can rename or permanently delete workspaces directly from settings, with guardrails and instant UI propagation.",
      },
      {
        title: "Human-readable asset identifiers",
        description:
          "APIs now accept intuitive identifiers like `USDC` or `USDT` via a new asset resolver, replacing internal asset IDs.",
      },
      {
        title: "Auto-accept workspace invitations",
        description:
          "Pending invitations tied to a signing-in user are accepted automatically on first login, removing a redundant approval step.",
      },
      {
        title: "Cross-tab session coordination",
        description:
          "A new session hook detects workspace mismatches across browser tabs, preventing accidental operations on the wrong workspace.",
      },
    ],
    components: ["Apex Platform v0.1.12", "Fystack UI v0.1.12"],
    docsUrl: "https://docs.fystack.io/changelog/v0.1.12",
  },
  {
    version: "v0.1.11",
    date: "February 28, 2026",
    isoDate: "2026-02-28",
    title: "KYT screening, role-based policies & Solana gas station",
    summary:
      "Six major additions focused on compliance, cost optimization, and operational control across the transaction lifecycle.",
    categories: ["Compliance", "Security", "Networks"],
    highlights: [
      {
        title: "KYT integration with Scorechain",
        description:
          "Know-Your-Transaction screening scores deposits and withdrawals, feeding risk directly into approval workflows.",
      },
      {
        title: "Tron resource savings",
        description:
          "Reduced energy and bandwidth consumption during sweeps and withdrawals on the TRON network without impacting reliability.",
      },
      {
        title: "Role-based alert & webhook policies",
        description:
          "Alerts and webhooks now recognize Signer and Proposer roles, enabling role-scoped delivery and team-specific notifications.",
      },
      {
        title: "Cancel transaction API",
        description:
          "A new endpoint lets authorized users abandon unconfirmed transactions and automatically releases any holds placed at creation.",
      },
      {
        title: "Solana rent recovery & gas station",
        description:
          "Empty SPL token accounts are closed after sweeps, recycling rent SOL to fund future transaction fees via a dedicated gas station.",
      },
      {
        title: "Webhook CIDR allowlist",
        description:
          "Workspace admins can restrict outbound webhook destinations to specific CIDR ranges, validated on create and update.",
      },
    ],
    docsUrl: "https://docs.fystack.io/changelog/v0.1.11",
  },
  {
    version: "v0.1.10",
    date: "January 31, 2026",
    isoDate: "2026-01-31",
    title: "Native Bitcoin support, idempotency keys & redesigned approvals",
    summary:
      "Bitcoin joins as a first-class asset, safer write operations through idempotency, and a full rebuild of the withdrawal approval flow.",
    categories: ["Networks", "Platform", "Developer"],
    highlights: [
      {
        title: "Native Bitcoin support",
        description:
          "Dedicated Bitcoin RPC handler in the sweeper, UTXO multi-input MPC signing, HD wallet generation, and RBF tracking for in-flight transactions.",
      },
      {
        title: "Idempotency keys",
        description:
          "A Redis-backed middleware guards critical write operations, preventing duplicate withdrawals from client timeouts and enabling safe retries.",
      },
      {
        title: "Withdrawal approvals redesign",
        description:
          "New approval UI with clearer status, richer response types with timestamps, and the ability for proposers to cancel their own requests.",
      },
      {
        title: "Alerts module",
        description:
          "The legacy Notifications module was refactored into a standalone Alerts module with dedicated routing and navigation.",
      },
      {
        title: "Editable workspace names & token refresh",
        description:
          "Workspaces can be renamed from settings, 2FA modals auto-verify, and a new Token Refresh Manager improves session resilience.",
      },
    ],
    docsUrl: "https://docs.fystack.io/changelog/v0.1.10",
  },
  {
    version: "v0.1.9",
    date: "December 14, 2025",
    isoDate: "2025-12-14",
    title: "Proposer role, expense analytics & child key derivation",
    summary:
      "Stronger separation of duties, financial visibility across wallets, and hierarchical deterministic keys inside the MPC cluster.",
    categories: ["Platform", "Compliance", "Security"],
    highlights: [
      {
        title: "Proposer role",
        description:
          "A new permission tier lets operations teams submit withdrawal proposals without approval authority, enforcing separation of duties.",
      },
      {
        title: "Withdrawal categories",
        description:
          "Tag withdrawals with custom labels like Operational, Payroll, or Refunds. Filter by category and include tags in CSV exports.",
      },
      {
        title: "Expense analytics dashboard",
        description:
          "Real-time spending metrics with volume, count, averages, donut and bar charts, monthly trends, and a ranked transaction list.",
      },
      {
        title: "Balance query by asset symbol",
        description:
          "`GET /workspaces/{id}/balances?symbol=USDC` returns consolidated holdings across every supported network for easier reconciliation.",
      },
      {
        title: "Child key derivation in MPCIUM",
        description:
          "BIP32-style ECDSA and extended EdDSA derivation bring HD wallet structures to the distributed MPC cluster without centralizing trust.",
      },
    ],
    components: ["Apex Platform v0.1.9", "MPCIUM v0.3.4"],
    docsUrl: "https://docs.fystack.io/changelog/v0.1.9",
  },
  {
    version: "v0.1.8",
    date: "November 11, 2025",
    isoDate: "2025-11-11",
    title: "Security hardening, observability & Telegram alerts",
    summary:
      "Security and integrity improvements across wallet operations, new Telegram-powered alerts, and major upgrades to the multichain indexer and MPC cluster.",
    categories: ["Security", "Infrastructure", "Platform"],
    highlights: [
      {
        title: "Security hardening",
        description:
          "CSRF defenses, authentication and encryption improvements, stronger session management, and expanded brute-force mitigations.",
      },
      {
        title: "Telegram alerts",
        description:
          "A new alert feature delivers webhook logging, resend functionality, and statistical APIs — integrated directly with Telegram.",
      },
      {
        title: "Responsive UI & wallet sorting",
        description:
          "Responsive design improvements, withdrawal detail visibility in approvals, and the ability to sort wallets by account balance.",
      },
      {
        title: "Database-backed balances",
        description:
          "Balance storage moved from Consul to the database, with SLSA provenance attestations added to Docker builds for supply-chain trust.",
      },
      {
        title: "Indexer & MPCIUM upgrades",
        description:
          "Multichain Indexer v1.0.10 standardizes cross-chain compatibility. MPCIUM v0.3.3 ships Kubernetes support and fixes a distributed ECDH race.",
      },
    ],
    components: [
      "Apex Platform v0.1.8",
      "Mpcium v0.3.3",
      "Multichain Indexer v1.0.10",
    ],
    docsUrl: "https://docs.fystack.io/changelog/v0.1.8",
  },
  {
    version: "v0.1.7",
    date: "September 16, 2025",
    isoDate: "2025-09-16",
    title: "TRON support, high availability & AWS KMS signer",
    summary:
      "TRON blockchain joins the platform, distributed deployments gain leader election, and a new secret store enables AWS KMS signing.",
    categories: ["Networks", "Infrastructure", "Security"],
    highlights: [
      {
        title: "TRON blockchain support",
        description:
          "Full TRON integration with signing, transaction handling, address validation, and MPC wallet address updates.",
      },
      {
        title: "High availability",
        description:
          "Leader election for distributed deployments, split scheduler and block scanner, graceful shutdown, and rescanner distributed mode.",
      },
      {
        title: "Secret store & AWS KMS signer",
        description:
          "Pluggable secret store supporting AWS, plus an AWS KMS signer integration for stronger key protection in production.",
      },
      {
        title: "Role-based access control",
        description:
          "RBAC on wallet assignments, network and asset management restricted to system admins, address risk checker, and TLS configuration.",
      },
      {
        title: "NATS JetStream messaging",
        description:
          "Queues migrated for stats, signing events, and pubsub consumers. Legacy pubsub is deprecated and JetStream is now mandatory.",
      },
      {
        title: "Distroless Docker images",
        description:
          "Multi-architecture distroless images, updated Redis and Consul configurations, and refactored MPC signing with longer timeouts.",
      },
    ],
    docsUrl: "https://docs.fystack.io/changelog/v0.1.7",
  },
  {
    version: "v0.1.6",
    date: "August 21, 2025",
    isoDate: "2025-08-21",
    title: "Auto-approval thresholds & webhook worker pools",
    summary:
      "Wallet-level auto-approval limits, a worker pool architecture for webhook processing, and new workspace administration endpoints.",
    categories: ["Platform", "Developer", "Infrastructure"],
    highlights: [
      {
        title: "Auto-approval thresholds",
        description:
          "New wallet settings store per-wallet automatic approval thresholds, with expanded filtering and API coverage for withdrawals.",
      },
      {
        title: "Webhook worker pools",
        description:
          "A worker pool architecture boosts webhook throughput and scalability — no extra configuration needed to activate.",
      },
      {
        title: "Resend invitation API",
        description:
          "A new endpoint and service implementation let admins resend workspace invitations that haven't been accepted.",
      },
      {
        title: "Expanded wallet search",
        description:
          "Wallet APIs now support user and asset search, plus supplementary data in network response payloads.",
      },
    ],
    docsUrl: "https://docs.fystack.io/changelog/v0.1.6",
  },
  {
    version: "v0.1.5",
    date: "August 12, 2025",
    isoDate: "2025-08-12",
    title: "Withdrawal APIs, sweeper automation & policy workflows",
    summary:
      "A foundational release introducing programmatic withdrawals, sweep automation, service accounts, and a full policy approval workflow.",
    categories: ["Developer", "Platform", "Networks"],
    highlights: [
      {
        title: "Withdrawal APIs",
        description:
          "Endpoints for fetching withdrawals by ID and requesting new withdrawals, with webhook callbacks for deposit and withdrawal events.",
      },
      {
        title: "Sweeper automation",
        description:
          "Sweep automation wired into the address book, deduplication and retry for MPC signing, and experimental MPC sweeper integration.",
      },
      {
        title: "Service accounts",
        description:
          "Create, update, and delete endpoints for managing service accounts used by automated integrations.",
      },
      {
        title: "Policy workflows",
        description:
          "Complete policy creation, approval, and rejection flow with validation rules and an experimental approval workflow.",
      },
      {
        title: "Monad network & price monitoring",
        description:
          "Monad network configuration support, prefix matching for asset search, and CoinMarketCap price monitoring integration.",
      },
    ],
    docsUrl: "https://docs.fystack.io/changelog/v0.1.5",
  },
];

export const allCategories: ChangelogCategory[] = [
  "Platform",
  "Security",
  "Networks",
  "Infrastructure",
  "Developer",
  "Compliance",
];
