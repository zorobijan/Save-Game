const db = require('./connection');
const { User, Product, Category } = require('../models');

db.once('open', async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
    { name: 'Adventure' },
    { name: 'Racing' },
    { name: 'FPS' },
    { name: 'RPG' },
    { name: 'Survival Horror' }
  ]);

  console.log('categories seeded');

  await Product.deleteMany();
  const products = await Product.insertMany(
    [
      {
        "currency": "USD",
        "currentLowestPrice": 20.84,
        "name": "Minecraft",
        image: 'minecraft.jpg',
        category: categories[4]._id,
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
        image: 'god-of-war.jpg',
        category: categories[0]._id,
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
        image: 'metal-gear-solid.jpg',
        category: categories[0]._id,
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
        image: 'call-of-duty.jpg',
        category: categories[2]._id,
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
        image: 'need-for-speed.jpg',
        category: categories[1]._id,
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
        image: 'medal-of-honor.jpg',
        category: categories[2]._id,
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
        image: 'grand-theft-auto.jpg',
        category: categories[0]._id,
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
        image: 'final-fantasy.jpg',
        category: categories[3]._id,
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
        image: 'resident-evil-4.jpg',
        category: categories[4]._id,
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
        image: 'overwatch.jpg',
        category: categories[2]._id,
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
        image: 'left-4-dead.jpg',
        category: categories[4]._id,
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
      ,

      {
        "currency": "USD",
        "currentLowestPrice": 5.43,
        "name": "BioShock",
        image: 'bioshock.jpg',
        category: categories[0]._id,
        "releaseDate": "2007-08-21",
        "stores": [
          {
            "price": 5.43,
            "seller": "Eneba",
            "url": "https://www.eneba.com/steam-bioshock-steam-key-global"
          },
          {
            "price": 6.54,
            "seller": "GAMIVO",
            "url": "https://www.gamivo.com/product/bioshock"
          },
          {
            "price": 7.06,
            "seller": "Kinguin",
            "url": "https://www.kinguin.net/category/327/bioshock-steam-key"
          },
          {
            "price": 7.06,
            "seller": "G2Play",
            "url": "https://www.g2play.net/category/327/bioshock-steam-key"
          },
          {
            "price": 8.35,
            "seller": "HRK Game",
            "url": "https://www.hrkgame.com/en/randomkeyshop/set_currency/"
          },
        ],
      }
    ]
  )

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

