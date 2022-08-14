import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

export const EditUser = () => {
  const [users, setUsers] = useState({
    user: {
      location: {
        type: "Point",
        coordinates: [100.060139, 13.566704],
      },
      userDetails: {
        taste: [],
        likes: [],
        unlikes: [],
        superlikes: [],
        likesMe: [],
        address:
          "42 Moo 3 Nong Song Hong Subdistrict Ban Phaeo District Samut Sakhon Province",
      },
      userSetting: {
        MaxDistance: 100,
        MinAge: 42,
        MaxAge: 50,
      },
      _id: "6213b95e3ee259b511fbcf3e",
      username: "CHETcica",
      email: "chetsadakorn2543@gmail.com",
      password: "$2a$12$l90I8YxiEP/1SzDvrx159.bTR1svAxWukjnH0USIig4mTVSPZv4tm",
      gender: "man",
      born: "2000-08-17T00:00:00.000Z",
      phone: "0823636036",
      passion: ["coding", "gaming", "cycling"],
      interested: "women",
      bio: "hello i like game",
      social: {
        Facebook: "Chet cica",
        Instagram: "Chet cica",
      },
      userimageprofile:
        "https://cdn.discordapp.com/attachments/792729018608648204/1004979387214594159/profile2.jpg",
      userimage: [
        "https://cdn.discordapp.com/attachments/792729018608648204/794089291360763914/profile.jpg",
      ],
      friendId: ["6214a044e543ba936f58d2ea", "6214aab2e543ba936f58d2f1"],
      __v: 0,
    },
  });

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  const calculateAge = (born) => {
    var today = new Date();
    var birthDate = new Date(born);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  };
  return (
    <div className="container mx-auto">
      <form className="" onSubmit={handleSubmit(onSubmit)}>
        <div className="row">
          <div className="col-4">
            <label className=" m-2">username</label>
            <input
              defaultValue={users.user.username}
              {...register("username")}
            />
          </div>
          <div className="col-4">
            <label className="m-2">Email</label>
            <input defaultValue={users.user.email} {...register("email")} />
          </div>
        </div>
        <div className="row">
          <div className="col-4">
            <label className=" m-2">gender</label>
            <input defaultValue={users.user.gender} {...register("gender")} />
          </div>
          <div className="col-4">
            <label className="m-2">born</label>
            <input defaultValue={users.user.born} {...register("born")} />
          </div>
        </div>
        <div className="row">
          <div className="col-4">
            <label className=" m-2">interested</label>
            <input
              defaultValue={users.user.interested}
              {...register("interested")}
            />
          </div>
          {/* <div className="col-4">
            <label className="m-2">userimageprofile</label>
            <img
              src={users.user.userimageprofile}
              style={{width: "12px" ,height:"12px"}}
            />
            <input
              type="file"
              defaultValue={users.user.userimageprofile}
              {...register("userimageprofile")}
            />
          </div> */}
        </div>

        {errors.exampleRequired && <span>This field is required</span>}
        <input className="m-2" type="submit" />
      </form>
    </div>
  );
};
