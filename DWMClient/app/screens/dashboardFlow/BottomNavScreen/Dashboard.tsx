/*  Copyright: AnandRathi IT Pvt. Ltd. This code is intellectual property of AnandRathi Group, and is protected by the relevant laws */
/**
 * @param - NA
 * @return -- NA
 * @Name:- Dashboard
 * @Type:- Functional Component
 * @Role:- For showing Dashboard
 * @Sprint:- 
 * @Created by:- Bhojraj Singh Shekhawat
 * @Created on:-  01-11-2023
 * @Last Modified by:- No
 * @Last modified on:- No
 */

import { StyleSheet, Platform, View } from 'react-native'
import React, { useEffect } from 'react'
import CustomCarousels from '../../../components/CustomCarousels'
import CustomTopNav from '../../../navigations/TopNavigation/CustomTopNav'
import { useTheme } from '../../../theme/ThemeProvider'
import { useApplicationMutation, useContactMutation, useNotificationsSyncMutation, useVideoListMutation, useWealthStrategyMutation } from '../../../services/dwmRootApis'
import { apiType, apiTypes } from '../../../assets/constants/ApiConstants'
import { useDispatch, useSelector } from 'react-redux'
import { setApplicationData } from '../../../slices/ApplicationSlice'
import { RootState } from '../../../store'
import { setContactData } from '../../../slices/ContactSlice'
import { setVideoListData } from '../../../slices/VideoListSlice'
import { setWealthstrategyData } from '../../../slices/WealthstrategySlice'
import { setNotificationsSyncData } from '../../../slices/NotificationsSyncSlice'
import { useToast } from 'react-native-toast-notifications';
// ------ React Native Funcational Export Component with styles ------
const Dashboard = () => {
  // ------ Used Theme Here ------
  const { theme } = useTheme();
  const { background } = theme.colors;
  const toast = useToast();

  const [wealthStrategyRequest] = useWealthStrategyMutation();
  const [applicationDataRequest,] = useApplicationMutation();
  const [ContactRequest] = useContactMutation();
  const [videoListRequest] = useVideoListMutation();
  const [notificationsSyncRequest] = useNotificationsSyncMutation();
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      // wealthstrategy API
      try {
        apiType.value = apiTypes.post;
        const wealthstrategyResponse = await wealthStrategyRequest({
          entityDataList: [{
            entityName: 'wealthstrategy',
            lastSyncDateTime: '',
            requestDataList: [],
          }],
          partyId: '1436504'
        }).unwrap();

        console.log('wealthstrategy response', wealthstrategyResponse);
        // Dispatch the action to update the store with the wealthstrategy response data
        const wealthstrategyData = wealthstrategyResponse.responseObject.entityDataList[0].responseData.responseObject;
        dispatch(setWealthstrategyData(wealthstrategyData));
      } catch (wealthstrategyError) {
        // Handle errors for the wealthstrategy API
        console.error('Error in wealthstrategy API:', wealthstrategyError);
      }

      // apication API
      try {
        apiType.value = apiTypes.post;
        const applicationResponse = await applicationDataRequest(
          {
            entityDataList: [
              {
                entityName: 'application',
                lastSyncDateTime: '',
                requestDataList: [
                  {
                    applicationId: Platform.OS === 'ios' ? 'client_app_ios' : 'client_app_android'
                  }
                ]
              }
            ],
            partyId: '1648301'
          }
        ).unwrap();

        console.log('Application response', applicationResponse);
        // Dispatch the action to update the store with the applicationResponse data
        const applicationData = applicationResponse.responseObject.entityDataList[0].responseData.responseListObject;
        dispatch(setApplicationData(applicationData));

      } catch (applicationError) {
        // Handle errors for the application API
        console.error('Error in application API:', applicationError);
      }

      // contact API
      try {
        apiType.value = apiTypes.post;
        const contactResponse = await ContactRequest({
          entityDataList: [{
            lastSyncDateTime: '',
            entityName: 'contact',
            requestDataList: [],
          }],
          partyId: '1436504'
        }).unwrap();

        console.log('Contact response', contactResponse);
        // Dispatch the action to update the store with the contact response data
        const contactData = contactResponse.responseObject.entityDataList[0].responseData.responseObject;
        dispatch(setContactData(contactData));

      } catch (contactError) {
        // Handle errors for the contact API
        console.error('Error in contact API:', contactError);
      }

      // VideoList API
      try {
        apiType.value = apiTypes.post;
        const videoListResponse = await videoListRequest({
          entityDataList: [{
            entityName: 'videoList',
            lastSyncDateTime: '',
            requestDataList: [],
          }],
          partyId: ''
        }).unwrap();

        console.log('VideoList response', videoListResponse);
        // Dispatch the action to update the store with the VideoList response data
        const VideoListData = videoListResponse.responseObject.entityDataList[0].responseData.responseListObject;
        dispatch(setVideoListData(VideoListData));
      } catch (videoListError) {
        // Handle errors for the VideoList API
        console.error('Error in VideoList API:', videoListError);
      }

      // notificationsSync API
      try {
        apiType.value = apiTypes.post;
        const notificationsSyncResponse = await notificationsSyncRequest({
          contactIds: '1436504',
          entityDataList: [
            {
              entityName: 'notificationsSync',
              lastSyncDateTime: '29/01/2019 11:55:02',
              requestDataList: []
            }
          ],
          partyId: ''
        }).unwrap();

        console.log('NotificationsSync response', notificationsSyncResponse);
        // Dispatch the action to update the store with the notificationsSync response data
        const notificationsSyncData = notificationsSyncResponse.responseObject.entityDataList[0].responseData.responseListObject;
        dispatch(setNotificationsSyncData(notificationsSyncData));

      } catch (notificationsSyncError) {
        // Handle errors for the notificationsSync API
        console.error('Error in NotificationsSync API:', notificationsSyncError);
      }
    }
    // toast.show('Welcome to Dashboard');
    fetchData();
  }, [applicationDataRequest, ContactRequest, videoListRequest, wealthStrategyRequest, notificationsSyncRequest]);

  // ------ Return react native component here ------
  return (
    // ------ Parent View Of this component  ------
    <View style={{ flex: 1, backgroundColor: background, }}>
      {/* ------ Custom Top Tab Navigation View here ------ */}
      <View style={{ flex: .1 }}>
        <CustomTopNav />
      </View>

      {/* ------ Carousels View here ------ */}
      <View style={{ flex: .9, }} >
        <CustomCarousels />
      </View>
    </View>
  )
}


const styles = StyleSheet.create({

})

export default Dashboard
