import AsyncStorage from '@react-native-community/async-storage';

 const getAsyncStorage=async()=>{
    try {
        const arrWord=await AsyncStorage.getItem('arrTask01');
        if(arrWord!=null)
        {  
            return JSON.parse(arrWord);
        }
        return [];
        
    } catch (error) {
        console.log(error);
        return [];
        
    }

}

export default  getAsyncStorage