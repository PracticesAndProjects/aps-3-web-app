import IPublicListing from "../Listing/PublicListing";
import IPublicUser from "../User/PublicUser";

export default interface IPublicOrder {
  id: String;
  user: IPublicUser;
  listing: IPublicListing;
}
