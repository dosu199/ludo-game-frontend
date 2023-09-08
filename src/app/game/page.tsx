"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import "../styles/gameBoard.css";
axios.defaults.baseURL = "http://localhost:8080";

export default function Game() {
  const [gameBoard, setGameBoard] = useState([]);

  /*function draw(gameBoard) {
    gameBoard.map((gb) => {
      console.log(gb);
    });
  }*/

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
            <div className="red-home-1"></div>
            <div className="red-home-2"></div>
            <div className="red-home-3"></div>
            <div className="red-home-4"></div>
          </div>
        </div>
        <div className="h-[240] w-[120]">
          <div className="row">
            <div className="box pos-23"></div>
            <div className="box pos-24"></div>
            <div className="box pos-25"></div>
          </div>
          <div className="row">
            <div className="box pos-22"></div>
            <div className="box green green-road-1"></div>
            <div className="box green pos-26"></div>
          </div>
          <div className="row">
            <div className="box pos-21"></div>
            <div className="box green green-road-2"></div>
            <div className="box pos-27"></div>
          </div>
          <div className="row">
            <div className="box pos-20"></div>
            <div className="box green green-road-3"></div>
            <div className="box pos-28"></div>
          </div>
          <div className="row">
            <div className="box pos-19"></div>
            <div className="box green green-road-4"></div>
            <div className="box pos-29"></div>
          </div>
          <div className="row">
            <div className="box pos-18"></div>
            <div className="box green green-road-5"></div>
            <div className="box pos-30"></div>
          </div>
        </div>
        <div className="green-home h-[240px] w-[240px]">
          <div className="white">
            <div className="green-home-1"></div>
            <div className="green-home-2"></div>
            <div className="green-home-3"></div>
            <div className="green-home-4"></div>
          </div>
        </div>
      </div>

      <div className="row">
        <div>
          <div className="row">
            <div className="box pos-12"></div>
            <div className="box red pos-13"></div>
            <div className="box pos-14"></div>
            <div className="box pos-15"></div>
            <div className="box pos-16"></div>
            <div className="box pos-17"></div>
          </div>
          <div className="row">
            <div className="box pos-11"></div>
            <div className="box red red-road-1"></div>
            <div className="box red red-road-2"></div>
            <div className="box red red-road-3"></div>
            <div className="box red red-road-4"></div>
            <div className="box red red-road-5"></div>
          </div>
          <div className="row">
            <div className="box pos-10"></div>
            <div className="box pos-9"></div>
            <div className="box pos-8"></div>
            <div className="box pos-7"></div>
            <div className="box pos-6"></div>
            <div className="box pos-5"></div>
          </div>
        </div>
        <div className="winning-section"></div>
        <div>
          <div className="row">
            <div className="box pos-31"></div>
            <div className="box pos-32"></div>
            <div className="box pos-33"></div>
            <div className="box pos-34"></div>
            <div className="box pos-35"></div>
            <div className="box pos-36"></div>
          </div>
          <div className="row">
            <div className="box yellow yellow-road-5"></div>
            <div className="box yellow yellow-road-4"></div>
            <div className="box yellow yellow-road-3"></div>
            <div className="box yellow yellow-road-2"></div>
            <div className="box yellow yellow-road-1"></div>
            <div className="box pos-37"></div>
          </div>
          <div className="row">
            <div className="box pos-43"></div>
            <div className="box pos-42"></div>
            <div className="box pos-41"></div>
            <div className="box pos-40"></div>
            <div className="box yellow pos-39"></div>
            <div className="box pos-38"></div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="blue-home h-[240px] w-[240px]">
          {" "}
          <div className="white">
            <div className="blue-home-1"></div>
            <div className="blue-home-2"></div>
            <div className="blue-home-3"></div>
            <div className="blue-home-4"></div>
          </div>
        </div>
        <div>
          <div className="row">
            <div className="box pos-5"></div>
            <div className="box blue blue-road-5"></div>
            <div className="box pos-44"></div>
          </div>
          <div className="row">
            <div className="box pos-4"></div>
            <div className="box blue blue-road-4"></div>
            <div className="box pos-45"></div>
          </div>
          <div className="row">
            <div className="box pos-3"></div>
            <div className="box blue blue-road-3"></div>
            <div className="box pos-46"></div>
          </div>
          <div className="row">
            <div className="box pos-2"></div>
            <div className="box blue blue-road-2"></div>
            <div className="box pos-47"></div>
          </div>
          <div className="row">
            <div className="box blue pos-1"></div>
            <div className="box blue blue-road-1"></div>
            <div className="box pos-48"></div>
          </div>
          <div className="row">
            <div className="box pos-51"></div>
            <div className="box pos-50"></div>
            <div className="box pos-49"></div>
          </div>
        </div>
        <div className="yellow-home  h-[240px] w-[240px]">
          {" "}
          <div className="white">
            <div className="yellow-home-1"></div>
            <div className="yellow-home-2"></div>
            <div className="yellow-home-3"></div>
            <div className="yellow-home-4"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
