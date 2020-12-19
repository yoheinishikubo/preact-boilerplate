import { useEffect, useState, useRef } from "preact/hooks";
import style from "./style";
import { Component } from "preact";
import { StoreContainer } from "../store";
import {
  Textarea,
  TextInput,
  Field,
  Button,
  Control,
  Card,
  Progress
} from "preact-bulma";

const getInputValue = name => {
  const input = document.querySelector(`[name=${name}]`) || {};
  return input.value;
};

const Main = () => {
  const store = StoreContainer.useContainer();

  return <div>Hello</div>

};

export default Main;