import qrcode from 'qrcode';
import { useState,useEffect } from 'react';

const SingleQr = (text)=>{
    console.log(text)
    let d
    qrcode.toDataURL(text.text,(error,da)=>{
        d = da;
          })
        return <img src={d} />
}
const GenerateQr = ()=>{
    const [url,setURL] = useState([]);
    const data = [];
    const stream = "www.google.com";
    useEffect(() => {
        
      for(let i=1;i<=10;i++){
        data[i-1] =  stream+"/"+i;
      }
        setURL(data);
    },[])
  
    
    return (
      
      <div className="App">
        <div> 
          
          <div>
          {url.map((d)=>{
            let table_no = d.split("/")
          return<>
            <h3>Table Number : {table_no[1]}</h3>
            <SingleQr text={d}/>
          </>
        })}
        </div>
        </div>
      </div>
    );
}

export default GenerateQr;