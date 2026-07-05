const API_URL = 'http://localhost:5000/api';

const api = {
  getAuthHeader() {
    const user = JSON.parse(localStorage.getItem('ff_user') || 'null');
    if (user && user.token) {
      return { 'Authorization': `Bearer ${user.token}` };
    }
    return {};
  },

  headers() {
    const token = localStorage.getItem('token');
    const base = { 'Content-Type': 'application/json' };
    if (token) base['Authorization'] = `Bearer ${token}`;
    return base;
  },

  async getProfile() {
    const token = localStorage.getItem('token');
    if (!token) throw new Error('No token');
    const res = await fetch(`${API_URL}/auth/profile`, {
      headers: { 'Authorization': `Bearer ${token}` }
    });
    if (!res.ok) throw new Error('Failed to fetch profile');
    return res.json();
  },

  async getProducts() {
    try {
      const res = await fetch(`${API_URL}/products`);
      if (!res.ok) throw new Error('Network error');
      return await res.json();
    } catch (err) {
      console.error(err);
      return [];
    }
  },

  async login(email, password) {
    const res = await fetch(`${API_URL}/users/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    });
    if (!res.ok) throw new Error('Login failed');
    return await res.json();
  },

  async register(name, email, password) {
    const res = await fetch(`${API_URL}/users`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, password })
    });
    if (!res.ok) throw new Error('Registration failed');
    return await res.json();
  },

  async placeOrder(orderData) {
    const res = await fetch(`${API_URL}/orders`, {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json',
        ...this.getAuthHeader()
      },
      body: JSON.stringify(orderData)
    });
    if (!res.ok) throw new Error('Order failed');
    return await res.json();
  },

  async createRazorpayOrder(amount) {
    const res = await fetch(`${API_URL}/payments/razorpay`, {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json',
        ...this.getAuthHeader()
      },
      body: JSON.stringify({ amount })
    });
    if (!res.ok) throw new Error('Razorpay order creation failed');
    return await res.json();
  },

  async verifyRazorpayPayment(paymentData) {
    const res = await fetch(`${API_URL}/payments/razorpay/verify`, {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json',
        ...this.getAuthHeader()
      },
      body: JSON.stringify(paymentData)
    });
    if (!res.ok) throw new Error('Payment verification failed');
    return await res.json();
  }
};
