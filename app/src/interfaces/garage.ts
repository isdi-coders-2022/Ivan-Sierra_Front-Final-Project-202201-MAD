export interface GarageI {
  user: string;
  pass: string;
  garage_name: string;
  cif_nif: string;
  email: string;
  phone: string;
  web: string;
  address: string;
  services: {
    ruedas: number;
    aceite: number;
    filtros: number;
    amortiguadores: number;
    discos: number;
    pastillas: number;
    aire: number;
    bombillas: number;
  };
}

export interface GarageConIdI {
  _id: string;
  user: string;
  pass: string;
  garage_name: string;
  cif_nif: string;
  email: string;
  phone: string;
  web: string;
  address: string;
  services: {
    [service: string]: number;
  };
}
