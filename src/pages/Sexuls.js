import React, { useState, useEffect } from "react";

const Profilemanu = () => {
  const [sexuls, setSexuls] = useState([{
  "_id": {
    "$oid": "623e63d82a15fd3fba03ee82"
  },
  "name": "man",
  "definitionEN": "with penis like to dress like a man have a male mind and love women",
  "definitionTH": "คนที่มีอวัยวะเพศชาย ชอบแต่งตัวในแบบผู้ชาย มีจิตใจเป็นเพศชาย และรักใคร่ผู้หญิง",
  "__v": 0
},{
  "_id": {
    "$oid": "623e64e02a15fd3fba03ee84"
  },
  "name": "women",
  "definitionEN": "The female genitalia likes to dress like a woman, has a woman's heart, loves men.",
  "definitionTH": "คนที่มีอวัยวะเพศหญิง ชอบแต่งตัวในแบบผู้หญิง มีจิตใจเป็นเพศหญิง และรักใคร่ผู้ชาย",
  "__v": 0
},{
  "_id": {
    "$oid": "623e65d42a15fd3fba03ee86"
  },
  "name": "tomboy",
  "definitionEN": "a person with a female genitalia like to dress like a man have a male mind and love women and dee.",
  "definitionTH": "คนที่มีอวัยวะเพศหญิง ชอบแต่งตัวในแบบผู้ชาย มีจิตใจเป็นเพศชาย และรักใคร่ผู้หญิงและดี้",
  "__v": 0
},{
  "_id": {
    "$oid": "623e66842a15fd3fba03ee88"
  },
  "name": "dee",
  "definitionEN": " a person with a female genitalia pretend to be a woman but loving tom.",
  "definitionTH": "คือ คนที่มีอวัยวะเพศหญิง ทำตัวเป็นผู้หญิง แต่รักใคร่ทอม",
  "__v": 0
},{
  "_id": {
    "$oid": "623e67422a15fd3fba03ee8a"
  },
  "name": "tomgay",
  "definitionEN": "a person with a female genitalia like to dress like a man But can love both women, Tom and Dee..",
  "definitionTH": "คนที่มีอวัยวะเพศหญิง ชอบแต่งตัวเป็นผู้ชาย แต่รักใคร่ได้ทั้งผู้หญิง ทอม และดี้",
  "__v": 0
},{
  "_id": {
    "$oid": "623e67842a15fd3fba03ee8c"
  },
  "name": "tomgayking",
  "definitionEN": "a person with a female genitalia like to dress like a man but only in love with Tom like to be offensive.",
  "definitionTH": "คือ คนที่มีอวัยวะเพศหญิง ชอบแต่งตัวเป็นผู้ชาย แต่รักใคร่เฉพาะทอม โดยชอบเป็นฝ่ายรุก",
  "__v": 0
},{
  "_id": {
    "$oid": "623e67b92a15fd3fba03ee8e"
  },
  "name": "tomgayqueen",
  "definitionEN": "a person with a female genitalia like to dress like a man but only love Tom like being the receiver.",
  "definitionTH": "คือ คนที่มีอวัยวะเพศหญิง ชอบแต่งตัวเป็นผู้ชาย แต่รักใคร่เฉพาะทอม โดยชอบเป็นฝ่ายรับ",
  "__v": 0
},{
  "_id": {
    "$oid": "623e67f32a15fd3fba03ee90"
  },
  "name": "tomgaytwoways",
  "definitionEN": "a person with a female genitalia like to dress like a man but only in love with Tom like being both offensive and defensive.",
  "definitionTH": "คือ คนที่มีอวัยวะเพศหญิง ชอบแต่งตัวเป็นผู้ชาย แต่รักใคร่เฉพาะทอม โดยชอบเป็นทั้งฝ่ายรุกและรับ",
  "__v": 0
},{
  "_id": {
    "$oid": "623e68be2a15fd3fba03ee92"
  },
  "name": "gayking",
  "definitionEN": "a man with a penis act like a man but love men and like to be offensive.",
  "definitionTH": "คือ คนที่มีอวัยวะเพศชาย ทำตัวเป็นผู้ชาย แต่รักใคร่ผู้ชาย และชอบเป็นฝ่ายรุก",
  "__v": 0
},{
  "_id": {
    "$oid": "623e69a02a15fd3fba03ee94"
  },
  "name": "gayqueen",
  "definitionEN": "a man with a penis act like a man There may be a woman's insanity but love men and likes to be the defensive.",
  "definitionTH": "คือ คนที่มีอวัยวะเพศชาย ทำตัวเป็นผู้ชาย อาจมีจริตของผู้หญิง แต่รักใคร่ผู้ชาย และชอบเป็นฝ่ายรับ",
  "__v": 0
},{
  "_id": {
    "$oid": "623e69cb2a15fd3fba03ee96"
  },
  "name": "ฺboat versatile ",
  "definitionEN": "is a man with a penis act like a man Can love women, gay kings and gay queens, except bisexual, and can be both offensive and defensive.",
  "definitionTH": "คือ คนที่มีอวัยวะเพศชาย ทำตัวเป็นผู้ชาย รักใคร่ได้ทั้งผู้หญิง เกย์คิง และเกย์ควีน ยกเว้นกะเทย และเป็นได้ทั้งฝ่ายรุกและรับ",
  "__v": 0
},{
  "_id": {
    "$oid": "623e6a442a15fd3fba03ee98"
  },
  "name": "ฺbise-xual",
  "definitionEN": "is a person with a female genitalia pretend to be a woman but loving both toms, lesbians and men",
  "definitionTH": "คือ คนที่มีอวัยวะเพศหญิง ทำตัวเป็นผู้หญิง แต่รักใคร่ทั้งทอม เลสเบี้ยน และผู้ชาย",
  "__v": 0
},{
  "_id": {
    "$oid": "623e6a742a15fd3fba03ee9a"
  },
  "name": "lesbian",
  "definitionEN": "is a person with a female genitalia pretend to be a woman but love women together",
  "definitionTH": "คือ คนที่มีอวัยวะเพศหญิง ทำตัวเป็นผู้หญิง แต่รักใคร่ผู้หญิงด้วยกัน",
  "__v": 0
},{
  "_id": {
    "$oid": "623e6b462a15fd3fba03ee9c"
  },
  "name": "faggot",
  "definitionEN": "is a man with a penis pretend to be a woman Affectionate men",
  "definitionTH": "คือ คนที่มีอวัยวะเพศชาย ทำตัวเป็นผู้หญิง รักใคร่ผู้ชาย",
  "__v": 0
},{
  "_id": {
    "$oid": "623e6b7d2a15fd3fba03ee9e"
  },
  "name": "adam",
  "definitionEN": "is a man with a penis act like a man but loving tom",
  "definitionTH": "คือ คนที่มีอวัยวะเพศชาย ทำตัวเป็นผู้ชาย แต่รักใคร่ทอม",
  "__v": 0
},{
  "_id": {
    "$oid": "623e6b9c2a15fd3fba03eea0"
  },
  "name": "angie",
  "definitionEN": "is a man with a penis pretend to be a woman but loving tom",
  "definitionTH": "คือ คนที่มีอวัยวะเพศชาย ทำตัวเป็นผู้หญิง แต่รักใคร่ทอม",
  "__v": 0
},{
  "_id": {
    "$oid": "623e6bd62a15fd3fba03eea2"
  },
  "name": "cherry",
  "definitionEN": "is a person with a female genitalia pretend to be a woman but love gay and bisexual",
  "definitionTH": "คือ คนที่มีอวัยวะเพศหญิง ทำตัวเป็นผู้หญิง แต่รักใคร่เกย์และกะเทย",
  "__v": 0
},{
  "_id": {
    "$oid": "623e6d842a15fd3fba03eea4"
  },
  "name": "triad",
  "definitionEN": "is a person with a female genitalia pretend to be a woman but can love both lesbians, toms, and men",
  "definitionTH": "คือ คนที่มีอวัยวะเพศหญิง ทำตัวเป็นผู้หญิง แต่รักใคร่ได้ทั้งเลสเบี้ยน ทอม และผู้ชาย",
  "__v": 0
},{
  "_id": {
    "$oid": "623e6dc22a15fd3fba03eea6"
  },
  "name": "transwoman",
  "definitionEN": "is a man with a penis but has a female mind and has undergone a sex change to a woman",
  "definitionTH": "คือ คนที่มีอวัยวะเพศชาย แต่มีจิตใจเป็นหญิง และได้ผ่านการแปลงเพศเป็นผู้หญิงแล้ว",
  "__v": 0
},{
  "_id": {
    "$oid": "623e6e092a15fd3fba03eea8"
  },
  "name": "transman",
  "definitionEN": "is a person with a female genitalia but with a masculine mind and has undergone a sex change to a man",
  "definitionTH": "คือ คนที่มีอวัยวะเพศหญิง แต่มีจิตใจเป็นผู้ชาย และได้ผ่านการแปลงเพศเป็นผู้ชายแล้ว",
  "__v": 0
}]);
  let countuser = 0;
 
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
                    <h3>1</h3>
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
                    <h3>2</h3>
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
                      <th>Name</th>
                      <th>Type</th>
                    </tr>
                  </thead>
                  <tbody>
                    {sexuls.map((el) => {
                      countuser++;
                      return (
                        <tr>
                          <th>{countuser}</th>
                          <td>{el.name}</td>
                          <td>{el.definitionTH}</td>
                          <td>
                            <a
                              href={"/editpassion"}
                              className="btn btn-warning"
                            >
                              Edit
                            </a>
                          </td>
                          <td>
                            <a href={"/ban/"} className="btn btn-danger">
                              Delete
                            </a>
                          </td>
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
