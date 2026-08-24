import { Gender, Expertise } from './enums';

/**
 * Interface for all the user data
 * @name First name of the user
 * @middleName Middle name of the user (optional)
 * @surname Surname of the user
 * @username User's unique name on the app
 * @uuid Unique id for the user (UUID v4 string)
 * @gender BIOLOGICAL gender of the user
 * @weight Bodyweight of the user in kg
 * @height Height of the user in centimetres
 * @birthDate Birth date of the user
 * @sports Current sports of the user
 * @subscribed Active subscription
 * @desiredTrainingFrequency Desired sessions of training per week
 * @bookingPreference Booking preferences of the user
 * @travelPreference Travel preferences of the user
 * @pronouns Pronouns the user wants to be treated with
 * @diet User's current diet plan
 * @units User's measurement unit preferences
 * @currentCompetition User's current competition (optional)
 * @competitionInterests User's competition interests/preferences
 * 
 * NOTE: Password hash is NOT included in this public user profile
 */
interface User {
  name: string;
  middleName?: string;
  surname: string;
  username: string;
  uuid: string;
  gender: Gender;
  weight: number;
  height: number;
  birthDate: Date;
  sports: Sport[];
  subscribed: boolean;
  desiredTrainingFrequency: number;
  bookingPreference: BookingPreference;
  travelPreference: TravelPreference;
  pronouns: string;
  diet: Diet;
  units: Units;
  currentCompetition?: Competition;
  competitionInterests: CompetitionPreference;
}
