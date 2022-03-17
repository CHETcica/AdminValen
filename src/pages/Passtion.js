import React, { useState, useEffect } from "react";

const Profilemanu = () => {
    const [passion, setPasstion] = useState([
        {
            "name": "country music",
            "type": "music"
        },
        {
            "name": "basketball",
            "type": "sport"
        },


    ]

    );
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
                                        {passion.map((el) => {
                                            countuser++;
                                            return (

                                                <tr>
                                                    <th>{countuser}</th>
                                                    <td>{el.name}</td>
                                                    <td>{el.type}</td>
                                                    <td><a href={"/edit/"} className="btn btn-warning">Edit</a></td>
                                                    <td><a href={"/ban/"} className="btn btn-danger">Delede</a></td>
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
