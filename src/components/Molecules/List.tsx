import React from "react";
import SelectField from "../Atoms/Select";
import { IMahasiswa } from "../../types/List";

interface IList {
  i: number;
  mahasiswa: IMahasiswa[];
}

const List: React.FC<IList> = ({ i, mahasiswa }) => {
  const parseNamaMahasiswa = (nama: string): string => {
    const replaceChar = nama.replace("_", " ");
    const res = replaceChar.charAt(0).toUpperCase() + replaceChar.slice(1);
    return res;
  };
  return (
    <div
      className="grid grid-cols-5 border border-gray-200 rounded-[8px] my-2 py-2 px-2"
      key={i}
    >
      <div className="flex items-center px-2">
        <div className="w-[40px] h-[40px] mr-4 border border-none rounded-full overflow-hidden">
          <img src="/pp.jpeg" alt="profil_picture" className="object-cover" />
        </div>
        <span>{parseNamaMahasiswa(mahasiswa[i].nama)}</span>
      </div>
      <div className="px-2">
        <SelectField name={`mahasiswa.${i}.aspek1`} />
      </div>
      <div className="px-2">
        <SelectField name={`mahasiswa.${i}.aspek2`} />
      </div>
      <div className="px-2">
        <SelectField name={`mahasiswa.${i}.aspek3`} />
      </div>
      <div className="px-2">
        <SelectField name={`mahasiswa.${i}.aspek4`} />
      </div>
    </div>
  );
};

export default List;
