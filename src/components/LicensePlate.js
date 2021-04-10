import React from 'react'

export const VehicleType = {
  PRIVATE: '#0099FF',
  TAXI: '#FFA343',
  TRUCK: '#FF5733',
  BUSS: '#C4C4C4',
  TOURISIM: '#CBB58B',
  DIPLOMATIC: '#60AC54',
  CUSTOMS: '#F7CC5E'
}

function LicensePlate ({
  vehicle = VehicleType.PRIVATE,
  width = 200,
  number = ''
}) {
  const mainDiv = {
    width: `${width}px`
  }
  const topDiv = {
    boxSizing: 'border-box',
    borderTopLeftRadius: `${width / 30}px`,
    borderTopRightRadius: `${width / 30}px`,
    border: `${width / 100}px solid`,
    borderBottom: `${width / 200}px solid`,
    width: '100%',
    paddingTop: '5%',
    paddingBottom: '16%',
    paddingLeft: '5%',
    paddingRight: '5%',
    background: `${vehicle}`,
    position: 'relative'
  }
  const bottomDiv = {
    boxSizing: 'border-box',
    borderBottomLeftRadius: `${width / 30}px`,
    borderBottomRightRadius: `${width / 30}px`,
    border: `${width / 100}px solid`,
    borderTop: `${width / 200}px solid`,
    width: '100%',
    paddingTop: '5%',
    paddingBottom: '25%',
    paddingLeft: '5%',
    paddingRight: '5%',
    position: 'relative'
  }

  const countryEng = {
    fontWeight: 'bold',
    float: 'left',
    fontSize: width / 10
  }

  const countryAr = {
    fontWeight: 'bold',
    float: 'right',
    fontSize: width / 11
  }

  const lettersAr = {
    float: 'right',
    fontSize: width / 7
  }

  const digitsAr = {
    fontWeight: 'bold',
    float: 'left',
    fontSize: width / 7
  }

  return (
    <div style={mainDiv}>
      <div style={topDiv}>
        <div style={countryEng}>EGYPT</div>
        <div style={countryAr}>مصر</div>
      </div>
      <div style={bottomDiv}>
        <div style={digitsAr}>{digits(number)}</div>
        <div style={lettersAr}>{letters(number)}</div>
      </div>
    </div>
  )
}

// ِExtract digits
function digits (text) {
  return text.replace(/\s/g, '').match('[\u0660-\u0669]+')
}

// ِExtract individual characters and join them as seperated letters
function letters (text) {
  let chars = text.replace(/\s/g, '').match(/[^\u0660-\u0669]/g)
  return chars ? chars.join('\u200C') : ''
}

export default LicensePlate
