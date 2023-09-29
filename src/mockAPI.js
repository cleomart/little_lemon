const availableTimesByDate = {
    '2023-09-27': ['10:00', '11:00', '12:00'],
    '2023-09-28': ['10:00', '11:00', '12:00'],
    '2023-09-29': ['14:00', '15:00', '16:00'],
    '2023-09-30': ['10:00', '11:00', '12:00'],
    '2023-10-01': ['14:00', '15:00', '16:00'],
    '2023-10-02': ['14:00', '15:00', '16:00'],
    '2023-10-03': ['14:00', '15:00', '16:00'],
    '2023-10-04': ['14:00', '15:00', '16:00'],
    '2023-10-05': ['10:00', '11:00', '12:00'],
    '2023-10-06': ['14:00', '15:00', '16:00'],
    '2023-10-07': ['10:00', '11:00', '12:00'],
    '2023-10-08': ['14:00', '15:00', '16:00'],
    '2023-10-09': ['10:00', '11:00', '12:00'],
    '2023-10-10': ['14:00', '15:00', '16:00'],
    '2023-10-11': ['10:00', '11:00', '12:00'],
    '2023-10-12': ['14:00', '15:00', '16:00'],
    '2023-10-13': ['10:00', '11:00', '12:00'],
    '2023-10-14': ['14:00', '15:00', '16:00'],
    '2023-10-15': ['10:00', '11:00', '12:00'],
    '2023-10-16': ['14:00', '15:00', '16:00'],
    '2023-10-17': ['10:00', '11:00', '12:00'],
    '2023-10-18': ['14:00', '15:00', '16:00'],
    '2023-10-19': ['10:00', '11:00', '12:00'],
    '2023-10-20': ['14:00', '15:00', '16:00'],
  };


  const fetchAPI = (date) => {
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            if(availableTimesByDate[date]){
                resolve(availableTimesByDate[date])
            }
            else{
              resolve(['15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00'])
            }
        } , 10)
    })
  }

  const submitAPI = (formData) => {
    
    availableTimesByDate[formData.date] = availableTimesByDate[formData.date].filter(time => time !== formData.time);

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (formData) {
          resolve(true); // Simulate successful submission
        } else {
          reject(new Error('Form submission failed.'));
        }
      }, 1000); // Simulate API delay
    });
  };

  export{fetchAPI,submitAPI}