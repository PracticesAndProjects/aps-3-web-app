export default interface IPrivateUser {
  id?: String;
  email?: String;
  profile?: IUserProfile | undefined;
  password?: String;
}

interface IUserProfile {
  name?: String;
  address?: IUserAddress;
  documentTypology?: EnumDocumentTypology;
  documentId?: String;
}
interface IUserAddress {
  street?: String;
  number?: Number;
  zip?: String;
  city?: String;
  state?: String;
  country?: String;
}

enum EnumDocumentTypology {
  CPF = 1,
  CNPJ = 2,
}
