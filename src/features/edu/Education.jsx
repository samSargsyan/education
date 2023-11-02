import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  incrementByAmount,
} from './eduSlice';
import './edu.scss';
import HomeCarousel from '../../components/homeCarousel/HomeCarousel';
import Info from '../../components/info/Info';
import Cashier from '../../images/cahier.webp';
import Engeneer from '../../images/engeneering.jpg';
import Coding from '../../images/programming.avif';
import Teaching from '../../images/teaching.jpeg';
import Stanford from '../../images/stanford.jpg';
import UCLA from '../../images/UCLA.jpg';
import Harvard from '../../images/HarvardUniversity.jpg';
import Princeton from '../../images/princeton.jpg';


export function Education() {
  // const count = useSelector();
  // const dispatch = useDispatch();

const carousleItems = [
  {
    title: "Cashier",
    image: Cashier,
  },
  {
    title: "Teacher",
    image: Teaching,
  },
  {
    title: "Engineer",
    image: Engeneer,
  },
  {
    title: "Programmer",
    image: Coding,
  },
]

const carousleItems2 = [
  {
    title: "Stanford",
    image: Stanford,
  },
  {
    title: "UCLA",
    image: UCLA,
  },
  {
    title: "Princeton",
    image: Princeton,
  },
  {
    title: "Harvard",
    image: Harvard,
  },
]

  return (
    <div>
      <HomeCarousel carousleItems={carousleItems} />
      <Info title={'Career Info'} text={'This career page sdfghuuhgtfd rfguuhtfrhuiuy ftfghujijhugyjdcfghji gfdfghjhjg fhjkjnbvchjkljhuitr'} />
      <HomeCarousel carousleItems={carousleItems2} />
      <Info title={'College Info'} text={'This College page sdfghuuhgtfd rfguuhtfrhuiuy ftfghujijhugyjdcfghji gfdfghjhjg fhjkjnbvchjkljhuitr'} />
    </div>
  );
}
