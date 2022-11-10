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
  const products = await Product.insertMany(
    [
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
          }
        ],
      }
      ,

      {
        "currency": "USD",
        "currentLowestPrice": 25.64,
        "name": "God of War",
        "releaseDate": "2022-01-14",
        "stores": [
          {
            "price": 25.64,
            "seller": "Gamesforplay",
            "url": "https://gamesforplay.com/god-of-war"
          },
          {
            "price": 28.27,
            "seller": "GAMIVO",
            "url": "https://www.gamivo.com/product/god-of-war-steam"
          },
          {
            "price": 28.47,
            "seller": "Instant Gaming",
            "url": "https://www.instant-gaming.com/en/7325-/"
          },
          {
            "price": 29.97,
            "seller": "Kinguin",
            "url": "https://www.kinguin.net/category/108174/god-of-war-steam-cd-key"
          },
          {
            "price": 29.97,
            "seller": "G2Play",
            "url": "https://www.g2play.net/category/108174/god-of-war-steam-cd-key"
          }
        ],
      }
      ,

      {
        "currency": "USD",
        "currentLowestPrice": 9.99,
        "name": "METAL GEAR SOLID",
        "releaseDate": "2000-09-25",
        "stores": [
          {
            "price": 9.99,
            "seller": "Gog.com",
            "url": "https://www.gog.com/game/metal_gear_solid"
          }
        ],
      }
      ,

      {
        "currency": "USD",
        "currentLowestPrice": 19.99,
        "name": "Call of Duty",
        "releaseDate": "2003-10-29",
        "stores": [
          {
            "price": 19.99,
            "seller": "Steam",
            "url": "https://store.steampowered.com/app/2620/"
          },
          {
            "price": 29.99,
            "seller": "Steam",
            "url": "https://store.steampowered.com/sub/222/"
          },
          {
            "price": 133.26,
            "seller": "Eneba",
            "url": "https://www.eneba.com/steam-call-of-duty-steam-key-global"
          },
          {
            "price": 842.25,
            "seller": "GAMIVO",
            "url": "https://www.gamivo.com/product/call-of-duty-warchest-steam-gift"
          },
          {
            "price": 853.82,
            "seller": "Steam",
            "url": "https://store.steampowered.com/bundle/6451/"
          }
        ],
      }
      ,

      {
        "currency": "USD",
        "currentLowestPrice": 19.99,
        "name": "Need for Speed",
        "releaseDate": "2016-03-15",
        "stores": [
          {
            "price": 19.99,
            "seller": "Ea.com",
            "url": "https://www.ea.com/en-us/games/need-for-speed/need-for-speed"
          },
          {
            "price": 29.99,
            "seller": "Ea.com",
            "url": "https://www.ea.com/en-us/games/need-for-speed/need-for-speed"
          },
          {
            "price": 29.99,
            "seller": "Steam",
            "url": "https://store.steampowered.com/app/1262540/"
          },
          {
            "price": 30.07,
            "seller": "Kinguin",
            "url": "https://www.kinguin.net/category/25181/need-for-speed-origin-cd-key"
          },
          {
            "price": 30.07,
            "seller": "G2Play",
            "url": "https://www.g2play.net/category/25181/need-for-speed-origin-cd-key"
          }
        ],
      }
      ,

      {
        "currency": "USD",
        "currentLowestPrice": 7.45,
        "name": "Medal of Honor",
        "releaseDate": "2010-10-13",
        "stores": [
          {
            "price": 7.45,
            "seller": "G2A",
            "url": "https://www.g2a.com/medal-of-honor-origin-key-global-i10000043401005"
          },
          {
            "price": 7.83,
            "seller": "GAMIVO",
            "url": "https://www.gamivo.com/product/medal-of-honor"
          },
          {
            "price": 9.82,
            "seller": "Eneba",
            "url": "https://www.eneba.com/origin-medal-of-honor-standard-edition-origin-key-global"
          },
          {
            "price": 9.91,
            "seller": "Kinguin",
            "url": "https://www.kinguin.net/category/1001/medal-of-honor-2010-origin-key"
          },
          {
            "price": 9.91,
            "seller": "G2Play",
            "url": "https://www.g2play.net/category/1001/medal-of-honor-2010-origin-key"
          }
        ],
      }
      ,

      {
        "currency": "USD",
        "currentLowestPrice": 99.08,
        "name": "Grand Theft Auto",
        "releaseDate": "1998-06-30",
        "stores": [
          {
            "price": 99.08,
            "seller": "Eneba",
            "url": "https://www.eneba.com/steam-grand-theft-auto-complete-pack-2010-steam-key-global"
          },
          {
            "price": 105.83,
            "seller": "GAMIVO",
            "url": "https://www.gamivo.com/product/grand-theft-auto-complete-pack-extended-row"
          },
          {
            "price": 107.64,
            "seller": "Kinguin",
            "url": "https://www.kinguin.net/category/17938/grand-theft-auto-complete-bundle-including-gta-1-2-row-steam-cd-key"
          },
          {
            "price": 107.64,
            "seller": "G2Play",
            "url": "https://www.g2play.net/category/17938/grand-theft-auto-complete-bundle-including-gta-1-2-row-steam-cd-key"
          },
          {
            "price": 288.82,
            "seller": "Kinguin",
            "url": "https://www.kinguin.net/category/43052/grand-theft-auto-complete-bundle-including-gta-1-2-row-steam-gift"
          }
        ],
      }
      ,

      {
        "currency": "USD",
        "currentLowestPrice": 10.07,
        "name": "FINAL FANTASY",
        "releaseDate": "2021-07-28",
        "stores": [
          {
            "price": 10.07,
            "seller": "Green Man Gaming",
            "url": "https://greenmangaming.sjv.io/c/1406679/1281797/15105"
          },
          {
            "price": 11.35,
            "seller": "Kinguin",
            "url": "https://www.kinguin.net/category/91897/final-fantasy-steam-cd-key"
          },
          {
            "price": 11.35,
            "seller": "G2Play",
            "url": "https://www.g2play.net/category/91897/final-fantasy-steam-cd-key"
          },
          {
            "price": 11.99,
            "seller": "Steam",
            "url": "https://store.steampowered.com/app/1173770/"
          },
          {
            "price": 11.99,
            "seller": "Humble Store",
            "url": "https://www.humblebundle.com/store/final-fantasy"
          }
        ],
      }
      ,

      {
        "currency": "USD",
        "currentLowestPrice": 43.29,
        "name": "Resident Evil 4",
        "releaseDate": "2023-03-24",
        "stores": [
          {
            "price": 43.29,
            "seller": "CDKeys.com",
            "url": "https://www.cdkeys.com/resident-evil-4-pc-steam"
          },
          {
            "price": 49.09,
            "seller": "CDKeys.com",
            "url": "https://www.cdkeys.com/resident-evil-4-deluxe-edition-pc-steam"
          },
          {
            "price": 49.22,
            "seller": "Voidu",
            "url": "https://lt45.net/c/"
          },
          {
            "price": 49.95,
            "seller": "Gamebillet",
            "url": "https://www.gamebillet.com/resident-evil-4-pre-order"
          },
          {
            "price": 49.99,
            "seller": "Indie Gala Store",
            "url": "https://www.indiegala.com/store/game/resident-evil-4/2050650"
          }
        ],
      }
      ,

      {
        "currency": "USD",
        "currentLowestPrice": 107.38,
        "name": "Overwatch",
        "releaseDate": "2016-05-24",
        "stores": [
          {
            "price": 107.38,
            "seller": "Kinguin",
            "url": "https://www.kinguin.net/category/32884/overwatch-us-battle-net-cd-key"
          },
          {
            "price": 107.38,
            "seller": "G2Play",
            "url": "https://www.g2play.net/category/32884/overwatch-us-battle-net-cd-key"
          },
          {
            "price": 110.58,
            "seller": "GAMIVO",
            "url": "https://www.gamivo.com/product/overwatch-standard-edition-na"
          },
          {
            "price": 120.34,
            "seller": "GAMIVO",
            "url": "https://www.gamivo.com/product/overwatch"
          },
          {
            "price": 120.94,
            "seller": "GAMIVO",
            "url": "https://www.gamivo.com/product/overwatch-standard-edition-us"
          }
        ],
      }
      ,

      {
        "currency": "USD",
        "currentLowestPrice": 9.99,
        "name": "Left 4 Dead",
        "releaseDate": "2008-11-17",
        "stores": [
          {
            "price": 9.99,
            "seller": "Steam",
            "url": "https://store.steampowered.com/app/500/"
          },
          {
            "price": 14.98,
            "seller": "Steam",
            "url": "https://store.steampowered.com/bundle/233/"
          },
          {
            "price": 19.5,
            "seller": "GAMIVO",
            "url": "https://www.gamivo.com/product/left-4-dead-goty"
          },
          {
            "price": 20.71,
            "seller": "G2Play",
            "url": "https://www.g2play.net/category/21535/left-4-dead-goty-row-steam-cd-key"
          },
          {
            "price": 20.71,
            "seller": "Kinguin",
            "url": "https://www.kinguin.net/category/21535/left-4-dead-goty-row-steam-cd-key"
          }
        ],
      }
    ]
  )

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

