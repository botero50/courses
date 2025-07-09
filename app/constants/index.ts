// Application constants and configuration

export const APP_CONFIG = {
  name: 'Ecommerce Store',
  description: 'Modern ecommerce platform with admin dashboard',
  version: '1.0.0',
  url: process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000',
} as const;

export const API_ENDPOINTS = {
  auth: {
    signin: '/api/auth/signin',
    signout: '/api/auth/signout',
    callback: '/api/auth/callback',
  },
  products: '/api/products',
  orders: '/api/orders',
  users: '/api/users',
  admin: '/api/admin',
  stripe: '/api/stripe',
  upload: '/api/upload',
  email: '/api/email',
} as const;

export const ORDER_STATUS = {
  PENDING: 'pending',
  PROCESSING: 'processing',
  SHIPPED: 'shipped',
  DELIVERED: 'delivered',
  CANCELLED: 'cancelled',
} as const;

export const PAYMENT_STATUS = {
  PENDING: 'pending',
  PAID: 'paid',
  FAILED: 'failed',
  REFUNDED: 'refunded',
} as const;

export const USER_ROLES = {
  CUSTOMER: 'customer',
  ADMIN: 'admin',
} as const;

export const PAGINATION = {
  DEFAULT_PAGE_SIZE: 12,
  MAX_PAGE_SIZE: 100,
} as const;

export const FILE_UPLOADS = {
  MAX_SIZE: 5 * 1024 * 1024, // 5MB
  ALLOWED_TYPES: ['image/jpeg', 'image/png', 'image/webp'],
} as const;

export const CURRENCY = {
  DEFAULT: 'USD',
  SYMBOL: '$',
} as const; 