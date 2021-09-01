export interface IOrderCustomer {
  getName(): string;
  getIDN(): string;
}

export interface IIndividualProtocol {
  firstname: string
  lastname: string
  cpf: string
}

export interface IEnterpriseProtocol {
  firstname: string
  cpnj: string
}
