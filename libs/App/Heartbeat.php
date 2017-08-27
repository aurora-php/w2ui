<?php

/*
 * This file is part of the 'octris/w2ui' package.
 *
 * (c) Harald Lapp <harald@octris.org>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace Octris\W2ui\App;

/**
 * Heartbeat handler.
 *
 * @copyright   copyright (c) 2017 by Harald Lapp
 * @author      Harald Lapp <harald@octris.org>
 */
class Heartbeat extends \Octris\W2ui\RouteHandler
{
    /**
     * Main function.
     */
    public function main()
    {
        return true;
    }
}
