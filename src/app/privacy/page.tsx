export default function Privacy() {
  return (
    <main style={{ maxWidth: 800, margin: "0 auto", padding: "4rem 1.5rem", color: "#e8e8ee", fontFamily: "system-ui" }}>
      <h1>Privacy Policy</h1>
      <p><em>Last updated: October 17, 2026</em></p>
      <p>XENO ("we", "us") respects your privacy. This policy describes what information we collect when you shop with us and how we use it.</p>
      <h2>Information we collect</h2>
      <ul>
        <li><strong>Order information:</strong> your name, email address, shipping address, and phone number, provided at checkout so we can fulfill your order.</li>
        <li><strong>Payment information:</strong> processed securely by our payment providers (Stripe, PayPal). We never see or store your full card details.</li>
      </ul>
      <h2>How we use it</h2>
      <ul>
        <li>To print, ship, and deliver your order.</li>
        <li>To contact you about your order if there is an issue.</li>
        <li>To respond to your questions.</li>
      </ul>
      <h2>Sharing</h2>
      <p>We share your order details only with the parties needed to fulfill it: our print-on-demand fulfillment partner and the shipping carrier. We do not sell your personal information.</p>
      <h2>Security</h2>
      <p>Checkout is handled over encrypted connections by PCI-compliant payment processors. We take reasonable steps to safeguard the information you provide.</p>
      <h2>Contact</h2>
      <p>Questions about this policy: <a href="mailto:orrie@xenostreetware.ca" style={{ color: "#a78bfa" }}>orrie@xenostreetware.ca</a></p>
      <p><a href="/" style={{ color: "#a78bfa" }}>← Back to the store</a></p>
    </main>
  );
}
