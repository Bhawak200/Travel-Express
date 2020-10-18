import db from "../db/index.js"
import firebase from 'firebase/app'
import 'firebase/auth'

export   const fetchService = () => {
    return db
      .collection('services')
      .get()
      .then(snapshot => {
        const services = snapshot.docs.map(doc => doc.data())
        return {
          type: 'FETCH_SERVICE',
          services
        }
      })
  }


const createuserProfile=(userProfile)=>{
return db
       .collection('services')
       .doc(userProfile.uid)
       .set(userProfile)
}
  const registerdata = async ({email, password, Description,Title,Image,link}) => {
    try {
      const res = await firebase.auth().createUserWithEmailAndPassword(email, password)
      const { user } = res
      const userProfile={uid:user.uid,Title,Description,Image,link}
      await createuserProfile(userProfile)
      return userProfile
    } catch(error) {
      return Promise.reject(error.message)
    }
  }
  

  export const register=(registerformdata) =>  registerdata({...registerformdata})

  