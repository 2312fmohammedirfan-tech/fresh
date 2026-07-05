const auth = {
  mode: 'login', // 'login' or 'signup'
  
  init() {
    this.createParticles();
    this.renderForm();
    
    // Add ripple effect to primary button
    const btn = document.getElementById('submit-btn');
    btn.addEventListener('click', function(e) {
      const x = e.clientX - e.target.getBoundingClientRect().left;
      const y = e.clientY - e.target.getBoundingClientRect().top;
      const ripple = document.createElement('span');
      ripple.className = 'ripple';
      ripple.style.left = `${x}px`;
      ripple.style.top = `${y}px`;
      this.appendChild(ripple);
      setTimeout(() => ripple.remove(), 600);
    });
  },

  createParticles() {
    const container = document.getElementById('particles');
    for (let i = 0; i < 20; i++) {
      const p = document.createElement('div');
      p.className = 'particle';
      const size = Math.random() * 8 + 2;
      p.style.width = `${size}px`;
      p.style.height = `${size}px`;
      p.style.left = `${Math.random() * 100}%`;
      p.style.animationDuration = `${Math.random() * 5 + 5}s`;
      p.style.animationDelay = `${Math.random() * 5}s`;
      container.appendChild(p);
    }
  },

  toggleMode() {
    this.mode = this.mode === 'login' ? 'signup' : 'login';
    this.renderForm();
  },

  renderForm() {
    const container = document.getElementById('form-container');
    const title = document.getElementById('form-title');
    const subtitle = document.getElementById('form-subtitle');
    const btnText = document.getElementById('btn-text');
    const toggleText = document.getElementById('toggle-text');
    const toggleLink = document.getElementById('toggle-link');
    document.getElementById('general-error').style.display = 'none';

    if (this.mode === 'login') {
      title.textContent = 'Welcome Back 👋';
      subtitle.textContent = 'Sign in to your FreshFruits account';
      btnText.textContent = 'Login';
      toggleText.textContent = 'No account?';
      toggleLink.textContent = 'Sign Up';

      container.innerHTML = `
        <div class="input-group">
          <input type="email" id="email" class="form-input" placeholder=" " required />
          <span class="input-icon">✉️</span>
          <label class="floating-label">Email Address</label>
          <div class="error-text" id="err-email"></div>
        </div>
        <div class="input-group">
          <input type="password" id="password" class="form-input" placeholder=" " required />
          <span class="input-icon">🔒</span>
          <label class="floating-label">Password</label>
          <button type="button" class="toggle-password" onclick="auth.togglePassword('password', this)">👁️</button>
          <div class="error-text" id="err-password"></div>
        </div>
        <div class="options-row">
          <label class="checkbox-group">
            <input type="checkbox" id="remember" /> Remember Me
          </label>
          <a href="#" class="forgot-link">Forgot Password?</a>
        </div>
      `;
    } else {
      title.textContent = 'Join Us 🌱';
      subtitle.textContent = 'Create your account and get 10% off!';
      btnText.textContent = 'Create Account';
      toggleText.textContent = 'Already have an account?';
      toggleLink.textContent = 'Login';

      container.innerHTML = `
        <div style="display:flex; gap:15px">
          <div class="input-group" style="flex:1">
            <input type="text" id="fname" class="form-input" placeholder=" " required />
            <span class="input-icon">👤</span>
            <label class="floating-label">First Name</label>
            <div class="error-text" id="err-fname"></div>
          </div>
          <div class="input-group" style="flex:1">
            <input type="text" id="lname" class="form-input" placeholder=" " required />
            <span class="input-icon">👤</span>
            <label class="floating-label">Last Name</label>
            <div class="error-text" id="err-lname"></div>
          </div>
        </div>
        <div class="input-group">
          <input type="email" id="email" class="form-input" placeholder=" " required />
          <span class="input-icon">✉️</span>
          <label class="floating-label">Email Address</label>
          <div class="error-text" id="err-email"></div>
        </div>
        <div class="input-group">
          <input type="password" id="password" class="form-input" placeholder=" " required />
          <span class="input-icon">🔒</span>
          <label class="floating-label">Password (Min 6 chars)</label>
          <button type="button" class="toggle-password" onclick="auth.togglePassword('password', this)">👁️</button>
          <div class="error-text" id="err-password"></div>
        </div>
      `;
    }

    // Add Enter key listener
    container.querySelectorAll('input').forEach(input => {
      input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') this.submit();
      });
      // Clear error on input
      input.addEventListener('input', () => {
        input.classList.remove('invalid');
        const errId = 'err-' + input.id;
        if(document.getElementById(errId)) {
           document.getElementById(errId).style.display = 'none';
        }
      });
    });
  },

  togglePassword(inputId, btn) {
    const input = document.getElementById(inputId);
    if (input.type === 'password') {
      input.type = 'text';
      btn.style.color = 'var(--primary)';
    } else {
      input.type = 'password';
      btn.style.color = 'var(--text-muted)';
    }
  },

  showError(fieldId, msg) {
    const input = document.getElementById(fieldId);
    const errObj = document.getElementById('err-' + fieldId);
    if (input) input.classList.add('invalid');
    if (errObj) {
      errObj.textContent = msg;
      errObj.style.display = 'block';
    }
  },

  setLoading(isLoading) {
    const btnText = document.getElementById('btn-text');
    const spinner = document.getElementById('btn-spinner');
    const btn = document.getElementById('submit-btn');
    if (isLoading) {
      btnText.style.display = 'none';
      spinner.style.display = 'block';
      btn.disabled = true;
    } else {
      btnText.style.display = 'block';
      spinner.style.display = 'none';
      btn.disabled = false;
    }
  },

  async submit() {
    // Clear previous errors
    document.getElementById('general-error').style.display = 'none';
    document.querySelectorAll('.error-text').forEach(e => e.style.display = 'none');
    document.querySelectorAll('.form-input').forEach(e => e.classList.remove('invalid'));

    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    let hasError = false;

    // Validate
    if (!email) { this.showError('email', 'Email is required'); hasError = true; }
    else if (!/\S+@\S+\.\S+/.test(email)) { this.showError('email', 'Invalid email format'); hasError = true; }
    
    if (!password) { this.showError('password', 'Password is required'); hasError = true; }
    else if (this.mode === 'signup' && password.length < 6) { this.showError('password', 'Min 6 characters required'); hasError = true; }

    let fname, lname;
    if (this.mode === 'signup') {
      fname = document.getElementById('fname').value.trim();
      lname = document.getElementById('lname').value.trim();
      if (!fname) { this.showError('fname', 'Required'); hasError = true; }
      if (!lname) { this.showError('lname', 'Required'); hasError = true; }
    }

    if (hasError) return;

    this.setLoading(true);

    try {
      let url = 'http://localhost:5000/api/users/login';
      let body = { email, password };

      if (this.mode === 'signup') {
        url = 'http://localhost:5000/api/users/register';
        body = { name: fname + ' ' + lname, email, password };
      }

      const res = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || 'Authentication failed');
      }

      // Success
      const btn = document.getElementById('submit-btn');
      btn.style.background = 'var(--success)';
      document.getElementById('btn-text').textContent = 'Success!';
      document.getElementById('btn-text').style.display = 'block';
      document.getElementById('btn-spinner').style.display = 'none';
      
      localStorage.setItem('token', data.token);
      localStorage.setItem('user', JSON.stringify(data));
      
      setTimeout(() => {
        window.location.href = 'index.html'; // Redirect to home
      }, 1000);

    } catch (err) {
      this.setLoading(false);
      const genErr = document.getElementById('general-error');
      genErr.textContent = err.message;
      genErr.style.display = 'block';
    }
  },

  toast(msg, type='info') {
    alert(msg); // simple fallback, can implement better toast if needed
  }
};

window.onload = () => auth.init();
