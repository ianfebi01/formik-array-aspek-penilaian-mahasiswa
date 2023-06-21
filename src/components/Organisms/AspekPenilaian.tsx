import React from "react";
import { useState } from "react";
import { Formik, Form, FormikValues, FieldArray } from "formik";
import * as Yup from "yup";
import Button from "../Atoms/Button";
import { IAspekPenilaian, IMahasiswa } from "../../types/List";
import List from "../Molecules/List";
import HasilPenilaian from "../Molecules/HasilPenilaian";

const AspekPenilaian = () => {
  const [aspekPenilaian, setAspekPenilaian] = useState<IAspekPenilaian>();

  const validationSchema = Yup.object().shape({
    mahasiswa: Yup.array().of(
      Yup.object().shape({
        nama: Yup.string().required("Field tidak boleh kosong"),
        aspek1: Yup.string().required("Field tidak boleh kosong"),
        aspek2: Yup.string().required("Field tidak boleh kosong"),
        aspek3: Yup.string().required("Field tidak boleh kosong"),
        aspek4: Yup.string().required("Field tidak boleh kosong"),
      })
    ),
  });

  const handleSubmit = (values: FormikValues) => {
    const aspek_penilaian_1 = values.mahasiswa.map((item: any) => ({
      [item.nama]: Number(item.aspek1),
    }));
    const aspek_penilaian_2 = values.mahasiswa.map((item: any) => ({
      [item.nama]: Number(item.aspek2),
    }));
    const aspek_penilaian_3 = values.mahasiswa.map((item: any) => ({
      [item.nama]: Number(item.aspek3),
    }));
    const aspek_penilaian_4 = values.mahasiswa.map((item: any) => ({
      [item.nama]: Number(item.aspek4),
    }));

    setAspekPenilaian({
      aspek_penilaian_1: aspek_penilaian_1,
      aspek_penilaian_2: aspek_penilaian_2,
      aspek_penilaian_3: aspek_penilaian_3,
      aspek_penilaian_4: aspek_penilaian_4,
    });
    // alert(JSON.stringify(aspekPenilaian, null, 2));
  };

  return (
    <div className="min-h-screen w-full flex flex-col items-center">
      <div className="container h-full px-4 py-8">
        <div className=" flex justify-center">
          <h1 className="font-medium text-3xl">Aplikasi Penilaian Mahasiswa</h1>
        </div>
        <div className="flex flex-col mt-8">
          <Formik
            initialValues={{
              mahasiswa: [
                {
                  nama: "mahasiswa_1",
                  aspek1: "",
                  aspek2: "",
                  aspek3: "",
                  aspek4: "",
                },
              ],
            }}
            validationSchema={validationSchema}
            onSubmit={(values, actions) => {
              handleSubmit(values);
              actions.setSubmitting(false);
            }}
            enableReinitialize
          >
            {({ errors, touched, values }) => (
              <Form>
                <div className="grid grid-cols-5 ">
                  <div className="col-start-2 flex justify-center">
                    Aspek Penilaian 1
                  </div>
                  <div className="flex justify-center px-2">
                    Aspek Penilaian 2
                  </div>
                  <div className="flex justify-center px-2">
                    Aspek Penilaian 3
                  </div>
                  <div className="flex justify-center px-2">
                    Aspek Penilaian 4
                  </div>
                </div>
                <FieldArray
                  name="mahasiswa"
                  render={(arrayHelpers: any) => {
                    const mahasiswa: IMahasiswa[] = values.mahasiswa;

                    return (
                      <div>
                        {mahasiswa.map((item, i) => (
                          <List i={i} mahasiswa={mahasiswa} key={i} />
                        ))}
                        <div className="flex justify-between">
                          <Button
                            type="button"
                            label="+ Tambahkan Mahasiswa"
                            onClick={() =>
                              arrayHelpers.push({
                                nama: `mahasiswa_${mahasiswa.length + 1}`,
                                aspek1: "",
                                aspek2: "",
                                aspek3: "",
                                aspek4: "",
                              })
                            } // insert an empty string at a position
                          />
                          <Button type="submit" label="Submit" />
                        </div>
                      </div>
                    );
                  }}
                />
              </Form>
            )}
          </Formik>
          <HasilPenilaian aspekPenilaian={aspekPenilaian} />
        </div>
      </div>
    </div>
  );
};

export default AspekPenilaian;
