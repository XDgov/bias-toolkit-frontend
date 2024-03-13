# XD Combating Bias Frontend
Jekyll site for displaying toolkits developed by [xd.gov](https://www.xd.gov/) to combat bias in AI

This site is based on [uswds-sandbox code](https://github.com/uswds/uswds-sandbox).

## Running code locally
After cloning the repo, navigate to the correct folder and install USWDS, Jekyll, and any necessary dependencies using:
```
npm start
```
Then, to run the site locally:
```
npm run serve
```
If all goes well, visit the site at http://localhost:4000.

USWDS assets are in `assets/uswds/fonts` and `assets/uswds/img`.

SASS files are kept in the `/_sass` directory. To watch for changes and recompile the styles, run:
```
npm run watch
```

## Analytics

The file `_includes/head.html` contains script tags for the following analytics tools:
[Digital Analytics Program](https://digital.gov/guides/dap/)
[Google Analytics](https://marketingplatform.google.com/about/analytics/)