"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import "../styles/gameBoard.css";
axios.defaults.baseURL = "http://localhost:8080";

export default function Game() {
  const [gameBoard, setGameBoard] = useState([]);

  useEffect(() => {
    axios.get("/game").then((gameBoard) => {
      if (gameBoard) {
        console.log(gameBoard.data);
        let i = 1;
        gameBoard.data.map((gb, index) => {
          console.log(index);
          if (gb.road == "home") {
            document.getElementsByClassName(
              `${gb.color}-home-${i}`
            )[0].style.backgroundColor = `${gb.color}`;
            if ((index + 1) % 4 == 0) i++;
          }

          if (gb.road == "main") {
            document.getElementsByClassName(
              `pos-${gb.position}`
            )[0].style.backgroundColor = `${gb.color}`;
          }

          if (
            gb.road == "blue-road" ||
            gb.road == "red-road" ||
            gb.road == "green-road" ||
            gb.road == "yellow-road"
          ) {
            document.getElementsByClassName(
              `${gb.road}-${gb.position}`
            )[0].style.backgroundColor = `${gb.color}`;
          }
        });
      }
    });
  }, []);

  return (
    <div className="board">
      <div className="row">
        <div className="red-home">
          <div className="white">
            <div className="home">
              <div className="chip red-home-1"></div>
            </div>
            <div className="home">
              <div className="chip red-home-2"></div>
            </div>
            <div className="home">
              <div className="chip red-home-3"></div>
            </div>
            <div className="home">
              <div className="chip red-home-4"></div>
            </div>
          </div>
        </div>
        <div className="h-[240] w-[120]">
          <div className="row">
            <div className="box">
              <div className="chip pos-23"></div>
            </div>
            <div className="box">
              <div className="chip pos-24"></div>
            </div>
            <div className="box">
              <div className="chip pos-25"></div>
            </div>
          </div>
          <div className="row">
            <div className="box">
              <div className="chip pos-22"></div>
            </div>
            <div className="box green green-road-1">
              <div className="chip"></div>
            </div>
            <div className="box green">
              <div className="chip pos-26"></div>
            </div>
          </div>
          <div className="row">
            <div className="box">
              <div className="chip pos-21"></div>
            </div>
            <div className="box green green-road-2">
              <div className="chip"></div>
            </div>
            <div className="box">
              <div className="chip pos-27"></div>
            </div>
          </div>
          <div className="row">
            <div className="box">
              <div className="chip pos-20"></div>
            </div>
            <div className="box green green-road-3">
              <div className="chip"></div>
            </div>
            <div className="box">
              <div className="chip pos-28"></div>
            </div>
          </div>
          <div className="row">
            <div className="box">
              <div className="chip pos-19"></div>
            </div>
            <div className="box green green-road-4">
              <div className="chip"></div>
            </div>
            <div className="box">
              <div className="chip pos-29"></div>
            </div>
          </div>
          <div className="row">
            <div className="box">
              <div className="chip pos-18"></div>
            </div>
            <div className="box green green-road-5">
              <div className="chip"></div>
            </div>
            <div className="box">
              <div className="chip pos-30"></div>
            </div>
          </div>
        </div>
        <div className="green-home h-[240px] w-[240px]">
          <div className="white">
            <div className="home">
              <div className="chip green-home-1"></div>
            </div>
            <div className="home">
              <div className="chip green-home-2"></div>
            </div>
            <div className="home">
              <div className="chip green-home-3"></div>
            </div>
            <div className="home">
              <div className="chip green-home-4"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div>
          <div className="row">
            <div className="box ">
              <div className="chip pos-12"></div>
            </div>
            <div className="box red">
              <div className="chip pos-13"></div>
            </div>
            <div className="box">
              <div className="chip pos-14"></div>
            </div>
            <div className="box">
              <div className="chip  pos-15"></div>
            </div>
            <div className="box">
              <div className="chip pos-16"></div>
            </div>
            <div className="box">
              <div className="chip pos-17"></div>
            </div>
          </div>
          <div className="row">
            <div className="box">
              <div className="chip pos-11"></div>
            </div>
            <div className="box red red-road-1">
              <div className="chip"></div>
            </div>
            <div className="box red red-road-2">
              <div className="chip"></div>
            </div>
            <div className="box red red-road-3">
              <div className="chip"></div>
            </div>
            <div className="box red red-road-4">
              <div className="chip"></div>
            </div>
            <div className="box red red-road-5">
              <div className="chip"></div>
            </div>
          </div>
          <div className="row">
            <div className="box">
              <div className="chip pos-10"></div>
            </div>
            <div className="box ">
              <div className="chip pos-9"></div>
            </div>
            <div className="box ">
              <div className="chip pos-8"></div>
            </div>
            <div className="box ">
              <div className="chip pos-7"></div>
            </div>
            <div className="box ">
              <div className="chip pos-6"></div>
            </div>
            <div className="box">
              <div className="chip pos-5"></div>
            </div>
          </div>
        </div>
        <div className="winning-section">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div>
          <div className="row">
            <div className="box">
              <div className="chip pos-31"></div>
            </div>
            <div className="box">
              <div className="chip pos-32"></div>
            </div>
            <div className="box">
              <div className="chip pos-33"></div>
            </div>
            <div className="box">
              <div className="chip pos-34"></div>
            </div>
            <div className="box">
              <div className="chip pos-35"></div>
            </div>
            <div className="box">
              <div className="chip pos-36"></div>
            </div>
          </div>
          <div className="row">
            <div className="box yellow yellow-road-5">
              <div className="chip"></div>
            </div>
            <div className="box yellow yellow-road-4">
              <div className="chip"></div>
            </div>
            <div className="box yellow yellow-road-3">
              <div className="chip"></div>
            </div>
            <div className="box yellow yellow-road-2">
              <div className="chip"></div>
            </div>
            <div className="box yellow yellow-road-1">
              <div className="chip"></div>
            </div>
            <div className="box">
              <div className="chip pos-37"></div>
            </div>
          </div>
          <div className="row">
            <div className="box">
              <div className="chip pos-43"></div>
            </div>
            <div className="box">
              <div className="chip pos-42"></div>
            </div>
            <div className="box">
              <div className="chip pos-41"></div>
            </div>
            <div className="box">
              <div className="chip pos-40"></div>
            </div>
            <div className="box yellow">
              <div className="chip pos-39"></div>
            </div>
            <div className="box">
              <div className="chip pos-38"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="blue-home h-[240px] w-[240px]">
          {" "}
          <div className="white">
            <div className="home">
              <div className="chip blue-home-1"></div>
            </div>
            <div className="home">
              <div className="chip blue-home-2"></div>
            </div>
            <div className="home">
              <div className="chip blue-home-3"></div>
            </div>
            <div className="home">
              <div className="chip blue-home-4"></div>
            </div>
          </div>
        </div>
        <div>
          <div className="row">
            <div className="box">
              <div className="chip pos-5"></div>
            </div>
            <div className="box blue blue-road-5">
              <div className="chip"></div>
            </div>
            <div className="box">
              <div className="chip pos-44"></div>
            </div>
          </div>
          <div className="row">
            <div className="box">
              <div className="chip pos-4"></div>
            </div>
            <div className="box blue blue-road-4">
              <div className="chip"></div>
            </div>
            <div className="box">
              <div className="chip pos-45"></div>
            </div>
          </div>
          <div className="row">
            <div className="box">
              <div className="chip pos-3"></div>
            </div>
            <div className="box blue blue-road-3">
              <div className="chip"></div>
            </div>
            <div className="box">
              <div className="chip pos-46"></div>
            </div>
          </div>
          <div className="row">
            <div className="box">
              <div className="chip pos-2"></div>
            </div>
            <div className="box blue blue-road-2">
              <div className="chip"></div>
            </div>
            <div className="box">
              <div className="chip pos-47"></div>
            </div>
          </div>
          <div className="row">
            <div className="box blue">
              <div className="chip pos-1"></div>
            </div>
            <div className="box blue blue-road-1">
              <div className="chip"></div>
            </div>
            <div className="box">
              <div className="chip pos-48"></div>
            </div>
          </div>
          <div className="row">
            <div className="box">
              <div className="chip pos-51"></div>
            </div>
            <div className="box">
              <div className="chip pos-50"></div>
            </div>
            <div className="box">
              <div className="chip pos-49"></div>
            </div>
          </div>
        </div>
        <div className="yellow-home  h-[240px] w-[240px]">
          {" "}
          <div className="white">
            <div className="home">
              <div className="chip yellow-home-1"></div>
            </div>
            <div className="home">
              <div className="chip yellow-home-2"></div>
            </div>
            <div className="home">
              <div className="chip yellow-home-3"></div>
            </div>
            <div className="home">
              <div className="chip yellow-home-4"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
