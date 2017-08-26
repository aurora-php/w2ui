/*
 * This file is part of the 'octris/w2ui' package.
 *
 * (c) Harald Lapp
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

/**
 * W2ui and application setup.
 *
 * @copyright   copyright (c) 2017 by Harald Lapp
 * @author      Harald Lapp <harald@octris.org>
 */

;var octris = (function(octris) {
    /*
     * jQuery setup
     */
    jQuery.ajaxSetup({
        beforeSend: function(xhr) {
            xhr.setRequestHeader('Accept', 'application/json');
        },
        statusCode: {
            401: function() {
                // Unauthorized -- redirect to login page
                location.href = '/login';
            },
            403: function() {
                // TODO: Forbidden -- display warning(?)
            }
        }
    });

    /*
     * w2ui setup
     */
    w2utils.settings.dataType = 'HTTP';

    return octris;
})(octris || {});
