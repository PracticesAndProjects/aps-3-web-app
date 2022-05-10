export default interface IPrivateUser {
  id: String;
  email: String;
  profile: IUserProfile;
  address: IUserAddress;
}

interface IUserAddress {
  street: String;
  number: Number;
  zip: String;
  city: String;
  state: String;
  country: String;
}

interface IUserProfile {
  documentTypology: Number;
  documentId: String;
  name: String;
}
