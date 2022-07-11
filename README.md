# Web Audio API Demo Base
This repo represents the starting point for a public demo of Javascript's Web Audio API. Prewritten things are:

- HTML so it's set up for a canvas, an audio tag with included audio, and a div to insert sliders in to.
- Code to set up a visualizer to use to show off the frequency response of the audio to demonstrate what different effects have visually as well as aurally.
- Code to create a slider quickly and add it to the DOM so relevant audio filter values can be modified on the fly easily.
- Code to fetch the impulse response for reverb.

All of this code is to either get past initial setup or to allow for a faster starting point for the demo. They're unnecessary to work with the Web Audio API and just allow for easier, more visually exciting live coding.

### Starting a web server in Python
Just to get a quick HTTP server up and running where code can be accessed, have [Python installed](https://www.python.org/downloads/) (2 or 3), then navigate a terminal window to this code directory.

In Python 2, you can run:

`python -m SimpleHTTPServer`

And in Python 3, you can run:

`python -m http.server`

Python will then spin up a small HTTP server with the base directory as this folder on port 8000, so you can access your code by going to:

`http://localhost:8000/`

### Attributions
The impulse response is from [Lieuxperdus's Théâtre Acoustique Room Impulse Response Library](https://www.lieuxperdus.com/convolver/download/), licensed under the Create Commons Attribution-NonCommercial 4.0 International license.

`gymnopedie.mp3` is from Incompetech:
"Gymnopedie No. 1" Kevin MacLeod (incompetech.com)
Licensed under Creative Commons: By Attribution 4.0 License
http://creativecommons.org/licenses/by/4.0/