import React from 'react'
import QrReader from 'react-qr-scanner'


const QrScanner = () => {
  return (
      <>
        <div>QrScanner</div>

        <QrReader
            delay={100}
            style={{height: 240,
                    width: 320,
                    }}
            onError={err=>{console.error(err)}}
            onScan={result=>{console.log(result)}}
            />
      </>
    
  )
}

export default QrScanner