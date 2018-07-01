# Restaurant Reviews Part I
 required for: Udacity FEND course

## Specification

You have been provided the code for a restaurant reviews website. The code has a lot of issues. It’s barely usable on a desktop browser, much less a mobile device. It also doesn’t include any standard accessibility features, and it doesn’t work offline at all. Your job is to update the code to resolve these issues while still maintaining the included functionality.


## How to run
In this folder, start up a simple HTTP server to serve up the site files on your local computer. Python has some simple tools to do this, and you don't even need to know Python. For most people, it's already installed on your computer.
In a terminal, check the version of Python you have: python -V. If you have Python 2.x, spin up the server with python -m SimpleHTTPServer 8000 (or some other port, if port 8000 is already in use.) For Python 3.x, you can use python3 -m http.server 8000. If you don't have Python installed, navigate to Python's website to download and install the software.

**_You can also use Web Server for Chrome or atom-live-server._**

## How to poke at features

### To get Google Maps working
Replace `<Key>` in `index.html` and `restaurant.html` with a Google Maps API key.
Make sure you do this before the service worker caches these pages!


+ For accessibility:
>You can tab around the page, use chrome vox or look at the accessibility tree located in the chrome developer tools.

+ For service worker:
>You can open the application tab in chrome developer tools and check offline mode, then refresh. You can also look at the Network tab to see resources being fetched by the service worker.

+ Why isn't google maps avaiable offline?
>It is against their terms of service.
