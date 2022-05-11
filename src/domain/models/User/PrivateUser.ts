export default interface IPrivateUser {
  id?: string;
  email?: string;
  profile?: IUserProfile | undefined;
  password?: string;
}

interface IUserProfile {
  name?: string;
  address?: IUserAddress;
  documentTypology?: EnumDocumentTypology;
  documentId?: string;
}
interface IUserAddress {
  street?: string;
  number?: number;
  zip?: string;
  city?: string;
  state?: string;
  country?: string;
}

enum EnumDocumentTypology {
  CPF = 1,
  CNPJ = 2,
}
