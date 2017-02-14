[![npm version](https://badge.fury.io/js/ember-cli-clappr.svg)](https://badge.fury.io/js/ember-cli-clappr) [![Ember Observer Score](https://emberobserver.com/badges/ember-cli-clappr.svg)](https://emberobserver.com/addons/ember-cli-clappr) 

# ember-cli-clappr

A simple wrapper to Clappr video player. For more information about *Clappr*,
please visit [https://github.com/clappr/clappr](https://github.com/clappr/clappr).

## Installation

```
ember install ember-cli-clappr
```

## Usage

```javascript
{{clappr-player source="your_video_here.mp4"}}
```

## Availabe Actions

- onReady
- onResize
- onPlay
- onPause
- onStop
- onEnded
- onSeek
- onError
- onTimeUpdate
- onVolumeUpdate:function

```javascript
{{clappr-player source="your_video_here.mp4" onPlay=(action 'onPlay')}}
```

## Example

Please, see [ember-cli-clappr-example](https://github.com/ceb10n/ember-cli-clappr-example)

## More about Clappr

- [Clappr Events API](https://github.com/clappr/clappr/blob/master/doc/API_EVENTS.md)

- [Built-in Plugins & Embed Parameters](https://github.com/clappr/clappr/blob/master/doc/BUILTIN_PLUGINS.md)

## Contribute

### Installation

* `git clone <repository-url>` this repository
* `cd ember-cli-clappr`
* `npm install`
* `bower install`

## Running

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

## Running Tests

* `npm test` (Runs `ember try:each` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [https://ember-cli.com/](https://ember-cli.com/).
