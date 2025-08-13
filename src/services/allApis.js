import { BASE_URL } from "./commonApi";
import { commonApi } from "./Baseurl";


//to register 
export const registerApi=async (data)=>{
    return await commonApi("POST",`${BASE_URL}`,data,'')
}


// expost const commonApi=async()=>{
//     return await commonApi("POST",`${BASE_URL}/REGISTER`,)
// }

export const usersList=async ()=>{
    return await commonApi("GET",`${BASE_URL}`,'','')
}

export const deleteEmp=async (id)=>{
    return await commonApi("DELETE",`${BASE_URL}/${id}`,{},'')
}



export const editEmp=async(data,id)=>{
    return await commonApi("PUT",`${BASE_URL}/${id}`,data,'')
}
