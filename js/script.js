// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Benjamin
// Created on: Mar 2025
// This file contains the JS functions for index.html


function myButtonClicked() {
  // input
  const height = document.getElementById("height-input").value
  const lenght = document.getElementById("width-input").value
  const width = document.getElementById("length-input").value
  // area and perimeter
  const area = ((height * lenght * width) / 3);

  // displaying the answer of the area and perimeter
  document.getElementById("answer").innerHTML = "The Volume is: " + area + "mm²";
}
