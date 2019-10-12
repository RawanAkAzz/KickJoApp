// import DeviceInfo from "react-native-device-info";
import axios from "axios";
import Expo from 'expo';
// import { Constants } from 'expo';
// import { Permissions, Notifications } from 'expo';
// const token = await Notifications.getExpoPushTokenAsync();
// in bare apps:
import Constants from 'expo-constants';
// const deviceId = DeviceInfo.getDeviceId();
const deviceId = Constants.deviceId;

const client = axios.create({
  baseURL: "http://kickjo.qiotic.info/app"
});
client.defaults.headers.common["consumer-key"] = "d4d88e1d155652521462705aa4";
client.defaults.headers.common["consumer-secret"] ="cc3236d615565252148679adbc";
client.defaults.headers.common["consumer-nonce"] = "asdasdasdxzcz";
client.defaults.headers.common["consumer-device-id"] = deviceId;

export default client;
