import { useState } from 'react';
import './findajob.scss';

const FindAJob = () => {
    const [locationLink, setLocationLink] = useState('d/embed?mid=1BhqR8eqSSOrMISLIzNr3s6hJZ4c&hl=en&ehbc=2E312F');
  return (
    <div>
        <div className='collegeBox'>
            <span onClick={() => {setLocationLink('d/embed?mid=1BhqR8eqSSOrMISLIzNr3s6hJZ4c&hl=en&ehbc=2E312F')}}>UCLA</span>
            <span onClick={() => {setLocationLink("embed?pb=!1m18!1m12!1m3!1d48655.460945188286!2d-74.73128914833067!3d40.3430933795749!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c3e6d8cd98b6e9%3A0x2ba7ed6fa90024f!2sPrinceton%20University!5e0!3m2!1sen!2sus!4v1700455792298!5m2!1sen!2sus")}}>Princeton</span>
            <span onClick={() => {setLocationLink('embed?pb=!1m18!1m12!1m3!1d11454.365230082929!2d-71.12143125642586!3d42.37447571351966!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e377441a8d55fb%3A0xbb52d5788cb22d89!2sHarvard%20University%20Graduate%20School%20Of%20Design!5e0!3m2!1sen!2sus!4v1700455301855!5m2!1sen!2sus')}}>Harvard</span>
            <span onClick={() => {setLocationLink("embed?pb=!1m18!1m12!1m3!1d3168.3997619172346!2d-122.17263492413275!3d37.427659972074906!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fbb2a678bea9d%3A0x29cdf01a44fc687f!2sStanford%20University!5e0!3m2!1sen!2sus!4v1700455943648!5m2!1sen!2sus")}}>Stanford</span>
         </div>
         <div className='contactsDescription'>
            <iframe src={`https://www.google.com/maps/${locationLink}`} width="80%" height="480"></iframe> 
        </div>
    </div>
  )
}

export default FindAJob

