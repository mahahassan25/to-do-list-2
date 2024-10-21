import { initializeApp } from 'firebase/app'
import { getFirestore, collection } from 'firebase/firestore'
import { useCollection } from 'vuefire'
import { doc,addDoc,updateDoc,deleteDoc } from "firebase/firestore"; 

const firebaseConfig = {
  apiKey: "AIzaSyBrrO0NeC5GRnvzGmIdmOLcXWf5lWtUFxk",
  authDomain: "to-do-vue-d7f3d.firebaseapp.com",
  projectId: "to-do-vue-d7f3d",
  storageBucket: "to-do-vue-d7f3d.appspot.com",
  messagingSenderId: "1093369959857",
  appId: "1:1093369959857:web:1263a4afb4e21ce7749990",
  measurementId: "G-63XCTXBPES"
}
const firebaseApp = initializeApp(firebaseConfig);

export default function useFirebase(){
    const db = getFirestore(firebaseApp)
    const get=(collectionName)=>useCollection(collection(db,collectionName))
    const post=async(collectionName,data={})=>await addDoc(collection(db, collectionName),data)
    const update=async(collectionName,id,data={})=>{
        const collRef = doc(db, collectionName, id);
        await updateDoc( collRef ,data);
    }
    const del=async(collectionName,id)=> await deleteDoc(doc(db, collectionName, id));
   
    
    return{
        db,
        get,
        post,
        update,
        del
    }
}