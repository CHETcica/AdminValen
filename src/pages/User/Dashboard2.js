import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";


const Profilemanu = () => {
  const [users, setUsers] = useState({
    user: [
      {
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
        password:
          "$2a$12$l90I8YxiEP/1SzDvrx159.bTR1svAxWukjnH0USIig4mTVSPZv4tm",
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
      {
        location: {
          type: "Point",
          coordinates: [100.070823, 13.58569],
        },
        userDetails: {
          taste: [],
          likes: [],
          unlikes: [],
          superlikes: [],
          likesMe: [],
          address: "42 หมู่ 4 ตำบลหนองสองห้อง อำเภอบ้านแพ้ว จังหวัดสมุทรสาคร",
        },
        userSetting: {
          MaxDistance: 10,
          MinAge: 18,
          MaxAge: 19,
        },
        _id: "6214a044e543ba936f58d2ea",
        username: "BOWcica",
        email: "supansa@gmail.com",
        password:
          "$2a$12$l90I8YxiEP/1SzDvrx159.bTR1svAxWukjnH0USIig4mTVSPZv4tm",
        gender: "women",
        born: "2002-02-05T00:00:00.000Z",
        phone: "0823636036",
        passion: ["gaming", "listening to music", "series"],
        interested: "man",
        bio: "𝐆𝐎𝐓 8💚",
        social: {
          Facebook: "Bow Supansa",
          Instagram: "𝐛𝐨𝐰𝐥.𝐢𝐧𝐠𝟐𝟎𝟎𝟐",
        },
        userimageprofile:
          "https://cdn.discordapp.com/attachments/792729018608648204/796720785279811614/135865438_224714649180167_1622948695454171292_n.jpg",
        userimage: [
          "https://cdn.discordapp.com/attachments/792729018608648204/796720785279811614/135865438_224714649180167_1622948695454171292_n.jpg",
        ],
        friendId: ["6213b95e3ee259b511fbcf3e"],
        __v: 0,
      },
      {
        location: {
          type: "Point",
          coordinates: [13.838598, 19.0398371],
        },
        userDetails: {
          unlikes: [],
          superlikes: [],
          taste: [],
          likes: [],
          unlike: [],
          likesMe: [],
        },
        _id: "6214a395e543ba936f58d2ed",
        username: "Kany",
        email: "kanzaza@gmail.com",
        password:
          "$2a$12$tqlhdJ4a7Pmor28MGCHkYuLdt/kH8ACIwvfy4iWqX8Qqu3d/gnV3u",
        gender: "gayqueen",
        born: "2000-09-09T00:00:00.000Z",
        phone: "0823636036",
        passion: ["listening to music", "series"],
        interested: "gayking",
        bio: "love wow",
        social: {
          Facebook: "kanzaza",
        },
        userimageprofile:
          "https://cdn.discordapp.com/attachments/792729018608648204/800269786050592838/profile7.jpg",
        userimage: [
          "https://cdn.discordapp.com/attachments/792729018608648204/800269786050592838/profile7.jpg",
        ],
        friendId: [],
        __v: 0,
      },
      {
        location: {
          type: "Point",
          coordinates: [13.838598, 19.0398371],
        },
        userDetails: {
          unlikes: [],
          superlikes: [],
          taste: [],
          likes: [],
          unlike: [],
          likesMe: [],
        },
        _id: "6214aab2e543ba936f58d2f1",
        username: "eve",
        email: "ฺeve@gmail.com",
        password:
          "$2a$12$4MRyVNktI1lDIcC60a/Uf.XRBTlO7ALp7EHouRCSayTXqrODU/nRy",
        gender: "dee",
        born: "2004-09-09T00:00:00.000Z",
        phone: "0823636036",
        passion: ["listening to music", "social"],
        interested: "tomboy",
        bio: "love everyone",
        social: {
          Facebook: "Runchida",
          Instagram: "evee.xvi",
          Onlyfan: "evehee",
        },
        userimageprofile:
          "https://cdn.discordapp.com/attachments/792729018608648204/800269786050592838/profile7.jpg",
        userimage: [
          "https://cdn.discordapp.com/attachments/792729018608648204/800269786050592838/profile7.jpg",
        ],
        friendId: [],
        __v: 0,
      },
      {
        location: {
          type: "Point",
          coordinates: [13.838598, 19.0398371],
        },
        userDetails: {
          unlikes: [],
          superlikes: [],
          taste: [],
          likes: [],
          unlike: [],
          likesMe: [],
        },
        _id: "6214acb4e543ba936f58d2f3",
        username: "jame",
        email: "ฺjame@gmail.com",
        password:
          "$2a$12$gqXeEW35sLlAL5.9CoTMI.l540Jgi9xHJCS4SsxmSHUvQr0Nm..5.",
        gender: "gayking",
        born: "2001-09-09T00:00:00.000Z",
        phone: "0823636036",
        passion: ["listening to music", "social"],
        interested: "gayqueen",
        bio: "LGBT",
        social: {
          Facebook: "Jamesanti",
          Instagram: "Jamesanti",
        },
        userimageprofile:
          "https://cdn.discordapp.com/attachments/792729018608648204/800269786050592838/profile7.jpg",
        userimage: [
          "https://cdn.discordapp.com/attachments/792729018608648204/800269786050592838/profile7.jpg",
        ],
        friendId: [],
        __v: 0,
      },
      {
        location: {
          type: "Point",
          coordinates: [13.838598, 19.0398371],
        },
        userDetails: {
          unlikes: [],
          superlikes: [],
          taste: [],
          likes: [],
          unlike: [],
          likesMe: [],
        },
        _id: "6214b230e543ba936f58d2f5",
        username: "fransis",
        email: "ฺfransis@gmail.com",
        password:
          "$2a$12$qm2MgYmsuMNIrVFrPM.5TOhZBn3MRVFCPpN1nigiDUeowcHIg9VLC",
        gender: "lesbian",
        born: "2000-09-02T00:00:00.000Z",
        phone: "0823636036",
        passion: ["listening to music", "social", "sport"],
        interested: "women",
        bio: "love daw",
        social: {
          Facebook: "ฺfran pannika",
          Instagram: "pannika002",
        },
        userimageprofile:
          "https://cdn.discordapp.com/attachments/792729018608648204/800269786050592838/profile2.jpg",
        userimage: [
          "https://cdn.discordapp.com/attachments/792729018608648204/800269786050592838/profile7.jpg",
        ],
        friendId: [],
        __v: 0,
      },
      {
        location: {
          type: "Point",
          coordinates: [13.838598, 19.0398371],
        },
        userDetails: {
          unlikes: [],
          superlikes: [],
          taste: [],
          likes: [],
          unlike: [],
          likesMe: [],
        },
        _id: "6214b43ee543ba936f58d2f7",
        username: "abe yamada",
        email: "Ayamada@gmail.com",
        password:
          "$2a$12$OAC.5fqqJZ8U1o0wMlJVTOglLqZ.m2C60z3U6VZ67RC6NJLV7mcfO",
        gender: "adam",
        born: "1999-09-02T00:00:00.000Z",
        phone: "0823636036",
        passion: ["game", "sport", "social"],
        interested: "tomboy",
        bio: "love daw",
        social: {
          Facebook: "ฺabe yamada",
          Instagram: "yamada",
        },
        userimageprofile:
          "https://cdn.discordapp.com/attachments/792729018608648204/800269786050592838/profile2.jpg",
        userimage: [
          "https://cdn.discordapp.com/attachments/792729018608648204/800269786050592838/profile7.jpg",
        ],
        friendId: [],
        __v: 0,
      },
      {
        location: {
          type: "Point",
          coordinates: [100.008101, 13.554159],
        },
        userDetails: {
          unlikes: [],
          superlikes: [],
          taste: [],
          likes: ["6213b95e3ee259b511fbcf3e"],
          unlike: [],
          likesMe: [],
        },
        _id: "6216ee00968ef32ce2e2b49a",
        username: "Mabwi",
        email: "ฺMa@gmail.com",
        password:
          "$2a$12$JG71MiQrX9JAsjy6YWuBSO4zKOmFC4mCZeI0oW6lkxdK84u/W9KHW",
        gender: "women",
        born: "2000-08-12T00:00:00.000Z",
        phone: "0823639856",
        passion: ["gaming", "sport", "social", "reding"],
        interested: "man",
        bio: "Hi",
        social: {
          Facebook: "ฺkvin",
          Instagram: "ฺkvin.xx",
        },
        userimageprofile:
          "https://cdn.discordapp.com/attachments/792729018608648204/954212412754653235/download.jpg",
        userimage: [
          "https://cdn.discordapp.com/attachments/792729018608648204/954212412754653235/download.jpg",
          "https://cdn.discordapp.com/attachments/792729018608648204/800269786050592838/profile4.jpg",
        ],
        friendId: [],
        __v: 0,
      },
      {
        location: {
          type: "Point",
          coordinates: [13.838598, 19.0398371],
        },
        userDetails: {
          unlikes: [],
          superlikes: [],
          taste: [],
          likes: [],
          unlike: [],
          likesMe: [],
        },
        _id: "6216ef7c968ef32ce2e2b49c",
        username: "asdfboy",
        email: "Ayamada@gmail.com",
        password:
          "$2a$12$JybwahQAaAOWfv2c2HpnPebEkRHNEc5gVUGwufxyr8plTnBDrCEl6",
        gender: "man",
        born: "2000-08-12T00:00:00.000Z",
        phone: "0813634556",
        passion: ["game", "netflix", "social", "sport", "reding", "dance"],
        interested: "women",
        bio: "Hi computer",
        social: {
          Facebook: "ฺasdfboy.m",
          Instagram: "ฺasdfboy.m",
        },
        userimageprofile:
          "https://cdn.discordapp.com/attachments/792729018608648204/800269786050592838/profile4.jpg",
        userimage: [
          "https://cdn.discordapp.com/attachments/792729018608648204/800269786050592838/profile5.jpg",
          "https://cdn.discordapp.com/attachments/792729018608648204/800269786050592838/profile4.jpg",
        ],
        friendId: [],
        __v: 0,
      },
      {
        location: {
          type: "Point",
          coordinates: [13.838598, 19.0398371],
        },
        userDetails: {
          unlikes: [],
          superlikes: [],
          taste: [],
          likes: [],
          unlike: [],
          likesMe: [],
        },
        _id: "6218562be73c780fb58669c1",
        username: "abcBoy",
        email: "Ayamada@gmail.com",
        password:
          "$2a$12$Oofpi0Qxpj64USU898zBDecgUydTubqndpL50uv..8mJ4hXl8SoEO",
        gender: "man",
        born: "2000-08-12T00:00:00.000Z",
        phone: "0813634556",
        passion: ["game", "social", "codeing"],
        interested: "women",
        bio: "Hi computer",
        social: {
          Facebook: "ฺasdfboy.m",
          Instagram: "ฺasdfboy.m",
        },
        userimageprofile:
          "https://cdn.discordapp.com/attachments/792729018608648204/800269786050592838/profile4.jpg",
        userimage: [
          "https://cdn.discordapp.com/attachments/792729018608648204/800269786050592838/profile5.jpg",
          "https://cdn.discordapp.com/attachments/792729018608648204/800269786050592838/profile4.jpg",
        ],
        friendId: [],
        __v: 0,
      },
      {
        location: {
          type: "Point",
          coordinates: [13.838598, 19.0398371],
        },
        userDetails: {
          superlikes: [],
          taste: [],
          likes: [],
          unlikes: [],
          likesMe: [],
        },
        _id: "622064789e07f17e62aab611",
        username: "ome",
        email: "Ayamada@gmail.com",
        password:
          "$2a$12$38MWR8StJMUzI62ChgnDHughaCc3nVQYR1aCPPHin97.6cO9wjiwi",
        gender: "man",
        born: "2000-08-12T00:00:00.000Z",
        phone: "0813634556",
        passion: ["listening to music", "social", "game"],
        interested: "women",
        bio: "Hi computer",
        social: {
          Facebook: "ฺasdfboy.m",
          Instagram: "ฺasdfboy.m",
        },
        userimageprofile:
          "https://cdn.discordapp.com/attachments/792729018608648204/800269761069711370/profile1.jpg",
        userimage: [
          "https://cdn.discordapp.com/attachments/792729018608648204/800269786050592838/profile5.jpg",
          "https://cdn.discordapp.com/attachments/792729018608648204/800269786050592838/profile4.jpg",
        ],
        friendId: [],
        __v: 0,
      },
      {
        location: {
          type: "Point",
          coordinates: [100.063468, 13.575197],
        },
        userDetails: {
          superlikes: [],
          higth: 170,
          weigth: 54,
          unlikes: [],
          vacen: [],
          taste: [],
          likes: [],
          unlike: [],
          likesMe: [],
        },
        _id: "623e90c8c457f7c2b1b747e1",
        username: "PeetZEED",
        email: "PeetSW@gmail.com",
        password:
          "$2a$12$jY4i0uCfXwE6XILsWiVlpukn5iP08dy4v73PnneH1U/pNHe4YyYcq",
        gender: "man",
        born: "2000-06-02T00:00:00.000Z",
        phone: "0851231245",
        passion: ["gaming", "listening to music", "coding"],
        interested: "women",
        bio: "love ",
        userimageprofile:
          "https://cdn.discordapp.com/attachments/792729018608648204/957175923713667113/148872865_2867246653517891_8561674585427784869_n.jpg",
        userimage: [
          "https://cdn.discordapp.com/attachments/792729018608648204/957176039245770772/274712473_3139148539661033_3322520890788247843_n.jpg",
        ],
        friendId: ["6214a044e543ba936f58d2ea"],
        __v: 0,
      },
      {
        location: {
          type: "Point",
          coordinates: [100.057012, 13.5717],
        },
        userDetails: {
          superlikes: [],
          higth: 183,
          weigth: 65,
          taste: [],
          likes: [],
          unlikes: [],
          likesMe: [],
        },
        _id: "623e9d7fc457f7c2b1b747e6",
        username: "none2301",
        email: "nonetawat@gmail.com",
        password:
          "$2a$12$jY4i0uCfXwE6XILsWiVlpukn5iP08dy4v73PnneH1U/pNHe4YyYcq",
        gender: "man",
        born: "2001-01-23T00:00:00.000Z",
        passion: ["gaming", "listening to music", "anime"],
        interested: "women",
        userimageprofile:
          "https://cdn.discordapp.com/attachments/792729018608648204/957206006809641001/168484861_2853393048139780_9105738521107501856_n.jpg",
        userimage: [
          "https://cdn.discordapp.com/attachments/792729018608648204/957206140536619038/134220685_2756506084495144_3004492648320422262_n.jpg",
        ],
        friendId: [],
        __v: 0,
      },
      {
        userDetails: {
          superlikes: [],
          taste: [],
          likes: [],
          unlikes: [],
          likesMe: [],
        },
        _id: "624fe76310a6f54dba62bb5b",
        username: "Taide220643",
        email: "Taide220643@gmail.com",
        password:
          "$2a$12$VZvaHcRMnVilSWag4NAske5aWpdIVS7WQxXC4PcKzdJpBkhyQSUV.",
        gender: "man",
        born: "2000-01-23T00:00:00.000Z",
        passion: ["sport", "listening to music", "movie"],
        interested: "woman",
        userimageprofile:
          "https://s.isanook.com/wo/0/ui/26/132405/gal-132405-2-20190222060200.jpg",
        userimage: [
          "https://cdn.discordapp.com/attachments/792729018608648204/957206140536619038/134220685_2756506084495144_3004492648320422262_n.jpg",
        ],
        friendId: [],
        __v: 0,
      },
      {
        userDetails: {
          superlikes: [],
          taste: [],
          likes: [],
          unlikes: [],
          likesMe: [],
        },
        _id: "624fe84610a6f54dba62bb5d",
        username: "Bas4444",
        email: "Taide220643@gmail.com",
        password:
          "$2a$12$zmzTNtpesAetOaBYV3l/euvxvWdKBRsJJKXE2xjE5pwJwwru5wGR6",
        gender: "man",
        born: "2000-01-23T00:00:00.000Z",
        passion: ["sport", "gaming", "sleeping"],
        interested: "woman",
        userimageprofile:
          "https://talk.mthai.com/storage/uploads/2019/04/25/6a1c1b898c96d673081f3e4133bfa7bc.jpeg",
        userimage: [
          "https://www.khaosod.co.th/wpapp/uploads/2017/05/15219483_10209524364804119_8126359694974138807_n-696x696.jpg",
        ],
        friendId: [],
        __v: 0,
      },
      {
        location: {
          type: "Point",
          coordinates: [100.008101, 13.554159],
        },
        userDetails: {
          superlikes: [],
          taste: [],
          likes: [],
          unlikes: [],
          likesMe: [],
        },
        _id: "624fe85d10a6f54dba62bb5f",
        username: "toey2001",
        email: "Toeyzaza@gmail.com",
        password:
          "$2a$12$BtPepmrT81iIZzx2sPrl0eOtWmTxWhtlJKGIgZpSVL3PiQ7ONK.EK",
        gender: "women",
        born: "2000-01-23T00:00:00.000Z",
        passion: ["gaming", "cooking", "running", "listening to music"],
        interested: "man",
        userimageprofile:
          "https://images.shopspotter.in.th/wp-content/uploads/2017/11/20180815/weheartit.com1_.jpg",
        userimage: [
          "https://obs.line-scdn.net/0hvw4Hd23nKVgJMQaG6k5WDzNnKjc6XTpbbQd4W1Vfd2wsUmZaYVRvNio1JW0tVG4GZwJmPyo1MmkjVmkOMVdv/w644",
        ],
        friendId: [],
        __v: 0,
      },
      {
        location: {
          type: "Point",
          coordinates: [100.008101, 13.554159],
        },
        userDetails: {
          superlikes: [],
          taste: [],
          likes: [],
          unlikes: [],
          likesMe: [],
        },
        _id: "624fe86a10a6f54dba62bb61",
        username: "ebola4545",
        email: "ebola4545@gmail.com",
        password:
          "$2a$12$Ki6a7/sEmxq8Nwaad9KEp.h5hERx8uKRCgcflxIAew1oIMwNIA52G",
        gender: "women",
        born: "2000-01-23T00:00:00.000Z",
        passion: ["fishing", "listening to music", "yoga"],
        interested: "man",
        userimageprofile:
          "https://us-fbcloud.net/wb/data/1123/1123397-img.tgnoy9.1p.jpg",
        userimage: [
          "https://us-fbcloud.net/wb/data/1144/1144391-img.tn25qb.1.jpg",
        ],
        friendId: [],
        __v: 0,
      },
      {
        userDetails: {
          superlikes: [],
          taste: [],
          likes: [],
          unlikes: [],
          likesMe: [],
        },
        _id: "624fe87710a6f54dba62bb63",
        username: "momeng488",
        email: "gatui888@gmail.com",
        password:
          "$2a$12$vC8k069eWHmuyP9Ag8uLAur6KNtikl71iIIDO2FsjQZZNdy0c8r.q",
        gender: "gayking",
        born: "2000-01-23T00:00:00.000Z",
        passion: ["Coding", "Join the club", "cycling"],
        interested: "man",
        userimageprofile:
          "https://www.bloggang.com/data/beetwin/picture/1122974747.jpg",
        userimage: ["http://board.postjung.com/data/520/520037-topic-3.jpg"],
        friendId: [],
        __v: 0,
      },
      {
        userDetails: {
          superlikes: [],
          taste: [],
          likes: [],
          unlikes: [],
          likesMe: [],
        },
        _id: "624fe88410a6f54dba62bb65",
        username: "fluk kii",
        email: "flukkii001@gmail.com",
        password:
          "$2a$12$CfpigqzfOz8jEEfNXhTfl.2NGqfedp6l2vg7JCRkDOQ6OFdvPkSEG",
        gender: "man",
        born: "2000-01-23T00:00:00.000Z",
        passion: ["listening to music", "invest", "handicraft"],
        interested: "woman",
        userimageprofile: "https://s.isanook.com/me/0/ui/0/2050/hair11.jpg",
        userimage: ["https://img.kapook.com/u/suttichai/a999995/a1.jpg"],
        friendId: [],
        __v: 0,
      },
      {
        userDetails: {
          superlikes: [],
          taste: [],
          likes: [],
          unlikes: [],
          likesMe: [],
        },
        _id: "624fe89010a6f54dba62bb67",
        username: "parinhappy2000",
        email: "parinhappy@gmail.com",
        password:
          "$2a$12$3I5fyFh1POwyS4KgzXu0pu7BrkI8BCdCWR7Jmh6/pYNLXs6a9YwHS",
        gender: "man",
        born: "2000-01-23T00:00:00.000Z",
        passion: ["dancing", "gardening", "baking"],
        interested: "woman",
        userimageprofile:
          "https://www.mendetails.com/wp-content/uploads/2017/07/Men-Style-Dress-Slimmer-Taller-t-shirt.jpg",
        userimage: [
          "https://us-fbcloud.net/wb/data/1095/1095271-img.t895m1.2.jpg",
        ],
        friendId: [],
        __v: 0,
      },
      {
        location: {
          type: "Point",
          coordinates: [100.008101, 13.554159],
        },
        userDetails: {
          superlikes: [],
          taste: [],
          likes: [],
          unlikes: [],
          likesMe: [],
        },
        _id: "624fe8ac10a6f54dba62bb69",
        username: "kathy1010",
        email: "kitty1010@gmail.com",
        password:
          "$2a$12$LQ2H02myMGdwxV2febrCZO8mYcWtKhzIbC98s5K4uQxw7HPgHpZ3G",
        gender: "man",
        born: "2000-01-23T00:00:00.000Z",
        passion: ["social", "watching movies", "acting"],
        interested: "women",
        userimageprofile:
          "https://www.mendetails.com/wp-content/uploads/2017/07/Men-Style-Dress-Slimmer-Taller-t-shirt.jpg",
        userimage: [
          "https://us-fbcloud.net/wb/data/1095/1095271-img.t895m1.2.jpg",
        ],
        friendId: [],
        __v: 0,
      },
      {
        userDetails: {
          superlikes: [],
          taste: [],
          likes: [],
          unlikes: [],
          likesMe: [],
        },
        _id: "624fe8ce10a6f54dba62bb6b",
        username: "ParnParn",
        email: "parnparn@gmail.com",
        password:
          "$2a$12$r2D7ZACdI21nZYzJWOUAzuAPzuwe/h8WvTnaBwNAHerFVDsZgB1fm",
        gender: "tomboy",
        born: "2000-01-23T00:00:00.000Z",
        passion: ["playing music", "photography", "camping"],
        interested: "dee",
        userimageprofile:
          "http://cdn-th.tunwalai.net/files/member/3157824/images/636989585847413614.jpg",
        userimage: [
          "http://cdn-th.tunwalai.net/files/member/3493906/720233232-member.jpg",
        ],
        friendId: [],
        __v: 0,
      },
      {
        userDetails: {
          superlikes: [],
          taste: [],
          likes: [],
          unlikes: [],
          likesMe: [],
        },
        _id: "624fe8e010a6f54dba62bb6d",
        username: "nonny",
        email: "nonny444@gmail.com",
        password:
          "$2a$12$8uhRkE4Dyzxsig9GwAZA8uMdKwFAMzsWmqaozlvpJh67gf1gmI7au",
        gender: "boat versatile",
        born: "2000-01-23T00:00:00.000Z",
        passion: ["drawing", "football", "acting"],
        interested: "boat versatile",
        userimageprofile:
          "https://cf.shopee.co.th/file/52f0aec304b58835a7638480f7f3bfc3",
        userimage: [
          "http://cdn-th.tunwalai.net/files/member/6275127/1095211755-member.jpg",
        ],
        friendId: [],
        __v: 0,
      },
      {
        location: {
          type: "Point",
          coordinates: [100.008101, 13.554159],
        },
        userDetails: {
          superlikes: [],
          taste: [],
          likes: [],
          unlikes: [],
          likesMe: [],
        },
        _id: "625c2faf339d6e4495b74a48",
        username: "xiaoC",
        email: "ฺxiaoC@gmail.com",
        password:
          "$2a$12$4HMbuDoqZIlW16y3ZqBxuOPv3MXqqXM.GvBtrxPdu5yzMxAFRkJuy",
        gender: "women",
        born: "2000-08-17T00:00:00.000Z",
        phone: "0823639856",
        passion: ["gaming", "sport", "social", "reding"],
        interested: "man",
        userimageprofile:
          "https://cdn.discordapp.com/attachments/662893950687772684/965268755892551740/06ce798640c2328122204ab73a753295.jpg",
        userimage: [
          "https://cdn.discordapp.com/attachments/662893950687772684/965268917897547786/eddb21a643edfd0bd2c4890708432532.jpg",
          "https://cdn.discordapp.com/attachments/792729018608648204/800269786050592838/profile4.jpg",
        ],
        friendId: [],
        __v: 0,
      },
      {
        location: {
          type: "Point",
          coordinates: [100.008101, 13.554159],
        },
        userDetails: {
          superlikes: [],
          taste: [],
          likes: ["6213b95e3ee259b511fbcf3e"],
          unlikes: [],
          likesMe: [],
          higth: 170,
          weigth: 48,
        },
        _id: "625d0d41394c92c12d8c682c",
        username: "jessica",
        email: "jessica@gmail.com",
        password:
          "$2a$12$MYEKKdNrKzwks/AOVgO5TueTFzIsA4vOr3XoRED43YX2VUYzJ1Rju",
        gender: "women",
        born: "1999-01-03T00:00:00.000Z",
        phone: "0823639856",
        passion: ["gaming", "sport", "social", "reding"],
        bio: "hello i like game",
        interested: "man",
        userimageprofile:
          "https://cdn.discordapp.com/attachments/662893950687772684/965507436574298152/17414a8fa2d210a1cd784e1def3b6189.jpg",
        userimage: [
          "https://cdn.discordapp.com/attachments/662893950687772684/965507436574298152/17414a8fa2d210a1cd784e1def3b6189.jpg",
        ],
        friendId: [],
        __v: 0,
      },
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
                      countuser++;
                      return (
                        <tr>
                          <th>{countuser}</th>
                          <td>{el.username}</td>
                          <td>{el.gender}</td>
                          <td>{calculateAge(el.born)}</td>
                          <td>{el.interested}</td>
                          <td>{el.friendId.length}</td>
                          <td>
                            <Link
                              to={"/edituser/" + el._id}
                              className="btn btn-warning"
                            >
                              Edit
                            </Link>
                          </td>
                          <td>
                            <Link
                              to={"/ban/" + el._id}
                              className="btn btn-danger"
                            >
                              Ban
                            </Link>
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
