---
layout: tutorial_frame
title: Quick Start
customMapContainer: "true"
---
componentWillMount() {
	this.setState({
		popup: 'marker',
		popupCoords: null,
	});
}

closePopup = () => this.setState({
	popup: null,
	popupCoords: null,
})

onMapClick = (event) => {
	this.setState({
		popup: 'click',
		popupCoords: event.latlng,
	});
}

render() {
	const mapboxLayerId = 'mapbox.streets';
	const mapboxUrlTemplate = `https://api.tiles.mapbox.com/v4/${mapboxLayerId}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw`;

	return (
		<Map view={[51.505, -0.09, 13]} onClick={this.onMapClick}>
			<TileLayer urlTemplate={mapboxUrlTemplate} maxZoom={18} />
			<Marker refs={(ref) => this.marker = ref} coords={[51.5, -0.09]} />
			<Circle
				refs={(ref) => this.circle = ref}
				coords={[51.508, -0.11]}
				onClick={() => this.setState({popup: 'circle'})}
				svgStyle={{
					radius: 500,
					color: 'red',
					fillColor: '#f03',
					fillOpacity: 0.5,
				}}
			/>
			<Polygon
				refs={(ref) => this.polygon = ref}
				coords={[
					[51.509, -0.08],
					[51.503, -0.06],
					[51.51, -0.047]
				]}
				onClick={() => this.setState({popup: 'polygon'})}
			/>
			{this.state.popup == 'marker' && (
				<Popup target={this.marker} onClose={this.closePopup}>
					<b>Hello world!</b><br />I am a popup.
				</Popup>
			)}
			{this.state.popup == 'circle' && (
				<Popup target={this.circle} onClose={this.closePopup}>
					I am a circle.
				</Popup>
			)}
			{this.state.popup == 'polygon' && (
				<Popup target={this.polygon} onClose={this.closePopup}>
					I am a polygon.
				</Popup>
			)}
			{this.state.popup == 'click' && (
				<Popup coords={this.state.popupCoords} onClose={this.closePopup}>
					You clicked the map at {this.state.popupCoords.toString()}.
				</Popup>
			)}
			<Attribution>
				Map data &copy;
				<a href="http://openstreetmap.org">OpenStreetMap</a> contributors,
				<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>,
				Imagery &copy; <a href="http://mapbox.com">Mapbox</a>
			</Attribution>
		</Map>
	);
}
