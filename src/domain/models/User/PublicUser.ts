export default interface IPublicUser {
  id: String;
  email?: String;
  profile?: IPublicUserProfile;
}

interface IPublicUserProfile {
  name: String;
}
