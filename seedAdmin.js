/**
 * seedAdmin.js — Run this ONCE to create the admin account
 * Usage: node seedAdmin.js
 */

require('dotenv').config();
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const User = require('./models/User');

const ADMIN = {
  name:     'SM Fruits Admin',
  email:    'admin@smfruits.com',
  password: 'Admin@1234',
  role:     'admin',
};

async function seed() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('✅ Connected to MongoDB Atlas');

    const existing = await User.findOne({ email: ADMIN.email });
    if (existing) {
      console.log('ℹ️  Admin already exists:', ADMIN.email);
      process.exit(0);
    }

    await User.create({
      name:     ADMIN.name,
      email:    ADMIN.email,
      password: ADMIN.password,
      role:     ADMIN.role,
    });

    console.log('');
    console.log('🎉 Admin account created!');
    console.log('─────────────────────────────');
    console.log('  Email   :', ADMIN.email);
    console.log('  Password:', ADMIN.password);
    console.log('  Role    :', ADMIN.role);
    console.log('─────────────────────────────');
    console.log('⚠️  Change the password after first login!');
    process.exit(0);
  } catch (err) {
    console.error('❌ Error:', err.message);
    process.exit(1);
  }
}

seed();
