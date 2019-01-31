import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {EPSG3857} from '../geo/crs/CRS.EPSG3857';
import * as Browser from '../core/Browser';

export default class extends React.Component {
    static propTypes = {
        crs: PropTypes.object.isRequired,
        center: PropTypes.array,
        zoom: PropTypes.number,
        minZoom: PropTypes.number,
        maxZoom: PropTypes.number,
        maxBounds: PropTypes.object,
        renderer: PropTypes.object,
        zoomAnimation: PropTypes.bool,
        zoomAnimationThreshold: PropTypes.number,
        fadeAnimation: PropTypes.bool,
        markerZoomAnimation: PropTypes.bool,
        transform3DLimit: PropTypes.number,
        zoomSnap: PropTypes.number,
        zoomDelta: PropTypes.number,
        trackResize: PropTypes.bool,
    };

    static defaultProps = {
        crs: EPSG3857,
        center: undefined,
        zoom: undefined,
        minZoom: undefined,
        maxZoom: undefined,
        maxBounds: undefined,
        renderer: undefined,
        zoomAnimation: true,
        zoomAnimationThreshold: 4,
        fadeAnimation: true,
        markerZoomAnimation: true,
        transform3DLimit: 8388608,
        zoomSnap: 1,
        zoomDelta: 1,
        trackResize: true,
    };

    componentWillMount() {
        this.updateFadeAnimated(this.props);
    }

    updateFadeAnimated(props) {
        this.setState({
            _fadeAnimated: props.fadeAnimation && Browser.any3d,
        });
    }

    componentDidMount() {
        // this.container.addEventListener('scroll', (event) => {
        //     console.log(event);
        // });
        this.container._element = ReactDOM.findDOMNode(this.container);
    }

    componentWillReceiveProps(nextProps) {
        this.updateFadeAnimated(nextProps);
    }

    scroll = (event) => {
        console.log(event);
        this.container._element.scrollTop = 0;
        this.container._element.scrollLeft = 0;
    }

    render() {
        return (
            <div ref={(ref) => this.container = ref}
                className={classnames('leaflet-container', {
                    'leaflet-touch': !!Browser.touch,
                    'leaflet-retina': !!Browser.retina,
                    'leaflet-oldie': !!Browser.ielt9,
                    'leaflet-safari': !!Browser.safari,
                    'leaflet-fade-anim': !!this.state._fadeAnimated,
                })}
                onScroll={this.scroll}
            >
                <style jsx>{`
.leaflet-container {
    background: rgba(255,0,0,.2);
    height: 100%;
    position: relative;
}
                `}</style>
                Map goes here!
                {this.props.children}
            </div>
        );
    }
}
