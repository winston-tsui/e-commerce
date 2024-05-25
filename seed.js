const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  const products = [
    {
        name: 'Wireless Earbuds',
        description: 'Experience freedom and convenience with our wireless earbuds. These compact and lightweight earbuds provide crystal-clear sound quality and seamless Bluetooth connectivity. With long-lasting battery life and a comfortable fit, they are perfect for workouts, commuting, or everyday use. Say goodbye to tangled wires and enjoy music on the go.',
        imageUrl: 'https://images.unsplash.com/photo-1612349598839-c4c0c96e4285',
        price: 6999,
      },
      {
        name: 'Gaming Keyboard',
        description: 'Dominate the battlefield with our high-performance gaming keyboard. Featuring customizable RGB lighting, tactile mechanical switches, and anti-ghosting technology, this keyboard offers precision and responsiveness for intense gaming sessions. Its durable construction and ergonomic design ensure comfort and durability during extended use. Elevate your gaming experience with this essential gaming accessory.',
        imageUrl: 'https://images.unsplash.com/photo-1585298725939-5e2641e02eae',
        price: 7999,
      },
      {
        name: 'Digital Camera',
        description: 'Capture life’s precious moments with our advanced digital camera. Equipped with high-resolution sensors and versatile shooting modes, this camera delivers stunning image quality and creative control. Its compact and lightweight design makes it perfect for travel and everyday photography. Preserve memories with this powerful and reliable digital camera.',
        imageUrl: 'https://images.unsplash.com/photo-1584372370767-01148c9b048b',
        price: 17999,
      },
      {
        name: 'Running Shoes',
        description: "Achieve your fitness goals with our premium running shoes. Designed for comfort and performance, these shoes provide excellent support and cushioning for your feet. Whether you're hitting the track or the treadmill, our running shoes will help you go the distance. Step up your workout game with these stylish and functional running shoes.",
        imageUrl: 'https://images.unsplash.com/photo-1612067768330-362b8a3af2f9',
        price: 6999,
      },
      {
        name: 'Coffee Maker',
        description: 'Start your day right with our high-quality coffee maker. Brew delicious coffee in the comfort of your home with ease. With its sleek design and user-friendly features, this coffee maker is perfect for coffee enthusiasts and casual drinkers alike. Enjoy the aroma and flavor of freshly brewed coffee every morning with our reliable coffee maker.',
        imageUrl: 'https://images.unsplash.com/photo-1555650486-cc0eac26fa87',
        price: 3499,
      },
      {
        name: 'Yoga Mat',
        description: "Find your inner peace and balance with our premium yoga mat. Made from eco-friendly materials, this mat provides excellent cushioning and grip for your yoga practice. Whether you're a beginner or an experienced yogi, our yoga mat will support you through every pose and movement. Elevate your yoga experience with our durable and stylish yoga mat.",
        imageUrl: 'https://images.unsplash.com/photo-1589630411143-b5e00e72d65c',
        price: 1999,
      },
    
  ];

  for (const product of products) {
    const createdProduct = await prisma.product.create({ data: product });
    console.log(`Created product with id: ${createdProduct.id}`);
  }
  console.log('Products added to the database');
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

