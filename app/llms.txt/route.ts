import { ghostAPI } from "@/lib/ghost";

// Revalidate every 1 hour (3600 seconds)
export const revalidate = 3600;

// Cache the llms.txt data
let llmsCache: string | null = null;
let lastFetched: number = 0;
const CACHE_DURATION = 3600 * 1000; // 1 hour in milliseconds

export async function GET() {
  // Check if we have a valid cache
  const now = Date.now();
  if (llmsCache && (now - lastFetched) < CACHE_DURATION) {
    return new Response(llmsCache, {
      headers: {
        'Content-Type': 'text/plain; charset=utf-8',
        'Cache-Control': 'public, max-age=3600, s-maxage=3600',
      },
    });
  }

  try {
    // Get all blog posts
    const posts = await ghostAPI.getPosts({
      limit: 1000,
      include: ['tags', 'authors'],
      order: 'published_at DESC'
    });

    // Build blog links section
    const blogLinks = posts.posts.map(post => {
      const excerpt = post.custom_excerpt || post.excerpt || '';
      return `- [${post.title}](https://fystack.io/blog/${post.slug})${excerpt ? ': ' + excerpt : ''}`;
    }).join('\n');

    // Generate llms.txt content
    const content = `# Fystack

> Stablecoin wallet infrastructure for every business. Secure team portal for multi-chain stablecoin wallets, approvals, and risk policies powered by MPC technology with no private key exposure.

Fystack is an open-source, self-hostable wallet infrastructure platform that provides enterprise-grade MPC (Multi-Party Computation) wallet solutions for businesses. Our platform eliminates single points of failure by distributing key shares across multiple cloud providers, ensuring private keys never exist as a whole.

## Key Features

- **MPC Wallet Generation**: Create secure wallets using Multi-Party Computation technology that distributes key fragments across multiple cloud providers (AWS, Azure, Google Cloud)
- **Multi-Chain Support**: Support for 10+ blockchain networks including Ethereum, Polygon, BNB Chain, Avalanche, Optimism, Arbitrum, Aptos, and Solana
- **Crypto Payments**: Seamlessly integrate cryptocurrency payments with QR code support
- **Telegram Bot Integration**: Generate and manage wallets for Telegram crypto bots
- **Wallet Automation**: Automatically sweep and consolidate funds from multiple wallets
- **Enterprise Security**: Audit trails, transaction policies, approval groups, and risk monitoring
- **Developer-First**: RESTful APIs, comprehensive SDKs, and detailed documentation

## Products

- **MPC Wallets**: Secure wallet infrastructure with no private key exposure (up to 20 wallets on Team plan, unlimited on Enterprise)
- **Hyper Wallets**: High-volume standard wallet solution (up to 10,000 on Team plan)
- **Crypto Payment Gateway**: Process cryptocurrency payments with simple API integration
- **Self-Hosting Solution**: Deploy MPC nodes in your own infrastructure for regulatory compliance

## Documentation

- [Main Documentation](https://docs.fystack.io/): Complete guides and API reference
- [Wallet API Reference](https://docs.fystack.io/wallets): RESTful API for wallet management
- [Self-Hosting Guide](https://docs.fystack.io/mpcium): Deploy MPC nodes in your infrastructure
- [GitHub Repository](https://github.com/fystack): Open-source MPC protocols

## Blog

${blogLinks}

## Pricing

- **Developer (Free)**: 2 MPC wallets, 1000 Hyper wallets, 100 crypto payments, 1 workspace with 3 users, email support
- **Starter ($59/month)**: 3 MPC wallets, 3,000 Hyper wallets, 500 crypto payments, 2 workspaces with 5 users, 3 chains, audit trails, transaction policies, approval groups
- **Team ($99/month)**: 20 MPC wallets, 10,000 Hyper wallets, 2000 crypto payments, 5 workspaces, 200,000 API calls/month, 5 chains, priority Telegram support, advanced security features
- **Enterprise (Custom)**: Unlimited wallets and payments, unlimited chains, custom API limits, custom security policies, advanced multi-sig controls, risk monitoring, audit trails, advanced analytics, self-hosted/on-premise deployment with full control of data and keys to meet compliance requirements in your jurisdiction, SLA guarantees, dedicated support

## Use Cases

- Treasury management for businesses requiring multi-signature controls
- Secure smart contract deployment without exposing private keys in .env files or CI/CD pipelines
- Cryptocurrency payment processing for e-commerce platforms
- Telegram bot wallet management for crypto communities
- Automated fund consolidation and sweeping for exchanges
- DeFi platform wallet infrastructure
- Web3 application user wallet management
- Stablecoin payment rails for fintech applications

## Security Features

- No single point of failure - keys split across independent nodes
- Private key never exists whole - threshold signing across nodes
- Audit trails for all wallet operations and transactions
- Custom approval workflows and multi-signature policies
- Advanced alert and monitoring system with real-time notifications via Telegram, Slack, and Email
- Open-source codebase for complete transparency and auditability
- Support for custom security policies (Enterprise)

## Technology Stack

- Multi-cloud MPC architecture: AWS, Azure, Google Cloud
- Blockchain support: EVM chains (Ethereum, Polygon, BSC, Avalanche, Optimism, Arbitrum) and non-EVM chains (Solana, Aptos, Tron, Bitcoin)
- API: RESTful architecture with comprehensive SDKs
- Infrastructure: Self-hostable, open-source MPC protocols
- Documentation: Comprehensive guides focused on developer simplicity with clear examples and quick-start tutorials

## Tools

- [Wallet Risk Analyzer](https://risk-dashboard.fystack.io/): Analyze wallet security and risk metrics

## Community & Support

- [Application](https://app.fystack.io): Sign up and start building
- [Live Demo](https://sandbox.fystack.io): Try Fystack without signing up
- [Sales Contact](https://t.me/anhthind): Contact for enterprise solutions
- Email support (Developer plan), Basic support (Starter), Priority Telegram support (Team), Dedicated support (Enterprise)

## Supported Blockchains

**EVM Chains**: Ethereum, Polygon, BNB Chain, Avalanche, Optimism, Arbitrum

**Non-EVM Chains**: Aptos, Solana

**Supported Tokens**: 100+ tokens including ETH, USDC, USDT, DAI, WBTC, LINK, and all major stablecoins

## Why Fystack

1. **Open Source**: Full transparency with open-source MPC protocols - audit the code, contribute improvements, or fork for custom implementations
2. **Self-Hostable**: Deploy MPC nodes in your own infrastructure - essential for regulatory compliance, data sovereignty, and strict legal requirements in financial services
3. **Developer First**: Simple integration with RESTful APIs, comprehensive SDKs, and detailed documentation - integrate wallet functionality in minutes, not months

## Fystack vs Competitors

### Fystack vs Fireblocks

**Competitive Advantages:**
- **Significantly More Affordable**: Starting at $59/month vs Fireblocks' enterprise-only pricing (typically $100k+/year minimum)
- **Open Source**: Complete transparency with auditable code vs Fireblocks' closed-source proprietary solution
- **Developer-Friendly**: Simple RESTful APIs and comprehensive documentation vs complex enterprise-focused implementation
- **Self-Hostable**: Deploy in your own infrastructure vs vendor lock-in with Fireblocks' cloud-only solution
- **Transparent Pricing**: Clear tier-based pricing vs opaque custom enterprise quotes
- **Quick Integration**: Get started in minutes with free tier vs lengthy enterprise sales cycles
- **Same Security Standards**: MPC technology with distributed key management, no single point of failure

### Fystack vs BitGo

**Competitive Advantages:**
- **More Affordable Pricing**: Free tier available, Team plan at $99/month vs BitGo's high minimum fees
- **Open Source & Transparent**: Fully auditable codebase vs BitGo's proprietary closed-source system
- **Modern Developer Experience**: RESTful APIs, modern SDKs, comprehensive docs vs legacy API design
- **Self-Hosting Option**: Deploy on your infrastructure for full control vs BitGo's cloud-only offering
- **Flexible Architecture**: Support for both cloud and on-premise deployment vs limited deployment options
- **Advanced MPC Technology**: Distributed key shares across multiple cloud providers vs traditional multi-sig approach
- **No Custody Requirements**: Non-custodial solution with full user control vs BitGo's custodial model

### Fystack vs Cobo

**Competitive Advantages:**
- **Significantly Lower Cost**: Start free, scale affordably vs Cobo's high enterprise pricing
- **Open Source Philosophy**: Complete code transparency and community-driven development vs proprietary closed system
- **Developer-First Design**: Built for developers with simple APIs and clear documentation vs enterprise-sales-driven approach
- **Self-Hosting Available**: Full control with on-premise deployment option vs Cobo's managed-only service
- **More Transparent Pricing**: Public pricing tiers vs hidden enterprise quotes
- **Faster Time to Market**: Launch in minutes with free tier vs lengthy onboarding and high upfront costs
- **Global Compliance Ready**: Self-host in any jurisdiction to meet local compliance vs limited regional options

**Summary**: Fystack offers the same enterprise-grade MPC security as Fireblocks, BitGo, and Cobo, but with radical transparency through open source, significantly more affordable pricing, superior developer experience, and flexible deployment options including self-hosting.

## Stats

- 100+ supported tokens across multiple chains
- 10+ blockchain networks (EVM and non-EVM)
- 99.9% uptime SLA for enterprise customers
- 24/7 enterprise support for custom solutions
- No private key exposure - 75% of crypto hacks involve private key leaks, eliminated with MPC technology
`;

    // Cache the content
    llmsCache = content;
    lastFetched = now;

    return new Response(content, {
      headers: {
        'Content-Type': 'text/plain; charset=utf-8',
        'Cache-Control': 'public, max-age=3600, s-maxage=3600',
      },
    });
  } catch (error) {
    console.error('Error generating llms.txt:', error);

    // If cache exists, return it even if expired
    if (llmsCache) {
      return new Response(llmsCache, {
        headers: {
          'Content-Type': 'text/plain; charset=utf-8',
          'Cache-Control': 'public, max-age=3600, s-maxage=3600',
        },
      });
    }

    // Fallback to basic content if no cache exists
    return new Response('# Fystack\n\nError loading content. Please try again later.', {
      status: 500,
      headers: {
        'Content-Type': 'text/plain; charset=utf-8',
      },
    });
  }
}
