export interface IMahasiswa {
  nama: string;
  aspek1: string;
  aspek2: string;
  aspek3: string;
  aspek4: string;
}

export interface IAspekPenilaian {
  [key: string]: {
    [key: string]: number;
  };
}
