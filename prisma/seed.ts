import { PrismaClient } from '@prisma/client';
import { hash } from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Starting database seeding...');

  // Clear existing data
  await prisma.wishlistItem.deleteMany();
  await prisma.cartItem.deleteMany();
  await prisma.review.deleteMany();
  await prisma.orderItem.deleteMany();
  await prisma.order.deleteMany();
  await prisma.product.deleteMany();
  await prisma.category.deleteMany();
  await prisma.brand.deleteMany();
  await prisma.address.deleteMany();
  await prisma.user.deleteMany();

  console.log('🗑️  Cleared existing data');

  // Create brands
  const brands = await Promise.all([
    prisma.brand.create({
      data: {
        name: 'Nike',
        description: 'Just Do It',
        logo: '/images/brand-nike.png',
        slug: 'nike',
      },
    }),
    prisma.brand.create({
      data: {
        name: 'Adidas',
        description: 'Impossible Is Nothing',
        logo: '/images/brand-adidas.png',
        slug: 'adidas',
      },
    }),
    prisma.brand.create({
      data: {
        name: 'Levi\'s',
        description: 'Quality Never Goes Out of Style',
        logo: '/images/brand-levis.png',
        slug: 'levis',
      },
    }),
    prisma.brand.create({
      data: {
        name: 'Uniqlo',
        description: 'Made for All',
        logo: '/images/brand-uniqlo.png',
        slug: 'uniqlo',
      },
    }),
  ]);

  console.log('🏷️  Created brands');

  // Create categories
  const categories = await Promise.all([
    prisma.category.create({
      data: {
        name: 'T-Shirts',
        description: 'Comfortable and stylish t-shirts for everyday wear',
        image: '/images/c-tshirts.jpg',
        slug: 't-shirts',
      },
    }),
    prisma.category.create({
      data: {
        name: 'Jeans',
        description: 'Classic denim jeans for a timeless look',
        image: '/images/c-jeans.jpg',
        slug: 'jeans',
      },
    }),
    prisma.category.create({
      data: {
        name: 'Shoes',
        description: 'Trendy footwear for all occasions',
        image: '/images/c-shoes.jpg',
        slug: 'shoes',
      },
    }),
  ]);

  console.log('📂 Created categories');

  // Create users
  const hashedPassword = await hash('password123', 12);
  
  const users = await Promise.all([
    prisma.user.create({
      data: {
        name: 'John Doe',
        email: 'john@example.com',
        password: hashedPassword,
        role: 'CUSTOMER',
      },
    }),
    prisma.user.create({
      data: {
        name: 'Jane Smith',
        email: 'jane@example.com',
        password: hashedPassword,
        role: 'CUSTOMER',
      },
    }),
    prisma.user.create({
      data: {
        name: 'Admin User',
        email: 'admin@example.com',
        password: hashedPassword,
        role: 'ADMIN',
      },
    }),
  ]);

  console.log('👥 Created users');

  // Create products for T-Shirts category
  const tshirtProducts = await Promise.all([
    prisma.product.create({
      data: {
        name: 'Classic Cotton T-Shirt',
        description: 'A comfortable and breathable cotton t-shirt perfect for everyday wear. Features a classic fit and soft fabric that gets better with each wash.',
        price: 29.99,
        comparePrice: 39.99,
        images: ['/images/p11-1.jpg', '/images/p11-2.jpg'],
        sku: 'TSH-001',
        stock: 50,
        isActive: true,
        isFeatured: true,
        slug: 'classic-cotton-tshirt',
        categoryId: categories[0].id, // T-Shirts
        brandId: brands[3].id, // Uniqlo
      },
    }),
    prisma.product.create({
      data: {
        name: 'Premium Graphic T-Shirt',
        description: 'High-quality graphic t-shirt with a unique design. Made from premium cotton blend for ultimate comfort and style.',
        price: 45.99,
        comparePrice: 59.99,
        images: ['/images/p12-1.jpg', '/images/p12-2.jpg'],
        sku: 'TSH-002',
        stock: 30,
        isActive: true,
        isFeatured: false,
        slug: 'premium-graphic-tshirt',
        categoryId: categories[0].id, // T-Shirts
        brandId: brands[0].id, // Nike
      },
    }),
  ]);

  // Create products for Jeans category
  const jeansProducts = await Promise.all([
    prisma.product.create({
      data: {
        name: 'Classic Blue Jeans',
        description: 'Timeless blue jeans with a perfect fit. Made from premium denim that offers both comfort and durability for everyday wear.',
        price: 89.99,
        comparePrice: 119.99,
        images: ['/images/p21-1.jpg', '/images/p21-2.jpg'],
        sku: 'JNS-001',
        stock: 25,
        isActive: true,
        isFeatured: true,
        slug: 'classic-blue-jeans',
        categoryId: categories[1].id, // Jeans
        brandId: brands[2].id, // Levi's
      },
    }),
    prisma.product.create({
      data: {
        name: 'Slim Fit Black Jeans',
        description: 'Modern slim fit black jeans perfect for a sleek, contemporary look. Comfortable stretch denim with a sophisticated finish.',
        price: 79.99,
        comparePrice: 99.99,
        images: ['/images/p22-1.jpg', '/images/p22-2.jpg'],
        sku: 'JNS-002',
        stock: 20,
        isActive: true,
        isFeatured: false,
        slug: 'slim-fit-black-jeans',
        categoryId: categories[1].id, // Jeans
        brandId: brands[1].id, // Adidas
      },
    }),
  ]);

  // Create products for Shoes category
  const shoesProducts = await Promise.all([
    prisma.product.create({
      data: {
        name: 'Running Sneakers',
        description: 'High-performance running sneakers designed for comfort and speed. Features advanced cushioning technology and breathable mesh upper.',
        price: 129.99,
        comparePrice: 159.99,
        images: ['/images/p31-1.jpg', '/images/p31-2.jpg'],
        sku: 'SHS-001',
        stock: 15,
        isActive: true,
        isFeatured: true,
        slug: 'running-sneakers',
        categoryId: categories[2].id, // Shoes
        brandId: brands[0].id, // Nike
      },
    }),
    prisma.product.create({
      data: {
        name: 'Casual Lifestyle Shoes',
        description: 'Versatile casual shoes perfect for everyday activities. Comfortable design with stylish aesthetics for any casual occasion.',
        price: 89.99,
        comparePrice: 109.99,
        images: ['/images/p32-1.jpg', '/images/p32-2.jpg'],
        sku: 'SHS-002',
        stock: 18,
        isActive: true,
        isFeatured: false,
        slug: 'casual-lifestyle-shoes',
        categoryId: categories[2].id, // Shoes
        brandId: brands[1].id, // Adidas
      },
    }),
  ]);

  console.log('👕 Created products');

  // Create some sample reviews
  const reviews = await Promise.all([
    prisma.review.create({
      data: {
        productId: tshirtProducts[0].id,
        userId: users[0].id,
        rating: 5,
        comment: 'Great quality t-shirt! Very comfortable and fits perfectly.',
        isVerified: true,
      },
    }),
    prisma.review.create({
      data: {
        productId: tshirtProducts[0].id,
        userId: users[1].id,
        rating: 4,
        comment: 'Good t-shirt, but runs a bit large. Would recommend sizing down.',
        isVerified: true,
      },
    }),
    prisma.review.create({
      data: {
        productId: jeansProducts[0].id,
        userId: users[0].id,
        rating: 5,
        comment: 'Perfect fit! These jeans are exactly what I was looking for.',
        isVerified: true,
      },
    }),
    prisma.review.create({
      data: {
        productId: shoesProducts[0].id,
        userId: users[1].id,
        rating: 5,
        comment: 'Amazing running shoes! Very comfortable and lightweight.',
        isVerified: true,
      },
    }),
  ]);

  console.log('⭐ Created reviews');

  // Create sample addresses
  const addresses = await Promise.all([
    prisma.address.create({
      data: {
        userId: users[0].id,
        type: 'BOTH',
        firstName: 'John',
        lastName: 'Doe',
        address1: '123 Main Street',
        city: 'New York',
        state: 'NY',
        postalCode: '10001',
        country: 'USA',
        phone: '+1-555-0123',
        isDefault: true,
      },
    }),
    prisma.address.create({
      data: {
        userId: users[1].id,
        type: 'BOTH',
        firstName: 'Jane',
        lastName: 'Smith',
        address1: '456 Oak Avenue',
        city: 'Los Angeles',
        state: 'CA',
        postalCode: '90210',
        country: 'USA',
        phone: '+1-555-0456',
        isDefault: true,
      },
    }),
  ]);

  console.log('📍 Created addresses');

  // Create sample cart items
  const cartItems = await Promise.all([
    prisma.cartItem.create({
      data: {
        userId: users[0].id,
        productId: tshirtProducts[0].id,
        quantity: 2,
      },
    }),
    prisma.cartItem.create({
      data: {
        userId: users[0].id,
        productId: jeansProducts[0].id,
        quantity: 1,
      },
    }),
  ]);

  console.log('🛒 Created cart items');

  // Create sample wishlist items
  const wishlistItems = await Promise.all([
    prisma.wishlistItem.create({
      data: {
        userId: users[1].id,
        productId: shoesProducts[0].id,
      },
    }),
    prisma.wishlistItem.create({
      data: {
        userId: users[1].id,
        productId: tshirtProducts[1].id,
      },
    }),
  ]);

  console.log('❤️  Created wishlist items');

  console.log('✅ Database seeding completed successfully!');
  console.log('\n📊 Summary:');
  console.log(`- ${brands.length} brands created`);
  console.log(`- ${categories.length} categories created`);
  console.log(`- ${users.length} users created`);
  console.log(`- ${tshirtProducts.length + jeansProducts.length + shoesProducts.length} products created`);
  console.log(`- ${reviews.length} reviews created`);
  console.log(`- ${addresses.length} addresses created`);
  console.log(`- ${cartItems.length} cart items created`);
  console.log(`- ${wishlistItems.length} wishlist items created`);
}

main()
  .catch((e) => {
    console.error('❌ Error during seeding:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  }); 