/**
 * This object contains all the data relevant to the Booking preferences of the user
 * @provider: Platform for booking providers.
 * @desiredPriceRange: [0] sets the min [1] sets the max
 * @desiredFacilities: Facilities list, eg: Wi-Fi, Pool, Parking...
 * @desiredType: order of the different possible types of places, eg: Hotel, Apartment, House...
 * @desiredDistance: desired distance to the competition centre
 */

interface BookingPreference{
  provider: string;
  desiredPriceRange: [number, number];
  desiredFacilities: string[];
  desiredType: string[];
  desiredDistance: number;
}

/**
 *
 */

interface TravelPreference{

}
