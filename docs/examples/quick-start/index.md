---
layout: tutorial_v2
title: Quick Start Guide
---

## Leaflet Quick Start Guide

This step-by-step guide will quickly get you started on Leaflet basics, including setting up a Leaflet map, working with markers, polylines and popups, and dealing with events.

{% include frame.html url="example.html" %}

### Preparing your app

* Install the npm module

      $ npm install leaflux --save
      or
      $ yarn add leaflux --save

* Include the module in your app

      import Leaflux from 'leaflux';
      
### Rendering a map

{% include frame.html url="example-basic.html" %}

Let's create a map of the center of London with pretty Mapbox Streets tiles. First we'll initialize the map and set its view to our chosen geographical coordinates and a zoom level:
	
	import { Map, ZoomControl, Attribution } from 'leaflux';
	
	const MapOfLondon = (props) => {
	    <div>
	        <Map view={[51.505, -0.09, 13]}>
		    <ZoomControl />
		    <Attribution />
		</Map>
	    </div>
	}

By default (as we didn't pass any props to the Map component), all mouse and touch interactions on the map are enabled.

Next we'll add a tile layer to add to our map, in this case it's a Mapbox Streets tile layer. Creating a tile layer usually involves setting the [URL template](http://leafletjs.com/reference.html#url-template) for the tile images, the attribution text and the maximum zoom level of the layer. In this example we'll use the `mapbox.streets` tiles from [Mapbox's "Classic maps"](https://www.mapbox.com/api-documentation/#maps) (in order to use tiles from Mapbox, you must also [request an access token](https://www.mapbox.com/studio/account/tokens/)).

	import { Map, ZoomControl, Attribution, TileLayer } from 'leaflux';
	
	const MapOfLondon = (props) => {
	    // TODO Create a custom component to hide this junk!
	    const mapboxId = 'mapbox.streets';
	    const mapboxAccessToken = 'your.mapbox.access.token';
	    const mapboxUrlTemplate = `https://api.tiles.mapbox.com/v4/${mapbox.streets}/{z}/{x}/{y}.png?access_token=${mapboxAccessToken}`;
	    
	    return (
	        <div>
	            <Map view={[51.505, -0.09, 13]}>
		        <TileLayer urlTemplate={mapboxUrlTemplate} maxZoom={18}>
		        <ZoomControl />
		        <Attribution>
			    Map data &copy;
			    <span class="text-cut" data-cut="[&hellip;]">
			    	<a href="http://openstreetmap.org">OpenStreetMap</a> contributors,
				<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>,
				Imagery &copy; <a href="http://mapbox.com">Mapbox</a>
			    </span>
			</Attribution>
		    </Map>
	        </div>
	    );
	}

It's worth noting that Leaflet is provider-agnostic, meaning that it doesn't enforce a particular choice of providers for tiles. You can try replacing `mapbox.streets` with `mapbox.satellite`, and see what happens. Also, Leaflet doesn't even contain a single provider-specific line of code, so you're free to use other providers if you need to (we'd suggest Mapbox though, it looks beautiful).


### Markers, circles and polygons

{% include frame.html url="example-overlays.html" %}


Besides tile layers, you can easily add other things to your map, including markers, polylines, polygons, circles, and popups. Let's add a marker:

	<Marker coords={[51.5, -0.09]} />

Adding a circle is the same (except for specifying the radius in meters as a second argument), but lets you control how it looks by passing options as the last argument when creating the object:

	<Circle coords={[51.508, -0.11]} svgStyle={{
		color: 'red',
		fillColor: '#f03',
		fillOpacity: 0.5,
		radius: 500
	}} />

Adding a polygon is as easy:

	<Polygon coords={[
		[51.509, -0.08],
		[51.503, -0.06],
		[51.51, -0.047]
	]} />


### Working with popups

{% include frame.html url="example-popups.html" %}

Popups are usually used when you want to attach some information to a particular object on a map. Leaflet has a very handy shortcut for this:

	<Marker refs={(ref) => this.marker = ref} coords={[51.5, -0.09]} />
	<Popup target={this.marker}>
		<b>Hello world!</b>
		<br>
		I am a popup.
	</Popup>

Now let's show a popup when the circle is clicked. You can place these objects anywhere in your map.  Note that the map children follow normal HTML z-indexing behavior, so put the `<Circle>` component after the `<TileLayer>` component, and put the `<Popup>` component after the `<Circle>` component.

	<Circle 
		refs={(ref) => this.circle = ref}
		coords={[51.508, -0.11]} 
		onClick={() => this.setState({showCirclePopup: !this.state.showCirclePopup})}
		svgStyle={{
			color: 'red',
			fillColor: '#f03',
			fillOpacity: 0.5,
			radius: 500
		}} 
	/>
	{this.state.showCirclePopup && (
		<Popup target={this.circle}>
			I am a circle.
		</Popup>
	)}

You can of course use popups without a target (when you need something more than attaching a popup to an object):

	<Popup coords={[51.5, -0.09]}>
		I am a standalone popup.
	</Popup>

### Dealing with events

Every time something happens in Leaflet, e.g. user clicks on a marker or map zoom changes, the corresponding object sends an event which you can subscribe to with a callback prop. It allows you to react to user interaction:

	onMapClick = (event) => {
		alert("You clicked the map at " + event.latlng);
	}
	
	render() {
		return (
			<Map onClick={this.onMapClick} />
		);
	}

Each object has its own set of events --- see [documentation](../../reference.html) for details. The first argument of the listener function is an event object --- it contains useful information about the event that happened. For example, map click event object (`e` in the example above) has `latlng` property which is a location at which the click occured.

Let's improve our example by using a popup instead of an alert:

	onMapClick = (event) => {
		this.setState({
			popupCoords: event.latlng,
		});
	}
	
	render() {
		return (
			<Map onClick={this.onMapClick}>
				{this.state.popupCoords && (
					<Popup coords={this.state.popupCoords} onClose={this.setState({popupCoords: null})}>
						You clicked the map at {this.state.popupCoords.toString()}
					</Popup>
				)}
			</Map>
		);
	}

Try clicking on the map and you will see the coordinates in a popup. <a target="_blank" href="example.html">View the full example &rarr;</a>

Now you've learned Leaflet basics and can start building map apps straight away! Don't forget to take a look at the detailed <a href="../../reference.html">documentation</a> or <a href="../../examples.html">other examples</a>.

