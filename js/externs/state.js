/*
 * Copyright 2015 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not
 * use this file except in compliance with the License. You may obtain a copy of
 * the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations under
 * the License.
 */

/**
 * @externs
 */


/**
 * @interface
 */
function SantaState() {}

/**
 * @type {LatLng}
 */
SantaState.prototype.position;

/**
 * @type {number}
 */
SantaState.prototype.heading;

/**
 * @type {SantaLocation}
 */
SantaState.prototype.prev;

/**
 * null when Santa is flying.
 * @type {SantaLocation}
 */
SantaState.prototype.stopover;

/**
 * @type {SantaLocation}
 */
SantaState.prototype.next;

/**
 * @type {number}
 */
SantaState.prototype.presentsDelivered;

/**
 * Distance in meters.
 * @type {number}
 */
SantaState.prototype.distanceTravelled;
