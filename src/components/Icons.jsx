import React from 'react';
import Wind from '../assets/Wind.png';
import humidity from '../assets/humidity.png';
import visibility from '../assets/visibility.png';
import Sunrise from '../assets/Sunrise.png';
import Sunset from '../assets/Sunset.png';

const Icon = ({ src, alt, className}) => (
    <img src={src} alt={alt} className={`h-8 w-8 inline-block ${className}`} />
)

export const WindIcon = () => <Icon src={Wind} alt="Wind" className='animate-icon svg-hover'/>
export const HumidityIcon = () => <Icon src={humidity} alt="Humidity" className='powerful-pulse svg-hover'/>
export const VisibilityIcon = () => <Icon src={visibility} alt="Visibility" className='powerful-pulse svg-hover'/>
export const SunriseIcon = () => <Icon src={Sunrise} alt="Sunrise" className='powerful-pulse svg-hover'/>
export const SunsetIcon = () => <Icon src={Sunset} alt="SunSet" className='powerful-pulse svg-hover'/>