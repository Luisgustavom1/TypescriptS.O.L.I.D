import { IEnterpriseProtocol, IIndividualProtocol, IOrderCustomer } from "./interfaces/customer-protocol";

export class IndividualProtocol
  implements IIndividualProtocol, IOrderCustomer {
  firstname: string;
  lastname: string;
  cpf: string;

  constructor(firstname: string, lastname: string, cpf: string) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.cpf = cpf;
  }

  getName() {
    return this.firstname + this.lastname;
  };

  getIDN() {
    return this.cpf;
  };
}

export class EnterpriseProtocol
  implements IEnterpriseProtocol, IOrderCustomer {
  firstname: string;
  cpnj: string;

  constructor(firstname: string, cpnj: string) {
    this.firstname = firstname;
    this.cpnj = cpnj;
  }

  getName() {
    return this.firstname
  }

  getIDN() {
    return this.cpnj
  }
}
