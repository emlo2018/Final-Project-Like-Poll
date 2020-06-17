import React from 'react'
import styled from 'styled-components/macro'

export const ImgWrapper = styled.div`
  position: relative;
  width: 170px;
  height: 170px;
  border-radius: 50%;
`

export const ProfilePic = styled.img`
  width: 170px;
  height: 170px;
  border-radius: 50%;
  object-fit: cover;
  ${ImgWrapper}:hover & {
    filter: brightness(20%);
  }
`
export const Thumbnail = styled.img`
  width: 120px;
  height: 120px;
  object-fit: cover;
  ${ImgWrapper}:hover & {
    filter: brightness(20%);
  }
  @media (min-width: 575px) { 
    width: 266px;
    height: 266px; 
  }
`

export const ThemeImage = styled.img`
  width: 100%;
  height: 10rem;
  display: block;
  object-fit: cover;
  position: relative;
  filter: brightness(80%);
  @media (min-width: 575px) { 
    width: 60%; 
  }
`

export const PicText = styled.button`
position: absolute;
display: none;
top: 50%;
z-index: 5;
color: white;
background: none;
border: none;
padding: 10px;
font-size: 20px;
cursor: pointer;
${ImgWrapper}:hover & {
  display: block;
}
`

export const SmallImage = styled.img`
  width: 5em;
  height: 5em; 
  object-fit: cover;
  ${ImgWrapper}:hover & {
    filter: brightness(20%);
  }
  @media (min-width: 575px) { 
    width: 150px;
    height: 150px; 
  }
`
export const LinkText = styled.button`
position: absolute;

top: 20%;
z-index: 5;
color: white;
background: none;
border: none;
font-size: 12px;
cursor: pointer;
${ImgWrapper}:hover & {
  display: block;
}
@media (min-width: 575px) { 
  top: 40%;
  left: 20%; 
}
`
export const ThumbWrapper = styled.div`
  position: relative;
  width: 33.3%;
  height: 8em;
`

export const LikeThumbs = styled.div`
  background-image: url(${props => props.img});
  background-size: cover;
  width: 100%;
  height: 100%;
  display: block;
  &:hover {
    filter: brightness(80%);
  }
`
export const ThumbText = styled.p`
position: absolute;
display: none;
top: 30%;
padding-left: 1em;
color: white;
background: none;
border: none;
font-size: 1.5em;
font-weight: 400;
cursor: pointer;
${LikeThumbs}:hover & {
  display: block;
}
`


// I'm saving this in case it's not possible to have divs in a row
// export const LikeThumbs = styled.img`
//   width: 10em;
//   height: 10em;
//   object-fit: cover;
//   &:hover {
//     filter: brightness(80%);
//   }
// `
