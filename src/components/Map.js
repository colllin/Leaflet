import React from 'react';
import PropTypes from 'prop-types';
import {EPSG3857} from '../geo/crs/CRS.EPSG3857';

export default class extends React.Component {
    static propTypes = {
        crs: PropTypes.object.isRequired,
    };
    static defaultProps = {
        crs: EPSG3857,
    };

    render() {
        return (
            <div class="map">
                <style jsx>{`
.map {
    background: rgba(255,0,0,.1);
}
                `}</style>
                Map goes here!
                {this.props.children}
            </div>
        );
    }
}
