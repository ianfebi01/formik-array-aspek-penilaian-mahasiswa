import React from "react";
import { IAspekPenilaian } from "../../types/List";

interface IHasilPenilaian {
  aspekPenilaian?: IAspekPenilaian;
}
const HasilPenilaian: React.FC<IHasilPenilaian> = ({ aspekPenilaian }) => {
  return (
    <div className="flex flex-col gap-4 mt-4">
      <span className="text-lg font-bold ">Hasil:</span>
      <pre className="text-sm">{JSON.stringify(aspekPenilaian, null, 2)}</pre>
    </div>
  );
};

export default HasilPenilaian;
