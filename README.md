<h1>🪟 React Modal Component</h1>

<p>A simple and reusable modal component for React applications. This modal is ideal for confirmation messages or basic alerts like <strong>"Employee Created!"</strong>.</p>

<hr>

<h2>🚀 Installation</h2>

<pre><code>npm install your-modal-package-name
</code></pre>
<p><em>Replace <code>modal-component-iana</code> with your actual package name if published, or install locally using a relative path.</em></p>

<hr>

<h2>🧩 Usage</h2>

<pre><code>import React, { useState } from 'react';
import Modal from 'modal-component-iana'; 

function App() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    &lt;div&gt;
      &lt;button onClick={() =&gt; setModalOpen(true)}&gt;Show Modal&lt;/button&gt;
      {modalOpen && &lt;Modal setModalOpen={setModalOpen} /&gt;}
    &lt;/div&gt;
  );
}
</code></pre>

<hr>

<h2>📦 Component API</h2>

<table>
  <thead>
    <tr>
      <th>Prop</th>
      <th>Type</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>setModalOpen</code></td>
      <td>Function</td>
      <td>Function to control modal visibility. Expects a function like <code>setState</code> from <code>useState</code>.</td>
    </tr>
  </tbody>
</table>

<hr>

<h2>🎨 Styling</h2>

<p>Make sure to include the <code>modal.css</code> file in your project to get the default styling:</p>

<pre><code>/* modal.css */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.5);
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal {
  background: white;
  padding: 2rem;
  border-radius: 8px;
  text-align: center;
}
</code></pre>

<p>Feel free to customize the styles to match your project.</p>

<hr>
