import React, { useState, useEffect } from "react";

const Profilemanu = () => {
  const [users, setUsers] = useState({
    user: [
      {
        user_details: {
          taste: [],
          likes: [],
          unlike: [],
          likesMe: [],
          higth: 170,
          weigth: 54,
        },
        _id: "6213b95e3ee259b511fbcf3e",
        username: "CHETcica",
        email: "chetsadakozn2543@gmail.com",
        password:
          "$2a$12$l90I8YxiEP/1SzDvrx159.bTR1svAxWukjnH0USIig4mTVSPZv4tm",
        gender: "man",
        born: "2000-08-17T00:00:00.000Z",
        phone: "0823636036",
        location: [13.838598, 19.0398371],
        passion: ["music", "game", "cooking"],
        interested: "woman",
        bio: "hello i like game",
        social: {
          Facebook: "Chet cica",
          Instagram: "Chet cica",
        },
        userimageprofile:
          "https://cdn.discordapp.com/attachments/792729018608648204/794089291360763914/profile.jpg",
        userimage: [
          "https://cdn.discordapp.com/attachments/792729018608648204/794089291360763914/profile.jpg",
        ],
        frind_id: [],
        __v: 0,
      },
      {
        user_details: {
          taste: [],
          likes: [],
          unlike: [],
          likesMe: [],
          higth: 170,
          weigth: 54,
        },
        _id: "6213b95e3ee259b511fbcf3e",
        username: "CHETcica",
        email: "chetsadakozn2543@gmail.com",
        password:
          "$2a$12$l90I8YxiEP/1SzDvrx159.bTR1svAxWukjnH0USIig4mTVSPZv4tm",
        gender: "man",
        born: "2002-02-05T00:00:00.000Z",
        phone: "0823636036",
        location: [13.838598, 19.0398371],
        passion: ["music", "game", "cooking"],
        interested: "woman",
        bio: "hello i like game",
        social: {
          Facebook: "Chet cica",
          Instagram: "Chet cica",
        },
        userimageprofile:
          "https://cdn.discordapp.com/attachments/792729018608648204/794089291360763914/profile.jpg",
        userimage: [
          "https://cdn.discordapp.com/attachments/792729018608648204/794089291360763914/profile.jpg",
        ],
        frind_id: [],
        __v: 0,
      },
      {
        "user_details": {
            "taste": [],
            "likes": [],
            "unlike": [],
            "likesMe": []
        },
        "_id": "621de4497f9e2715a29cc62e",
        "username": "ฺMabwi",
        "email": "Ayamada@gmail.com",
        "password": "$2a$12$j2DUaTO1jQSqw5ImvC/wrekw3X3L1/q5LnCdImxIrsHNKlY5ZWUzS",
        "gender": "woman",
        "born": "1999-09-02T00:00:00.000Z",
        "phone": "0823636036",
        "location": [
            13.838598,
            19.0398371
        ],
        "passion": {
            "music": 5,
            "reding": 4,
            "sport": 3
        },
        "interested": "tomboy",
        "bio": "love daw",
        "social": {
            "Facebook": "ฺabe yamada",
            "Instagram": "yamada"
        },
        "userimageprofile": "https://cdn.discordapp.com/attachments/792729018608648204/800269786050592838/profile2.jpg",
        "userimage": [
            "https://cdn.discordapp.com/attachments/792729018608648204/800269786050592838/profile7.jpg"
        ],
        "frind_id": [],
        "__v": 0
    }
       
    ],
  });
  let countuser = 0;
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
    <div>
      <div className="content-wrapper">
        {/* Content Header (Page header) */}
        <div className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1 className="m-0 text-dark">User manage</h1>
              </div>
              {/* /.col */}
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item">
                    <a href="/">Home</a>
                  </li>
                  <li className="breadcrumb-item active">Dashboard v2</li>
                </ol>
              </div>
              {/* /.col */}
            </div>
            {/* /.row */}
          </div>
          {/* /.container-fluid */}
        </div>
        {/* /.content-header */}
        {/* Main content */}
        <section className="content">
          <div className="container-fluid">
            {/* Small boxes (Stat box) */}
            <div className="row">
              <div className="col-lg-3 col-6">
                {/* small box */}
                <div className="small-box bg-info">
                  <div className="inner">
                    <h3>{users.user.length}</h3>
                    <p>Total user</p>
                  </div>
                  <div className="icon">
                    <i className="ion ion-person" />
                  </div>
                  <a href="#" className="small-box-footer">
                    More info <i className="fas fa-arrow-circle-right" />
                  </a>
                </div>
              </div>
              
              {/* ./col */}
              <div className="col-lg-3 col-6">
                {/* small box */}
                <div className="small-box bg-warning">
                  <div className="inner">
                    <h3>{users.user.length}</h3>
                    <p>User Registrations</p>
                  </div>
                  <div className="icon">
                    <i className="ion ion-person-add" />
                  </div>
                  <a href="#" className="small-box-footer">
                    More info <i className="fas fa-arrow-circle-right" />
                  </a>
                </div>
              </div>
              {/* ./col */}
              <div className="col-lg-3 col-6">
                {/* small box */}
                <div className="small-box bg-danger">
                  <div className="inner">
                    <h3>0</h3>
                    <p>Ban User</p>
                  </div>
                  <div className="icon">
                    <i className="ion ion-person" />
                  </div>
                  <a href="#" className="small-box-footer">
                    More info <i className="fas fa-arrow-circle-right" />
                  </a>
                </div>
              </div>
              {/* ./col */}
            </div>
            {/* /.row */}
            {/* Small boxes (Stat box) */}
            <div className="row">
              <div class="overflow-x-auto">
                <table class="table table-compact w-full">
                  <thead>
                    <tr>
                      <th></th>
                      <th>Username</th>
                      <th>gender</th>
                      <th>Age</th>
                      <th>interested</th>
                      <th>Frind</th>
                      <th>Edit</th>
                      <th>BanUser</th>
                    </tr>
                  </thead>
                  <tbody>
                    {users.user.map((el) => {
                      countuser ++;
                      return (
                        <tr>
                          <th>{countuser}</th>
                          <td>{el.username}</td>
                          <td>{el.gender}</td>
                          <td>{calculateAge(el.born)}</td>
                          <td>{el.interested}</td>
                          <td>{el.frind_id.length}</td>
                          <td><a href={"/editUser/" + el._id} className="btn btn-warning">Edit</a></td>
                          <td><a href={"/ban/" + el._id} className="btn btn-danger">Ban</a></td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
            {/* /.row */}
          </div>
          {/* /.container-fluid */}
        </section>
        {/* /.content */}
      </div>
    </div>
  );
};
export default Profilemanu;
