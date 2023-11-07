export const localSync = {
    PartyId: "partyId",
    UserId: "userId",
    StageIdBeforeSetMeetingID: "stageIdBeforeSetMeetingID",
    AmIBeingGreedy: "AmIBeingGreedy",
    StageId: "stageId", 
    InMeetingIDScreen: "inMeetingIDScreen",
    ClientMobNo: "clientMobNo",
    ClientCountryCode: "clientCountryCode",
}

// export const setLocalData = async (key: string, val: any) => {
//     try {
//         const jsonValue = JSON.stringify(val)
//         await AsyncStorage.setItem('key', jsonValue)
//         console.log('saved val:', jsonValue)
//       } catch(e) {
//         // save error
//       }
// }

// export const getLocalData = async (key: string) => {
//     try {
//         const jsonValue = await AsyncStorage.getItem(key);
//         if (jsonValue !== null) {
//           const data = JSON.parse(jsonValue);
//           console.log('API data retrieved successfully:', data);
//           return data;
//         } else {
//           console.log('No API data found for the specified key:', key);
//           return null;
//         }
//     } catch (error) {
//         console.error('Error retrieving API data:', error);
//     }
// }