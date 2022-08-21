# Portfolio of Maria Vanessa Salim
The hosted app here: https://fd-landingpage-vane.netlify.app/

## Set up
```
# Install Dependencies
$ yarn install

# Serve with hot reload at localhost:3000
$ yarn run start

# Build for production and launch server
$ npm run build
```

## 🎨 Color Codes
Color naming references: https://www.color-name.com/

| Color             | Hex                                                                |
| ------------------| --------- |
| White             | `#fff` |
| Amaranth          | `#DC294F` |
| Pale Pink         | `#FDDAE0` |
| Light Silver      | `#D8D8D8` |
| Quartz            | `#4A4A4A` |
| Spanish Gray      | `#979797` |
| Chinese Silver    | `#CACACA` |
| Chinese Black     | `#161616` |

## Stacks
- This website originally designed by [Female Daily Network's FE](https://ibb.co/nByzdVt) 
- The first iteration of this app build with React.js (pure) leveraging [styled-components](https://github.com/styled-components/styled-components)
- Deloyed with Netlify

## Disclaimer
My answer for the test obviously still far from perfect. Unfortunately, I didn't pass all the plus points, and you might find some warnings and error in the console, because:
- `CORS 429`, so I use an alternative
- Some extensions, such as adblocker might cause some errors. Because it'll block the ads from my embedded youtube

Also, all the `console.log()` I commented there are necessary, because: it shows that the API call is working. Other comments and unused variables are also necessary because it shows my almost-true work.

## Need to be Improve
- Fix [CORS 429](https://stackoverflow.com/questions/43871637/no-access-control-allow-origin-header-is-present-on-the-requested-resource-whe)
- Potential security vulnerabilities in project's dependencies
- Alternative Iframe to embed Youtube
- Fix [carousel](https://sag1v.github.io/react-elastic-carousel/styling)'s UI bug
- Unit testing
- API with redux
- Implement git submodule
- Search bar (Not only UI)
- Deployment with Heroku
