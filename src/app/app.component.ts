import { Component, OnInit, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet, CommonModule],
    template: `
    <div class="app-container">
      <header class="header">
        <div class="container">
          <h1>3D Printer Shop</h1>
          <nav>
            <a href="/">Home</a>
            <a href="/catalog">Catalog</a>
          </nav>
        </div>
      </header>
      
      <main class="main-content">
        <router-outlet />
      </main>
      
      <footer class="footer">
        <div class="container">
          <p>&copy; 2026 JP 3D Printer Shop</p>
        </div>
      </footer>
    </div>
  `,
    styles: [`
    .app-container {
      display: flex;
      flex-direction: column;
      min-height: 100vh;
    }
    
    .header {
      background: #2563eb;
      color: white;
      padding: 1rem 0;
    }
    
    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 1rem;
    }
    
    .main-content {
      flex: 1;
      padding: 2rem 0;
    }
    
    .footer {
      background: #1e293b;
      color: white;
      padding: 1rem 0;
      text-align: center;
    }
    
    nav {
      margin-top: 0.5rem;
    }
    
    nav a {
      color: white;
      margin-right: 1rem;
      text-decoration: none;
    }
  `]
})
export class AppComponent {
    title = 'jp-3d-printer-shop';
}