import React from 'react'
import styles from "../Homepage.module.css"
import img1 from "../../../Assets/img1.png"
import img2 from "../../../Assets/img2.png"
import LocationOnIcon from '@mui/icons-material/LocationOn';
import TimerIcon from '@mui/icons-material/Timer';
import { useNavigate } from 'react-router-dom';

const Card = () => {
    let navigate = useNavigate();
  return (
    <div className={styles.card}>
        <h1 className={styles.head}>Store Name</h1>
        <div style={{display:"flex", width:"100%", justifyContent:"center", marginTop:"8px"}}>
            <div>
              <img src={img1} alt="counters" className={styles.icons}/><div className={styles.roundNo}>3</div>
                <div style={{textAlign:"center", width:"100%"}}>Counters</div>
            </div>
            <div>
              <img src={img2} alt="counters" className={styles.icons}/><div className={styles.roundNo}>15</div>
                <div style={{textAlign:"center", width:"100%"}}>Customers</div>
            </div>
        </div>
        <div style={{textAlign:"center", marginTop:"8px"}}>
          <LocationOnIcon fontSize='small' style={{position:"relative",top:"4px", color:"#192839"}}/> Address of the store here...
        </div>
        <div style={{textAlign:"center", marginTop:"4px", color:"#304D6D", fontSize:"12px"}}>
          <TimerIcon fontSize='small' style={{position:"relative",top:"6px", color:"#192839"}}/> Waiting Time
        </div>
        <div className={styles.yellowCapsule}>
          1hr 25min 03sec
        </div>
        <button className={styles.enterButton} onClick={()=>navigate("/store")}>
          Enter Queue
        </button>
    </div>
  )
}

export default Card