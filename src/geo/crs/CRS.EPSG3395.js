import {Earth} from './CRS.Earth';
import {Mercator} from '../projection/Projection.Mercator';
import {toTransformation} from '../../geometry/Transformation';
import _ from 'lodash';

/*
 * @namespace CRS
 * @crs L.CRS.EPSG3395
 *
 * Rarely used by some commercial tile providers. Uses Elliptical Mercator projection.
 */
export var EPSG3395 = _.merge({}, Earth, {
	code: 'EPSG:3395',
	projection: Mercator,

	transformation: (function () {
		var scale = 0.5 / (Math.PI * Mercator.R);
		return toTransformation(scale, 0.5, -scale, 0.5);
	}())
});
