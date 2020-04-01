import AsyncStorage from '@react-native-community/async-storage';

const setAsyncStorage=async(arr)=>{
    try {
        await AsyncStorage.setItem('arrTask01',JSON.stringify(arr));
    } catch (error) {
        console.log(error);
        
    }
}

export default setAsyncStorage;