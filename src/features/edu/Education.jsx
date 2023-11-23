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
import Coding from '../../images/programming.webp';
import Nurse from '../../images/Nurse.jpg';
import Teaching from '../../images/teaching.jpeg';
import Stanford from '../../images/stanford.jpg';
import UCLA from '../../images/UCLA.jpg';
import Harvard from '../../images/HarvardUniversity.jpg';
import Princeton from '../../images/princeton.jpg';
import Bentley from '../../images/BentleyUniversity.webp';


export function Education() {
  // const count = useSelector();
  // const dispatch = useDispatch();

const carouselItems = [
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
  {
    title: "Nurse",
    image: Nurse,
  },
]

const carouselItems2 = [
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
  {
    title: "Bentley",
    image: Bentley,
  },
]

  return (
    <div>
      <HomeCarousel carouselItems={carouselItems} link={'/career'}/>
      <Info title={'Career Info'} text={'This career page sdfghuuhgtfd rfguuhtfrhuiuy ftfghujijhugyjdcfghji gfdfghjhjg fhjkjnbvchjkljhuitr'} />
      <HomeCarousel carouselItems={carouselItems2} link={'/college'} />
      <Info title={'College Info'} text={'This College page sdfghuuhgtfd rfguuhtfrhuiuy ftfghujijhugyjdcfghji gfdfghjhjg fhjkjnbvchjkljhuitr'} />
    </div>
  );
}
