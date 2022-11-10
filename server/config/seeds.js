const db = require('./connection');
const { User, Product } = require('../models');

db.once('open', async () => {
  // await Category.deleteMany();

  // const categories = await Category.insertMany([
  //   { name: 'Food' },
  //   { name: 'Household Supplies' },
  //   { name: 'Electronics' },
  //   { name: 'Books' },
  //   { name: 'Toys' }
  // ]);

  console.log('categories seeded');

  await Product.deleteMany();
  const products = await Product.insertMany([

    {
      "currency": "USD",
      "currentLowestPrice": 20.84,
      "name": "Minecraft",
      "releaseDate": "2009-05-17",
      "stores": [
        {
          "price": 20.84,
          "seller": "GAMIVO",
          "url": "https://www.gamivo.com/product/minecraft-java-edition"
        },
        {
          "price": 22.19,
          "seller": "CDKeys.com",
          "url": "https://www.cdkeys.com/minecraft-pc-cd-key"
        },
        {
          "price": 23.86,
          "seller": "GAMIVO",
          "url": "https://www.gamivo.com/product/minecraft-java-bedrock-edition-xbox-pc-global-xboxwindows-en-bedrock"
        },
        {
          "price": 23.95,
          "seller": "Kinguin",
          "url": "https://www.kinguin.net/category/5329/minecraft-global-cd-key"
        },
        {
          "price": 23.95,
          "seller": "G2Play",
          "url": "https://www.g2play.net/category/5329/minecraft-global-cd-key"
        },
        {
          "price": 24.57,
          "seller": "Eneba",
          "url": "https://www.eneba.com/other-minecraft-java-bedrock-edition-official-website-key-global"
        },
        {
          "price": 24.99,
          "seller": "G2A",
          "url": "https://www.g2a.com/minecraft-java-edition-minecraft-key-global-i10000068122012"
        },
        {
          "price": 25.03,
          "seller": "Instant Gaming",
          "url": "https://www.instant-gaming.com/en/442-/"
        },
        {
          "price": 25.19,
          "seller": "Eneba",
          "url": "https://www.eneba.com/other-minecraft-official-website-key-global"
        },
        {
          "price": 25.72,
          "seller": "K4G.com",
          "url": "https://k4g.com/product/minecraft-minecraft-global-java-bedrock-edition-cd-key-CFA581CA"
        },
        {
          "price": 26.35,
          "seller": "Kinguin",
          "url": "https://www.kinguin.net/category/127386/minecraft-java-bedrock-edition-for-pc-windows-10-cd-key"
        },
        {
          "price": 26.35,
          "seller": "G2Play",
          "url": "https://www.g2play.net/category/127386/minecraft-java-bedrock-edition-for-pc-windows-10-cd-key"
        },
        {
          "price": 26.95,
          "seller": "Minecraft.net",
          "url": "https://www.minecraft.net/store/minecraft-java-edition"
        },
        {
          "price": 28.06,
          "seller": "K4G.com",
          "url": "https://k4g.com/product/minecraft-java-edition-minecraft-global-cd-key-18E72850"
        },
        {
          "price": 28.26,
          "seller": "HRK Game",
          "url": "https://www.hrkgame.com/en/randomkeyshop/set_currency/"
        },
        {
          "price": 28.72,
          "seller": "Eneba",
          "url": "https://www.eneba.com/other-minecraft-java-bedrock-edition-official-website-key-united-states"
        },
        {
          "price": 28.81,
          "seller": "K4G.com",
          "url": "https://k4g.com/product/minecraft-minecraft-global-cd-key-269E0B00"
        },
        {
          "price": 29.99,
          "seller": "Newegg",
          "url": "https://click.linksynergy.com/deeplink"
        },
        {
          "price": 29.99,
          "seller": "Microsoft Store",
          "url": "https://click.linksynergy.com/deeplink"
        },
        {
          "price": 29.99,
          "seller": "Amazon.com",
          "url": "https://www.amazon.com/gp/product/B09ZY21PM4"
        },
        {
          "price": 30.04,
          "seller": "Eneba",
          "url": "https://www.eneba.com/other-minecraft-java-edition-official-website-key-united-states-2"
        },
        {
          "price": 31.52,
          "seller": "G2A",
          "url": "https://www.g2a.com/minecraft-java-bedrock-edition-pc-microsoft-store-key-global-i10000326476001"
        }
      ],
      // "type": "game"
    }])

  // const products = await Product.insertMany([
  //   {
  //     name: 'Tin of Cookies',
  //     description:
  //       'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
  //     image: 'cookie-tin.jpg',
  //     category: categories[0]._id,
  //     price: 2.99,
  //     quantity: 500
  //   },
  //   {
  //     name: 'Canned Coffee',
  //     description:
  //       'Praesent sed lacinia mauris. Nulla congue nibh magna, at feugiat nunc scelerisque quis. Donec iaculis rutrum vulputate. Suspendisse lectus sem, vulputate ac lectus sed, placerat consequat dui.',
  //     image: 'canned-coffee.jpg',
  //     category: categories[0]._id,
  //     price: 1.99,
  //     quantity: 500
  //   },
  //   {
  //     name: 'Toilet Paper',
  //     category: categories[1]._id,
  //     description:
  //       'Donec volutpat erat erat, sit amet gravida justo sodales in. Phasellus tempus euismod urna. Proin ultrices nisi ut ipsum congue, vitae porttitor libero suscipit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam lacinia a nisi non congue.',
  //     image: 'toilet-paper.jpg',
  //     price: 7.99,
  //     quantity: 20
  //   },
  //   {
  //     name: 'Handmade Soap',
  //     category: categories[1]._id,
  //     description:
  //       'Praesent placerat, odio vel euismod venenatis, lectus arcu laoreet felis, et fringilla sapien turpis vestibulum nisl.',
  //     image: 'soap.jpg',
  //     price: 3.99,
  //     quantity: 50
  //   },
  //   {
  //     name: 'Set of Wooden Spoons',
  //     category: categories[1]._id,
  //     description:
  //       'Vivamus ut turpis in purus pretium mollis. Donec turpis odio, semper vel interdum ut, vulputate at ex. Duis dignissim nisi vel tortor imperdiet finibus. Aenean aliquam sagittis rutrum.',
  //     image: 'wooden-spoons.jpg',
  //     price: 14.99,
  //     quantity: 100
  //   },
  //   {
  //     name: 'Camera',
  //     category: categories[2]._id,
  //     description:
  //       'Vestibulum risus metus, luctus non tortor quis, tincidunt consectetur ex. Nullam vitae lobortis ligula, ut sagittis massa. Curabitur consectetur, tellus at pulvinar venenatis, erat augue cursus erat, eu ullamcorper eros lectus ultrices ipsum. Integer rutrum, augue vitae auctor venenatis, turpis turpis elementum orci, at sagittis risus mi a leo.',
  //     image: 'camera.jpg',
  //     price: 399.99,
  //     quantity: 30
  //   },
  //   {
  //     name: 'Tablet',
  //     category: categories[2]._id,
  //     description:
  //       'In sodales, ipsum quis ultricies porttitor, tellus urna aliquam arcu, eget venenatis purus ligula ut nisi. Fusce ut felis dolor. Mauris justo ante, aliquet non tempus in, tempus ac lorem. Aliquam lacinia dolor eu sem eleifend ultrices. Etiam mattis metus metus. Sed ligula dui, placerat non turpis vitae, suscipit volutpat elit. Phasellus sagittis, diam elementum suscipit fringilla, libero mauris scelerisque ex, ac interdum diam erat non sapien.',
  //     image: 'tablet.jpg',
  //     price: 199.99,
  //     quantity: 30
  //   },
  //   {
  //     name: 'Tales at Bedtime',
  //     category: categories[3]._id,
  //     description:
  //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ornare diam quis eleifend rutrum. Aliquam nulla est, volutpat non enim nec, pharetra gravida augue. Donec vitae dictum neque. Pellentesque arcu lorem, fringilla non ligula ac, tristique bibendum erat. Ut a semper nibh. Quisque a mi et mi tempor ultricies. Maecenas eu ipsum eu enim hendrerit accumsan at euismod urna.',
  //     image: 'bedtime-book.jpg',
  //     price: 9.99,
  //     quantity: 100
  //   },
  //   {
  //     name: 'Spinning Top',
  //     category: categories[4]._id,
  //     description: 'Ut vulputate hendrerit nibh, a placerat elit cursus interdum.',
  //     image: 'spinning-top.jpg',
  //     price: 1.99,
  //     quantity: 1000
  //   },
  //   {
  //     name: 'Set of Plastic Horses',
  //     category: categories[4]._id,
  //     description:
  //       'Sed a mauris condimentum, elementum enim in, rhoncus dui. Phasellus lobortis leo odio, sit amet pharetra turpis porta quis.',
  //     image: 'plastic-horses.jpg',
  //     price: 2.99,
  //     quantity: 1000
  //   },
  //   {
  //     name: 'Teddy Bear',
  //     category: categories[4]._id,
  //     description:
  //       'Vestibulum et erat finibus erat suscipit vulputate sed vitae dui. Ut laoreet tellus sit amet justo bibendum ultrices. Donec vitae felis vestibulum, congue augue eu, finibus turpis.',
  //     image: 'teddy-bear.jpg',
  //     price: 7.99,
  //     quantity: 100
  //   },
  //   {
  //     name: 'Alphabet Blocks',
  //     category: categories[4]._id,
  //     description:
  //       'Morbi consectetur viverra urna, eu fringilla turpis faucibus sit amet. Suspendisse potenti. Donec at dui ac sapien eleifend hendrerit vel sit amet lectus.',
  //     image: 'alphabet-blocks.jpg',
  //     price: 9.99,
  //     quantity: 600
  //   }
  // ]);

  console.log('products seeded');

  await User.deleteMany();

  await User.create({
    firstName: 'Pamela',
    lastName: 'Washington',
    email: 'pamela@testmail.com',
    password: 'password12345',
    orders: [
      {
        products: [products[0]._id]
      }
    ]
  });

  await User.create({
    firstName: 'Elijah',
    lastName: 'Holt',
    email: 'eholt@testmail.com',
    password: 'password12345'
  });

  console.log('users seeded');

  process.exit();
});

