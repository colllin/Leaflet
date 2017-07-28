import React from 'react';
import PropTypes from 'prop-types';
import CRS from '../geo/crs/CRS';

export default class extends React.Component {
    static propTypes = {
        crs: PropTypes.object.isRequired,
    };
    static defaultProps = {

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
