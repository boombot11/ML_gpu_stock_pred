export default GetDatas=async()=>{
    const input_data = [1,114040,2023,8,128,1925,2250,3840,120,48,2,1,0,406,1506,20106];
    var data=await  fetch('http://localhost:5000/pred', {
      method: 'POST',
      headers: {
        'Access-Control-Allow-Origin':'*',
        'content-type':'application/json'
      },
      body:JSON.stringify(
        {
          'data':input_data,
          'test':'test'
        }
      )
    })
  console.log("XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX")
  data=await data.json()
  return data
  }