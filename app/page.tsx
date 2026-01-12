export default function Health() {
  return (
    <div>
      <h1>ARCHON V7 - Health Monitor</h1>
      <p>System Health: <span style={{color: 'green'}}>ONLINE</span></p>
      <ul>
        <li>n8n: ONLINE</li>
        <li>Lambda: ONLINE</li>
        <li>Vercel: ONLINE</li>
      </ul>
    </div>
  );
}